import Navbar from "@/components/Navbar";
import LayananPage from "@/components/Layanan";
import Footer from "@/components/Footer";
import React from "react";

export default function PembuatanTabelBasis() {
  return (
    <div>
      <Navbar />
      <main>
        <LayananPage
          layananType="Tabel_Basis"
          title="Pembuatan Tabel dan Basis"
        />
      </main>
      <Footer />
    </div>
  );
}
