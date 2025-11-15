import Navbar from "@/components/Navbar";
import LayananPage from "@/components/Layanan";
import Footer from "@/components/Footer";
import React from "react";

export default function UsulanKartuPegawai() {
  return (
    <div>
      <Navbar />
      <main>
        <LayananPage
          layananType="Usulan_Karpeg"
          title="Pembuatan Usulan Kartu Pegawai (KARPEG)"
        />
      </main>
      <Footer />
    </div>
  );
}
