export type FileType = "PDF" | "DOC" | "XLS" | "IMG" | "OTHER";

export interface FileItem {
  id: number | string;
  title: string;
  filename: string;
  url: string;
  size?: string;
  type: FileType | string;
  uploaded?: string;
}
