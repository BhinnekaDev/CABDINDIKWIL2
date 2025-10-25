import Navbar from "@/components/Navbar";
import TabelBasis from "./components/TabelBasis";
import Footer from "@/components/Footer";
import React from "react";

export default function PembuatanTabelBasis() {
  return (
    <div>
      <Navbar />
      <main>
        <TabelBasis />
      </main>
      <Footer />
    </div>
  );
}
