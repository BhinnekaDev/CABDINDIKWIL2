/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <main className="min-h-screen bg-base-200">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <svg
          className="absolute right-[-15%] top-[-10%] w-[60vw] opacity-20 text-primary"
          viewBox="0 0 600 600"
          fill="currentColor"
        >
          <path d="M300,540c144,0,240-96,240-240S444,60,300,60,60,156,60,300,156,540,300,540Z" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,var(--color-base-200)_1px)] bg-size-[24px_24px] opacity-40" />
      </div>

      <section className="container mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2">
        {/* Kiri: teks */}
        <div className="flex items-center">
          <div className="max-w-xl">
            <span className="badge badge-lg badge-primary mb-4">
              Pemberitahuan
            </span>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Website is{" "}
              <span className="text-primary">under construction</span>
            </h1>
            <p className="mt-4 text-base-content/70">
              Kami sedang menyiapkan sesuatu yang lebih baik. Sementara itu,
              Anda tetap bisa menghubungi kami atau kembali lagi nanti.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">Progress</span>
                  <span className="text-base-content/60">30%</span>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value={30}
                  max={100}
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/Beranda" className="btn btn-primary">
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero rounded-2xl bg-base-100 shadow-xl">
          <div className="hero-content p-6 md:p-10">
            <Illustration />
          </div>
        </div>
      </section>

      <footer className="border-t border-base-300 py-6 text-center text-sm text-base-content/60">
        © {new Date().getFullYear()} — Dibangun oleh Cabang Dinas Pendidikan
        Wilayah II Curup.
      </footer>
    </main>
  );
}
function Illustration() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Laptop */}
      <div className="mockup-window border bg-base-200">
        <div className="flex items-center justify-center bg-base-100 p-6">
          <div className="w-full rounded-xl border border-base-300 bg-base-200 p-4 shadow-inner">
            <div className="grid grid-cols-3 gap-3">
              <div className="h-28 rounded-md bg-base-300" />
              <div className="h-28 rounded-md bg-base-300" />
              <div className="h-28 rounded-md bg-base-300" />
              <div className="col-span-3 h-28 rounded-md bg-base-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2">
        <div className="rounded-xl border border-base-300 bg-base-100 p-1 shadow-lg">
          <div className="h-10 w-full rounded-lg bg-[repeating-linear-gradient(45deg,#111_0_16px,#111_16px_32px,#facc15_32px_48px,#facc15_48px_64px)]" />
        </div>
      </div>
      <div className="absolute -bottom-6 left-10">
        <TrafficCone />
      </div>
      <div className="absolute -right-3 top-6 hidden md:block">
        <Gear />
      </div>
      <WorkerMegaphone className="absolute -bottom-8 right-6 hidden sm:block" />
      <WorkerLaptop className="absolute -top-10 left-1/2 hidden -translate-x-1/2 md:block" />
    </div>
  );
}

function TrafficCone() {
  return (
    <svg width="80" height="80" viewBox="0 0 64 64" className="drop-shadow">
      <path d="M12 54h40l4 6H8l4-6z" className="fill-base-300" />
      <path d="M22 14h20l10 40H12l10-40z" className="fill-base-200" />
      <path
        d="M24 22h16l2 8H22l2-8zM20 38h24l2 8H18l2-8z"
        className="fill-orange-400"
      />
      <path
        d="M28 10h8l2 4h-12l2-4zM26 30h12l2 8H24l2-8z"
        className="fill-white"
      />
      <path d="M22 14h20" className="stroke-base-300" strokeWidth="2" />
    </svg>
  );
}

function Gear() {
  return (
    <svg width="80" height="80" viewBox="0 0 100 100" className="text-warning">
      <path
        d="M60 8l6 4 8-2 4 8-4 6 4 6 8 2-2 9-8 1-3 7 3 7 8 1 2 9-8 2-4 6 4 6-4 8-8-2-6 4-6-4-8 2-4-8 4-6-4-6-8-2 2-9 8-1 3-7-3-7-8-1-2-9 8-2 4-6-4-6 4-8 8 2 6-4 6 4z"
        className="fill-warning/80"
      />
      <circle cx="50" cy="50" r="16" className="fill-base-100" />
    </svg>
  );
}

function WorkerMegaphone({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 140" width="120" height="120" className={className}>
      <circle cx="32" cy="28" r="10" className="fill-warning" />
      <rect
        x="18"
        y="40"
        width="28"
        height="40"
        rx="6"
        className="fill-orange-500"
      />
      <rect
        x="10"
        y="72"
        width="12"
        height="34"
        rx="4"
        className="fill-slate-500"
      />
      <rect
        x="32"
        y="72"
        width="12"
        height="34"
        rx="4"
        className="fill-slate-500"
      />
      <path d="M60 48l36-8v28l-36-8z" className="fill-base-content" />
      <rect x="52" y="52" width="10" height="8" className="fill-base-content" />
      <path d="M104 48l18-6v28l-18-6z" className="fill-primary/70" />
    </svg>
  );
}

function WorkerLaptop({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 120" width="110" height="110" className={className}>
      <circle cx="30" cy="20" r="10" className="fill-warning" />
      <rect
        x="18"
        y="30"
        width="26"
        height="34"
        rx="6"
        className="fill-orange-500"
      />
      <rect
        x="40"
        y="52"
        width="52"
        height="30"
        rx="4"
        className="fill-base-300"
      />
      <rect
        x="30"
        y="84"
        width="72"
        height="8"
        rx="4"
        className="fill-base-300"
      />
      <rect
        x="46"
        y="56"
        width="40"
        height="22"
        rx="3"
        className="fill-base-100"
      />
    </svg>
  );
}
