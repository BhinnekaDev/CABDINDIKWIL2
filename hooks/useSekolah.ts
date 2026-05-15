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

function pickNestedString(obj: Record<string, unknown>, paths: string[]): string {
  for (const path of paths) {
    const parts = path.split(".");
    let current: unknown = obj;
    for (const part of parts) {
      if (!isRecord(current)) break;
      current = current[part];
    }
    if (typeof current === "string" && current.trim() !== "") return current.trim();
    if (typeof current === "number" && !Number.isNaN(current)) return String(current).trim();
  }
  return "";
}

function normalizeSekolah(s: Record<string, unknown>): Sekolah {
  const npsn = pickFirstString(s, ["npsn", "NPSN", "npsn_sekolah"]);
  const nama = pickFirstString(s, ["nama", "nama_sekolah", "name"]);
  const alamat = pickNestedString(s, ["lokasi.alamat", "alamat", "address"]);
  const kelurahan = pickNestedString(s, ["lokasi.kelurahan", "kelurahan", "kel", "village"]);
  const rawStatus = pickFirstString(s, ["status", "kategori"]);
  const status: Sekolah["status"] = (() => {
  const upperStatus = rawStatus.toUpperCase();
  if (upperStatus === "NEGERI" || upperStatus === "NEGERI") return "NEGERI";
  if (upperStatus === "SWASTA") return "SWASTA";
  return "SWASTA";
})();
  
  const jumlah_siswa = (() => {
    const val = s["jumlah_siswa"] ?? s["jumlahSiswa"] ?? s["student_count"];
    if (typeof val === "number") return val;
    if (typeof val === "string") {
      const parsed = parseInt(val, 10);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  })();
  const tautan_sekolah = (() => {
    const val = s["tautan_sekolah"] ?? s["website"] ?? s["url"];
    if (typeof val === "string") return val;
    return null;
  })();
  const jenis_sekolah = (() => {
    const nestedJenis = pickNestedString(s, ["jenis_sekolah.nama_jenis", "jenis.nama_jenis"]);
    if (nestedJenis) return { nama_jenis: nestedJenis };
    const jenisField = s["jenis_sekolah"];
    if (isRecord(jenisField)) {
      const namaJenis = pickFirstString(jenisField, ["nama_jenis", "nama", "type"]);
      if (namaJenis) return { nama_jenis: namaJenis };
    }
    return { nama_jenis: "" };
  })();

  return {
    npsn,
    nama,
    alamat,
    kelurahan,
    status,
    jumlah_siswa,
    tautan_sekolah,
    jenis_sekolah,
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

  const fetchUrl = baseUrl && jenis ? `${baseUrl}/satpen?jenis=${encodeURIComponent(jenis)}` : null;

  const fetchData = useCallback(async () => {
    if (!fetchUrl) {
      setError("NEXT_PUBLIC_API_URL belum diset atau parameter jenis kosong.");
      setData(null);
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
      const arr = sanitizeRawArray(json);
      const cleaned = arr.map((item) => normalizeSekolah(item));
      setData(cleaned);
    } catch (err: unknown) {
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