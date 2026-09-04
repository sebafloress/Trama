import { NextResponse } from "next/server";
import { EMAIL } from "@/lib/contenido";
import { permitir } from "@/lib/rateLimit";

/**
 * Recibe el formulario de contacto y manda el mail.
 *
 * La validación del navegador (required, type=email) se saltea en diez
 * segundos con las herramientas de desarrollo, así que todo se vuelve a
 * validar acá. La clave de Resend vive en .env.local y nunca llega al cliente.
 */

const MAX = { nombre: 80, email: 120, mensaje: 2000 };

function textoValido(v: unknown, max: number): v is string {
  return typeof v === "string" && v.trim().length > 0 && v.length <= max;
}

// Saca saltos de línea y retornos de carro: sin esto, "nombre" o "mensaje"
// podrían usarse para inyectar líneas falsas en el mail que recibe el equipo.
function limpiar(v: string): string {
  return v.replace(/[\r\n]+/g, " ").trim();
}

// x-forwarded-for lo puede mandar cualquier cliente con cualquier valor: sin
// un proxy de confianza que lo reescriba, alcanza con variar ese header en
// cada request para que el rate limit nunca frene nada. Deployado en
// Netlify, el header de confianza es x-nf-client-connection-ip: lo fija
// Netlify en su edge y el cliente no lo puede pisar. x-real-ip queda como
// respaldo por si el hosting cambia; si ninguno está, cae a x-forwarded-for
// como mejor esfuerzo, sabiendo que ahí el límite es evadible.
function ipDelPedido(req: Request): string {
  const confiable =
    req.headers.get("x-nf-client-connection-ip")?.trim() ||
    req.headers.get("x-real-ip")?.trim();
  if (confiable) return confiable;
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "desconocida";
}

export async function POST(req: Request) {
  const ip = ipDelPedido(req);

  if (!permitir(ip)) {
    return NextResponse.json(
      { error: "Demasiados intentos. Probá de nuevo en un rato." },
      { status: 429 },
    );
  }

  let datos: Record<string, unknown>;

  try {
    datos = await req.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const { nombre, email, mensaje, empresa } = datos;

  // Honeypot: si viene completo, es un bot. Respondemos 200 para no darle
  // ninguna señal de que lo detectamos, pero no mandamos nada.
  if (typeof empresa === "string" && empresa.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (!textoValido(nombre, MAX.nombre)) {
    return NextResponse.json({ error: "Falta tu nombre." }, { status: 400 });
  }
  if (!textoValido(email, MAX.email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Revisá el mail." }, { status: 400 });
  }
  if (!textoValido(mensaje, MAX.mensaje)) {
    return NextResponse.json({ error: "Escribinos un mensaje." }, { status: 400 });
  }

  const nombreLimpio = limpiar(nombre);
  const mensajeLimpio = limpiar(mensaje);
  // La regex de arriba ya excluye espacios (incluye \r\n), así que hoy no es
  // explotable — pero limpiar() también acá evita que una futura regex más
  // permisiva reabra el mismo hueco que ya se cerró en nombre/mensaje.
  const emailLimpio = limpiar(email);

  const apiKey = process.env.RESEND_API_KEY;

  // Sin clave configurada no se puede enviar. En desarrollo lo dejamos pasar
  // para poder probar el formulario sin cuenta de Resend.
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contacto] (sin RESEND_API_KEY) →", { nombre: nombreLimpio, email: emailLimpio, mensaje: mensajeLimpio });
      return NextResponse.json({ ok: true });
    }
    console.error("[contacto] Falta RESEND_API_KEY");
    return NextResponse.json(
      { error: "No pudimos enviar el mensaje. Escribinos por WhatsApp." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // El dominio del remitente tiene que estar verificado en Resend.
        from: `Web Trama Digital <${process.env.RESEND_FROM ?? "onboarding@resend.dev"}>`,
        to: [EMAIL],
        reply_to: emailLimpio,
        subject: `Consulta de ${nombreLimpio}`,
        text: `Nombre: ${nombreLimpio}\nMail: ${emailLimpio}\n\n${mensajeLimpio}`,
      }),
    });

    if (!res.ok) {
      console.error("[contacto] Resend respondió", res.status, await res.text());
      throw new Error("Resend error");
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No pudimos enviar el mensaje. Escribinos por WhatsApp." },
      { status: 500 },
    );
  }
}
