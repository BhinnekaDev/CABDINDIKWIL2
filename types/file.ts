export type FileType = "PDF" | "DOC" | "XLS" | "IMG" | "OTHER";

export interface LayananApiItem {
  id: number | string;
  judul: string;
  nama_file: string;
  url_file: string;
  ukuran_file?: number;
  jenis_file?: string; 
  jenis_layanan?: string;
}

export interface FileItem {
  id: number | string;
  title: string; 
  filename: string; 
  url: string; 
  size?: string; 
  sizeBytes?: number;
  mime?: string;
  type: FileType | string; 
  layananType?: string; 
  uploaded?: string;
}

export function formatBytes(bytes?: number): string | undefined {
  if (bytes == null) return undefined;
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}
