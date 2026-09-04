/**
 * Rate limit en memoria, por IP, ventana deslizante simple.
 *
 * Alcanza para el volumen de un formulario de contacto de una landing.
 * Se resetea si el proceso se reinicia (deploys, cold starts en serverless),
 * lo cual es aceptable acá: el objetivo es frenar un script que dispara
 * cientos de envíos seguidos, no llevar una cuenta exacta a largo plazo.
 *
 * Si el sitio empieza a recibir tráfico serio en varias instancias a la vez,
 * reemplazar por un store compartido (Upstash Redis + @upstash/ratelimit)
 * para que el límite sea global y no por instancia.
 */

const intentos = new Map<string, number[]>();

const VENTANA_MS = 10 * 60 * 1000; // 10 minutos
const MAX_INTENTOS = 5;

export function permitir(ip: string): boolean {
  const ahora = Date.now();
  const previos = (intentos.get(ip) ?? []).filter((t) => ahora - t < VENTANA_MS);

  if (previos.length >= MAX_INTENTOS) {
    intentos.set(ip, previos);
    return false;
  }

  previos.push(ahora);
  intentos.set(ip, previos);

  // Evita que el Map crezca sin límite con IPs que ya vencieron su ventana.
  if (intentos.size > 5000) {
    for (const [key, marcas] of intentos) {
      if (marcas.every((t) => ahora - t >= VENTANA_MS)) intentos.delete(key);
    }
  }

  return true;
}
