"use client";

import { useEffect, useState } from "react";

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

export function useInfografisSekolah(targetJenis: string) {
  const [data, setData] = useState<InfografisSekolahItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}satpen/jenis-sekolah-gambar`
        );

        if (!res.ok) {
          throw new Error("Gagal mengambil data API");
        }

        const json: InfografisSekolahItem[] = await res.json();

        const filtered = json.filter(
          (item) =>
            item.jenis_sekolah.nama_jenis.toLowerCase() ===
            targetJenis.toLowerCase()
        );

        setData(filtered);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Terjadi kesalahan tak dikenal");
        }
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [targetJenis]);

  return { data, loading, error };
}
