import Image from "next/image";
import BackgroundPrakata from "@/assets/img/Background1.png";

export default function Prakata() {
  return (
    <div className="relative py-6">
      <Image
        src={BackgroundPrakata}
        alt="Logo Beranda"
        fill
        priority
        className="object-cover object-center opacity-80 -z-20"
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-20"></div>
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold mb-4">
            Selamat Datang di Website SI PEKIK!
          </h1>
          <h3 className="text-lg font-semibold">
            (Sistem Informasi Pelaporan, Evaluasi, Koordinasi, dan Kinerja)
          </h3>
        </div>

        <div className="space-y-6 my-8 px-40">
          <h3 className="text-lg font-semibold">Halo, Sobat Pendidikan!</h3>
          <p>
            Selamat datang di <b>SI PEKIK</b>, platform digital yang dirancang
            untuk memudahkan proses
            <b> pelaporan, evaluasi, koordinasi, dan kinerja</b> di lingkungan
            <b> Cabang Dinas Pendidikan Wilayah II Curup</b>.
          </p>
          <p>
            Website ini hadir sebagai langkah nyata dalam mendukung
            <b> transformasi digital layanan pendidikan</b>. Melalui SI PEKIK,
            kami berupaya menghadirkan sistem yang
            <b> lebih cepat, transparan, dan efisien </b>
            dalam pengawasan, pembinaan, serta pelayanan teknis bagi
            sekolah-sekolah di wilayah kerja kami.
          </p>
          <p>
            Di sini, pengguna dapat mengakses berbagai fitur seperti{" "}
            <b>
              pelaporan kegiatan sekolah, supervisi daring, layanan administrasi
              teknis
            </b>
            , hingga <b> dashboard koordinasi</b> yang memudahkan pemantauan dan
            kolaborasi antar pihak.
          </p>
          <p>
            Kami percaya, dengan pemanfaatan teknologi informasi yang tepat,
            mutu pendidikan akan semakin meningkat dan pelayanan publik akan
            menjadi lebih terbuka serta responsif.
          </p>
          <p>Terima kasih telah mengunjungi SI PEKIK.</p>
          <p>
            Mari bersama kita wujudkan{" "}
            <b>pendidikan yang adaptif, inovatif, dan berintegritas</b> di era
            digital! 🚀
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-xl font-extrabold mb-4">Salam Hangat,</h1>
          <h3 className="text-base font-semibold">
            Tim SI PEKIK – Cabang Dinas Pendidikan Wilayah II Curup
          </h3>
        </div>
      </div>
    </div>
  );
}
