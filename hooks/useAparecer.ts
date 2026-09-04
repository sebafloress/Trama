"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Avisa cuando el elemento entra en pantalla, para animar su aparición.
 *
 * Anima siempre `opacity` y `transform`: son las dos propiedades que la placa
 * de video puede componer sin rehacer el layout. Animar `top`, `height` o
 * `margin` obliga al navegador a recalcular en cada cuadro y se nota el tirón
 * en celulares baratos.
 */
export function useAparecer<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si el usuario pidió menos movimiento, mostramos sin animar.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          obs.disconnect(); // una sola vez: no queremos que parpadee al subir
        }
      },
      { threshold: 0.15 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

/** Clases de transición para el patrón de aparición. */
export function clasesAparecer(visible: boolean) {
  return `transition-all duration-700 ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;
}
