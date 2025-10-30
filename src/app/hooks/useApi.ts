"use client";

import { useEffect, useMemo, useState } from "react";

const DEFAULT_BASE = "https://api.otito.in";

export function useApiList<T = unknown>(path: string, params?: Record<string, string | string[]>) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_BASE;
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const paramsKey = useMemo(() => JSON.stringify(params ?? {}), [params]);
  const url = useMemo(() => {
    const search = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => search.append(key, String(v)));
        } else if (value !== undefined && value !== null) {
          search.append(key, String(value));
        }
      });
    }
    const qs = search.toString();
    return `${baseUrl}${path}${qs ? `?${qs}` : ""}`;
  }, [baseUrl, path, paramsKey]);

  useEffect(() => {
    const controller = new AbortController();
    const run = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json: unknown = await res.json();
        let list: unknown = [];
        if (Array.isArray(json)) {
          list = json;
        } else if (json && typeof json === "object") {
          const obj = json as Record<string, unknown>;
          if (Array.isArray(obj.articles)) list = obj.articles;
          else if (Array.isArray(obj.data)) list = obj.data;
          else if (Array.isArray(obj.items)) list = obj.items;
        }
        setData((list as T[]) || []);
      } catch (err) {
        const e = err as { name?: string; message?: string };
        if (e?.name !== "AbortError") setError(e?.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    };
    run();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error } as const;
}

export function buildApiUrl(path: string, params?: Record<string, string | string[]>) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_BASE;
  const search = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => search.append(key, String(v)));
      } else if (value !== undefined && value !== null) {
        search.append(key, String(value));
      }
    });
  }
  const qs = search.toString();
  return `${baseUrl}${path}${qs ? `?${qs}` : ""}`;
}


