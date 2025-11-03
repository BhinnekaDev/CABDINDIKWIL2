"use client";
import { useEffect, useState } from "react";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt?: string };

export type BeritaItemUI = {
  id: number;
  title: string;
  author: string;
  date: string; 
  publishedAtRaw?: string; 
  preview?: string;
  image?: string; 
  content: ContentBlock[];
};

function joinUrl(base: string | undefined, path: string) {
  if (!base) return path;
  return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}

function formatDateShort(iso?: string) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    const monthShort = d.toLocaleString("id-ID", { month: "short" }); 
    const day = d.getDate();
    const year = d.getFullYear();
    return `${monthShort} ${day}, ${year}`;
  } catch {
    return iso;
  }
}

function parseContentBlocks(html: string | null | undefined): ContentBlock[] {
  if (!html) return [];
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const blocks: ContentBlock[] = [];

    const pElements = Array.from(doc.querySelectorAll("p"));
    for (const p of pElements) {
      const text = p.textContent?.trim();
      if (text) blocks.push({ type: "paragraph", text });
    }

    const imgElements = Array.from(doc.querySelectorAll("img"));
    for (const img of imgElements) {
      const src = img.getAttribute("src") ?? "";
      const alt = img.getAttribute("alt") ?? undefined;
      if (src) blocks.push({ type: "image", src, alt });
    }

    if (blocks.length === 0) {
      const bodyText = doc.body?.textContent?.trim();
      if (bodyText) blocks.push({ type: "paragraph", text: bodyText });
    }

    return blocks;
  } catch {
    return [{ type: "paragraph", text: html }];
  }
}

function mapApiToUi(item: any): BeritaItemUI {
  const firstImage =
    Array.isArray(item.seputar_cabdin_gambar) && item.seputar_cabdin_gambar.length > 0
      ? item.seputar_cabdin_gambar[0].url_gambar
      : undefined;

  const plainPreview = (() => {
    if (!item.isi) return item.judul ?? "";
    const tmp = item.isi.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    return tmp.length > 220 ? tmp.slice(0, 217).trim() + "..." : tmp;
  })();

  return {
    id: Number(item.id),
    title: item.judul ?? item.title ?? "Tanpa judul",
    author: item.penulis ?? item.author ?? "Unknown",
    date: formatDateShort(item.tanggal_diterbitkan ?? item.dibuat_pada ?? item.publishedAt),
    publishedAtRaw: item.tanggal_diterbitkan ?? item.dibuat_pada ?? item.publishedAt,
    preview: plainPreview,
    image: firstImage,
    content: parseContentBlocks(item.isi),
  };
}

export function useSeputarCabdinList() {
  const [data, setData] = useState<BeritaItemUI[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    const BASE = process.env.NEXT_PUBLIC_API_URL;
    const url = joinUrl(BASE, "seputar-cabdin");

    setLoading(true);
    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!mounted) return;
        if (!Array.isArray(json)) {
          setData([]);
          setLoading(false);
          return;
        }
        const mapped = json.map(mapApiToUi);
        setData(mapped);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err);
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { data, loading, error };
}

export function useSeputarCabdinItem(id?: number | string | null) {
  const [data, setData] = useState<BeritaItemUI | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!id) {
      setData(null);
      setLoading(false);
      return;
    }
    let mounted = true;
    const BASE = process.env.NEXT_PUBLIC_API_URL;
    const urlById = joinUrl(BASE, `seputar-cabdin/${id}`);

    setLoading(true);
    fetch(urlById)
      .then(async (res) => {
        if (res.ok) return res.json();
        if (res.status === 404) {
          const fallback = joinUrl(BASE, "seputar-cabdin");
          const fallbackRes = await fetch(fallback);
          if (!fallbackRes.ok) throw new Error(`HTTP ${fallbackRes.status}`);
          const json = await fallbackRes.json();
          const found = (Array.isArray(json) ? json : []).find((it: any) => String(it.id) === String(id));
          return found ?? null;
        }
        throw new Error(`HTTP ${res.status}`);
      })
      .then((json) => {
        if (!mounted) return;
        if (!json) {
          setData(null);
          setLoading(false);
          return;
        }
        setData(mapApiToUi(json));
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err);
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  return { data, loading, error };
}
