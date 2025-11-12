"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Sekolah } from "@/types/sekolah";

type UseSekolahResult = {
  data: Sekolah[] | null;
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

function sanitizeRawArray(json: unknown): Record<string, unknown>[] {
  if (Array.isArray(json)) {
    return json.filter(isRecord) as Record<string, unknown>[];
  }
  if (isRecord(json)) {
    const { data, results } = json as Record<string, unknown>;
    if (Array.isArray(data)) return data.filter(isRecord) as Record<string, unknown>[];
    if (Array.isArray(results)) return results.filter(isRecord) as Record<string, unknown>[];
  }
  return [];
}

function pickFirstString(obj: Record<string, unknown>, keys: string[]): string {
  for (const k of keys) {
    const v = obj[k];
    if (typeof v === "string" && v.trim() !== "") return v.trim();
    if (typeof v === "number" && !Number.isNaN(v)) return String(v).trim();
  }
  return "";
}

function normalizeSekolah(s: Record<string, unknown>): Sekolah {
  const npsn = pickFirstString(s, ["npsn", "NPSN", "npsn_sekolah"]);
  const nama = pickFirstString(s, ["nama", "nama_sekolah", "name"]);
  const alamat = pickFirstString(s, ["alamat", "address"]);
  const kelurahan = pickFirstString(s, ["kelurahan", "kel", "village"]);
  const rawStatus = pickFirstString(s, ["status", "kategori"]).toUpperCase();
  const status: Sekolah["status"] = rawStatus === "NEGERI" ? "NEGERI" : "SWASTA";

  return {
    npsn,
    nama,
    alamat,
    kelurahan,
    status,
  };
}

export default function useSekolah(jenis: string | null): UseSekolahResult {
  const [data, setData] = useState<Sekolah[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const baseUrl =
    typeof window !== "undefined" && process.env.NEXT_PUBLIC_API_URL
      ? process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "")
      : null;

  const fetchUrl = baseUrl && jenis ? `${baseUrl}/satpen/filtered?jenis=${encodeURIComponent(jenis)}` : null;

  const fetchData = useCallback(async () => {
    if (!fetchUrl) {
      setError("NEXT_PUBLIC_API_URL belum diset atau parameter jenis kosong.");
      setData(null);
      setLoading(false);
      return;
    }

    // abort previous if any
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
      const arr = sanitizeRawArray(json);
      const cleaned = arr.map((item) => normalizeSekolah(item));
      setData(cleaned);
    } catch (err: unknown) {
      // jika abort, jangan set error
      if (isError(err) && (err as Error).name === "AbortError") {
        // no-op
      } else if (isError(err)) {
        console.error("useSekolah error:", err);
        setError((err as Error).message || String(err));
        setData(null);
      } else {
        console.error("useSekolah unknown error:", err);
        setError(String(err ?? "Unknown error"));
        setData(null);
      }
    } finally {
      // selalu reset loading
      setLoading(false);
    }
  }, [fetchUrl]);

  useEffect(() => {
    if (!jenis) {
      setData(null);
      setError("Parameter jenis belum diberikan.");
      setLoading(false);
      return;
    }
    fetchData();
    return () => {
      controllerRef.current?.abort();
      controllerRef.current = null;
    };
  }, [fetchData, jenis]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
}
