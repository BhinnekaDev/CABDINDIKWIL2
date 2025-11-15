import { useEffect, useState, useCallback } from "react";
import { FileItem, LayananApiItem, formatBytes, FileType } from "@/types/file";

export type UseLayananOptions = {
  url?: string;
  baseUrl?: string;
  path?: string; 
  onError?: (err: unknown) => void;
  transform?: (items: LayananApiItem[]) => FileItem[]; 
};

function defaultMap(a: LayananApiItem): FileItem {
  const mime = (a.jenis_file || "").toLowerCase();

  let type: FileType | string = "OTHER";
  if (mime.includes("pdf") || a.nama_file.toLowerCase().endsWith(".pdf")) type = "PDF";
  else if (mime.includes("word") || mime.includes("msword") || a.nama_file.toLowerCase().endsWith(".doc") || a.nama_file.toLowerCase().endsWith(".docx")) type = "DOC";
  else if (mime.includes("excel") || mime.includes("spreadsheet") || a.nama_file.toLowerCase().endsWith(".xls") || a.nama_file.toLowerCase().endsWith(".xlsx")) type = "XLS";
  else if (mime.startsWith("image") || [".png", ".jpg", ".jpeg", ".gif", ".webp"].some((ext) => a.nama_file.toLowerCase().endsWith(ext))) type = "IMG";

  return {
    id: a.id,
    title: a.judul || a.jenis_layanan || a.nama_file,
    filename: a.nama_file,
    url: a.url_file,
    size: formatBytes(a.ukuran_file),
    sizeBytes: a.ukuran_file,
    mime: a.jenis_file,
    type,
    layananType: a.jenis_layanan,
    uploaded: undefined,
  };
}

function getErrorMessage(err: unknown): string {
  if (!err) return "Unknown error";
  if (typeof err === "string") return err;
  if (typeof err === "object" && err !== null && "message" in err) {
    const maybe = (err as { message?: unknown }).message;
    if (typeof maybe === "string") return maybe;
  }
  try {
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}

export function useLayanan(options?: UseLayananOptions) {
  const { baseUrl = process.env.NEXT_PUBLIC_API_URL || "", path = "/layanan", url, onError, transform } = options || {};
  const endpoint = url || `${baseUrl.replace(/\/+$/, "")}${path.startsWith("/") ? "" : "/"}${path}`;

  const [data, setData] = useState<FileItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(endpoint, { signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: LayananApiItem[] = await res.json();
      const items = transform ? transform(json) : json.map(defaultMap);
      setData(items);
      return items;
    } catch (err: unknown) {
      if ((err as { name?: string })?.name === "AbortError") return;
      const message = getErrorMessage(err);
      setError(message);
      onError?.(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [endpoint, onError, transform]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal).catch(() => {});
    return () => controller.abort();
  }, [fetchData]);

  const reload = useCallback(() => {
    const controller = new AbortController();
    fetchData(controller.signal).catch(() => {});
    return () => controller.abort();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    reload,
  } as const;
}

export default useLayanan;