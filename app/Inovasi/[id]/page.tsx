import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBerita from "@/assets/img/Background4.png";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import dataInovasi from "@/data/inovasi";

interface InovasiDetailProps {
  params: { id: string };
}

export default function InovasiDetailPage({ params }: InovasiDetailProps) {
  const Inovasi = dataInovasi.find((item) => String(item.id) === params.id);

  if (!Inovasi)
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Berita Inovasi tidak ditemukan</h2>
        <Link href="/Inovasi" className="text-blue-600 underline">
          ← Kembali ke Seputar Inovasi
        </Link>
      </div>
    );

  return (
    <>
      <Navbar />
      <div className="relative py-6 px-24">
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
          <h1 className="text-3xl font-bold mt-4 mb-2">{Inovasi.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span>{Inovasi.date}</span>
            <span>•</span>
            <span>{Inovasi.author}</span>
          </div>

          <div className="w-full h-[500px] relative mb-6">
            <Image
              src={Inovasi.image}
              alt={Inovasi.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            {Inovasi.content.map((block, i) => {
              if (block.type === "paragraph") {
                return (
                  <p key={i} className="text-justify leading-relaxed">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "image") {
                const images: (string | StaticImageData)[] = Array.isArray(
                  block.src
                )
                  ? block.src
                  : [block.src];

                return (
                  <div
                    key={i}
                    className={`grid gap-4 my-4 ${
                      images.length >= 2
                        ? "grid-cols-1 sm:grid-cols-2"
                        : "grid-cols-2"
                    }`}
                  >
                    {images.map(
                      (src: string | StaticImageData, index: number) => (
                        <div key={index} className="relative w-full h-96 ">
                          <Image
                            src={src}
                            alt={block.alt || `Gambar ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      )
                    )}
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
