import React from "react";
import Image from "next/image";
import { spmbData, spmbBackground } from "@/data/spmb-data";

export default function SPMB() {
  const { pageTitle, welcomeTitle, welcomeImage, steps } = spmbData;

  return (
    <div className="relative min-h-screen flex items-center justify-center py-10">
      <Image
        src={spmbBackground}
        alt="Background Prakata"
        fill
        priority
        className="object-cover object-center opacity-80 -z-20"
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-10"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-2">
        <section className="w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-8">
            SELEKSI PENERIMAAN MURID BARU (SPMB)
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Selamat datang di halaman Seleksi Penerimaan Murid Baru (SPMB). Di
            sini, Anda dapat menemukan informasi lengkap mengenai proses
            pendaftaran dan persyaratan masuk Sekolah Menengah Atas ataupun
            Sekolah Menengah Kejuruan.
          </p>
        </section>

        <section className="min-h-screen py-12 space-y-7">
          <header className="mb-10">
            <div className="bg-[#90735f] inline-block rounded-xl px-6 py-3 shadow-md">
              <h1 className="text-white text-2xl lg:text-2xl font-semibold">
                {pageTitle}
              </h1>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="shrink-0">
              <Image
                src={welcomeImage}
                alt="Sambutan Mendikdasmen"
                className="w-[400px] h-[400px] object-cover rounded-xl shadow-md border"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                {welcomeTitle}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps?.map((step, idx) => (
              <article key={idx}>
                <Image
                  src={step.imageSrc}
                  alt={`Step ${idx + 1}`}
                  width={600}
                  height={600}
                  className="max-h-full object-contain"
                />
              </article>
            ))}
          </div>

          <footer className="mt-10 text-center text-sm text-slate-500">
            <p>
              Untuk informasi lebih lanjut, kunjungi kantor Cabang Dinas
              Pendidikan Wilayah II Curup atau hubungi kontak resmi.
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
}
