"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import LogoBeranda from "@/assets/img/Logo Beranda.png";

import type { MenuItem } from "@/types/navbar";
import { menus as baseMenus } from "@/data/navbar";

const cx = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");

export default function Navbar() {
  const pathname = (usePathname() || "").replace(/\/+$/, "") || "/";

  const baseBtn =
    "btn text-base border-none bg-transparent hover:bg-transparent hover:shadow-none transition-all duration-150";
  const hoverFx =
    "hover:text-[#90735f] hover:scale-[1.04] hover:text-xl hover:font-bold hover:bg-transparent";
  const activeFx = "text-[#90735f] font-bold text-xl uppercase ";
  const menus: MenuItem[] = useMemo(() => baseMenus, []);

  const isMenuActive = (m: MenuItem) => {
    if (m.isActive) return m.isActive(pathname);
    if (m.path) return pathname === m.path;
    if (m.children?.length)
      return m.children.some((c) => pathname.startsWith(c.path));
    return false;
  };
  const isChildActive = (childPath: string) => pathname.startsWith(childPath);

  return (
    <div className="navbar bg-base-100 shadow-md px-4 lg:px-20 py-2 rounded-xl shadow-black/20 relative z-50">
      <div className="flex flex-row items-center justify-center w-full gap-4">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open menu"
            aria-haspopup="menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-56 "
            role="menu"
          >
            {menus.map((m) => {
              const active = isMenuActive(m);
              if (!m.children?.length) {
                return (
                  <li key={m.label} role="none">
                    {m.path ? (
                      <Link
                        href={m.path}
                        role="menuitem"
                        className={cx(active && "text-[#90735f] font-semibold")}
                      >
                        {m.label}
                      </Link>
                    ) : (
                      <span className="opacity-70">{m.label}</span>
                    )}
                  </li>
                );
              }
              return (
                <li key={m.label} role="none">
                  <details open={active}>
                    <summary
                      className={cx(active && "text-[#90735f] font-semibold")}
                    >
                      {m.label}
                    </summary>
                    <ul role="menu">
                      {m.children.map((c) => (
                        <li key={c.label} role="none">
                          <Link
                            href={c.path}
                            role="menuitem"
                            className={cx(
                              isChildActive(c.path) &&
                                "text-[#90735f] font-semibold"
                            )}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              );
            })}
          </ul>
        </div>
        <Link href="/Beranda" className="flex items-center gap-2">
          <Image
            src={LogoBeranda}
            alt="Logo Beranda"
            width={480}
            height={60}
            priority
            sizes="(max-width: 640px) 200px, 300px"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center gap-1">
          {menus.map((m) => {
            const active = isMenuActive(m);

            if (!m.children?.length) {
              return (
                <li key={m.label}>
                  {m.path ? (
                    <Link
                      href={m.path}
                      className={cx(baseBtn, hoverFx, active && activeFx)}
                    >
                      {m.label}
                    </Link>
                  ) : (
                    <span className={cx(baseBtn, "opacity-70 cursor-default")}>
                      {m.label}
                    </span>
                  )}
                </li>
              );
            }

            return (
              <li key={m.label} className="relative">
                <div className="dropdown dropdown-hover">
                  <button
                    tabIndex={0}
                    className={cx(baseBtn, hoverFx, active && activeFx)}
                    aria-haspopup="menu"
                    aria-expanded={active ? "true" : "false"}
                  >
                    {m.label}
                  </button>
                  <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-base-100 rounded-box w-56 p-2 shadow-sm left-1/2 -translate-x-1/2"
                    role="menu"
                  >
                    {m.children.map((c) => (
                      <li key={c.label} role="none">
                        <Link
                          href={c.path}
                          role="menuitem"
                          className={cx(
                            "hover:text-[#90735f]",
                            isChildActive(c.path) &&
                              "text-[#90735f] font-semibold text-lg"
                          )}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-center" />
    </div>
  );
}
