"use client";
import { useMemo, useState } from "react";
import useSekolah from "@/hooks/useSekolah";
import { useInfografisSekolah } from "@/hooks/useInfografisSekolah";
import Image from "next/image";
import BackgroundSekolah from "@/assets/img/Background4.png";
import { AiFillWarning } from "react-icons/ai";

export default function SekolahSLB() {
  const [selectedNama, setSelectedNama] = useState("");

  const { data: rawData, loading, error, refetch } = useSekolah("SLB");
  const { data: infografisData, loading: infografisLoading } =
    useInfografisSekolah("SLB");

  const data = useMemo(() => {
    if (!rawData) return [];
    return rawData.filter(
      (sekolah) => sekolah.jenis_sekolah.nama_jenis.toUpperCase() === "SLB",
    );
  }, [rawData]);

  const namaSekolah = useMemo(() => data.map((s) => s.nama) ?? [], [data]);

  const dataTerpilih = useMemo(
    () => data.find((s) => s.nama === selectedNama),
    [selectedNama, data],
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center py-10">
      <Image
        src={BackgroundSekolah}
        alt="Background"
        fill
        priority
        className="object-cover object-center opacity-80 -z-20"
      />

      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-10"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-2">
        <section className="w-full text-center">
          {!infografisLoading &&
            infografisData &&
            infografisData.length > 0 &&
            infografisData.map((item) => (
              <div
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-5"
                key={item.id}
              >
                <Image
                  src={item.url_gambar}
                  alt="Informasi Publik Sekolah SLB"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            ))}

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-8">
            PILIHAN SEKOLAH (SLB)
          </h1>

          {loading && <p className="text-lg text-gray-600">Memuat data...</p>}
          {error && (
            <p className="text-red-600 text-lg">
              {error}{" "}
              <button onClick={refetch} className="btn btn-sm ml-2">
                Coba Lagi
              </button>
            </p>
          )}

          {!loading && !error && (
            <>
              {data.length === 0 ? (
                <div className="alert alert-warning alert-outline shadow-lg mt-10">
                  <AiFillWarning className="text-xl" />
                  <span>
                    Belum ada data sekolah SLB yang tersedia. Silakan cek
                    kembali nanti.
                  </span>
                </div>
              ) : (
                <>
                  <label className="form-control mb-8 text-left">
                    <div className="label">
                      <span className="label-text text-lg font-semibold mb-4">
                        Pilih Sekolah
                      </span>
                    </div>
                    <select
                      className="select select-bordered select-lg w-full"
                      value={selectedNama}
                      onChange={(e) => setSelectedNama(e.target.value)}
                    >
                      <option value="">——— PILIH SEKOLAH ———</option>
                      {namaSekolah.map((nama) => (
                        <option key={nama} value={nama}>
                          {nama}
                        </option>
                      ))}
                    </select>
                  </label>

                  {dataTerpilih ? (
                    <div className="w-full overflow-x-auto rounded-xl border border-base-200 shadow-sm shadow-black mt-10">
                      <table className="table min-w-max">
                        <thead className="bg-[#90735f] text-base text-white font-semibold">
                          <tr>
                            <th>No</th>
                            <th>NPSN</th>
                            <th>Nama Satuan Pendidikan</th>
                            <th>Alamat</th>
                            <th>Kelurahan</th>
                            <th>Status</th>
                            <th>Jumlah Siswa</th>
                            <th>Tautan</th>
                          </tr>
                        </thead>
                        <tbody className="text-base">
                          <tr className="hover">
                            <td>1</td>
                            <td>{dataTerpilih.npsn}</td>
                            <td className="font-medium">{dataTerpilih.nama}</td>
                            <td>{dataTerpilih.alamat}</td>
                            <td>{dataTerpilih.kelurahan}</td>
                            <td className="uppercase">{dataTerpilih.status}</td>
                            <td>{dataTerpilih.jumlah_siswa}</td>
                            <td>
                              {dataTerpilih.tautan_sekolah ? (
                                <a
                                  href={dataTerpilih.tautan_sekolah}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="link underline-offset-4"
                                >
                                  {dataTerpilih.tautan_sekolah}
                                </a>
                              ) : (
                                "-"
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-lg font-medium text-gray-600 mt-10">
                      Silakan pilih sekolah terlebih dahulu dari daftar di atas.
                    </p>
                  )}
                </>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}
