import Aparecer from "./Aparecer";

/**
 * Texto tomado de 03-Destacadas/Nosotros/historia_nosotros.png.
 * Es la sección que sostiene el posicionamiento España + Argentina.
 */
export default function Nosotros() {
  return (
    <section id="nosotros" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="border-white/10 bg-surface relative overflow-hidden rounded-3xl border px-7 py-14 md:px-16 md:py-20">
          <Aparecer className="relative max-w-2xl">
            <p className="text-lime mb-3 text-sm font-semibold tracking-widest uppercase">
              Nosotros
            </p>

            <h2 className="font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
              Webs para negocios
              <br />
              <span className="text-indigo">de verdad.</span>
            </h2>

            <div className="bg-lime mt-5 h-1.5 w-20 rounded-full" />

            <p className="text-muted mt-7 text-lg leading-relaxed">
              Somos un estudio digital chico, enfocado en pymes, comercios y
              emprendimientos de España y Argentina.
            </p>
            <p className="text-muted mt-4 text-lg leading-relaxed">
              Armamos sitios simples, rápidos y pensados para el celular. Sin
              tecnicismos y sin vueltas.
            </p>
          </Aparecer>
        </div>
      </div>
    </section>
  );
}
