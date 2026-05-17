"use client";

export type ApiParams = Record<string, string | string[]>;

export function getApiBase(): string {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.API_BASE_URL ||
    "https://api.otito.in"
  );
}

export function buildUrl(path: string, params?: ApiParams): string {
  const base = getApiBase();
  const search = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) value.forEach((v) => search.append(key, String(v)));
      else if (value !== undefined && value !== null) search.append(key, String(value));
    });
  }
  const qs = search.toString();
  return `${base}${path}${qs ? `?${qs}` : ""}`;
}

export async function fetchJson<T = unknown>(path: string, params?: ApiParams, init?: RequestInit): Promise<T> {
  const url = buildUrl(path, params);
  const res = await fetch(url, init);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return (await res.json()) as T;
}

export async function fetchArticles(params?: ApiParams): Promise<unknown[]> {
  const json = await fetchJson<unknown>("/api/articles", params);
  if (Array.isArray(json)) return json;
  if (json && typeof json === "object") {
    const obj = json as Record<string, unknown>;
    if (Array.isArray(obj.articles)) return obj.articles as unknown[];
    if (Array.isArray(obj.data)) return obj.data as unknown[];
    if (Array.isArray(obj.items)) return obj.items as unknown[];
  }
  return [];
}

export async function fetchCategories(): Promise<string[]> {
  const json = await fetchJson<{ data?: { categories?: string[] } }>("/api/categories");
  const categories = json?.data?.categories;
  return Array.isArray(categories) ? categories : [];
}

type BreakingNewsPayload = {
  _id?: string;
  headline1?: string;
  headline2?: string;
  headline3?: string;
  headline4?: string;
  headline5?: string;
  videoUrl?: string;
  photoUrls?: string[];
  photos?: string[];
};

type BreakingOrTrendingPayload = {
  mode?: "breaking" | "trending";
  breakingNews?: BreakingNewsPayload | null;
  trendingArticles?: unknown[];
};

type BreakingOrTrendingResponse = {
  success?: boolean;
  data?: BreakingOrTrendingPayload;
};

function breakingNewsToArticles(breaking: BreakingNewsPayload): unknown[] {
  const image =
    breaking.photoUrls?.[0] ??
    (Array.isArray(breaking.photos) ? breaking.photos[0] : undefined) ??
    "/images/demo1.png";
  const headlines = [
    breaking.headline1,
    breaking.headline2,
    breaking.headline3,
    breaking.headline4,
    breaking.headline5,
  ].filter((h): h is string => Boolean(h?.trim()));

  if (headlines.length === 0) {
    return [{ _id: breaking._id, title: "Breaking News", image, category: "Breaking" }];
  }

  return headlines.map((title, idx) => ({
    _id: `${breaking._id ?? "breaking"}-${idx}`,
    title,
    image,
    category: "Breaking",
  }));
}

/** GET /api/breaking-or-trending?language=EN|HI */
export async function fetchTrending(language: "EN" | "HI", limit = 10): Promise<unknown[]> {
  const json = await fetchJson<BreakingOrTrendingResponse>("/api/breaking-or-trending", {
    language,
    limit: String(limit),
  });

  const payload = json?.data;
  if (!payload || typeof payload !== "object") return [];

  if (payload.mode === "breaking" && payload.breakingNews) {
    return breakingNewsToArticles(payload.breakingNews);
  }

  if (Array.isArray(payload.trendingArticles)) {
    return payload.trendingArticles;
  }

  return [];
}

export async function fetchHeadlines(params?: ApiParams): Promise<unknown[]> {
  const json = await fetchJson<unknown>("/api/headlines", params);
  if (Array.isArray(json)) return json;
  if (json && typeof json === "object") {
    const obj = json as Record<string, unknown>;
    if (Array.isArray(obj.articles)) return obj.articles as unknown[];
    if (Array.isArray(obj.data)) return obj.data as unknown[];
  }
  return [];
}


