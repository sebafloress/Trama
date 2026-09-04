import Image from "next/image";
import Aparecer from "./Aparecer";
import { CASO } from "@/lib/contenido";

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Aparecer>
          <p className="text-lime mb-3 text-sm font-semibold tracking-widest uppercase">
            Caso real
          </p>
          <h2 className="font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
            {CASO.titulo}
          </h2>
          <p className="text-muted mt-2 text-sm tracking-wide">{CASO.rubro}</p>

          <div className="mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-paper mb-2 text-sm font-bold tracking-widest uppercase">
                El problema
              </h3>
              <p className="text-muted leading-relaxed">{CASO.resumen}</p>
            </div>
            <div>
              <h3 className="text-lime mb-2 text-sm font-bold tracking-widest uppercase">
                Qué hicimos
              </h3>
              <p className="text-muted leading-relaxed">{CASO.solucion}</p>
            </div>
          </div>
        </Aparecer>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {CASO.capturas.map((c, i) => (
            <Aparecer key={c.src} delay={i * 90}>
              <div className="border-white/10 bg-surface overflow-hidden rounded-2xl border transition-transform duration-200 hover:-translate-y-1">
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={1080}
                  height={1080}
                  sizes="(max-width: 640px) 100vw, (max-width: 1152px) 33vw, 384px"
                  className="h-auto w-full"
                />
              </div>
            </Aparecer>
          ))}
        </div>
      </div>
    </section>
  );
}
