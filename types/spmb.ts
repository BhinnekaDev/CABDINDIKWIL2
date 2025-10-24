import { StaticImageData } from "next/image";

export interface StepItem {
  imageSrc: StaticImageData;
}

export interface SPMBProps {
  pageTitle: string;
  welcomeTitle: string;
  welcomeImage: StaticImageData;
  steps: StepItem[];
}
