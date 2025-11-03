"use client";

import { use } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBerita from "@/assets/img/Background4.png";
import Link from "next/link";
import { useCeritaPraktikBaikItem } from "@/hooks/useCeritaPraktikBaik";
import React from "react";

interface BeritaDetailProps {
  params: { id: string };
}

export default function BeritaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: berita, loading, error } = useCeritaPraktikBaikItem(id);
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-5 bg-gray-200 rounded w-1/4" />
            <div className="h-[420px] bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold">Terjadi kesalahan</h2>
          <p className="text-sm text-gray-600">
            Tidak dapat memuat berita. Coba refresh halaman.
          </p>
          <Link
            href="/CeritaPraktikBaik"
            className="text-blue-600 underline mt-4 inline-block"
          >
            ← Kembali ke Cerita Praktik Baik
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  if (!berita) {
    return (
      <>
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold">
            Berita Seputar CABDIN tidak ditemukan
          </h2>
          <Link href="/CeritaPraktikBaik" className="text-blue-600 underline">
            ← Kembali ke Cerita Praktik Baik
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  function RenderImage({
    src,
    alt,
    className = "",
    fill = false,
    wrapperClass = "",
    height = 384,
  }: {
    src: string;
    alt?: string;
    className?: string;
    fill?: boolean;
    wrapperClass?: string;
    height?: number;
  }) {
    const isDataUri = src.startsWith("data:");
    if (isDataUri) {
      // eslint-disable-next-line @next/next/no-img-element
      return (
        <div className={wrapperClass}>
          <img
            src={src}
            alt={alt ?? ""}
            className={`w-full h-${height} object-cover rounded-lg ${className}`}
          />
        </div>
      );
    }
    return fill ? (
      <div className={wrapperClass + " relative"}>
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          className={`object-cover rounded-lg ${className}`}
        />
      </div>
    ) : (
      <div className={wrapperClass}>
        <Image
          src={src}
          alt={alt ?? ""}
          width={1200}
          height={height}
          className={`object-cover rounded-lg ${className}`}
        />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="relative py-6 px-6 lg:px-24">
        <Image
          src={BackgroundBerita}
          alt="Logo Beranda"
          fill
          priority
          className="object-cover object-center opacity-80 -z-20"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-20" />

        <div className="relative z-10">
          <Link href="/CeritaPraktikBaik" className="text-sm text-blue-600">
            ← Kembali ke Cerita Praktik Baik
          </Link>

          <h1 className="text-3xl font-bold mt-4 mb-2">{berita.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span>{berita.date}</span>
            <span>•</span>
            <span>{berita.author}</span>
          </div>

          <div className="w-full h-[500px] relative mb-6">
            {berita.image ? (
              berita.image.startsWith("data:") ? (
                <img
                  src={berita.image}
                  alt={berita.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <Image
                  src={berita.image}
                  alt={berita.title}
                  fill
                  className="object-cover rounded-lg"
                />
              )
            ) : (
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-sm text-gray-500">No image</span>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {berita.content.map((block, i) => {
              if (block.type === "paragraph") {
                return (
                  <p key={i} className="text-justify leading-relaxed">
                    {block.text}
                  </p>
                );
              }

              if (block.type === "image") {
                const src = block.src;
                const alt = block.alt ?? `${berita.title} - gambar`;

                if (src.startsWith("data:")) {
                  return (
                    <div key={i} className="my-4">
                      <img
                        src={src}
                        alt={alt}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    </div>
                  );
                }

                return (
                  <div key={i} className="my-4 relative w-full h-96">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
