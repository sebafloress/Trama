/**
 * Todo el contenido editable del sitio, en un solo lugar.
 * Cambiar un precio, el WhatsApp o una FAQ es tocar este archivo y nada más.
 */

// WhatsApp es el canal secundario: mail e Instagram van primero en Contacto.
// Formato internacional sin espacios ni signos, para que el link de wa.me
// funcione también desde un teléfono español.
export const WHATSAPP = "541168360430";
export const WHATSAPP_MENSAJE = "¡Hola! Quiero una web para mi negocio.";

export const INSTAGRAM_USER = "tramadigital.studio";
export const INSTAGRAM = `https://instagram.com/${INSTAGRAM_USER}`;
export const EMAIL = "tramadigital2026@hotmail.com";
export const SITIO = "https://tramadigital.dev";

export const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  WHATSAPP_MENSAJE,
)}`;

export const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export const SERVICIOS = [
  {
    nombre: "Landing",
    precio: "desde USD 80",
    resumen: "Una página para presentar tu negocio y que te escriban.",
    incluye: [
      "Una página con todas tus secciones",
      "Pensada para el celular",
      "Botón de WhatsApp",
      "Formulario de contacto",
      "Publicada y funcionando",
    ],
    destacada: false,
  },
  {
    nombre: "Corporativa",
    precio: "desde USD 160",
    resumen: "Varias páginas para mostrar todo lo que hacés, con buscador.",
    incluye: [
      "Hasta 5 páginas",
      "Catálogo o menú de productos",
      "Google Maps y horarios",
      "Preparada para aparecer en Google",
      "Botón directo a tu WhatsApp para pedidos",
    ],
    destacada: true,
  },
  {
    nombre: "Mantenimiento",
    precio: "USD 30 / mes",
    resumen: "Para que la web no quede vieja ni se caiga.",
    incluye: [
      "Cambios de textos, fotos y precios",
      "Dominio y hosting al día",
      "Copias de seguridad",
      "Actualizaciones de seguridad",
      "Nos escribís y lo resolvemos",
    ],
    destacada: false,
  },
];

// Textuales del carrusel de confianza (_fuentes-svg/carrusel_confianza_2..4)
export const COMPROMISOS = [
  {
    numero: "1",
    titulo: "Primero lo ves. Después pagás.",
    texto:
      "Te mostramos el diseño de tu web antes de que pongas un peso. Si no te convence, lo ajustamos hasta que te guste.",
  },
  {
    numero: "2",
    titulo: "El precio que te pasamos, es el que pagás.",
    texto:
      "Sin costos escondidos ni extras a mitad de camino. Lo que entra en el presupuesto, entra.",
  },
  {
    numero: "3",
    titulo: "El dominio y la web quedan a tu nombre.",
    texto:
      "Si el día de mañana querés cambiar de proveedor, te llevás todo. No atamos a nadie.",
  },
];

export const CASO = {
  titulo: "Che Burga",
  rubro: "Hamburguesería · Argentina",
  resumen:
    "Tenían un local con identidad fuerte y todo el pedido pasaba por Instagram: mensajes sueltos, menú desactualizado y consultas repetidas todos los días.",
  solucion:
    "Armamos un sitio completo con el menú siempre al día, ubicación y horarios, y un canal directo de pedidos por WhatsApp.",
  capturas: [
    { src: "/casos/cheburga-1.webp", alt: "Portada del sitio de Che Burga con el menú principal" },
    { src: "/casos/cheburga-2.webp", alt: "Sección de menú del sitio de Che Burga" },
    { src: "/casos/cheburga-4.webp", alt: "Sección de ubicación y horarios de Che Burga" },
  ],
};

// ⚠️ PENDIENTE: revisar y ajustar estas respuestas antes de publicar.
export const FAQ = [
  {
    pregunta: "¿Cuánto tarda?",
    respuesta:
      "Una landing suele estar lista en 5 a 7 días desde que nos pasás los textos y las fotos. Una web corporativa, entre 10 y 15 días. El plazo exacto te lo confirmamos con el presupuesto.",
  },
  {
    pregunta: "¿Qué necesito darles?",
    respuesta:
      "Lo que ya tenés: el logo si lo tenés, fotos de tu negocio o tus productos, y una idea de qué querés contar. Del resto nos encargamos nosotros. Si no tenés textos, los escribimos con vos.",
  },
  {
    pregunta: "¿Puedo editarla después?",
    respuesta:
      "Sí. Te dejamos la web preparada para que cambies textos, fotos y precios sin tocar código, y te explicamos cómo. Si preferís no ocuparte, está el plan de mantenimiento.",
  },
  {
    pregunta: "¿Qué pasa con el dominio y el hosting?",
    respuesta:
      "El dominio se compra a tu nombre y queda tuyo: es tuyo aunque mañana trabajes con otro. El hosting para estos sitios es gratuito en la mayoría de los casos, y si hiciera falta uno pago te lo decimos antes.",
  },
];
