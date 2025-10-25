import { StaticImageData } from "next/image";
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string | StaticImageData | (string | StaticImageData)[]; alt?: string };


export interface templateContentItem {
  id: number;
  slug?: string;
  title: string;
  date: string;
  publishedAt?: string;
  author: string;
  image: StaticImageData; 
  preview: string; 
  content: ContentBlock[]; 
}