"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Sekolah } from "@/types/sekolah";

type UseSekolahResult = {
  data: Sekolah[] | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

function sanitizeRawArray(json: any): any[] {
  const arr: any[] = Array.isArray(json)
    ? json
    : Array.isArray(json?.data)
    ? json.data
    : Array.isArray(json?.results)
    ? json.results
    : [];

  return Array.isArray(arr) ? arr : [];
}

function normalizeSekolah(s: any): Sekolah {
  return {
    npsn: (s.npsn ?? s.NPSN ?? s.npsn_sekolah ?? "").toString().trim(),
    nama: (s.nama ?? s.nama_sekolah ?? s.name ?? "").toString().trim(),
    alamat: (s.alamat ?? s.address ?? "").toString().trim(),
    kelurahan: (s.kelurahan ?? s.kel ?? s.village ?? "").toString().trim(),
    status: (s.status ?? "").toString().trim() === "NEGERI" ? "NEGERI" : "SWASTA",
  };
}

export default function useSekolah(jenis: string | null): UseSekolahResult {
  const [data, setData] = useState<Sekolah[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const baseUrl =
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_API_URL
      ? process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "")
      : null;

  const fetchUrl = baseUrl && jenis ? `${baseUrl}/satpen/filtered?jenis=${encodeURIComponent(jenis)}` : null;

  const fetchData = useCallback(() => {
    if (!fetchUrl) {
      setError("NEXT_PUBLIC_API_URL belum diset atau parameter jenis kosong.");
      setData(null);
      setLoading(false);
      return;
    }

    // abort previous
    controllerRef.current?.abort();
    const ctrl = new AbortController();
    controllerRef.current = ctrl;

    setLoading(true);
    setError(null);

    fetch(fetchUrl, { signal: ctrl.signal })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(`HTTP ${res.status} ${res.statusText}${text ? " - " + text : ""}`);
        }
        return res.json();
      })
      .then((json) => {
        const arr = sanitizeRawArray(json);
        if (!Array.isArray(arr)) throw new Error("Response tidak berupa array.");
        const cleaned: Sekolah[] = arr.map((item) => normalizeSekolah(item));
        setData(cleaned);
      })
      .catch((err: any) => {
        if (err?.name === "AbortError") return;
        console.error("useSekolah error:", err);
        setError(String(err?.message ?? err));
        setData(null);
      })
      .finally(() => {
        if (!ctrl.signal.aborted) setLoading(false);
      });
  }, [fetchUrl]);

  useEffect(() => {
    if (!jenis) {
      setData(null);
      setError("Parameter jenis belum diberikan.");
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
