export type Sekolah = {
  npsn: string;
  nama: string;
  alamat: string;
  kelurahan: string;
  status: "NEGERI" | "SWASTA";
  jumlah_siswa: number;
  tautan_sekolah: string | null;
  jenis_sekolah: {
    nama_jenis: string;
  };
};