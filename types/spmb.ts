export interface SpmbMediaImage {
  id: number;
  image_url: string;
  dibuat_pada: string;
}
export interface SpmbMediaFile {
  id: number;
  file_url: string;
  dibuat_pada: string;
}

export interface SpmbData {
  id: number;
  judul: string;
  link_text: string | null;
  link_url: string | null;
  dibuat_pada: string;
  diperbarui_pada: string | null;
  spmb_media_image: SpmbMediaImage[];
  spmb_media_file: SpmbMediaFile[];
}

export type SpmbTipeKonten = 'gambar' | 'link' | 'file' | 'kosong';

export interface SpmbDataProcessed extends SpmbData {
  tipe_konten: SpmbTipeKonten;
  memiliki_gambar: boolean;
  memiliki_file: boolean;
  memiliki_link: boolean;
  memiliki_judul: boolean;
  media_pertama_url: string | null;
  media_pertama_tipe: 'gambar' | 'file' | null;
}