"use client";

import { useState } from "react";
import Aparecer from "./Aparecer";
import Link from "next/link";
import { EMAIL, INSTAGRAM, whatsappUrl } from "@/lib/contenido";

type Estado = "listo" | "enviando" | "ok" | "error";

export default function Contacto() {
  const [estado, setEstado] = useState<Estado>("listo");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado("enviando");
    setError("");

    const datos = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      if (!res.ok) {
        const cuerpo = await res.json().catch(() => ({}));
        throw new Error(cuerpo.error ?? "No se pudo enviar el mensaje.");
      }

      setEstado("ok");
      e.currentTarget.reset();
    } catch (err) {
      setEstado("error");
      setError(err instanceof Error ? err.message : "No se pudo enviar.");
    }
  }

  const input =
    "w-full min-h-12 rounded-xl border border-white/10 bg-surface px-4 py-3 text-paper placeholder:text-muted/60 outline-none transition-colors focus:border-indigo";

  return (
    <section id="contacto" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Aparecer>
            <p className="text-lime mb-3 text-sm font-semibold tracking-widest uppercase">
              Contacto
            </p>
            <h2 className="font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
              ¿Tenés un local y todavía no tenés web?
            </h2>
            <p className="text-muted mt-4 text-lg leading-relaxed">
              Contanos qué necesitás y te pasamos un presupuesto sin
              compromiso.
            </p>

            {/* Mail e Instagram son los canales principales; WhatsApp queda
                como opción secundaria, más discreta. */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="bg-lime text-carbon flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-bold transition-transform duration-200 hover:-translate-y-0.5 sm:w-fit sm:px-8"
              >
                {EMAIL}
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="border-paper/20 hover:border-paper/50 flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 font-semibold transition-colors sm:w-fit sm:px-8"
              >
                Escribinos por Instagram
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-paper flex min-h-11 items-center text-sm transition-colors sm:w-fit"
              >
                o por WhatsApp
              </a>
            </div>
          </Aparecer>

          <Aparecer delay={100}>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  maxLength={80}
                  autoComplete="name"
                  className={input}
                  placeholder="Cómo te llamás"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={120}
                  autoComplete="email"
                  className={input}
                  placeholder="para responderte"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  maxLength={2000}
                  className={`${input} resize-y`}
                  placeholder="Contanos qué negocio tenés y qué necesitás"
                />
              </div>

              {/* Honeypot: los bots completan todos los campos; las personas no
                  ven este. No usamos display:none para que el bot lo encuentre. */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="empresa">No completar</label>
                <input id="empresa" name="empresa" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <button
                type="submit"
                disabled={estado === "enviando"}
                className="bg-indigo-strong text-paper mt-1 flex min-h-12 items-center justify-center rounded-full px-8 font-bold transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {estado === "enviando" ? "Enviando…" : "Enviar mensaje"}
              </button>

              <p role="status" aria-live="polite" className="min-h-6 text-sm">
                {estado === "ok" && (
                  <span className="text-lime">
                    ¡Listo! Te respondemos a la brevedad.
                  </span>
                )}
                {estado === "error" && <span className="text-red-400">{error}</span>}
              </p>

              <p className="text-muted -mt-1 text-xs leading-relaxed">
                Al enviar este formulario aceptás nuestra{" "}
                <Link href="/privacidad" className="text-paper underline">
                  Política de Privacidad
                </Link>
                .
              </p>
            </form>
          </Aparecer>
        </div>
      </div>
    </section>
  );
}
