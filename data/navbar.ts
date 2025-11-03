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
    isActive: (p) => ["/Prakata", "/VisiMisi", "/Tupoksi", "/StrukturOrganisasi"].some((prefix) => p.startsWith(prefix)),
  },
  {
    label: "Info",
    children: [
      { label: "Seputar CABDIN", path: "/SeputarCabdin" },
      { label: "Berita", path: "/Berita" },
      { label: "SPMB", path: "/SPMB" },
    ],
    isActive: (p) => ["/SeputarCabdin", "/Berita", "/SPMB"].some((prefix) => p.startsWith(prefix)),
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
      { label: "Cerita Praktik Baik", path: "/CeritaPraktikBaik" },
      { label: "Inovasi", path: "/Inovasi" },
    ],
     isActive: (p) => ["/CeritaPraktikBaik", "/Inovasi"].some((prefix) => p.startsWith(prefix)),
  },
  // {
  //   label: "Pendamping Satpen",
  //   children: [
  //     { label: "SMA", path: "/404" },
  //     { label: "SMK", path: "/404" },
  //     { label: "SLB", path: "/404" },
  //   ],
  // },
  {
    label: "Layanan",
    children: [
      { label: "Rekomendasi Penelitian", path: "/RekomendasiPenelitian" },
      { label: "Rekomendasi Pindah Sekolah", path: "/RekomendasiPindahSekolah" },
      { label: "Legalisir Ijazah / SKHU (SMA/SMK/SLB)", path: "/LegalisirIjazahSKHU" },
      {
        label: "Surat Keterangan Kesalahan Penulisan Ijazah / SKHU (SMA/SMK/SLB)",
        path: "/PerbaikanIjzahSKHU",
      },
      { label: "Surat Keterangan Kehilangan Ijazah (SMA/SMK/SLB)", path: "/KehilanganIjazah" },
      { label: "Pembuatan Usulan Kartu Pegawai (KARPEG)", path: "/UsulanKarpeg" },
      { label: "Pembuatan Usulan Kartu Istri (KARIS)", path: "/UsulanKaris" },
      { label: "Pembuatan Usulan Kartu Suami (KARSU)", path: "/UsulanKarsu" },
      { label: "Pembuatan Usulan Kenaikan Pangkat Fungsional", path: "/KenaikanPangkatFungsional" },
      { label: "Pembuatan Usulan Kenaikan Pangkat Reguler", path: "/404" },
      { label: "Pembuatan Usulan Pensiun", path: "/Pensiun" },
      { label: "Pembuatan Tubel dan Basis", path: "/TabelBasis" },
    ],
    isActive: (p) => ["/RekomendasiPenelitian", "/RekomendasiPindahSekolah", "/LegalisirIjazahSKHU", "/PerbaikanIjzahSKHU", "/KehilanganIjazah", "/UsulanKarpeg", "/UsulanKaris", "/UsulanKarsu", "/KenaikanPangkatFungsional", "/Pensiun", "/TabelBasis"].some((prefix) => p.startsWith(prefix)),
  },
];
