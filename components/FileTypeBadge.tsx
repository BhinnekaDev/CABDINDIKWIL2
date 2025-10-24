import React from "react";
import {
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFileImage,
  FaFile,
} from "react-icons/fa6";
import { FileType } from "@/types/file";

type Props = {
  type: FileType | string;
};

export default function FileTypeBadge({ type }: Props) {
  const fileType = type?.toString().toUpperCase() ?? "OTHER";

  switch (fileType) {
    case "PDF":
      return <FaFilePdf className="text-red-600 text-xl" title="PDF File" />;
    case "DOC":
    case "DOCX":
      return (
        <FaFileWord className="text-blue-600 text-xl" title="Word Document" />
      );
    case "XLS":
    case "XLSX":
      return (
        <FaFileExcel className="text-green-600 text-xl" title="Excel File" />
      );
    case "IMG":
    case "IMAGE":
    case "JPG":
    case "PNG":
      return (
        <FaFileImage className="text-orange-500 text-xl" title="Image File" />
      );
    default:
      return <FaFile className="text-gray-500 text-xl" title="File" />;
  }
}
