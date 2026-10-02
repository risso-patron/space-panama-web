export type ManifestoTerm = {
  term: string;
  definition: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  signal: string;
  palette: string;
  assets: {
    poster: string;
    secondary: string;
    video?: string;
  };
};

export type BrandWork =
  | {
      slug: "sissy";
      title: string;
      eyebrow: string;
      headline: string;
      description: string;
      video: string;
      poster: string;
      campaignImage: string;
    }
  | {
      slug: "psicojazmin";
      title: string;
      eyebrow: string;
      headline: string;
      identity: string;
      notebook: string;
      mugs: string;
    };

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

export type SiteContent = {
  hero: {
    eyebrow: string;
    title: string;
    deck: string;
    primaryCta: string;
    secondaryCta: string;
  };
  manifesto: {
    kicker: string;
    title: string;
    body: string;
    terms: ManifestoTerm[];
  };
  projects: Project[];
  brandWork: BrandWork[];
  contact: {
    title: string;
    body: string;
    channels: ContactChannel[];
  };
};

export const siteContent: SiteContent = {
  hero: {
    eyebrow: "Space Panamá · Estudio creativo",
    title: "Creamos experiencias que hacen crecer marcas.",
    deck:
      "Unimos estrategia, creatividad y dirección digital para convertir ideas en presencia: marcas claras, memorables y listas para moverse.",
    primaryCta: "Ver Don Ceviche",
    secondaryCta: "Leer manifiesto",
  },
  manifesto: {
    kicker: "Manifiesto",
    title: "Del brief al crecimiento: una órbita con intención.",
    body:
      "Space edita el ruido, encuentra el ángulo y construye experiencias que conectan la ambición comercial con una atmósfera visual propia.",
    terms: [
      {
        term: "ESTRATEGIA",
        definition:
          "Leemos el negocio, el público y la oportunidad antes de diseñar cualquier pieza.",
      },
      {
        term: "CREATIVIDAD",
        definition:
          "Transformamos la dirección en ideas con carácter: memorables, útiles y propias de cada marca.",
      },
      {
        term: "EXPERIENCIAS",
        definition:
          "Diseñamos puntos de contacto que se sienten vivos: web, redes, lanzamientos, contenido y campañas.",
      },
      {
        term: "DIGITAL",
        definition:
          "Construimos sistemas listos para publicarse, medirse y evolucionar sin perder el pulso visual.",
      },
      {
        term: "CRECIMIENTO",
        definition:
          "Cada entrega debe abrir una siguiente acción: atención, conversación, venta o comunidad.",
      },
    ],
  },
  projects: [
    {
      slug: "don-ceviche",
      title: "Don Ceviche",
      client: "Don Ceviche",
      category: "Identidad digital · Food brand",
      year: "2026",
      summary:
        "Una muestra gastronómica para enseñar cómo Space puede convertir una marca local en contenido con apetito visual, tono popular y dirección comercial.",
      signal: "Producto en primer plano, color vibrante, memoria costera y piezas listas para alimentar campañas.",
      palette: "Morado Don Ceviche, amarillo limón, tinta marina y crema editorial",
      assets: {
        poster: "/assets/don-ceviche/post-7.png",
        secondary: "/assets/don-ceviche/post-4.png",
        video: "/assets/don-ceviche/post-3.mp4",
      },
    },
  ],
  brandWork: [
    {
      slug: "sissy",
      title: "Sissy Méndez",
      eyebrow: "Contenido digital · Seguros",
      headline: "5 acciones que te darán orden y tranquilidad",
      description:
        "El éxito financiero no es suerte, es orden. No te distraigas, asegúrate de tener estos puntos cubiertos. Un pequeño chequeo hoy evita grandes dolores de cabeza con la aseguradora mañana.",
      video: "/assets/sissy/sissy-5-acciones.mp4",
      poster: "/assets/sissy/sissy-5-acciones-poster.jpg",
      campaignImage: "/assets/sissy/five-actions.webp",
    },
    {
      slug: "psicojazmin",
      title: "PsicoJazmin",
      eyebrow: "Identidad aplicada",
      headline: "Mejor versión",
      identity: "/assets/psicojazmin/identity.webp",
      notebook: "/assets/psicojazmin/notebook.webp",
      mugs: "/assets/psicojazmin/tazas.webp",
    },
  ],
  contact: {
    title: "Abramos la siguiente órbita.",
    body:
      "Esta base deja listo el punto de entrada para conectar contenido, leads y casos a una capa persistente cuando el proyecto lo autorice.",
    channels: [],
  },
};
