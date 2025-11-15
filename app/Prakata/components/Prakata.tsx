"use client";
import Image from "next/image";
import BackgroundPrakata from "@/assets/img/Background1.png";
import { usePrakata } from "@/hooks/usePrakata";

export default function Prakata() {
  const { data, loading, error } = usePrakata("/prakata");

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
    return (
      <div className="text-center py-10 text-red-500">{error.message}</div>
    );
  }

  if (!data || data.length === 0) {
    return <div className="text-center py-10">Data tidak ditemukan.</div>;
  }

  const item = data[0];

  return (
    <div className="relative py-6">
      <Image
        src={BackgroundPrakata}
        alt="Background Prakata"
        fill
        priority
        className="object-cover object-center opacity-80 -z-20"
      />

      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-20"></div>

      <div className="relative z-10">
        <div className="text-center mb-6">
          <h1 className="lg:text-3xl text-2xl font-extrabold mb-4">
            {item.judul}
          </h1>
          <h3 className="text-lg font-semibold">{item.sub_judul}</h3>
        </div>
        <div
          className="space-y-6 my-8 lg:px-40 px-5"
          dangerouslySetInnerHTML={{ __html: item.isi ?? "" }}
        />
        <div
          className="text-center"
          dangerouslySetInnerHTML={{ __html: item.penutup ?? "" }}
        />
      </div>
    </div>
  );
}
