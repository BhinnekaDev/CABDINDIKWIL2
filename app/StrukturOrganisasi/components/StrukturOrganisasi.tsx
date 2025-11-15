"use client";

import Image from "next/image";
import BackgroundStrukturOrganisasi from "@/assets/img/Background5.png";
import { useStrukturOrganisasi } from "@/hooks/useStrukturOrganisasi";

export default function DataSMA() {
  const { data, loading, error } = useStrukturOrganisasi();

  if (loading) {
    return (
      <div className="flex justify-center mb-3">
        <span
          className="loading loading-spinner text-[#90735f]"
          style={{ width: "80px", height: "80px" }}
        ></span>
      </div>
    );
  }
  if (error) {
    return <p className="text-center py-10 text-red-600">{error}</p>;
  }

  const struktur = data?.[0];
  if (!struktur) {
    return (
      <div className="w-full text-center py-10">
        <p>Tidak ada data struktur organisasi.</p>
      </div>
    );
  }

  return (
    <div className="relative py-6">
      <Image
        src={BackgroundStrukturOrganisasi}
        alt="Background"
        fill
        priority
        className="object-cover object-center opacity-80 -z-20"
      />

      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-20"></div>

      <div className="relative z-10 lg:px-32 px-5">
        {/* Struktur Organisasi */}
        <div className="text-center mb-10">
          <h1 className="lg:text-3xl text-xl font-extrabold mb-4">
            Struktur Organisasi Cabang Dinas Pendidikan Wilayah II Rejang Lebong
          </h1>

          <div className="card w-max-2xl">
            <figure>
              <Image
                src={struktur.gambar_struktur}
                alt="Struktur Organisasi"
                width={650}
                height={800}
                className="rounded-xl mx-auto"
              />
            </figure>
          </div>
        </div>

        {/* Dokumentasi Kantor */}
        <div className="text-center mb-6">
          <h1 className="lg:text-3xl text-xl font-extrabold mb-4">
            Dokumentasi Kantor Cabang Dinas Pendidikan Wilayah II Rejang Lebong
          </h1>

          <div className="card w-max-2xl">
            <figure>
              <Image
                src={struktur.gambar_dokumentasi}
                alt="Dokumentasi Kantor"
                width={750}
                height={500}
                className="rounded-xl mx-auto"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
