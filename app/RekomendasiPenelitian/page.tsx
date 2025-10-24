import Navbar from "@/components/Navbar";
import RekomenPenelitian from "./components/RekomPenelitian";
import Footer from "@/components/Footer";
import React from "react";

export default function RekomendasiPenelitian() {
  return (
    <div>
      <Navbar />
      <main>
        <RekomenPenelitian />
      </main>
      <Footer />
    </div>
  );
}
