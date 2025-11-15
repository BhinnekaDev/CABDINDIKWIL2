"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBerita from "@/assets/img/Background4.png";
import { useInovasiItem } from "@/hooks/useInovasi";

export default function InovasiDetailPage() {
  const { id } = useParams();
  const { data: berita, loading, error } = useInovasiItem(id as string);

  function SmartImage({
    src,
    alt,
    hero = false,
    className = "",
    style,
    lazy = false,
  }: {
    src?: string | null;
    alt?: string;
    hero?: boolean;
    className?: string;
    style?: React.CSSProperties;
    lazy?: boolean;
  }) {
    const [isPortrait, setIsPortrait] = React.useState<boolean | null>(null);
    const [loadedSrc, setLoadedSrc] = React.useState<string | null>(null);

    React.useEffect(() => {
      if (!src) {
        setIsPortrait(null);
        setLoadedSrc(null);
        return;
      }
      if (src === loadedSrc) return;

      let cancelled = false;
      const img = new window.Image();

      img.onload = () => {
        if (cancelled) return;
        setIsPortrait(img.naturalHeight > img.naturalWidth);
        setLoadedSrc(src);
      };
      img.onerror = () => {
        if (cancelled) return;
        setIsPortrait(null);
        setLoadedSrc(src);
      };

      img.src = src;

      return () => {
        cancelled = true;
      };
    }, [src, loadedSrc]);

    if (!src) {
      return (
        <div
          className={`relative w-full rounded-lg flex items-center justify-center overflow-hidden ${className}`}
          style={style}
        >
          <span className="text-sm text-gray-500">No image</span>
        </div>
      );
    }

    if (isPortrait === null) {
      return (
        <div
          className={`relative w-full h-96 bg-gray-100 rounded-lg animate-pulse ${className}`}
          style={style}
          aria-label={alt ?? "image placeholder"}
        />
      );
    }

    const commonProps: Partial<ImageProps> = {
      unoptimized: src.startsWith("data:"),
      priority: !!hero,
    };
    if (!hero) commonProps.loading = lazy ? "lazy" : "eager";

    const ensuredSrc = src as string;
    const ensuredAlt = alt ?? "";

    if (isPortrait) {
      return (
        <div
          className={`relative w-full h-[800px] rounded-lg overflow-hidden ${className}`}
          style={style}
          aria-label={ensuredAlt || "portrait image"}
        >
          <Image
            src={ensuredSrc}
            alt={ensuredAlt}
            {...commonProps}
            fill
            className="object-contain"
          />
        </div>
      );
    } else {
      return (
        <div
          className={`relative w-full aspect-video rounded-lg overflow-hidden ${className}`}
          style={style}
          aria-label={ensuredAlt || "landscape image"}
        >
          <Image
            src={ensuredSrc}
            alt={ensuredAlt}
            {...commonProps}
            fill
            className="object-cover"
          />
        </div>
      );
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-5 bg-gray-200 rounded w-1/4" />
            <div style={{ height: 420 }} className="bg-gray-200 rounded" />
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
            href="/Inovasi"
            className="text-blue-600 underline mt-4 inline-block"
            aria-label="Kembali ke Seputar CABDIN"
          >
            ← Kembali ke Inovasi
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
          <Link href="/Inovasi" className="text-blue-600 underline">
            ← Kembali ke Inovasi
          </Link>
        </div>
        <Footer />
      </>
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
          <Link href="/Inovasi" className="text-sm text-blue-600">
            ← Kembali ke Inovasi
          </Link>

          <h1 className="text-3xl font-bold mt-4 mb-2">{berita.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span>{berita.date}</span>
            <span>•</span>
            <span>{berita.author}</span>
          </div>
          <div className="w-full mb-6">
            <SmartImage src={berita.image} alt={berita.title} hero={true} />
          </div>

          <div className="space-y-6">
            {Array.isArray(berita.content) &&
              berita.content.map((block, i) => {
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

                  return (
                    <div key={i} className="my-4">
                      <SmartImage src={src} alt={alt} lazy={true} />
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
