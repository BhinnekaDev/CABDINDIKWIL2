import Navbar from "@/components/Navbar";
import PilihanSLB from "./components/SLB";
import Footer from "@/components/Footer";
import React from "react";

export default function SLBPage() {
  return (
    <div>
      <Navbar />
      <main>
        <PilihanSLB />
      </main>
      <Footer />
    </div>
  );
}
