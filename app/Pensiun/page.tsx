import Navbar from "@/components/Navbar";
import Pensiun from "./components/Pensiun";
import Footer from "@/components/Footer";
import React from "react";

export default function UsulanPensiun() {
  return (
    <div>
      <Navbar />
      <main>
        <Pensiun />
      </main>
      <Footer />
    </div>
  );
}
