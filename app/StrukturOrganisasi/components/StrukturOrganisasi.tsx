"use client";
import Image from "next/image";
import BackgroundStrukturOrganisasi from "@/assets/img/Background5.png";
import StrukturOrganisasi from "@/assets/img/StrukturOrganisasi.png";
import Kantor from "@/assets/img/Kantor Cabdindikwil2.jpeg";

export default function DataSMA() {
  return (
    <div className="relative py-6">
      <Image
        src={BackgroundStrukturOrganisasi}
        alt="Logo Beranda"
        fill
        priority
        className="object-cover object-center opacity-80 -z-20"
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-20"></div>
      <div className="relative z-10 lg:px-32 px-5">
        <div className="text-center mb-10">
          <h1 className="lg:text-3xl text-xl font-extrabold mb-4">
            Struktur Organisasi Cabang Dinas Pendidikan Wilayah II Curup
          </h1>
          <div className="card w-max-2xl">
            <figure>
              <Image
                src={StrukturOrganisasi}
                width={650}
                alt="Struktur Organisasi"
              />
            </figure>
          </div>
        </div>
        <div className="text-center mb-6">
          <h1 className="lg:text-3xl text-xl font-extrabold mb-4">
            Dokumentasi Kantor Cabang Dinas Pendidikan Wilayah II Curup
          </h1>
          <div className="card w-max-2xl">
            <figure>
              <Image src={Kantor} width={750} alt="Struktur Organisasi" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
