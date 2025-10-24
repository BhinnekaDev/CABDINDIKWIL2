import Navbar from "@/components/Navbar";
import KenaikanPangkatFungs from "./components/KenaikanPangkatFungs";
import Footer from "@/components/Footer";
import React from "react";

export default function KenaikanPangkatFungsional() {
  return (
    <div>
      <Navbar />
      <main>
        <KenaikanPangkatFungs />
      </main>
      <Footer />
    </div>
  );
}
