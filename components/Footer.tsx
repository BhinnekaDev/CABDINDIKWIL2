"use client";
import React from "react";
import Image from "next/image";
import LogoBeranda2 from "@/assets/img/Logo Beranda2.png";
import { DayPicker } from "react-day-picker";
import { HiBuildingOffice, HiPhone } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div className="bg-[#90735f]">
      <footer className="footer sm:footer-horizontal  text-white p-10">
        <aside>
          <Image
            src={LogoBeranda2}
            alt="Logo Beranda"
            width={450}
            height={72}
            priority
            className="cursor-not-allowed"
          />
          <p>
            Cabang Dinas Pendidikan Wilayah II Curup
            <br />
            Dinas Pendidikan dan Kebudayaan Provinsi Bengkulu yang menaungi SMA
            - SMK - SLB Negeri dan Swasta di Kabupaten Rejang Lebong.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Email</h6>
          <div className="grid grid-flow-col gap-4">
            <HiPhone size={24} />
            <a>0812-7359-7127</a>
          </div>
          <h6 className="footer-title">Phone</h6>
          <div className="grid grid-flow-col gap-4">
            <MdEmail size={24} />
            <a>rejang2land@gmail.com</a>
          </div>
          <h6 className="footer-title">Alamat Kantor</h6>
          <div className="grid grid-flow-col gap-4">
            <HiBuildingOffice size={24} />
            <a>
              Jalan Sidomulyo Tempel Rejo, Kec. Curup Sel., Kabupaten Rejang
              Lebong, Bengkulu 39125
            </a>
          </div>
        </nav>
      </footer>
      {/* <div className="flex-1 text-black">
        <DayPicker defaultMonth={new Date(2025, 10)} />
      </div> */}
      <footer className="py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Cabang Dinas Pendidikan Wilayah II Curup.
        All rights reserved.
      </footer>
    </div>
  );
}
