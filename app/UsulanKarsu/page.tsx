import Navbar from "@/components/Navbar";
import LayananPage from "@/components/Layanan";
import Footer from "@/components/Footer";
import React from "react";

export default function UsulanKartuSuami() {
  return (
    <div>
      <Navbar />
      <main>
        <LayananPage
          layananType="Usulan_Karsu"
          title="Pembuatan Usulan Kartu Suami (KARSU)"
        />
      </main>
      <Footer />
    </div>
  );
}
