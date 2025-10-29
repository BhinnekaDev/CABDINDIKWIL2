import Image from "next/image";
import BackgroundTupoksi from "@/assets/img/Background3.png";

export default function Tupoksi() {
  return (
    <div className="relative py-6">
      <Image
        src={BackgroundTupoksi}
        alt="Logo Beranda"
        fill
        priority
        className="object-cover object-center opacity-80 -z-20"
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-20"></div>
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h2 className="lg:text-lg text-basefont-semibold">
            TUGAS POKOK DAN FUNGSI (TUPOKSI) PEJABAT DI CABANG DINAS PENDIDIKAN
            WILAYAH II CURUP berdasar PERGUB NOMOR 46 TAHUN 2018
          </h2>
        </div>
        <div className="space-y-4 my-8 lg:px-40 px-5">
          {/* KEPALA CABANG DINAS */}
          <h3 className="lg:text-lg text-base font-bold">
            KEPALA CABANG DINAS
          </h3>
          <p className="lg:text-lg text-base font-semibold">Tugas</p>
          <p className="lg:text-lg text-base">
            Kepala Cabang Dinas mempunyai tugas membantu Kepala Dinas dalam
            melaksanakan sebagian kewenangan desentralisasi dan tugas
            dekonsentrasi serta urusan pemerintahan yang menjadi kewenangan
            daerah Provinsi di wilayah kerjanya.
          </p>
          <p className="lg:text-lg text-base font-semibold">
            Fungsi Dalam melaksanakan tugas melalui enam (6) aspek utama
            sebagaimana disebutkan dalam Pasal 4 ayat (2), Kepala Cabang Dinas
            Pendidikan melaksanakan fungsi:
          </p>
          <ul className="list-decimal list-inside pl-4 lg:text-lg text-base">
            <li>Perumusan Kebijakan Teknis Operasional</li>
            <li>Pelaksanaan Pengkajian dan Analisis Teknis</li>
            <li>Pelaksanaan Kebijakan Teknis di Bidang Masing-Masing</li>
            <li>Pelaksanaan Administrasi Cabang Dinas</li>
            <li>Pengkoordinasian Data dan Bahan Bidang Pembinaan</li>
            <li>
              Pengkoordinasian & Monitoring Kebijakan Bidang Kurikulum dan
              Kelembagaan
            </li>
          </ul>
          {/* SUBBAGIAN TATA USAHA */}
          <h3 className="lg:text-lg text-base font-bold">
            SUBBAGIAN TATA USAHA
          </h3>
          <p className="lg:text-lg text-base font-semibold">Tugas</p>
          <p className="lg:text-lg text-base">
            Sub Bagian Tata Usaha mempunyai tugas menerima dan mengelola surat
            masuk, surat keluar, menyiapkan bahan rapat, memelihara,
            mengkoordinasikan arsip/laporan data, menyusun rencana kebutuhan dan
            mengurus permintaan alat-alat tulis kantor, menyelesaikan
            administrasi kepegawaian di lingkungan Cabang Dinas, administrasi
            keuangan, menginventarisasi dan memelihara aset, serta tugas lainnya
            yang diberikan atasan.
          </p>
          <p className="lg:text-lg text-base font-semibold">
            Fungsi Dalam melaksanakan tugas sebagaimana disebutkan dalam Pasal
            9, Sub Bagian Tata Usaha melaksanakan fungsi:
          </p>
          <ul className="list-decimal list-inside pl-4 lg:text-lg text-base">
            <li>Penyusunan Rencana Pelaksanaan Tugas</li>
            <li>Pemutakhiran dan Validasi Data</li>
            <li>Administrasi Surat dan Arsip</li>
            <li>Pelaksanaan Administrasi Cabang Dinas</li>
            <li>Urusan Rumah Tangga, Keuangan, dan Kepegawaian</li>
            <li>Hubungan Masyarakat dan Lintas Sektoral</li>
            <li>
              Inventarisasi Pengadaan dan Penyaluran Buku/Sarana Pendidikan
            </li>
            <li>Perencanaan dan Pelaporan Internal</li>
            <li>Pengelolaan Administrasi Kepegawaian & Kearsipan</li>
            <li>Perencanaan Kebutuhan dan Pemeliharaan Barang</li>
            <li>Pencatatan dan Inventarisasi Aset</li>
            <li>Persiapan Rapat dan Dokumentasi</li>
            <li>Pemutakhiran Informasi Publik</li>
            <li>Penghimpunan Produk Hukum dan Pertanggungjawaban Dana</li>
            <li>Penyelesaian Permasalahan dan Evaluasi Kinerja</li>
            <li>Kehadiran Rapat dan Koordinasi</li>
            <li>Pelaporan Kinerja</li>
            <li>Tugas Tambahan</li>
          </ul>
          {/* SEKSI PENDAIKTENG & PAKET C */}
          <h3 className="lg:text-lg text-base font-bold uppercase">
            Seksi Pendidikan Menengah Atas dan Kelompok Belajar Paket C
          </h3>
          <p className="lg:text-lg text-base font-semibold">Tugas</p>
          <p className="lg:text-lg text-base">
            Seksi Pendidikan Menengah Atas dan Kelompok Belajar Paket C
            mempunyai tugas melaksanakan peningkatan mutu, relevansi, efisiensi
            dan efektivitas pengelolaan pendidikan menengah atas, dan kelompok
            belajar paket C, melaksanakan pemantauan, evaluasi dan bimbingan
            teknis dalam pengelolaan pendidikan menengah atas, dan kelompok
            belajar paket C berdasarkan delapan standar nasional pendidikan.
          </p>
          <p className="lg:text-lg text-base font-semibold">
            Fungsi Dalam melaksanakan tugas sebagaimana disebutkan dalam Pasal
            10, Seksi Pendidikan Menengah Atas dan Kelompok Belajar Paket C
            melaksanakan fungsi:
          </p>
          <ul className="list-decimal list-inside pl-4 lg:text-lg text-base">
            <li>Penyusunan rencana pelaksanaan tugas</li>
            <li>Penyiapan bahan dan data</li>
            <li>Pembinaan, monitoring, dan evaluasi</li>
            <li>Verifikasi izin pendirian dan operasional SMA</li>
            <li>Kebijakan kurikulum dan penilaian</li>
            <li>Kebijakan kelembagaan dan sarana prasarana</li>
            <li>
              Pembinaan minat, bakat, prestasi, dan karakter peserta didik
            </li>
            <li>Pembinaan pendidik dan tenaga kependidikan</li>
            <li>Pendampingan akreditasi sekolah menengah atas</li>
            <li>Penerimaan dan verifikasi peserta didik baru</li>
            <li>Inventarisasi buku dan sarana pendidikan</li>
            <li>Pembinaan Paket C</li>
            <li>Menghadiri rapat-rapat kedinasan sesuai disposisi atasan</li>
            <li>Evaluasi dan penyusunan laporan pelaksanaan tugas</li>
            <li>Pelaksanaan tugas lain yang diberikan atasan</li>
          </ul>
          {/* SEKSI PENDIDIKAN KEJURUAN & PENDIDIKAN KHUSUS */}
          <h3 className="lg:text-lg text-base font-bold uppercase">
            Seksi Pendidikan Menengah Kejuruan dan Pendidikan Khusus (SMK/SLB)
          </h3>
          <p className="lg:text-lg text-base font-semibold">Tugas</p>
          <p className="lg:text-lg text-base">
            Seksi Pendidikan Menengah Kejuruan dan Pendidikan Khusus mempunyai
            tugas melaksanakan peningkatan mutu, relevansi, efisiensi dan
            efektivitas pengelolaan pendidikan menengah kejuruan dan pendidikan
            khusus, melaksanakan pemantauan, evaluasi dan bimbingan teknis dalam
            pengelolaan pendidikan menengah kejuruan dan pendidikan khusus
            berdasarkan delapan (8) standar nasional pendidikan.
          </p>
          <p className="lg:text-lg text-base font-semibold">
            Fungsi Dalam melaksanakan tugas sebagaimana disebutkan dalam Pasal
            10A, Seksi Pendidikan Menengah Kejuruan dan Pendidikan Khusus
            melaksanakan fungsi:
          </p>
          <ul className="list-decimal list-inside pl-4 lg:text-lg text-base">
            <li>Penyusunan rencana pelaksanaan tugas</li>
            <li>Penyiapan bahan dan data pelaksanaan tugas</li>
            <li>Pembinaan, monitoring, dan evaluasi kegiatan operasional</li>
            <li>Verifikasi izin pendirian dan operasional</li>
            <li>
              Pengkoordinasian dan pelaksanaan kebijakan kurikulum serta
              penilaian
            </li>
            <li>Kebijakan kelembagaan dan sarana prasarana</li>
            <li>
              Pembinaan minat, bakat, prestasi, dan karakter peserta didik
            </li>
            <li>Pembinaan pendidik dan tenaga kependidikan</li>
            <li>Pendampingan akreditasi satuan pendidikan</li>
            <li>Verifikasi peserta didik baru</li>
            <li>
              Reinventarisasi buku pelajaran serta sarana dan prasarana
              pendidikan
            </li>
            <li>Kehadiran dan koordinasi rapat kedinasan</li>
            <li>Evaluasi dan penyusunan laporan pelaksanaan tugas</li>
            <li>Pelaksanaan tugas lain yang diberikan atasan</li>
          </ul>
          <h3 className="lg:text-lg text-base font-bold">
            KELOMPOK JABATAN FUNGSIONAL
          </h3>
          <ul className="list-decimal list-inside pl-4 lg:text-lg text-base">
            <li>
              Kelompok Jabatan Fungsional sebagaimana dimaksud dalam{" "}
              <b>Pasal 6 ayat (1) huruf d</b> mempunyai tugas melaksanakan
              kegiatan teknis sesuai dengan jabatan fungsional masing-masing
              berdasarkan ketentuan peraturan perundang-undangan.
            </li>
            <li>
              Dalam melaksanakan tugasnya, Kelompok Jabatan Fungsional berada di
              bawah dan dikoordinasikan oleh masing-masing <b>Kepala Seksi </b>
              sesuai bidangnya serta bertanggung jawab kepada
              <b> Kepala Cabang Dinas</b>.
            </li>
            <li>
              Kelompok Jabatan Fungsional pada{" "}
              <b>
                Seksi Pendidikan Menengah Atas dan Kelompok Belajar Paket C{" "}
              </b>
              terdiri atas:
              <ul className="list-disc list-outside pl-10 mt-2">
                <li>Analis Kompetensi Kelulusan;</li>
                <li>Analis Kurikulum dan Pembelajaran;</li>
                <li>Analis Pembelajaran Kursus dan Pelajaran;</li>
                <li>
                  Analis Data di Bidang Evaluasi dan Kerjasama Penelitian;
                </li>
                <li>Analis Prasarana Pendidikan; dan</li>
                <li>Pengawas Sekolah.</li>
              </ul>
            </li>
            <li>
              Kelompok Jabatan Fungsional pada{" "}
              <b> Seksi Pendidikan Menengah Kejuruan dan Pendidikan Khusus</b>{" "}
              terdiri atas:
              <ul className="list-disc list-outside pl-10 mt-2">
                <li>Analis Kompetensi Kelulusan;</li>
                <li>Analis Kurikulum dan Pembelajaran;</li>
                <li>Analis Pembelajaran Kursus dan Pelajaran;</li>
                <li>
                  Analis Data di Bidang Evaluasi dan Kerjasama Penelitian;
                </li>
                <li>Analis Prasarana Pendidikan; dan</li>
                <li>Pengawas Sekolah.</li>
              </ul>
            </li>
            <li>
              Jenis, jenjang, serta pembinaan jabatan fungsional dilaksanakan
              sesuai dengan ketentuan peraturan perundang-undangan yang berlaku
              di bidang kepegawaian dan pendidikan.
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h1 className="text-xl font-extrabold mb-4">
            Unduh Peraturan Gubernur Nomor 48 Tahun 2018
          </h1>
          <a
            href="https://jdih.bengkuluprov.go.id/assets/backend/dist/produk/46.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-base font-semibold text-[#90735f] hover:underline">
              Unduh Disini
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}
