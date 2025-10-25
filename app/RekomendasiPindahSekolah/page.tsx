import Navbar from "@/components/Navbar";
import RekomenPindahSekolah from "./components/RekomPindahSekolah";
import Footer from "@/components/Footer";
import React from "react";

export default function RekomendasiPindahSekolah() {
  return (
    <div>
      <Navbar />
      <main>
        <RekomenPindahSekolah />
      </main>
      <Footer />
    </div>
  );
}
