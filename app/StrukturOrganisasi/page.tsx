import Navbar from "@/components/Navbar";
import StrukturOrganisasi from "./components/StrukturOrganisasi";
import Footer from "@/components/Footer";
import React from "react";

export default function BerandaPage() {
  return (
    <div>
      <Navbar />
      <main>
        <StrukturOrganisasi />
      </main>
      <Footer />
    </div>
  );
}
