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

export async function fetchTrending(params?: ApiParams): Promise<unknown[]> {
  const json = await fetchJson<unknown>("/api/breaking-or-trending", params);
  if (Array.isArray(json)) return json;
  if (json && typeof json === "object") {
    const obj = json as Record<string, unknown>;
    // check all common wrapper keys
    for (const key of ["articles", "data", "items", "news", "trending", "results", "breakingNews", "breaking"]) {
      if (Array.isArray(obj[key])) return obj[key] as unknown[];
    }
    // fallback: find first array value in response
    const firstArray = Object.values(obj).find((v) => Array.isArray(v));
    if (firstArray) return firstArray as unknown[];
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


