import Navbar from "@/components/Navbar";
import UsulanKaris from "./components/UsulanKartuIstri";
import Footer from "@/components/Footer";
import React from "react";

export default function UsulanKartuIstri() {
  return (
    <div>
      <Navbar />
      <main>
        <UsulanKaris />
      </main>
      <Footer />
    </div>
  );
}
