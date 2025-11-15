import Navbar from "@/components/Navbar";
import LayananPage from "@/components/Layanan";
import Footer from "@/components/Footer";
import React from "react";

export default function RekomendasiPindahSekolah() {
  return (
    <div>
      <Navbar />
      <main>
        <LayananPage
          layananType="Rekomendasi_Pindah_Sekolah"
          title="Rekomendasi Pindah Sekolah"
        />
      </main>
      <Footer />
    </div>
  );
}
