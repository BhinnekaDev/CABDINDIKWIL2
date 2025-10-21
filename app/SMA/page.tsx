import Navbar from "@/components/Navbar";
import PilihanSMA from "./components/SMA";
import Footer from "@/components/Footer";
import React from "react";

export default function SMAPage() {
  return (
    <div>
      <Navbar />
      <main>
        <PilihanSMA />
      </main>
      <Footer />
    </div>
  );
}
