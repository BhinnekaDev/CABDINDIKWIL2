import Navbar from "@/components/Navbar";
import Prakata from "./components/Prakata";
import Footer from "@/components/Footer";
import React from "react";

export default function BerandaPage() {
  return (
    <div>
      <Navbar />
      <main>
        <Prakata />
      </main>
      <Footer />
    </div>
  );
}
