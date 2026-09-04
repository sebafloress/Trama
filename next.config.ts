import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            // 'unsafe-inline' en script-src: Next.js (App Router) hidrata con
            // scripts inline propios — bloquearlos rompe la app entera, no
            // solo a terceros. Sin nonce por request (requeriría middleware),
            // este es el trade-off estándar. Lo que sí sigue bloqueado es
            // cargar JS desde un dominio externo, que es el vector real de
            // XSS por script inyectado. 'unsafe-inline' en style-src: Tailwind
            // y next/font inyectan estilos inline de la misma forma.
            //
            // 'unsafe-eval' solo en desarrollo: React usa eval() para Fast
            // Refresh y reconstruir stack traces en dev — nunca en producción
            // (confirmado con `next build && next start`, sin ese error). Sin
            // esto, el overlay de Next marca "1 Issue" en cada carga en dev.
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV !== "production" ? " 'unsafe-eval'" : ""}`,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
