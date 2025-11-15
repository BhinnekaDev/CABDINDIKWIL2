import { useEffect, useRef, useState } from "react";
import type { FooterData } from "@/types/footer";

type UseFooterReturn = {
  data: FooterData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

export const useFooter = (): UseFooterReturn => {
  const [data, setData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchFooter = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    // abort previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const ac = new AbortController();
    abortControllerRef.current = ac;

    try {
      const base = process.env.NEXT_PUBLIC_API_URL;
      if (!base) throw new Error("NEXT_PUBLIC_API_URL is not defined");

      const url = new URL("/footer", base).toString();

      const timeout = 10000; 
      const timeoutId = setTimeout(() => ac.abort(), timeout);

      const res = await fetch(url, { signal: ac.signal, cache: "no-store" });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status}${text ? ` - ${text}` : ""}`);
      }

      const json = (await res.json()) as FooterData[] | unknown;

      if (!Array.isArray(json) || json.length === 0) {
        setData(null);
        setError("Footer data kosong atau format tidak sesuai");
        return;
      }

      const first = json[0] as FooterData;
      if (typeof first.email !== "string" || typeof first.alamat !== "string") {
        setData(null);
        setError("Format footer tidak sesuai (missing fields)");
        return;
      }

      setData(first);
    } catch (err: unknown) {
      if ((err as DOMException)?.name === "AbortError") {
      } else {
        setError(String(err));
        console.error("useFooter fetch error:", err);
      }
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFooter();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, []); 

  const refetch = async () => {
    await fetchFooter();
  };

  return { data, loading, error, refetch };
};
