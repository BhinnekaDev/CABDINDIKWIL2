import { StaticImageData } from "next/image";
export interface templateContentItem {
  id: number;
  title: string;
  date: string;
  author: string;
  image: StaticImageData; 
  content: string;
}
