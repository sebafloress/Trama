import Aparecer from "./Aparecer";
import { FAQ as PREGUNTAS } from "@/lib/contenido";

/**
 * Acordeón con <details> nativo: funciona sin JavaScript y ya viene con el
 * comportamiento de teclado y de lector de pantalla resuelto por el navegador.
 */
export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Aparecer>
          <p className="text-lime mb-3 text-sm font-semibold tracking-widest uppercase">
            Preguntas frecuentes
          </p>
          <h2 className="font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
            Lo que nos preguntan siempre.
          </h2>
        </Aparecer>

        <div className="mt-10 flex flex-col gap-3">
          {PREGUNTAS.map((f, i) => (
            <Aparecer key={f.pregunta} delay={i * 80}>
              <details className="group border-white/10 bg-surface rounded-xl border open:border-white/20">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                  <span>{f.pregunta}</span>
                  <span
                    aria-hidden
                    className="text-lime shrink-0 text-xl transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="text-muted px-5 pb-5 leading-relaxed">
                  {f.respuesta}
                </p>
              </details>
            </Aparecer>
          ))}
        </div>
      </div>
    </section>
  );
}
