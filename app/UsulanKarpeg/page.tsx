import Navbar from "@/components/Navbar";
import UsulanKarpeg from "./components/UsulanKartuPegawai";
import Footer from "@/components/Footer";
import React from "react";

export default function UsulanKartuPegawai() {
  return (
    <div>
      <Navbar />
      <main>
        <UsulanKarpeg />
      </main>
      <Footer />
    </div>
  );
}
