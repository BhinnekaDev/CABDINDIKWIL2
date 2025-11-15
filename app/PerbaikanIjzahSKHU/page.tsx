import Navbar from "@/components/Navbar";
import LayananPage from "@/components/Layanan";
import Footer from "@/components/Footer";
import React from "react";

export default function PerbaikanIjazahSKHU() {
  return (
    <div>
      <Navbar />
      <main>
        <LayananPage
          layananType="Perbaikan_Ijzah_SKHU"
          title="Surat Keterangan Kesalahan Penulisan Ijazah & SKHU (SMA/SMK/SLB)"
        />
      </main>
      <Footer />
    </div>
  );
}
