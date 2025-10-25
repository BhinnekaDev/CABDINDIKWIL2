import Navbar from "@/components/Navbar";
import SPMBContent from "@/app/SPMB/components/SPMB";
import Footer from "@/components/Footer";
import React from "react";

export default function SPMB() {
  return (
    <>
      <Navbar />
      <main>
        <SPMBContent />
      </main>
      <Footer />
    </>
  );
}
