import Navbar from "@/components/Navbar";
import HilangIjazah from "./components/KehilanganBerkas";
import Footer from "@/components/Footer";
import React from "react";

export default function KehilanganIjazah() {
  return (
    <div>
      <Navbar />
      <main>
        <HilangIjazah />
      </main>
      <Footer />
    </div>
  );
}
