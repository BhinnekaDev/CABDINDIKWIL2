import Navbar from "@/components/Navbar";
import Tupoksi from "./components/Tupoksi";
import Footer from "@/components/Footer";
import React from "react";

export default function BerandaPage() {
  return (
    <div>
      <Navbar />
      <main>
        <Tupoksi />
      </main>
      <Footer />
    </div>
  );
}
