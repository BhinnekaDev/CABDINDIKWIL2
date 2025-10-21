import Navbar from "@/components/Navbar";
import VisiMisi from "./components/VisiMisi";
import Footer from "@/components/Footer";
import React from "react";

export default function BerandaPage() {
  return (
    <div>
      <Navbar />
      <main>
        <VisiMisi />
      </main>
      <Footer />
    </div>
  );
}
