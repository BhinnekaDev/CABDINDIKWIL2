import Navbar from "@/components/Navbar";
import PilihanSMK from "./components/SMK";
import Footer from "@/components/Footer";
import React from "react";

export default function SMKPage() {
  return (
    <div>
      <Navbar />
      <main>
        <PilihanSMK />
      </main>
      <Footer />
    </div>
  );
}
