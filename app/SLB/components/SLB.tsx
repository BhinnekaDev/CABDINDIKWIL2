"use client";
import { useMemo, useState } from "react";
import { Daftar_SLB, Nama_SLB } from "@/data/slb-bengkulu";
import { Sekolah } from "@/types/sekolah";
import Image from "next/image";
import BackgroundSekolah from "@/assets/img/Background4.png";
import InformasiSLB from "@/assets/img/Satpen/SMK SLB/smk.png";

export default function SekolahSMA() {
  const [selectedNama, setSelectedNama] = useState("");

  const dataTerpilih: Sekolah | undefined = useMemo(
    () => Daftar_SLB.find((s) => s.nama === selectedNama),
    [selectedNama]
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center py-10">
      <Image
        src={BackgroundSekolah}
        alt="Background Prakata"
        fill
        priority
        className="object-cover object-center opacity-80 -z-20"
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-10"></div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-2">
        <section className="w-full text-center">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-5">
            <Image
              src={InformasiSLB}
              alt="Informasi Publik Sekolah SMA"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-linear-gradient-to-b from-black/50 via-black/20 to-transparent"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-8">
            PILIHAN SEKOLAH (SLB)
          </h1>
          <label className="form-control mb-8 text-left">
            <div className="label">
              <span className="label-text text-lg font-semibold">
                Pilih Sekolah
              </span>
            </div>
            <select
              className="select select-bordered select-lg w-full"
              value={selectedNama}
              onChange={(e) => setSelectedNama(e.target.value)}
            >
              <option value="">——— PILIH SEKOLAH ———</option>
              {Nama_SLB.map((nama) => (
                <option key={nama} value={nama}>
                  {nama}
                </option>
              ))}
            </select>
          </label>
          {dataTerpilih ? (
            <div className="overflow-x-auto rounded-xl border border-base-200 shadow-sm shadow-black mt-10">
              <table className="table">
                <thead className="bg-[#90735f] text-base text-white font-semibold">
                  <tr>
                    <th>No</th>
                    <th>NPSN</th>
                    <th>Nama Satuan Pendidikan</th>
                    <th>Alamat</th>
                    <th>Kelurahan</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr className="hover">
                    <td>1</td>
                    <td>
                      <a
                        className="link link-primary"
                        href={`#npsn-${dataTerpilih.npsn}`}
                      >
                        {dataTerpilih.npsn}
                      </a>
                    </td>
                    <td className="font-medium">{dataTerpilih.nama}</td>
                    <td>{dataTerpilih.alamat}</td>
                    <td>{dataTerpilih.kelurahan}</td>
                    <td className="uppercase">{dataTerpilih.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-lg font-medium text-gray-600 mt-10">
              Silakan pilih sekolah terlebih dahulu dari daftar di atas.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
