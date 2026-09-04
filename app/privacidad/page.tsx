import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { EMAIL } from "@/lib/contenido";

export const metadata: Metadata = {
  title: "Política de Privacidad — Trama Digital",
  description: "Cómo tratamos los datos que nos dejás en el formulario de contacto.",
};

// ⚠️ PENDIENTE: revisar con un abogado antes de publicar. Este texto cubre
// el mínimo del art. 13 RGPD para el único dato que hoy junta el sitio (el
// formulario de contacto) — no reemplaza asesoría legal.
export default function Privacidad() {
  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-3xl px-5 pt-28 pb-20 md:pt-36 md:pb-28">
        <p className="text-lime mb-3 text-sm font-semibold tracking-widest uppercase">
          Legal
        </p>
        <h1 className="font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
          Política de Privacidad
        </h1>
        <p className="text-muted mt-3 text-sm">Última actualización: septiembre de 2026.</p>

        <div className="text-paper/90 mt-10 flex flex-col gap-8 leading-relaxed">
          <section>
            <h2 className="font-display mb-2 text-xl font-bold">Quién es el responsable</h2>
            <p>
              Trama Digital es responsable del tratamiento de los datos que nos
              dejás a través del formulario de contacto de este sitio. Podés
              escribirnos a{" "}
              <a href={`mailto:${EMAIL}`} className="text-lime underline">
                {EMAIL}
              </a>{" "}
              para cualquier consulta sobre tus datos.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-2 text-xl font-bold">Qué datos juntamos</h2>
            <p>
              Solo los que escribís vos mismo en el formulario de contacto:
              nombre, dirección de mail y el mensaje que nos mandás. No usamos
              cookies de seguimiento ni analítica de terceros en este sitio.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-2 text-xl font-bold">Para qué los usamos</h2>
            <p>
              Únicamente para responder tu consulta. No los usamos para
              marketing, no los vendemos ni los compartimos con nadie más que
              el proveedor técnico que nos permite recibir el mensaje (ver
              siguiente punto).
            </p>
          </section>

          <section>
            <h2 className="font-display mb-2 text-xl font-bold">
              Con quién los compartimos
            </h2>
            <p>
              Usamos <strong>Resend</strong> (resend.com) como proveedor
              técnico para el envío del mail que genera el formulario. Resend
              actúa como encargado del tratamiento y puede procesar datos
              fuera de la Unión Europea; solo accede a lo estrictamente
              necesario para entregar ese mail.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-2 text-xl font-bold">
              Cuánto tiempo los guardamos
            </h2>
            <p>
              Conservamos los mensajes de contacto durante 12 meses desde que
              los recibimos, o hasta que la consulta quede resuelta,
              lo que ocurra después. Pasado ese plazo, los eliminamos.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-2 text-xl font-bold">Tus derechos</h2>
            <p>
              Podés pedirnos en cualquier momento acceder a tus datos,
              corregirlos, o que los eliminemos, escribiéndonos a{" "}
              <a href={`mailto:${EMAIL}`} className="text-lime underline">
                {EMAIL}
              </a>
              . Vas a recibir respuesta en un plazo razonable.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-2 text-xl font-bold">Base legal</h2>
            <p>
              Tratamos estos datos en base a tu consentimiento, que nos das
              al enviar el formulario voluntariamente, y a nuestro interés
              legítimo de responder a quien nos contacta.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
