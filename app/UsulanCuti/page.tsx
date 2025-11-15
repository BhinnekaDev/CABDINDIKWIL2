import Navbar from "@/components/Navbar";
import LayananPage from "@/components/Layanan";
import Footer from "@/components/Footer";
import React from "react";

export default function UsulanCuti() {
  return (
    <div>
      <Navbar />
      <main>
        <LayananPage layananType="Cuti" title="Pembuatan Usulan Cuti" />
      </main>
      <Footer />
    </div>
  );
}
