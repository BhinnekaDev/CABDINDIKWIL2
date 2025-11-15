"use client";

import React from "react";
import Image from "next/image";
import BackgroundLayanan from "@/assets/img/Background2.png";
import FileList from "@/components/FileList";
import useLayanan from "@/hooks/useLayanan";
import { FileItem } from "@/types/file";

type Props = {
  layananType: string;
  title?: string;
};

export default function LayananProps({ layananType, title }: Props) {
  const displayTitle = title ?? layananType.replace(/_/g, " ");
  const { data, loading } = useLayanan();
  const filesToShow: FileItem[] = (data ?? []).filter(
    (f) => f.layananType?.toLowerCase() === layananType.toLowerCase()
  );

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
          <FileList title={displayTitle} files={filesToShow} />
          {loading && (
            <div className="flex justify-center mb-3">
              <span
                className="loading loading-spinner text-[#90735f]"
                style={{ width: "80px", height: "80px" }}
              ></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
