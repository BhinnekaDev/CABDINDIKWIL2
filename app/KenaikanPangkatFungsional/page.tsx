import Navbar from "@/components/Navbar";
import LayananPage from "@/components/Layanan";
import Footer from "@/components/Footer";
import React from "react";

export default function KenaikanPangkatFungsional() {
  return (
    <div>
      <Navbar />
      <main>
        <LayananPage
          layananType="Kenaikan_Pangkat_Fungsional"
          title="Pembuatan Usulan Kenaikan Pangkat Fungsional"
        />
      </main>
      <Footer />
    </div>
  );
}
