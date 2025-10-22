import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeritaContent from "@/app/Berita/components/Berita";

export default function SeputarCabdinPage() {
  return (
    <div>
      <Navbar />
      <main>
        <BeritaContent />
      </main>
      <Footer />
    </div>
  );
}
