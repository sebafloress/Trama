# Trama Digital — sitio web

Sitio de una sola página en Next.js (App Router) + Tailwind CSS v4. Mobile first, tema oscuro.

## Desarrollo

```bash
npm install
cp .env.example .env.local   # completar RESEND_API_KEY
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura

- `app/` — layout, página principal y la ruta de API del formulario de contacto (`app/api/contacto`)
- `components/` — una sección del sitio por archivo
- `lib/contenido.ts` — todos los textos, precios y datos de contacto editables, en un solo lugar
- `lib/rateLimit.ts` — límite de envíos del formulario de contacto por IP

## Deploy — Netlify

El proyecto usa `@netlify/plugin-nextjs` (configurado en `netlify.toml`) para soportar App Router, Route Handlers y los headers de seguridad definidos en `next.config.ts`.

Variables de entorno a configurar en Netlify (Site settings → Environment variables):

- `RESEND_API_KEY` — clave de la cuenta de Resend
- `RESEND_FROM` — remitente verificado (opcional; sin esto usa `onboarding@resend.dev`)

**Nota:** no usar Vercel — su plan gratuito prohíbe uso comercial.
# Trama
