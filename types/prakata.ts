
export interface PrakataItem {
  id: number;
  judul: string;
  sub_judul?: string;
  isi?: string;
  penutup?: string;
  dibuat_pada?: string;
  diperbarui_pada?: string;
}

export interface UsePrakataResult {
  data: PrakataItem[] | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}
