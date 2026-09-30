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
  contact: {
    title: string;
    body: string;
    channels: ContactChannel[];
  };
};

export const siteContent: SiteContent = {
  hero: {
    eyebrow: "Space Panamá · Estudio creativo",
    title: "Diseñamos presencia para marcas que quieren sentirse inevitables.",
    deck:
      "Space convierte estrategia, narrativa y dirección visual en experiencias digitales con pulso editorial: claras, premium y listas para crecer.",
    primaryCta: "Ver vertical slice",
    secondaryCta: "Leer manifiesto",
  },
  manifesto: {
    kicker: "Manifiesto",
    title: "Menos ruido. Más atmósfera. Más Space.",
    body:
      "La nueva web debe presentar a Space como protagonista: una casa creativa que entiende el negocio, edita lo esencial y construye mundos visuales memorables sin perder velocidad.",
    terms: [
      {
        term: "Estrategia con textura",
        definition:
          "Cada sección debe explicar una decisión de marca, no solo decorar una pantalla.",
      },
      {
        term: "Editorial premium",
        definition:
          "Ritmo, contraste, titulares grandes y aire suficiente para que el trabajo respire.",
      },
      {
        term: "Backend preparado",
        definition:
          "Contenido y formularios nacen con adaptadores simples para migrar a Supabase sin reescribir la web.",
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
        "Una escena de trabajo seleccionado para mostrar cómo Space puede convertir una marca gastronómica en una experiencia con apetito visual, memoria local y dirección comercial.",
      signal: "Sabor costero, cámara cercana, tipografía con carácter y un sistema digital listo para campañas.",
      palette: "Limón, tinta, crema y mar profundo",
    },
  ],
  contact: {
    title: "Abramos la siguiente órbita.",
    body:
      "Esta base deja listo el punto de entrada para conectar contenido, leads y casos a una capa persistente cuando el proyecto lo autorice.",
    channels: [
      {
        label: "Email",
        value: "hola@spacepanama.example",
        href: "mailto:hola@spacepanama.example",
      },
      {
        label: "Instagram",
        value: "@spacepanama",
        href: "https://instagram.com/spacepanama",
      },
    ],
  },
};
