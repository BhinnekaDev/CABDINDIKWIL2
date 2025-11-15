import Navbar from "@/components/Navbar";
import LayananPage from "@/components/Layanan";
import Footer from "@/components/Footer";
import React from "react";

export default function UsulanPensiun() {
  return (
    <div>
      <Navbar />
      <main>
        <LayananPage layananType="Pensiun" title="Pembuatan Usulan Pensiun" />
      </main>
      <Footer />
    </div>
  );
}
