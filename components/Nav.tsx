"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV } from "@/lib/contenido";

export default function Nav() {
  const [abierto, setAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Con el menú abierto, el fondo no debe scrollear detrás.
  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || abierto
          ? "bg-carbon/90 border-b border-white/10 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#inicio"
          className="-my-1.5 flex min-h-11 items-center py-1.5"
          onClick={() => setAbierto(false)}
        >
          <Image
            src="/marca/logo.png"
            alt="Trama Digital"
            width={435}
            height={215}
            priority
            className="h-8 w-auto"
          />
        </a>

        {/* Escritorio */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-muted hover:text-paper text-sm transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Celular: 44x44 mínimo para el pulgar */}
        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          className="text-paper -mr-2 flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`bg-paper absolute left-0 block h-0.5 w-6 transition-transform duration-300 ${
                abierto ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`bg-paper absolute top-1/2 left-0 block h-0.5 w-6 transition-opacity duration-200 ${
                abierto ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`bg-paper absolute left-0 block h-0.5 w-6 transition-transform duration-300 ${
                abierto ? "top-1/2 -rotate-45" : "top-full"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Panel del celular */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${
          abierto ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-6">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setAbierto(false)}
                className="text-paper hover:text-lime flex min-h-11 items-center border-b border-white/5 text-base transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
