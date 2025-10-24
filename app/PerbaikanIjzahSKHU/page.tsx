import Navbar from "@/components/Navbar";
import PerbaikanIjazahSKHUN from "./components/PerbaikanBerkas";
import Footer from "@/components/Footer";
import React from "react";

export default function PerbaikanIjazahSKHU() {
  return (
    <div>
      <Navbar />
      <main>
        <PerbaikanIjazahSKHUN />
      </main>
      <Footer />
    </div>
  );
}
