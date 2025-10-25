import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import dataInovasi from "@/data/inovasi";
import BackgroundCard from "@/assets/img/Background2.png";

export default function Inovasi() {
  return (
    <div className="relative py-6">
      <Image
        src={BackgroundCard}
        alt="Logo Beranda"
        fill
        priority
        className="object-cover object-center opacity-80 -z-20"
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-20" />

      <div className="relative z-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold mb-4">Inovasi</h1>
          <p className="max-w-2xl mx-auto text-gray-700">
            Jelajahi berbagai inovasi terbaru dalam dunia pendidikan yang
            dirancang untuk meningkatkan kualitas pembelajaran dan pengalaman
            belajar untuk anak-anak.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          {dataInovasi.map((item) => (
            <Link
              key={item.id}
              href={`/Inovasi/${item.id}`}
              className="card lg:card-side bg-base-100 shadow-sm overflow-hidden"
            >
              <div className="w-full lg:w-1/2 h-56 lg:h-[400px] overflow-hidden rounded-lg shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="line-clamp-4">{item.preview}</p>

                <div className="card-actions justify-end flex items-center gap-4 text-gray-600 text-sm">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
