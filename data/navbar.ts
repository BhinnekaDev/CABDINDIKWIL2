import type { MenuItem } from "@/types/navbar";

export const menus: MenuItem[] = [
  { label: "Beranda", path: "/Beranda", isActive: (p) => p === "/Beranda" },
  {
    label: "Profil",
    children: [
      { label: "Prakata", path: "/Prakata" },
      { label: "Visi Misi", path: "/VisiMisi" },
      { label: "Tupoksi", path: "/Tupoksi" },
      { label: "Struktur Organisasi", path: "/StrukturOrganisasi" },
    ],
  },
  {
    label: "Info",
    children: [
      { label: "Seputar Cabdin", path: "/404" },
      { label: "Berita", path: "/404" },
      { label: "SPMB", path: "/404" },
    ],
  },
  {
    label: "Satpen",
    children: [
      { label: "SMA", path: "/SMA" },
      { label: "SMK", path: "/SMK" },
      { label: "SLB", path: "/SLB" },
    ],
    isActive: (p) => ["/SMA", "/SMK", "/SLB"].some((prefix) => p.startsWith(prefix)),
  },
  {
    label: "Karya Guru & Siswa",
    children: [
      { label: "Cerita Praktik Baik", path: "/404" },
      { label: "Inovasi", path: "/404" },
    ],
  },
  {
    label: "Pendamping Satpen",
    children: [
      { label: "SMA", path: "/404" },
      { label: "SMK", path: "/404" },
      { label: "SLB", path: "/404" },
    ],
  },
  {
    label: "Layanan",
    children: [
      { label: "Rekomendasi Penelitian", path: "/404" },
      { label: "Rekomendasi Pindah Sekolah", path: "/404" },
      { label: "Legalisir Ijazah / SKHU (SMA/SMK/SLB)", path: "/404" },
      {
        label: "Surat Keterangan Kesalahan Penulisan Ijazah / SKHU (SMA/SMK/SLB)",
        path: "/404",
      },
      { label: "Surat Keterangan Kehilangan Ijazah (SMA/SMK/SLB)", path: "/404" },
      { label: "Pembuatan Usulan Kartu Pegawai (KARPEG)", path: "/404" },
      { label: "Pembuatan Usulan Kartu Istri (KARIS)", path: "/404" },
      { label: "Pembuatan Usulan Kartu Suami (KARSU)", path: "/404" },
      { label: "Pembuatan Usulan Kenaikan Pangkat Fungsional", path: "/404" },
      { label: "Pembuatan Usulan Kenaikan Pangkat Reguler", path: "/404" },
      { label: "Pembuatan Usulan Pensiun", path: "/404" },
    ],
  },
];
