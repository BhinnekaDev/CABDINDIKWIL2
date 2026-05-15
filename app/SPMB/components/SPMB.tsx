"use client";

import React, { useState } from "react";
import Image from "next/image";
import BackgroundSekolah from "@/assets/img/Background4.png";
import { useSpmb } from "@/hooks/useSPMB";

export default function SPMB() {
  const { loading, error, getStats, getByTipeKonten } = useSpmb();

  const [activeTab, setActiveTab] = useState<"link" | "file">("link");

  const stats = getStats();
  const gambarData = getByTipeKonten("gambar");
  const linkData = getByTipeKonten("link");
  const fileData = getByTipeKonten("file");

  const tabs = [
    { id: "link" as const, label: "Link", icon: "🔗", count: stats.link },
    { id: "file" as const, label: "File", icon: "📄", count: stats.file },
  ];

  const filteredData = activeTab === "link" ? linkData : fileData;

  if (loading) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <Image
          src={BackgroundSekolah}
          alt="Background Prakata"
          fill
          priority
          className="object-cover object-center opacity-80 -z-20"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-10"></div>
        <div className="relative z-10 text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#90735f] border-r-transparent"></div>
          <p className="mt-4 text-lg">Memuat data SPMB...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <Image
          src={BackgroundSekolah}
          alt="Background Prakata"
          fill
          priority
          className="object-cover object-center opacity-80 -z-20"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-10"></div>
        <div className="relative z-10 text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
            <h3 className="font-bold mb-2">Error</h3>
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-10">
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
        {gambarData.length > 0 && (
          <section className="my-12">
            <div className="bg-[#90735f] inline-block rounded-xl px-6 py-3 shadow-md mb-8">
              <h2 className="text-white text-xl lg:text-2xl font-semibold">
                🖼️ Galeri Informasi SPMB
              </h2>
            </div>

            <div className="space-y-12">
              {gambarData.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="shrink-0">
                    <div className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px]">
                      <Image
                        src={item.media_pertama_url!}
                        alt={item.judul || "Gambar Informasi SPMB"}
                        fill
                        className="object-cover rounded-xl shadow-md border"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    {item.judul && (
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
                        {item.judul}
                      </h3>
                    )}
                    <p className="text-gray-600 text-sm">
                      Dipublikasikan:{" "}
                      {new Date(item.dibuat_pada).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-8 border-b border-gray-200">
          <nav className="flex flex-wrap gap-2 -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-[#90735f] text-[#90735f]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span className="ml-1 bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content Section untuk Link & File */}
        <div className="mt-8 min-h-[400px]">
          {filteredData.length === 0 ? (
            <div className="text-center py-12 bg-white/50 rounded-lg">
              <p className="text-gray-500 text-lg">
                Belum ada konten {activeTab} yang tersedia.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item) => {
                if (activeTab === "link") {
                  return (
                    <a
                      key={item.id}
                      href={item.link_url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
                    >
                      <div className="p-6">
                        <div className="text-3xl mb-3">🔗</div>
                        <h3 className="font-semibold text-lg mb-2">
                          {item.judul || item.link_text || "Link Pendaftaran"}
                        </h3>
                        <p className="text-sm text-gray-500 truncate">
                          {item.link_url}
                        </p>
                        <div className="mt-4 text-xs text-gray-400">
                          {new Date(item.dibuat_pada).toLocaleDateString(
                            "id-ID",
                          )}
                        </div>
                      </div>
                    </a>
                  );
                } else {
                  return (
                    <a
                      key={item.id}
                      href={item.media_pertama_url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
                    >
                      <div className="p-6">
                        <div className="text-3xl mb-3">📄</div>
                        <h3 className="font-semibold text-lg mb-2">
                          {item.judul || "File Dokumen"}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Klik untuk melihat atau download
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                          <span>📎 PDF Document</span>
                          <span>•</span>
                          <span>
                            {new Date(item.dibuat_pada).toLocaleDateString(
                              "id-ID",
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                  );
                }
              })}
            </div>
          )}
        </div>
        <footer className="mt-10 text-center text-sm text-slate-500">
          <p>
            Untuk informasi lebih lanjut, kunjungi kantor Cabang Dinas
            Pendidikan Wilayah II Curup atau hubungi kontak resmi.
          </p>
        </footer>
      </div>
    </div>
  );
}
