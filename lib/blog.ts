// Blog de Space. Articles written by Luis Risso Patrón and first published on spaceventos.com (owner, 2026-11-21).
// Text kept from the originals; only light editing: titles and slugs for search, sentence-case headings, no emojis,
// and "en 2025" made timeless in the affiliate article. Sources and changes: docs/blog-plan.md.
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; label?: string; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string; title: string; description: string; category: string;
  published: string; updated: string; author: string; legacyPath: string; blocks: BlogBlock[];
};

export const blogAuthor = "Luis Risso Patrón · Space Panamá";

export const blogPosts: BlogPost[] = [
  {
    slug: "marketing-de-afiliados-humano-y-digital",
    title: "Marketing de afiliados: cómo conectar lo humano y lo digital para vender",
    description: "Videos cortos, lives de compra y el modelo de costo por venta: cómo el marketing de afiliados pasó de los banners a la confianza y la comunidad.",
    category: "Marketing digital", published: "2025-08-28", updated: "2026-11-21", author: blogAuthor,
    legacyPath: "/marketing-de-afiliados-en-2025-el-poder-de-conectar-desde-lo-humano-y-lo-digital",
    blocks: [
      { type: "h2", text: "¿Por qué el marketing digital ya no es el mismo?" },
      { type: "p", text: "El marketing de afiliados ya no se limita a enlaces ni banners fríos. Hoy refleja cómo las personas vivimos, confiamos y compartimos en el mundo digital." },
      { type: "p", text: "El consumidor actual ya no decide solo por lógica. Se deja llevar por las emociones: un video auténtico en TikTok, la recomendación de un influencer cercano o esa historia que parece hablarle al corazón." },
      { type: "quote", text: "Hoy compramos experiencias, no productos." },
      { type: "h2", text: "Tendencias que están marcando la diferencia" },
      { type: "list", label: "El marketing digital habla un nuevo idioma:", items: ["Videos cortos como puerta de entrada a los productos.", "Redes sociales convertidas en tiendas 24/7.", "El celular como el centro de decisión de compra."] },
      { type: "p", text: "Este cambio hace que el marketing de afiliados ya no sea solo vender, sino inspirar, emocionar y acompañar al usuario en todo su viaje de compra." },
      { type: "h2", text: "El auge de los lives y la compra en tiempo real" },
      { type: "p", text: "Una de las tendencias más poderosas son los lives de shopping en TikTok Shop e Instagram Shopping." },
      { type: "list", label: "En estos eventos en vivo, las marcas:", items: ["Muestran sus productos en acción.", "Responden preguntas al instante.", "Generan confianza de manera natural."] },
      { type: "p", text: "El resultado: más conexión, más interacción y más ventas reales. Este formato no solo entretiene, sino que crea algo invaluable: comunidad." },
      { type: "h2", text: "CPS: un modelo justo y transparente" },
      { type: "p", text: "La transformación también llegó al modelo de inversión. El CPS (costo por venta) está reemplazando al PPC (pago por clic)." },
      { type: "list", items: ["Pagas solo cuando hay una venta real.", "Se mide el resultado, no la intención.", "Es más justo, eficiente y confiable."] },
      { type: "p", text: "Esto hace del marketing de afiliados una de las estrategias más rentables y sostenibles de hoy." },
      { type: "h2", text: "El futuro ya está aquí" },
      { type: "p", text: "El marketing digital de hoy no busca solo visibilidad, sino acciones con impacto real. Las marcas que logren unir lo humano con lo digital serán las que conquisten el mercado." },
      { type: "quote", text: "Porque al final, no compramos un producto. Compramos confianza, emociones e historias que nos inspiran." },
      { type: "p", text: "En Space Panamá sabemos que el futuro no se espera: se construye. Creamos estrategias digitales que no solo venden, sino que conectan de verdad con tu audiencia." },
    ],
  },
  {
    slug: "branding-para-empresas-identidad-de-marca",
    title: "Branding para empresas: 5 claves para una identidad de marca sólida",
    description: "Identidad, propuesta de valor, diseño visual, voz y experiencia: las cinco claves para construir una marca fuerte, coherente y memorable.",
    category: "Marca", published: "2025-05-15", updated: "2025-05-15", author: blogAuthor,
    legacyPath: "/branding-para-empresas-claves-para-construir-una-identidad-de-marca-solida",
    blocks: [
      { type: "p", text: "El branding es mucho más que un logotipo o un eslogan: es la identidad y personalidad de una empresa. Una estrategia de branding bien definida permite diferenciarse de la competencia, generar confianza y fidelizar clientes." },
      { type: "p", text: "En este artículo exploramos las claves para construir una marca fuerte y memorable." },
      { type: "h2", text: "1. Definir la identidad de marca" },
      { type: "p", text: "Antes de diseñar elementos visuales, es fundamental definir la esencia de la marca." },
      { type: "list", label: "Elementos clave:", items: ["Misión: ¿cuál es el propósito de la empresa?", "Visión: ¿qué aspira a lograr a largo plazo?", "Valores: principios que guían la cultura y las decisiones de la marca."] },
      { type: "h2", text: "2. Crear una propuesta de valor" },
      { type: "p", text: "Una marca debe comunicar de manera clara qué la hace única y por qué los clientes deberían elegirla." },
      { type: "list", label: "Consejos:", items: ["Identifica las necesidades del público objetivo.", "Destaca los beneficios exclusivos del producto o servicio.", "Usa un mensaje simple y directo."] },
      { type: "h2", text: "3. Diseño visual y consistencia" },
      { type: "p", text: "Los elementos visuales son esenciales para la identidad de la marca y deben ser coherentes en todos los puntos de contacto con el cliente." },
      { type: "list", label: "Elementos clave:", items: ["Logotipo: representación gráfica de la marca.", "Paleta de colores: influye en la percepción y emociones de los clientes.", "Tipografía: refuerza la personalidad de la marca."] },
      { type: "h2", text: "4. Voz y tono de la marca" },
      { type: "p", text: "La forma en que una marca se comunica con su audiencia define su personalidad y crea conexiones emocionales." },
      { type: "list", label: "Ejemplos:", items: ["Un tono formal transmite profesionalismo y autoridad.", "Un tono amigable genera cercanía y confianza.", "Un tono innovador sugiere creatividad y vanguardia."] },
      { type: "h2", text: "5. Construcción de una experiencia de marca" },
      { type: "p", text: "El branding no solo se trata de diseño y mensajes, sino también de la experiencia que la marca brinda a sus clientes." },
      { type: "list", label: "Acciones clave:", items: ["Ofrecer un excelente servicio al cliente.", "Crear experiencias personalizadas.", "Mantener la coherencia en cada interacción."] },
      { type: "h2", text: "Conclusión" },
      { type: "p", text: "Una estrategia de branding sólida ayuda a construir una identidad fuerte, generar reconocimiento y fomentar la lealtad del cliente. Al definir una propuesta de valor clara, mantener la coherencia visual y comunicativa, y ofrecer experiencias memorables, una marca puede destacarse en el mercado y crecer de manera sostenible." },
      { type: "quote", text: "Invierte en branding y haz que tu empresa deje huella." },
    ],
  },
  {
    slug: "psicologia-del-consumidor-marketing",
    title: "Psicología del consumidor: 6 principios de marketing para vender más",
    description: "Escasez, prueba social, anclaje, reciprocidad, urgencia y color: seis principios de psicología para conectar con el consumidor y aumentar las conversiones.",
    category: "Comunicación", published: "2025-04-30", updated: "2025-04-30", author: blogAuthor,
    legacyPath: "/psicologia-y-marketing-como-entender-la-mente-del-consumidor-para-vender-mas",
    blocks: [
      { type: "p", text: "El marketing no solo se trata de estrategias y herramientas digitales; también implica comprender cómo piensan y toman decisiones los consumidores. La psicología del marketing permite influir en las emociones, percepciones y comportamientos de compra." },
      { type: "p", text: "En este artículo exploramos los principios psicológicos clave que pueden ayudar a aumentar las conversiones y fidelizar clientes." },
      { type: "h2", text: "1. Principio de escasez" },
      { type: "p", text: "Cuando un producto es percibido como limitado, su valor aumenta automáticamente en la mente del consumidor." },
      { type: "list", label: "Aplicaciones:", items: ["Ofertas con tiempo limitado.", "Mensajes como «Últimas unidades disponibles».", "Ediciones especiales o productos exclusivos."] },
      { type: "h2", text: "2. Prueba social" },
      { type: "p", text: "Las personas confían en la opinión de otros al tomar decisiones de compra. Mostrar evidencia social puede aumentar la credibilidad de un producto o servicio." },
      { type: "list", label: "Ejemplos:", items: ["Reseñas y testimonios de clientes.", "Número de ventas o descargas de un producto.", "Influencers o expertos recomendando la marca."] },
      { type: "h2", text: "3. Efecto anclaje" },
      { type: "p", text: "El primer precio que ve un consumidor influye en su percepción sobre el valor del producto." },
      { type: "list", label: "Aplicaciones:", items: ["Mostrar el precio original tachado junto al precio con descuento.", "Comparar productos con diferentes precios para resaltar el más atractivo.", "Ofrecer paquetes de productos con precios escalonados."] },
      { type: "h2", text: "4. Principio de reciprocidad" },
      { type: "p", text: "Las personas se sienten inclinadas a devolver favores. Ofrecer algo de valor gratis puede aumentar la posibilidad de conversión." },
      { type: "list", label: "Estrategias:", items: ["Contenido gratuito (ebooks, webinars, muestras de producto).", "Descuentos o regalos con la primera compra.", "Atención personalizada y experiencia excepcional."] },
      { type: "h2", text: "5. Efecto de la urgencia" },
      { type: "p", text: "Crear una sensación de urgencia motiva a los consumidores a actuar rápidamente en lugar de posponer su decisión." },
      { type: "list", label: "Aplicaciones:", items: ["Contadores de tiempo en promociones.", "Mensajes como «Oferta válida solo por hoy».", "Disponibilidad limitada en la web."] },
      { type: "h2", text: "6. Colores y psicología del consumidor" },
      { type: "p", text: "Los colores influyen en la percepción y las emociones de los compradores." },
      { type: "list", label: "Ejemplos:", items: ["Rojo: estimula la acción y la urgencia.", "Azul: transmite confianza y seguridad.", "Verde: asociado con la tranquilidad y lo ecológico."] },
      { type: "h2", text: "Conclusión" },
      { type: "p", text: "Aplicar principios psicológicos al marketing permite conectar con los consumidores a un nivel más profundo y motivar sus decisiones de compra. Al aprovechar estrategias como la escasez, la prueba social y la urgencia, las marcas pueden aumentar sus conversiones y fortalecer la lealtad del cliente." },
      { type: "quote", text: "Conoce la mente del consumidor y potencia tus ventas." },
    ],
  },
];

export const blogPostsByDate = [...blogPosts].sort((a, b) => b.published.localeCompare(a.published));
export const getBlogPost = (slug: string) => blogPosts.find(post => post.slug === slug);
export const readingMinutes = (post: BlogPost) => Math.max(1, Math.round(post.blocks.map(block => block.type === "list" ? block.items.join(" ") : block.text).join(" ").split(/\s+/).length / 200));
export const formatBlogDate = (iso: string) => new Intl.DateTimeFormat("es-PA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T12:00:00Z`));
