import Image from "next/image";
import Link from "next/link";
import { EMAIL, INSTAGRAM, INSTAGRAM_USER, whatsappUrl } from "@/lib/contenido";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Image
          src="/marca/logo.png"
          alt="Trama Digital"
          width={435}
          height={215}
          className="h-9 w-auto"
        />

        {/* -my-2 py-3: alto de toque de 44px sin separar visualmente los links. */}
        <nav className="-my-2 flex flex-wrap gap-x-6 text-sm">
          <a
            href={`mailto:${EMAIL}`}
            className="text-muted hover:text-paper flex min-h-11 items-center py-3 transition-colors"
          >
            {EMAIL}
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-paper flex min-h-11 items-center py-3 transition-colors"
          >
            @{INSTAGRAM_USER}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-paper flex min-h-11 items-center py-3 transition-colors"
          >
            WhatsApp
          </a>
          <Link
            href="/privacidad"
            className="text-muted hover:text-paper flex min-h-11 items-center py-3 transition-colors"
          >
            Privacidad
          </Link>
        </nav>

        <p className="text-muted/70 text-sm">
          © {new Date().getFullYear()} Trama Digital
        </p>
      </div>
    </footer>
  );
}
