"use client";

import { useEffect } from "react";
import * as React from "react";
import NewsLayout from "../NewsLayout";

async function fetchArticleById(id: string) {
  try {
    const base = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.otito.in";
    const res = await fetch(
      `${base}/api/articles/${encodeURIComponent(id)}?language=EN`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const payload = await res.json();
    const data = (payload && (payload.data || payload)) || null;
    if (!data) return null;

    const images = data.imageUrl ? [data.imageUrl] : ["/images/demo1.png"];
    const category = Array.isArray(data.category)
      ? data.category.join(", ")
      : data.category || "General";
    const date = data.pubDate
      ? new Date(data.pubDate).toISOString().slice(0, 10) // YYYY-MM-DD
      : "";

    const deriveSource = (): string | undefined => {
      const obj = data as Record<string, unknown>;
      const candidates = [obj["source"], obj["publisher"], obj["sourceName"], obj["site"]];
      for (const c of candidates) {
        if (typeof c === "string" && c.trim()) return c;
      }
      const link = obj["link"] ?? obj["url"];
      if (typeof link === "string") {
        try {
          return new URL(link).hostname.replace(/^www\./, "");
        } catch {
          return undefined;
        }
      }
      return undefined;
    };
    const source = deriveSource();

    const contentArray: { heading: string; text: string }[] = [];

    if (data.description) {
      contentArray.push({ heading: "Summary", text: String(data.description) });
    }

    if (data.content) {
      const blocks = String(data.content)
        .split(/\n\n+/)
        .map((b: string) => b.trim())
        .filter(Boolean);
      blocks.forEach((block: string, idx: number) => {
        contentArray.push({ heading: `Section ${idx + 1}`, text: block });
      });
    }

    if (Array.isArray(data.tags) && data.tags.length > 0) {
      contentArray.push({ heading: "Tags", text: data.tags.join(", ") });
    }

    return {
      title: data.title || "Untitled",
      images,
      likes: 0,
      dislikes: 0,
      shares: 0,
      date,
      comments: 0,
      category,
      source,
      content: contentArray,
    } as const;
  } catch {
    return null;
  }
}

export default function NewsPage({ params }: { params: Promise<{ id: string }> }) {
  const [article, setArticle] = React.useState<Awaited<ReturnType<typeof fetchArticleById>> | null>(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Redirect logic for mobile devices
    const ua = navigator.userAgent || navigator.vendor;

    if (/android/i.test(ua)) {
      window.location.replace(
        "https://play.google.com/store/apps/details?id=com.otito"
      );
      return;
    } else if (/iPad|iPhone|iPod/.test(ua)) {
      window.location.replace(
        "https://apps.apple.com/in/app/otito/id6754835189"
      );
      return;
    }
    // Desktop users continue to view the page
  }, []);

  useEffect(() => {
    params.then(({ id }) => {
      fetchArticleById(id).then((data) => {
        setArticle(data);
        setLoading(false);
      });
    });
  }, [params]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        Loading...
      </div>
    );
  }

  if (!article) {
    return (
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        Article not found.
      </div>
    );
  }

  return <NewsLayout article={article} />;
}
