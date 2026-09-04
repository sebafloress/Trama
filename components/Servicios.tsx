import Aparecer from "./Aparecer";
import { SERVICIOS } from "@/lib/contenido";

export default function Servicios() {
  return (
    <section id="servicios" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Aparecer>
          <p className="text-lime mb-3 text-sm font-semibold tracking-widest uppercase">
            Servicios
          </p>
          <h2 className="font-display max-w-2xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
            Precios claros, sin sorpresas.
          </h2>
          <p className="text-muted mt-4 max-w-xl text-lg">
            El precio que te pasamos es el que pagás. Lo que entra en el
            presupuesto, entra.
          </p>
        </Aparecer>

        {/* Apiladas en celular, en fila en escritorio */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICIOS.map((s, i) => (
            <Aparecer key={s.nombre} delay={i * 100} className="h-full">
              <article
                className={`flex h-full flex-col rounded-2xl border p-7 transition-transform duration-200 hover:-translate-y-1 ${
                  s.destacada
                    ? "border-indigo bg-indigo/10 shadow-indigo/20 shadow-xl"
                    : "bg-surface border-white/10 hover:border-white/25"
                }`}
              >
                {s.destacada && (
                  <span className="bg-lime text-carbon mb-4 self-start rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase">
                    La más pedida
                  </span>
                )}

                <h3 className="font-display text-2xl font-bold">{s.nombre}</h3>
                <p className="text-lime mt-1.5 font-display text-xl font-bold">
                  {s.precio}
                </p>
                <p className="text-muted mt-3 text-sm leading-relaxed">
                  {s.resumen}
                </p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {s.incluye.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm">
                      <span className="bg-lime mt-2 h-0.5 w-3 shrink-0 rounded-full" />
                      <span className="text-paper/90">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`mt-7 flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors ${
                    s.destacada
                      ? "bg-lime text-carbon"
                      : "border-paper/20 hover:border-paper/50 border"
                  }`}
                >
                  Pedir presupuesto
                </a>
              </article>
            </Aparecer>
          ))}
        </div>

        <Aparecer>
          <p className="text-muted mt-8 text-center text-sm">
            Precios en dólares. Te pasamos el equivalente en tu moneda al
            momento de presupuestar.
          </p>
        </Aparecer>
      </div>
    </section>
  );
}
