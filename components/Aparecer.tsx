"use client";

import { clasesAparecer, useAparecer } from "@/hooks/useAparecer";

/**
 * Envuelve contenido para que aparezca al entrar en pantalla.
 * Evita repetir el par ref/visible en cada sección.
 */
export default function Aparecer({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  /** Retraso en ms, para escalonar elementos hermanos. */
  delay?: number;
}) {
  const { ref, visible } = useAparecer<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${clasesAparecer(visible)} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
