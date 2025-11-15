import { useEffect, useState } from "react";

export interface StrukturOrganisasi {
  id: number;
  gambar_struktur: string;
  gambar_dokumentasi: string;
  dibuat_pada: string;
}

export const useStrukturOrganisasi = () => {
  const [data, setData] = useState<StrukturOrganisasi[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}struktur-organisasi`
      );

      if (!res.ok) {
        throw new Error("Gagal mengambil data struktur organisasi");
      }

      const json: StrukturOrganisasi[] = await res.json();
      setData(json);
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};
