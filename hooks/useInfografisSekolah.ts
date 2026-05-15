"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface JenisSekolah {
  id: number;
  nama_jenis: string;
}

export interface InfografisSekolahItem {
  id: number;
  url_gambar: string;
  dibuat_pada: string;
  jenis_sekolah: JenisSekolah;
}

type UseInfografisSekolahResult = {
  data: InfografisSekolahItem[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

function isRecord(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && x !== null && !Array.isArray(x);
}

function isError(x: unknown): x is Error {
  return x instanceof Error || (isRecord(x) && typeof (x as Record<string, unknown>).message === "string");
}

function sanitizeInfografisArray(json: unknown): InfografisSekolahItem[] {
  if (Array.isArray(json)) {
    return json.filter((item): item is InfografisSekolahItem => {
      if (!isRecord(item)) return false;
      return (
        typeof item.id === "number" &&
        typeof item.url_gambar === "string" &&
        typeof item.dibuat_pada === "string" &&
        isRecord(item.jenis_sekolah) &&
        typeof (item.jenis_sekolah as Record<string, unknown>).id === "number" &&
        typeof (item.jenis_sekolah as Record<string, unknown>).nama_jenis === "string"
      );
    }) as InfografisSekolahItem[];
  }
  
  if (isRecord(json)) {
    const { data, results } = json as Record<string, unknown>;
    if (Array.isArray(data)) {
      return data.filter((item): item is InfografisSekolahItem => {
        if (!isRecord(item)) return false;
        return typeof item.id === "number" && typeof item.url_gambar === "string";
      }) as InfografisSekolahItem[];
    }
    if (Array.isArray(results)) {
      return results.filter((item): item is InfografisSekolahItem => {
        if (!isRecord(item)) return false;
        return typeof item.id === "number" && typeof item.url_gambar === "string";
      }) as InfografisSekolahItem[];
    }
  }
  
  return [];
}

export function useInfografisSekolah(targetJenis: string): UseInfografisSekolahResult {
  const [data, setData] = useState<InfografisSekolahItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const baseUrl =
    typeof window !== "undefined" && process.env.NEXT_PUBLIC_API_URL
      ? process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "")
      : null;

  const fetchUrl = baseUrl ? `${baseUrl}/satpen/jenis-sekolah-gambar` : null;

  const fetchData = useCallback(async () => {
    if (!fetchUrl) {
      setError("NEXT_PUBLIC_API_URL belum diset.");
      setData([]);
      setLoading(false);
      return;
    }

    if (!targetJenis) {
      setError("Parameter targetJenis belum diberikan.");
      setData([]);
      setLoading(false);
      return;
    }

    controllerRef.current?.abort();
    const ctrl = new AbortController();
    controllerRef.current = ctrl;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(fetchUrl, { signal: ctrl.signal });
      
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status} ${res.statusText}${text ? " - " + text : ""}`);
      }
      
      const json: unknown = await res.json();
      const rawData = sanitizeInfografisArray(json);
      
      const filtered = rawData.filter(
        (item) =>
          item.jenis_sekolah.nama_jenis.toLowerCase() === targetJenis.toLowerCase()
      );
      
      setData(filtered);
    } catch (err: unknown) {
      if (isError(err) && (err as Error).name === "AbortError") {
        return;
      }
      
      if (isError(err)) {
        console.error("useInfografisSekolah error:", err);
        setError((err as Error).message || String(err));
      } else {
        console.error("useInfografisSekolah unknown error:", err);
        setError(String(err ?? "Unknown error"));
      }
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [fetchUrl, targetJenis]);

  useEffect(() => {
    if (!targetJenis || !fetchUrl) {
      setData([]);
      setError(!targetJenis ? "Parameter targetJenis belum diberikan." : "NEXT_PUBLIC_API_URL belum diset.");
      setLoading(false);
      return;
    }
    
    fetchData();
    
    return () => {
      controllerRef.current?.abort();
      controllerRef.current = null;
    };
  }, [fetchData, targetJenis, fetchUrl]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
}