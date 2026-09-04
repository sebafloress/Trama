import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-5 pt-28 pb-10 md:pt-36 md:pb-16">
      {/* Resplandor índigo detrás del contenido */}
      <div
        aria-hidden
        className="bg-indigo/20 pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-lime mb-4 text-sm font-semibold tracking-widest uppercase">
            Estudio digital
          </p>

          <h1 className="font-display text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Webs para negocios
            <br />
            <span className="text-indigo">de verdad.</span>
          </h1>

          <div className="bg-lime mt-6 h-1.5 w-24 rounded-full" />

          <p className="text-muted mt-6 max-w-md text-lg leading-relaxed">
            Sitios simples, rápidos y pensados para el celular. Sin tecnicismos
            y sin vueltas.
          </p>

          {/* La acción principal va primero: en celular es la que queda arriba. */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="bg-lime text-carbon flex min-h-12 items-center justify-center rounded-full px-7 text-base font-bold transition-transform duration-200 hover:-translate-y-0.5"
            >
              Escribinos
            </a>
            <a
              href="#portfolio"
              className="border-paper/20 hover:border-paper/50 flex min-h-12 items-center justify-center rounded-full border px-7 text-base font-semibold transition-colors"
            >
              Ver portfolio
            </a>
          </div>
        </div>

        {/* En celular el mockup va debajo del texto; en escritorio, al costado.
            Se usa el recorte del navegador, no la pieza de Instagram completa:
            acá queremos mostrar la web del cliente, no una captura de un post. */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
            <Image
              src="/casos/hero-cheburga.webp"
              alt="Sitio web de Che Burga, hamburguesería, hecho por Trama Digital"
              width={920}
              height={545}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 576px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
