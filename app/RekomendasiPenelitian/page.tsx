import Navbar from "@/components/Navbar";
import LayananPage from "@/components/Layanan";
import Footer from "@/components/Footer";
import React from "react";

export default function RekomendasiPenelitian() {
  return (
    <div>
      <Navbar />
      <main>
        <LayananPage
          layananType="Rekomendasi_Penelitian"
          title="Rekomendasi Penelitian"
        />
      </main>
      <Footer />
    </div>
  );
}
