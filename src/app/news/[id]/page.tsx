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
      ? new Date(data.pubDate).toLocaleString()
      : "";

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
      content: contentArray,
    } as const;
  } catch {
    return null;
  }
}

export default async function NewsPage({ params }: { params: { id: string } }) {
  const article = await fetchArticleById(params.id);

  if (!article) {
    return (
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        Article not found.
      </div>
    );
  }

  return <NewsLayout article={article} />;
}
