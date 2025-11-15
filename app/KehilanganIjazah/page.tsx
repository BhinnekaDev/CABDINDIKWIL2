import Navbar from "@/components/Navbar";
import LayananPage from "@/components/Layanan";
import Footer from "@/components/Footer";
import React from "react";

export default function KehilanganIjazah() {
  return (
    <div>
      <Navbar />
      <main>
        <LayananPage
          layananType="Kehilangan_Ijazah"
          title="Surat Keterangan Kehilangan Ijazah"
        />
      </main>
      <Footer />
    </div>
  );
}
