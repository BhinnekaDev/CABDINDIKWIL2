import { useEffect, useState, useCallback } from "react";
import { SpmbData, SpmbDataProcessed, SpmbTipeKonten } from "../types/spmb";


export const useSpmb = () => {
  const [data, setData] = useState<SpmbData[] | null>(null);
  const [dataProcessed, setDataProcessed] = useState<SpmbDataProcessed[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const processData = useCallback((rawData: SpmbData[]): SpmbDataProcessed[] => {
    return rawData.map(item => {
      const memiliki_gambar = item.spmb_media_image.length > 0;
      const memiliki_file = item.spmb_media_file.length > 0;
      const memiliki_link = !!(item.link_url && item.link_url.trim() !== '');
      const memiliki_judul = !!(item.judul && item.judul.trim() !== '');
      
      let tipe_konten: SpmbTipeKonten = 'kosong';
      if (memiliki_gambar) tipe_konten = 'gambar';
      else if (memiliki_link) tipe_konten = 'link';
      else if (memiliki_file) tipe_konten = 'file';
      
      let media_pertama_url: string | null = null;
      let media_pertama_tipe: 'gambar' | 'file' | null = null;
      
      if (memiliki_gambar) {
        media_pertama_url = item.spmb_media_image[0].image_url;
        media_pertama_tipe = 'gambar';
      } else if (memiliki_file) {
        media_pertama_url = item.spmb_media_file[0].file_url;
        media_pertama_tipe = 'file';
      }
      
      return {
        ...item,
        tipe_konten,
        memiliki_gambar,
        memiliki_file,
        memiliki_link,
        memiliki_judul,
        media_pertama_url,
        media_pertama_tipe,
      };
    });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}spmb`
      );

      if (!res.ok) {
        throw new Error("Gagal mengambil data SPMB");
      }

      const json: SpmbData[] = await res.json();
      setData(json);
      setDataProcessed(processData(json));
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
  }, [processData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const getByTipeKonten = useCallback((tipe: SpmbTipeKonten) => {
    return dataProcessed?.filter(item => item.tipe_konten === tipe) || [];
  }, [dataProcessed]);

  const getGambarOnly = useCallback(() => getByTipeKonten('gambar'), [getByTipeKonten]);
  const getLinkOnly = useCallback(() => getByTipeKonten('link'), [getByTipeKonten]);
  const getFileOnly = useCallback(() => getByTipeKonten('file'), [getByTipeKonten]);
  const getKosongOnly = useCallback(() => getByTipeKonten('kosong'), [getByTipeKonten]);

  const getLatest = useCallback((limit: number = 5) => {
    if (!dataProcessed) return [];
    return [...dataProcessed]
      .sort((a, b) => new Date(b.dibuat_pada).getTime() - new Date(a.dibuat_pada).getTime())
      .slice(0, limit);
  }, [dataProcessed]);

  const getById = useCallback((id: number) => {
    return dataProcessed?.find(item => item.id === id) || null;
  }, [dataProcessed]);

  const getStats = useCallback(() => {
    if (!dataProcessed) {
      return {
        total: 0,
        gambar: 0,
        link: 0,
        file: 0,
        kosong: 0,
        denganJudul: 0,
        tanpaJudul: 0,
      };
    }

    return {
      total: dataProcessed.length,
      gambar: dataProcessed.filter(item => item.tipe_konten === 'gambar').length,
      link: dataProcessed.filter(item => item.tipe_konten === 'link').length,
      file: dataProcessed.filter(item => item.tipe_konten === 'file').length,
      kosong: dataProcessed.filter(item => item.tipe_konten === 'kosong').length,
      denganJudul: dataProcessed.filter(item => item.memiliki_judul).length,
      tanpaJudul: dataProcessed.filter(item => !item.memiliki_judul).length,
    };
  }, [dataProcessed]);

  return { 
    data, 
    dataProcessed,
    loading, 
    error, 
    refetch: fetchData,
    getByTipeKonten,
    getGambarOnly,
    getLinkOnly,
    getFileOnly,
    getKosongOnly,
    getLatest,
    getById,
    getStats,
  };
};