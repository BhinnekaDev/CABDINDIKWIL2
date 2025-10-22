import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeputarCabdinContent from "@/app/SeputarCabdin/components/SeputarCabdin";

export default function SeputarCabdinPage() {
  return (
    <div>
      <Navbar />
      <main>
        <SeputarCabdinContent />
      </main>
      <Footer />
    </div>
  );
}
