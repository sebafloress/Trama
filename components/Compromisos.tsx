import Aparecer from "./Aparecer";
import { COMPROMISOS } from "@/lib/contenido";

/** Los tres puntos del carrusel de confianza. Sección corta, mucho aire. */
export default function Compromisos() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Aparecer>
          <p className="text-lime mb-3 text-sm font-semibold tracking-widest uppercase">
            Antes de contratar
          </p>
          <h2 className="font-display max-w-2xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
            ¿Y si no me gusta cómo queda?
          </h2>
          <p className="text-muted mt-4 max-w-xl text-lg">
            Es la duda de siempre. Por eso trabajamos así:
          </p>
        </Aparecer>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {COMPROMISOS.map((c, i) => (
            <Aparecer key={c.numero} delay={i * 120}>
              <div className="flex flex-col gap-4">
                <span className="font-display text-indigo text-5xl font-bold">
                  {c.numero}
                </span>
                <h3 className="font-display text-xl leading-snug font-bold">
                  {c.titulo}
                </h3>
                <p className="text-muted leading-relaxed">{c.texto}</p>
              </div>
            </Aparecer>
          ))}
        </div>
      </div>
    </section>
  );
}
