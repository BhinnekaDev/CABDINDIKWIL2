import Navbar from "@/components/Navbar";
import LayananPage from "@/components/Layanan";
import Footer from "@/components/Footer";
import React from "react";

export default function KenaikanPangkatReguler() {
  return (
    <div>
      <Navbar />
      <main>
        <LayananPage
          layananType="Kenaikan_Pangkat_Reguler"
          title="Pembuatan Usulan Kenaikan Pangkat Reguler"
        />
      </main>
      <Footer />
    </div>
  );
}
