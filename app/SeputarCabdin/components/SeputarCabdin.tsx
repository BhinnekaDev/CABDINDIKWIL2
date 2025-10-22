import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { dataSeputarCabdin } from "@/data/seputar-cabdin";

import BackgroundCard from "@/assets/img/Background2.png";

export default function SeputarCabdin() {
  return (
    <div className="relative py-6">
      <Image
        src={BackgroundCard}
        alt="Logo Beranda"
        fill
        priority
        className="object-cover object-center opacity-80 -z-20"
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-20"></div>
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold mb-4 uppercase">
            Seputar Cabdin
          </h1>
          <h3 className="text-lg font-semibold">
            Seputar Cabang Dinas Pendidikan Wilayah III Curup
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          {dataSeputarCabdin.map((item) => (
            <div
              key={item.id}
              className="card lg:card-side bg-base-100 shadow-sm h-[400px]"
            >
              <div className="w-screen h-full overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.content}</p>
                <div className="card-actions justify-end flex items-center gap-2 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <FaRegCalendarAlt />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoPersonOutline />
                    <span>{item.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
