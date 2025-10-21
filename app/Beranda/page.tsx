import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Beranda from "@/assets/img/Beranda.png";
import React from "react";

export default function BerandaPage() {
  return (
    <div>
      <Navbar />
      <main className="flex justify-center items-center p-4">
        <Image
          src={Beranda}
          alt="Sample Image"
          className="max-w-full h-auto object-contain"
        />
      </main>
      <Footer />
    </div>
  );
}
