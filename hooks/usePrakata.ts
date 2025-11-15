"use client";
import { useState, useEffect, useCallback } from "react";
import type { PrakataItem, UsePrakataResult } from "@/types/prakata";

const getBaseUrl = (): string => {
  const raw = process.env.NEXT_PUBLIC_API_URL ?? "";
  return raw.replace(/\/+$/, "");
};

export function usePrakata(endpoint = "/prakata"): UsePrakataResult {
  const [data, setData] = useState<PrakataItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);

    try {
      const base = getBaseUrl();
      const url = `${base}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

      const res = await fetch(url, { signal });
      if (!res.ok) throw new Error(`Fetch error: ${res.status} ${res.statusText}`);

      const json = (await res.json()) as PrakataItem[];
      setData(json);
    } catch (err: unknown) {
      const name = typeof err === "object" && err !== null && "name" in err
        ? 
          (err as { name?: unknown }).name
        : undefined;

      if (name === "AbortError") {
        // request aborted -> ignore silently
        return;
      }

      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error(String(err)));
      }
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    const controller = new AbortController();
    // start fetch on mount
    fetchData(controller.signal);

    return () => {
      controller.abort();
    };
  }, [fetchData]);

  const refetch = useCallback(async () => {
    const controller = new AbortController();
    try {
      await fetchData(controller.signal);
    } finally {
      controller.abort();
    }
  }, [fetchData]);

  return { data, loading, error, refetch };
}
