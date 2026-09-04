import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITIO } from "@/lib/contenido";
import "./globals.css";

// next/font descarga las fuentes en build: no hay pedido a Google en runtime
// ni parpadeo al cargar.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: "Trama Digital — Webs para negocios de verdad",
  description:
    "Estudio digital enfocado en pymes, comercios y emprendimientos de España y Argentina. Sitios simples, rápidos y pensados para el celular. Desde USD 80.",
  keywords: [
    "diseño web",
    "páginas web para pymes",
    "web para comercios",
    "desarrollo web Argentina",
    "desarrollo web España",
  ],
  openGraph: {
    title: "Trama Digital — Webs para negocios de verdad",
    description:
      "Sitios simples, rápidos y pensados para el celular. Ves el diseño antes de pagar y el dominio queda a tu nombre.",
    url: SITIO,
    siteName: "Trama Digital",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trama Digital — Webs para negocios de verdad",
    description:
      "Sitios simples, rápidos y pensados para el celular. Desde USD 80.",
  },
};

export const viewport: Viewport = {
  themeColor: "#111318",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-carbon text-paper antialiased`}
      >
        {/* sr-only (clip, no desplazamiento fuera de pantalla): un elemento
            movido con translate fuera del viewport queda fuera del orden de
            tabulación en Chromium, así que el link nunca recibía foco. */}
        <a
          href="#main"
          className="bg-lime text-carbon sr-only z-[100] rounded-full px-5 py-3 font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
