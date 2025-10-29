import Image from "next/image";
import BackgroundVisiMisi from "@/assets/img/Background2.png";
export default function Prakata() {
  return (
    <div className="relative py-6">
      <Image
        src={BackgroundVisiMisi}
        alt="Logo Beranda"
        fill
        priority
        className="object-cover object-center opacity-80 -z-20"
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-20"></div>
      <div className="relative z-10">
        <div className="text-center mb-16 lg:px-40 px-5">
          <h1 className="text-3xl font-extrabold mb-4">VISI</h1>
          <h3 className="lg:text-lg text-base font-semibold py-2 bg-base-100 rounded-md">
            Terwujudnya pendidikan formal, non formal, dan informal yang
            berkualitas dan berdaya saing tinggi berbasis IPTEK dan IMTAQ serta
            berwawasan lingkungan.
          </h3>
        </div>
        <div className="lg:px-40">
          <h1 className="text-3xl text-center font-extrabold mb-4">MISI</h1>
          <ul className="list bg-base-100 py-2 rounded-md">
            <li className="list-row">
              <div className="lg:text-4xl text-2xl font-thin opacity-30 tabular-nums">
                01
              </div>
              <div className="lg:text-lg text-base">
                Meningkatkan ketersediaan layanan di semua jenjang pendidikan.
              </div>
            </li>
            <li className="list-row">
              <div className="lg:text-4xl text-2xl font-thin opacity-30 tabular-nums">
                02
              </div>
              <div className="lg:text-lg text-base">
                Meningkatkan keterjangkauan layanan di semua jenjang pendidikan.
              </div>
            </li>
            <li className="list-row">
              <div className="lg:text-4xl text-2xl font-thin opacity-30 tabular-nums">
                03
              </div>
              <div className="lg:text-lg text-base">
                Meningkatkan mutu dan relevansi layanan di semua jenjang
                pendidikan.
              </div>
            </li>
            <li className="list-row">
              <div className="lg:text-4xl text-2xl font-thin opacity-30 tabular-nums">
                04
              </div>
              <div className="lg:text-lg text-base">
                Meningkatkan kesetaraan dalam memperoleh layanan di semua
                jenjang pendidikan.
              </div>
            </li>
            <li className="list-row">
              <div className="lg:text-4xl text-2xl font-thin opacity-30 tabular-nums">
                05
              </div>
              <div className="lg:text-lg text-base">
                Meningkatkan penguasaan IPTEK dan IMTAQ yang berwawasan
                lingkungan.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
