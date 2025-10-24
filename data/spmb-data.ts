import Sambutan from "@/assets/img/SPMB/1.jpeg";
import Konten1 from "@/assets/img/SPMB/2 (1).jpeg";
import Konten2 from "@/assets/img/SPMB/2 (2).jpeg";
import Konten3 from "@/assets/img/SPMB/2 (3).jpeg";
import BackgroundSekolah from "@/assets/img/Background4.png";

import { SPMBProps } from "@/types/spmb";

export const spmbData: SPMBProps = {
  pageTitle: "Alur Pelayanan SPMB Cabang Dinas Pendidikan Wilayah II Curup",
  welcomeTitle: "Kata Sambutan dari Mendikdasmen",
  welcomeImage: Sambutan,
  steps: [
    { imageSrc: Konten1 },
    { imageSrc: Konten2 },
    { imageSrc: Konten3 },
  ],
};

export const spmbBackground = BackgroundSekolah;
