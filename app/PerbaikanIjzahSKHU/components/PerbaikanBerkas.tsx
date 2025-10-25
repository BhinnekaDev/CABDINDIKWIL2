"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import BackgroundLayanan from "@/assets/img/Background2.png";
import FileList from "@/components/FileList";
import { PerbaikanIjazahSKHUN } from "@/data/perbaikan-ijazah-skhun";
import { FileItem } from "@/types/file";

type Props = {
  files?: FileItem[];
  title?: string;
};

export default function PerbaikanIjazahSKHUNPage({
  files = PerbaikanIjazahSKHUN,
  title = "Surat Keterangan Kesalahan Penulisan Ijazah & SKHU (SMA/SMK/SLB)",
}: Props) {
  const [query, setQuery] = useState("");
  const [filterType] = useState<"ALL" | string>("ALL");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return files.filter((f) => {
      if (filterType !== "ALL" && f.type !== filterType) return false;
      if (!q) return true;
      return (
        f.title.toLowerCase().includes(q) ||
        f.filename.toLowerCase().includes(q) ||
        (f.type && String(f.type).toLowerCase().includes(q))
      );
    });
  }, [files, query, filterType]);

  return (
    <div className="relative py-12">
      <Image
        src={BackgroundLayanan}
        alt="Background"
        fill
        priority
        className="object-cover object-center opacity-80 -z-20"
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-20"></div>

      <div className="relative z-10 min-h-[400px]">
        <div className="mx-auto max-w-5xl mt-8 px-4">
          <FileList title={title} files={filtered} />
        </div>
      </div>
    </div>
  );
}
