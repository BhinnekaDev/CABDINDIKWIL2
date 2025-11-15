"use client";
import React from "react";
import Image from "next/image";
import LogoBeranda2 from "@/assets/img/Logo Beranda2.png";
import { useFooter } from "@/hooks/useFooter";
import { HiBuildingOffice, HiPhone } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  const { data } = useFooter();
  if (!data) return;
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
          <h6 className="footer-title">Nomor Telepon</h6>
          <div className="grid grid-flow-col gap-4">
            <HiPhone size={24} />
            <a>{data.no_telp}</a>
          </div>
          <h6 className="footer-title">Email</h6>
          <div className="grid grid-flow-col gap-4">
            <MdEmail size={24} />
            <a>{data.email}</a>
          </div>
          <h6 className="footer-title">Alamat Kantor</h6>
          <div className="grid grid-flow-col gap-4">
            <HiBuildingOffice size={24} />
            <a>{data.alamat}</a>
          </div>
        </nav>
      </footer>
      <footer className="py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Cabang Dinas Pendidikan Wilayah II Curup.
        All rights reserved.
      </footer>
    </div>
  );
}
