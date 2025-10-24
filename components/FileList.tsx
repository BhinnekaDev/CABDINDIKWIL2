"use client";

import React from "react";
import { FileItem } from "../types/file";
import Link from "next/link";
import FileTypeBadge from "@/components/FileTypeBadge";

type Props = {
  title?: string;
  files: FileItem[];
  showUploaded?: boolean;
  className?: string;
};

export default function FileList({
  title,
  files,
  showUploaded = true,
  className = "",
}: Props) {
  if (!files || files.length === 0) {
    return (
      <div className={`text-center py-8 text-sm text-gray-500 ${className}`}>
        Tidak ada berkas.
      </div>
    );
  }

  return (
    <div className={className}>
      {title && (
        <div className="text-center my-6">
          <h3 className="text-xl font-semibold">
            Berkas untuk Keperluan Layanan
          </h3>
          <h1 className="text-3xl font-extrabold uppercase">{title}</h1>
        </div>
      )}

      <ul className="space-y-3 mt-12">
        {files.map((file) => (
          <li
            key={file.id}
            className="flex items-center justify-between rounded-lg border bg-white px-4 py-3 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-gray-100 p-2 min-w-[42px] flex items-center justify-center">
                <span className="text-xs font-semibold">
                  <FileTypeBadge type={file.type} />
                </span>
              </div>
              <div>
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-900 hover:underline"
                >
                  {file.title}
                </a>
                <div className="text-xs text-gray-500">
                  {file.filename}
                  {file.size ? ` • ${file.size}` : ""}
                  {showUploaded && file.uploaded
                    ? ` • Diunggah: ${file.uploaded}`
                    : ""}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50"
                title="Buka di tab baru"
              >
                Buka
              </a>
              <a
                href={file.url}
                download={file.filename}
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-700"
                title="Unduh file"
              >
                Unduh
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
