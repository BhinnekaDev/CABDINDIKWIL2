import Navbar from "@/components/Navbar";
import LegalisirIjazahSKHUN from "./components/LegalisirBerkas";
import Footer from "@/components/Footer";
import React from "react";

export default function RekomendasiPenelitian() {
  return (
    <div>
      <Navbar />
      <main>
        <LegalisirIjazahSKHUN />
      </main>
      <Footer />
    </div>
  );
}
