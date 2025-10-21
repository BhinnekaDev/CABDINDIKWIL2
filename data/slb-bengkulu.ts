import { Sekolah } from "@/types/sekolah";

export const Daftar_SLB: Sekolah[] = [
  {
    npsn: "10700659",
    nama: "SLBN 1 REJANG LEBONG",
    alamat: "Jln. Sidomulyo",
    kelurahan: "Tempel Rejo",
    status: "NEGERI",
  },
  {
    npsn: "70055048",
    nama: "SLBIT NUR KHOIRUL ASHAB",
    alamat: "Jl. Hasyim Azhari No. 131, Sukaraja Kec. Curup Timur Kab. Rejang Lebong",
    kelurahan: "Sukaraja",
    status: "SWASTA",
  },
];

export const Nama_SLB = Daftar_SLB.map((s) => s.nama);
