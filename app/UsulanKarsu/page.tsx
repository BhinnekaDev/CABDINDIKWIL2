import Navbar from "@/components/Navbar";
import UsulanKarsu from "./components/UsulanKartuSuami";
import Footer from "@/components/Footer";
import React from "react";

export default function UsulanKartuSuami() {
  return (
    <div>
      <Navbar />
      <main>
        <UsulanKarsu />
      </main>
      <Footer />
    </div>
  );
}
