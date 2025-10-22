# 🏫 CABDINDIKWIL2

_Website resmi Cabang Dinas Pendidikan Wilayah II Kabupaten Rejang Lebong_

> Dikembangkan untuk mendukung layanan informasi pendidikan oleh **Dinas Pendidikan Kabupaten Rejang Lebong** sejak 2025.

![Platform](https://img.shields.io/badge/platform-Web-blue?style=flat-square)
![Next.js](https://img.shields.io/badge/built%20with-Next.js-000000?logo=nextdotjs&style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwindcss&logoColor=white&style=flat-square)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5.3.7-ff69b4?style=flat-square)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&logoColor=white&style=flat-square)

---

## 🌐 Demo

Coba langsung: **[https://cabdindikwil-2.vercel.app/](https://cabdindikwil-2.vercel.app/)** _(hosted on Vercel)_

---

## 🚀 Fitur

Berikut versi lengkap tabel **Fitur / Modul** untuk README proyek **CABDINDIKWIL2**, sesuai format seperti contoh sebelumnya:

---

## 🚀 Fitur

| Modul                   | Deskripsi                                                                      |
| ----------------------- | ------------------------------------------------------------------------------ |
| **Beranda**             | Halaman utama berisi informasi singkat, banner, dan tautan cepat ke menu lain. |
| **Berita**              | Menampilkan berita terkini, pengumuman, serta kegiatan Cabang Dinas.           |
| **Prakata**             | Sambutan atau kata pengantar dari Kepala Cabang Dinas Pendidikan Wilayah II.   |
| **Seputar Cabdin**      | Informasi umum mengenai sejarah, profil, dan wilayah kerja Cabdin.             |
| **SLB**                 | Data dan profil Sekolah Luar Biasa di wilayah binaan.                          |
| **SMA**                 | Data sekolah menengah atas beserta informasi akademik dan kontak sekolah.      |
| **SMK**                 | Data sekolah menengah kejuruan berikut jurusan dan program keahlian.           |
| **Struktur Organisasi** | Menampilkan bagan struktur organisasi Cabang Dinas Pendidikan Wilayah II.      |
| **Tupoksi**             | Penjelasan tugas pokok dan fungsi masing-masing seksi dan bidang kerja.        |
| **Visi Misi**           | Menjabarkan visi dan misi Cabang Dinas dalam meningkatkan mutu pendidikan.     |

---

## ⚙️ Teknologi

| Layer           | Stack                                                                   |
| --------------- | ----------------------------------------------------------------------- |
| **Frontend**    | Next.js 15 (Turbopack), React 19, TypeScript 5, Tailwind CSS 4, DaisyUI |
| **Styling**     | Tailwind CLI, PostCSS                                                   |
| **Komponen UI** | DaisyUI 5, React Icons                                                  |
| **Utility**     | React-Day-Picker, ESLint 9                                              |
| **CI & Deploy** | GitHub Actions, Vercel Edge                                             |

---

## 🛠️ Instalasi

```bash
# Klon repository
$ git clone https://github.com/BhinnekaDev/CABDINDIKWIL2.git
$ cd CABDINDIKWIL2

# Instal dependensi
$ npm install
```

Jalankan dalam mode pengembangan:

```bash
$ npm run dev
```

Akses melalui [http://localhost:3000](http://localhost:3000).

---

## 📁 Struktur Dasar

```
cabdindikwil2/
├── app/
│   ├── 404/
│   │   └── page.tsx
│   ├── beranda/
│   │   └── page.tsx
│   ├── berita/
│   │   ├── components
│   │   │   └── Berita.tsx
│   │   └── page.tsx
│   ├── prakata/
│   │   ├── components
│   │   │   └── Prakata.tsx
│   │   └── page.tsx
│   ├── seputar-cabdin/
│   │   ├── components
│   │   │   └── SeputarCabdin.tsx
│   │   └── page.tsx
│   ├── slb/
│   │   ├── components
│   │   │   └── SLB.tsx
│   │   └── page.tsx
│   ├── sma/
│   │   ├── components
│   │   │   └── SMA.tsx
│   │   └── page.tsx
│   ├── smk/
│   │   ├── components
│   │   │   └── SMK.tsx
│   │   └── page.tsx
│   ├── struktur-organisasi/
│   │   ├── components
│   │   │   └── StrukturOrganisasi.tsx
│   │   └── page.tsx
│   ├── tupoksi/
│   │   ├── components
│   │   │   └── Tupoksi.tsx
│   │   └── page.tsx
│   └── visi-misi/
│       ├── components
│       │   └── VisiMisi.tsx
│       └── page.tsx
│
├── assets/
│   ├── img/
│   │   ├── Background1.png
│   │   ├── Background2.png
│   │   ├── Background3.png
│   │   ├── Background4.png
│   │   ├── Background5.png
│   │   ├── Background6.png
│   │   ├── Beranda.png
│   │   ├── Kantor Cabdindikwil2.jpeg
│   │   ├── Logo Beranda.png
│   │   ├── Logo Beranda2.png
│   │   └── StrukturOrganisasi.png
│   └── seputar-cabdin/
│
├── components/
│   ├── footer.tsx
│   └── navbar.tsx
│
├── data/
│   ├── berita.ts
│   ├── navbar.ts
│   ├── seputar-cabdin.ts
│   ├── slb-bengkulu.ts
│   ├── sma-bengkulu.ts
│   └── smk-bengkulu.ts
│
├── types/
│   ├── navbar.ts
│   ├── sekolah.ts
│   └── template-content.ts
│
├── public/
│   └── cabdindikwil2_bengkulu.ico
│
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🧰 Script npm

| Perintah            | Fungsi                                 |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Menjalankan mode pengembangan          |
| `npm run build`     | Build produksi dengan Turbopack        |
| `npm run start`     | Menjalankan hasil build                |
| `npm run lint`      | Menjalankan pemeriksaan ESLint         |
| `npm run build:css` | Membangun CSS menggunakan Tailwind CLI |

---

## 🤝 Kontribusi

1. Fork ➜ branch ➜ ubah kode.
2. Gunakan **commit message yang deskriptif**.
3. Jalankan `npm run lint` sebelum membuat PR.
4. Ajukan _Pull Request_.

---

## 📜 Lisensi

MIT © 2025 [Bhinneka Dev](https://github.com/BhinnekaDev)

---

<p align="center">
  <img alt="Cuplikan Website" src="https://github.com/user-attachments/assets/4dc30f5c-50f5-4ab0-a562-26bc90916f5f" width="80%" />
</p>

<p align="center"><sub>Cabang Dinas Pendidikan Wilayah II – Rejang Lebong</sub></p>

---
