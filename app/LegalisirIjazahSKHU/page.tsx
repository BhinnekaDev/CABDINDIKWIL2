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
          layananType="Legalisir_Ijazah_SKHU"
          title="Legalisir Ijazah / SKHU (SMA/SMK/SLB)"
        />
      </main>
      <Footer />
    </div>
  );
}
