// Public, verified content only. Historical concepts live separately in space-content.ts.
// Evidence and publication permissions: docs/site-sources.md.
export const contact = {
  email: "info@spaceventos.com",
  emailHref: "mailto:info@spaceventos.com",
  phone: "+507 6784-7093",
  phoneHref: "tel:+50767847093",
  whatsappHref: "https://wa.me/50767847093",
  // Owner (2026-11-21): official Instagram, missing from the current public site.
  instagram: "@agenciaspacepanama",
  instagramHref: "https://www.instagram.com/agenciaspacepanama/",
} as const;

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/trabajo", label: "Trabajo" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const serviceGroups = [
  {
    id: "marca", number: "01", title: "Marca",
    intro: "Una identidad que se reconoce, del primer contacto al producto.",
    services: [
      { name: "Identidad visual", description: "Logos y piezas de presentación que dan una expresión visual propia a tu marca." },
      { name: "Diseño de packaging", description: "Diseño de empaques para comunicar tu producto y cuidar cómo se presenta." },
    ],
  },
  {
    id: "comunicacion", number: "02", title: "Comunicación",
    intro: "El mensaje, su forma y el lugar donde encuentra a tu público.",
    services: [
      { name: "Estrategia y dirección", description: "Una dirección de marketing digital para orientar la comunicación de tu negocio." },
      { name: "Marketing de contenidos", description: "Contenido útil y relevante para lo que tu marca quiere contar y su público necesita conocer." },
      { name: "Social media", description: "Contenido creativo y gestión de interacciones para la presencia de tu marca en redes." },
      { name: "Diseño de flyers", description: "Piezas gráficas para presentar un mensaje, una propuesta o un evento con claridad." },
    ],
  },
  {
    id: "experiencias", number: "03", title: "Experiencias",
    intro: "Ideas que también toman forma fuera de una pantalla.",
    services: [
      { name: "Organización de eventos", description: "Conversemos sobre el tipo de evento, el lugar y lo que necesitas. El alcance se define para cada proyecto." },
    ],
  },
  {
    id: "digital", number: "04", title: "Digital",
    intro: "Un espacio para presentar lo que hace diferente a tu marca.",
    services: [
      { name: "Desarrollo web", description: "Diseño y desarrollo de sitios web para presentar marcas, productos y servicios con una experiencia de navegación clara." },
    ],
  },
] as const;

export const weddingImages = [
  {
    src: "/assets/space/casamiento-space-luces.webp",
    alt: "Cortina de luces entre paneles de madera en la ambientación de un casamiento realizado por Space.",
    caption: "Luz y estructura", width: 1600, height: 2133,
  },
  {
    src: "/assets/space/casamiento-space-mesa.webp",
    alt: "Mesa con torta y arreglos florales frente a una cortina de luces en el mismo casamiento.",
    caption: "Mesa principal", width: 1600, height: 2133,
  },
] as const;

// Owner authorization covers review and the LOCAL website, not deployment.
// These are observed design pieces, not claims about campaign results or web builds.
export const selectedWork = [
  {
    id: "don-ceviche", client: "Don Ceviche", category: "Comunicación · Diseño para redes",
    title: "Una marca con sabor propio.",
    description: "Ilustración, color y producto en piezas digitales para Don Ceviche. Dos maneras de comunicar desde un mismo universo visual.",
    serviceId: "comunicacion", context: "Selección de piezas de comunicación para redes. Diseño de Space.",
    images: [
      { src: "/assets/selected/don-ceviche-alimentacion.webp", width: 1440, height: 1440, alt: "Pieza de Don Ceviche para el Día Mundial de la Alimentación: un globo ilustrado rodeado de alimentos y la fecha 16 de octubre.", caption: "Día Mundial de la Alimentación · Diseño para redes" },
      { src: "/assets/selected/don-ceviche-guacho.webp", width: 1440, height: 1439, alt: "Pieza de Don Ceviche con un guacho de mariscos sobre fondo violeta y el mensaje Buena comida, una buena pinta y buena compañía.", caption: "Guacho de mariscos · Pieza de producto" },
    ],
  },
  {
    id: "emc-panama", client: "EMC Panamá", category: "Comunicación · Piezas digitales",
    title: "Una presencia que se conecta.",
    description: "Una composición de piezas para redes de EMC Panamá. El producto, el mensaje y su presentación conviven dentro de una misma propuesta gráfica.",
    serviceId: "comunicacion", context: "Selección de piezas de comunicación para redes. Diseño de Space.",
    images: [
      { src: "/assets/selected/emc-redes.webp", width: 1600, height: 1066, alt: "Composición de piezas para redes de EMC Panamá: publicaciones de productos alrededor de un teléfono con su perfil de Instagram.", caption: "EMC Panamá · Composición de piezas para redes" },
    ],
  },
] as const;

// Complete promotional pieces from owner-authorized project folders (S10).
// Local portfolio reproduction only; no software, medical-outcome or photo credits inferred.
export const archiveWork = [
  {
    id: "prevengo", client: "Prevengo", category: "Comunicación · Salud",
    title: "Información de producto en una pieza gráfica.",
    description: "Iconos, marca y mensajes de producto en una pieza promocional de Prevengo. Una muestra de comunicación para el sector salud.",
    serviceId: "comunicacion", context: "Pieza histórica de comunicación de producto.",
    images: [{ src: "/assets/selected/prevengo-comunicacion-historica.webp", width: 1055, height: 1021, alt: "Pieza promocional histórica de Prevengo, con cuatro iconos verdes y mensajes de presentación de su producto.", caption: "Prevengo · Comunicación de producto · Pieza histórica" }],
  },
  {
    id: "heroes-de-panama", client: "Héroes de Panamá", category: "Cultura · Comunicación de eventos",
    title: "Una convocatoria de arte y dibujo.",
    description: "Identidad, cartel y campaña en redes para la convocatoria del concurso de arte y dibujo Héroes de Panamá (2020). Space figura como coorganizador junto a The Academy y Panamá Accesible.",
    serviceId: "experiencias", context: "Convocatoria histórica · Material de difusión.",
    images: [{ src: "/assets/selected/heroes-panama-convocatoria.webp", width: 724, height: 1024, alt: "Cartel histórico del concurso de arte y dibujo Héroes de Panamá, con los logotipos de Space, The Academy y Panamá Accesible como organizadores.", caption: "Héroes de Panamá · Cartel de convocatoria histórica" }],
  },
] as const;

// Identity examples published at https://spaceventos.com/identidad-visual/. The owner states Space created them;
// local review only. Exact copies, hashes and open questions: docs/resource-review/services-refinement-sources.md.
export const brandIdentities = [
  { src: "/assets/services-refinement/identity/mesa-de-trabajo-1.png", source: "https://spaceventos.com/wp-content/uploads/2024/08/Mesa-de-trabajo-1.png", name: "Him Fine Art", alt: "Logotipo manuscrito Him Fine Art con una mariposa.", width: 800, height: 800 },
  { src: "/assets/services-refinement/identity/mesa-de-trabajo-2.png", source: "https://spaceventos.com/wp-content/uploads/2024/08/Mesa-de-trabajo-2.png", name: "Pappagallo Medical", alt: "Logo de Pappagallo Medical con una columna vertebral dentro de un círculo.", width: 800, height: 800 },
  { src: "/assets/services-refinement/identity/mesa-de-trabajo-3.png", source: "https://spaceventos.com/wp-content/uploads/2024/08/Mesa-de-trabajo-3.png", name: "Fénix Refrigeración", alt: "Logo de Fénix Refrigeración con un ave azul.", width: 800, height: 800 },
  { src: "/assets/services-refinement/identity/mesa-de-trabajo-4.png", source: "https://spaceventos.com/wp-content/uploads/2024/08/Mesa-de-trabajo-4.png", name: "SAC Servicios Avanzados de Consultoría", alt: "Logo de SAC, Servicios Avanzados de Consultoría.", width: 800, height: 800 },
  { src: "/assets/services-refinement/identity/mesa-de-trabajo-5.png", source: "https://spaceventos.com/wp-content/uploads/2024/08/Mesa-de-trabajo-5.png", name: "Evolutions Salon", alt: "Emblema circular de Evolutions Salon con un rostro y cabello.", width: 800, height: 800 },
  { src: "/assets/services-refinement/identity/mesa-de-trabajo-6.png", source: "https://spaceventos.com/wp-content/uploads/2024/08/Mesa-de-trabajo-6.png", name: "WeShareCare Panamá", alt: "Logo de WeShareCare Panamá.", width: 800, height: 800 },
  { src: "/assets/services-refinement/identity/mesa-de-trabajo-7.png", source: "https://spaceventos.com/wp-content/uploads/2024/08/Mesa-de-trabajo-7.png", name: "Prevengo", alt: "Logo de Prevengo, verde, con un corazón.", width: 800, height: 800 },
  { src: "/assets/services-refinement/identity/mesa-de-trabajo-8.png", source: "https://spaceventos.com/wp-content/uploads/2024/08/Mesa-de-trabajo-8.png", name: "ARTE en CASA", alt: "Logo de ARTE en CASA con una casa amarilla y lápices.", width: 800, height: 800 },
  { src: "/assets/services-refinement/identity/mesa-de-trabajo-9.png", source: "https://spaceventos.com/wp-content/uploads/2024/08/Mesa-de-trabajo-9.png", name: "VIP Car Wash", alt: "Logo de VIP Car Wash.", width: 800, height: 800 },
  { src: "/assets/services-refinement/identity/mesa-de-trabajo-10.png", source: "https://spaceventos.com/wp-content/uploads/2024/08/Mesa-de-trabajo-10.png", name: "Ferretería Tornihogar", alt: "Logo de Ferretería Tornihogar.", width: 800, height: 800 },
] as const;

export const brandCards = [
  { src: "/assets/services-refinement/identity/segurosconsissy-logo.jpg", source: "https://spaceventos.com/wp-content/uploads/2025/04/Segurosconsissy-Logo.jpg", name: "Seguros con Sissy", alt: "Tarjeta con el logo de Sissy Méndez, Seguros con Sissy.", width: 3000, height: 2000 },
  { src: "/assets/services-refinement/identity/partycheerpty-logo.jpg", source: "https://spaceventos.com/wp-content/uploads/2025/04/Partycheerpty-Logo.jpg", name: "Party Cheer PTY", alt: "Tarjeta con el logo de Party Cheer PTY.", width: 3000, height: 2000 },
  { src: "/assets/services-refinement/identity/emcpanama-logo.jpg", source: "https://spaceventos.com/wp-content/uploads/2025/04/Emcpanama-Logo.jpg", name: "Empoderando · Mente y cuerpo", alt: "Tarjeta con el texto Empoderando, Mente y cuerpo.", width: 3000, height: 2000 },
] as const;

// Web projects made by Space, as published by the agency at https://spaceventos.com/desarrollo-web/ (owner confirmed
// 2026-11-20). Exact copies of Space's own presentation mockups; no results, dates or credits beyond what the owner stated.
// Fénix: Space made the logo AND the website. Rosas Rodríguez & Asociados: Space made the website; the firm's logo is NOT Space's.
// The four employment-portfolio captures in public/assets/services-refinement/digital-proposal/ are NOT Space work and stay private.
export const digitalWork = [
  { id: "fenix-refrigeracion", src: "/assets/digital/fenix-refrigeracion-web.png", page: "https://spaceventos.com/desarrollo-web/", source: "https://spaceventos.com/wp-content/uploads/2025/04/12-1.png", name: "Fénix Refrigeración", sector: "Reparación y mantenimiento de aires acondicionados", scope: "Identidad y sitio web de Space", width: 1920, height: 1080, alt: "Presentación del sitio web de Fénix Refrigeración: portada con el mensaje Reparación y servicios, limpieza y mantenimiento de aires acondicionados, y tres vistas de páginas interiores." },
  { id: "rosas-rodriguez-asociados", src: "/assets/digital/rosas-rodriguez-asociados-web.png", page: "https://spaceventos.com/desarrollo-web/", source: "https://spaceventos.com/wp-content/uploads/2025/04/13-1.png", name: "Rosas Rodríguez & Asociados", sector: "Firma de abogados", scope: "Sitio web de Space · el logo de la firma no es de Space", width: 1920, height: 1080, alt: "Presentación del sitio web de Rosas Rodríguez & Asociados: portada con el nombre de la firma sobre un escritorio con una balanza, y vistas de La firma, Áreas de práctica y Noticias." },
] as const;

// The Fénix logo is the same exact copy already shown in Marca (Mesa de trabajo 3).
export const fenixIdentity = brandIdentities.find((item) => item.name === "Fénix Refrigeración")!;

// Owner (2026-11-20): "podemos colocar web que desarrollo como comparo360.risso-patron.com". Real captures of the live
// site taken on 2026-11-20 (no mockup, no simulated device). Credit wording pending the owner's confirmation.
export const developerWork = {
  id: "comparo360", name: "Comparo360", url: "https://comparo360.risso-patron.com/", captured: "2026-11-20",
  summary: "Comparativas de CRM, WhatsApp y automatización para pequeñas empresas y equipos comerciales.",
  credit: "Desarrollo de Luis Risso Patrón, del equipo de Space",
  images: [
    { src: "/assets/digital/comparo360-escritorio.webp", view: "escritorio", width: 1920, height: 1200, alt: "Captura real de la portada de Comparo360 en escritorio: el titular Menos herramientas. Mejores decisiones., un botón para descubrir qué CRM encaja y una ilustración de pantallas." },
    { src: "/assets/digital/comparo360-movil.webp", view: "móvil", width: 780, height: 1688, alt: "Captura real de la portada de Comparo360 en un móvil: el mismo titular en una columna, con el botón Descubrir qué CRM encaja." },
  ],
} as const;

// Nosotros · Equipo. Empty until the owner provides the team photo and each person's photo, role and short bio.
// The section renders only when there is real content; never fill it with placeholders or stock portraits.
export type TeamMember = { name: string; role: string; bio: string; photo: { src: string; width: number; height: number; alt: string } };
export const teamPhoto = null as { src: string; width: number; height: number; alt: string } | null;
export const team: readonly TeamMember[] = [];

// Pieces Space published on its own service pages (owner, 2026-11-21: "material que Space realizó, úsalos").
// Exact copies; hashes and exclusions in docs/resource-review/services-refinement-sources.md § F. Local review only.
const socialPage = "https://spaceventos.com/social-media/";
export const socialPieces = [
  { id: "don-ceviche-fresco", client: "Don Ceviche", src: "/assets/spaceventos/social/don-ceviche-fresco-y-delicioso.png", source: "https://spaceventos.com/wp-content/uploads/2025/04/1-1.png", page: socialPage, width: 1080, height: 1080, alt: "Publicación de Don Ceviche con el titular Fresco y delicioso y un filete de pescado al escabeche sobre fondo amarillo." },
  { id: "don-ceviche-crujientes", client: "Don Ceviche", src: "/assets/spaceventos/social/don-ceviche-ricos-y-crujientes.png", source: "https://spaceventos.com/wp-content/uploads/2025/04/2-1.png", page: socialPage, width: 1080, height: 1080, alt: "Publicación de Don Ceviche: anillos de calamar con el texto Ricos, deliciosos y crujientes sobre fondo violeta y verde." },
  { id: "don-ceviche-guacho", client: "Don Ceviche", src: "/assets/spaceventos/social/don-ceviche-guacho-lleno-de-sabor.png", source: "https://spaceventos.com/wp-content/uploads/2025/04/3-1.png", page: socialPage, width: 1080, height: 1080, alt: "Publicación de Don Ceviche con un plato de guacho de mariscos y el titular Un guacho lleno de sabor." },
  { id: "don-ceviche-promo", client: "Don Ceviche", src: "/assets/spaceventos/social/don-ceviche-promo-sabado.png", source: "https://spaceventos.com/wp-content/uploads/2025/04/4-1.png", page: socialPage, width: 1080, height: 1080, alt: "Promoción de sábado de Don Ceviche: por la compra de un ceviche de pescado gourmet, una cerveza de regalo." },
  { id: "total-import-led", client: "Total Import", src: "/assets/spaceventos/social/total-import-bombillo-led.png", source: "https://spaceventos.com/wp-content/uploads/2025/04/5-1.png", page: socialPage, width: 1080, height: 1080, alt: "Publicación de Total Import, S.A. que presenta el bombillo LED UFO Crystal Magic Ball con su precio." },
  { id: "pappagallo-audio", client: "Pappagallo Automation", src: "/assets/spaceventos/social/pappagallo-audio-experience.png", source: "https://spaceventos.com/wp-content/uploads/2025/04/6-1.png", page: socialPage, width: 1080, height: 1080, alt: "Publicación Audio Experience de Pappagallo Automation, con un equipo de audio en una sala." },
  { id: "pappagallo-cinema", client: "Pappagallo Automation", src: "/assets/spaceventos/social/pappagallo-cinema-experience.png", source: "https://spaceventos.com/wp-content/uploads/2025/04/8-1.png", page: socialPage, width: 1080, height: 1080, alt: "Publicación Pappagallo Cinema Experience: una sala de cine en casa con butacas rojas y el texto Disfruta del cine en casa." },
  { id: "wecareshare-registro", client: "WeCareShare", src: "/assets/spaceventos/social/wecareshare-registro.png", source: "https://spaceventos.com/wp-content/uploads/2025/04/7-1.png", page: socialPage, width: 1080, height: 1080, alt: "Publicación de WeCareShare con dos jóvenes y el mensaje No esperes más: sé parte del equipo WeCareShare." },
] as const;

export const packagingPieces = [
  { id: "prevengo-caja", client: "Prevengo", src: "/assets/spaceventos/packaging/prevengo-caja.png", source: "https://spaceventos.com/wp-content/uploads/2025/04/11.png", page: "https://spaceventos.com/diseno-de-packaging/", width: 1080, height: 1080, alt: "Diseño de empaque para Prevengo: dos cajas de producto en blanco, celeste y verde con la marca Prevengo." },
] as const;

// Event cases written by the owner (chat, 2026-11-21). Photos: SPACE MARKETING/Casaniento [carpeta de la boda]/FOTOS and the
// owner's own XV Años attachments. Owner (2026-11-21): no guests, couple or family shown or named; setups only. Derivatives + source hashes: docs § G.
export const eventCases = [
  {
    id: "boda-salon-hotel", title: "Boda", date: "Octubre 2024",
    headline: "Una noche de elegancia natural en un salón de hotel.",
    intro: "En octubre de 2024 acompañamos a una pareja en el día de su boda. Diseñamos una ambientación en blanco, verde y beige que transformó el salón del hotel en un espacio romántico, luminoso y lleno de armonía.",
    scope: [
      { title: "Decoración integral del salón", text: "Centros de mesa, mesa principal de los novios, iluminación, arreglos florales y detalles decorativos, pensados para reflejar la elegancia y la esencia de la pareja." },
      { title: "Coordinación y cronograma de la noche", text: "Recepción, entrada de los novios, brindis, primer baile, cena, corte de pastel y fiesta, coordinando con el hotel, la música y los proveedores." },
    ],
    quote: "Porque los novios deben ser los invitados de honor en su propia boda.",
    images: [
      { src: "/assets/casos/boda/boda-ceremonia-terraza.webp", width: 1200, height: 1600, alt: "Sillas blancas alineadas para la ceremonia bajo una carpa en la terraza del hotel, con palmeras al fondo." },
      { src: "/assets/casos/boda/boda-arco-floral.webp", width: 1200, height: 1600, alt: "Arco floral de rosas blancas y follaje verde iluminado frente a una puerta de vidrio." },
      { src: "/assets/casos/boda/boda-altar-noche.webp", width: 1200, height: 1600, alt: "Altar de la ceremonia de noche: estructuras triangulares de madera con flores blancas, velas y luces colgantes." },
      { src: "/assets/casos/boda/boda-mesa-principal-flores.webp", width: 1600, height: 1200, alt: "Arreglo floral alargado de flores blancas, verdes y aves del paraíso para la mesa principal." },
      { src: "/assets/casos/boda/boda-centro-de-mesa.webp", width: 1200, height: 1600, alt: "Centro de mesa con flores blancas, follaje, aves del paraíso y dos velas sobre mantel blanco." },
      { src: "/assets/casos/boda/boda-pastel-velas.webp", width: 1200, height: 1600, alt: "Pastel de bodas blanco con aves del paraíso, entre velas, frente a una cortina de luces." },
      { src: "/assets/space/casamiento-space-luces.webp", width: 1600, height: 2133, alt: "Cortina de luces entre paneles de madera en la ambientación de la boda." },
      { src: "/assets/space/casamiento-space-mesa.webp", width: 1600, height: 2133, alt: "Mesa con torta y arreglos florales frente a una cortina de luces en la misma boda." },
    ],
  },
  {
    id: "xv-anos", title: "XV Años", date: "Noviembre 2023",
    headline: "Una celebración inolvidable.",
    intro: "Organizamos y coordinamos la celebración de unos 15 años, una noche en la que cada detalle fue diseñado para brillar, acorde a la personalidad de la quinceañera.",
    scope: [
      { title: "Decoración integral", text: "Diseño y montaje de la ambientación del salón: paleta de colores, iluminación, centros de mesa y cada rincón, para una atmósfera elegante y festiva." },
      { title: "Mesa de dulces", text: "Una mesa de dulces personalizada como punto central: selección, presentación, decoración y montaje, también pensada como fondo para las fotografías." },
      { title: "Coordinación y cronograma", text: "Recepción de invitados, vals, brindis, corte de pastel, show y cierre, minuto a minuto, para que la familia disfrutara sin preocupaciones." },
    ],
    quote: "En un evento tan importante, la familia debe disfrutar, no preocuparse.",
    images: [
      { src: "/assets/casos/xv/xv-pastel-y-mesa-de-dulces.webp", width: 960, height: 1280, alt: "Pastel de tres pisos en blanco, celeste y azul con un adorno de 15, bajo un arco de flores rosadas, rodeado de dulces." },
      { src: "/assets/casos/xv/xv-rincon-de-fotos.webp", width: 891, height: 1280, alt: "Rincón de fotos con un sillón amarillo, cortina de luces, espejo dorado en forma de sol, rosas y zapatos de la quinceañera." },
    ],
  },
] as const;

// Héroes de Panamá (2020): campaign pieces made by the organizers (Space, The Academy, Panamá Accesible). Source:
// SPACE MARKETING/2025/año 2020-21/HEROES DE PANAMA/{PRENSA, POST PUBLICIDAD}. No participants' drawings, names or results.
export const heroesCampaign = [
  { src: "/assets/casos/heroes/heroes-logo.webp", width: 989, height: 1280, alt: "Identidad del concurso Héroes de Panamá Covid 19: tres personajes con mascarilla sobre la bandera de Panamá." },
  { src: "/assets/casos/heroes/heroes-post-convocatoria.webp", width: 1024, height: 1024, alt: "Publicación de lanzamiento: Concurso Arte y Dibujo, te invitamos a dibujar a tus héroes o heroínas durante la pandemia." },
  { src: "/assets/casos/heroes/heroes-bases.webp", width: 1280, height: 1280, alt: "Publicación Bases del concurso, con edades, categorías y fechas de inscripción, ilustrada con un agente con mascarilla." },
  { src: "/assets/casos/heroes/heroes-como-participar.webp", width: 1280, height: 1280, alt: "Publicación Cómo participar: un concurso gratis, con un trabajador de limpieza ilustrado." },
  { src: "/assets/casos/heroes/heroes-concepto.webp", width: 1280, height: 1280, alt: "Publicación Concepto, que explica el tema del personaje, con un repartidor en moto ilustrado." },
  { src: "/assets/casos/heroes/heroes-premios.webp", width: 1280, height: 1280, alt: "Publicación Premios, con la lista de premios por lugar y un vendedor de frutas ilustrado." },
  { src: "/assets/casos/heroes/heroes-calendario.webp", width: 1280, height: 1280, alt: "Publicación Anuncio de premios y ganadores, con el calendario de inscripción, recepción y evaluación de obras." },
  { src: "/assets/casos/heroes/heroes-organizan.webp", width: 1280, height: 1280, alt: "Publicación de organizadores y patrocinadores: Space, The Academy, Panamá Accesible, Ministerio de Cultura e Inmerso 3D." },
] as const;

export const homeMethod = [
  { title: "Entendemos", description: "Escuchamos el contexto, la marca y lo que necesita comunicar." },
  { title: "Pensamos", description: "Encontramos una dirección y un criterio para tomar decisiones." },
  { title: "Creamos", description: "Damos forma a la idea en palabras, imágenes y experiencias." },
  { title: "Ejecutamos", description: "Llevamos la propuesta a los puntos de contacto acordados." },
  { title: "Medimos", description: "Revisamos lo realizado según los objetivos y el alcance de cada proyecto." },
  { title: "Mejoramos", description: "Tomamos lo aprendido para orientar el siguiente paso." },
] as const;

// Publication allowlist, not authentication. Local client approval does not authorize deployment.
export const publicAssets = [
  "/assets/space/logo.png",
  "/assets/space/social-card.jpg",
  ...weddingImages.map((image) => image.src),
  ...selectedWork.flatMap((project) => project.images.map((image) => image.src)),
  ...archiveWork.flatMap((project) => project.images.map((image) => image.src)),
  ...brandIdentities.map((item) => item.src),
  ...brandCards.map((item) => item.src),
  ...digitalWork.map((item) => item.src),
  ...developerWork.images.map((image) => image.src),
  ...socialPieces.map((item) => item.src),
  ...eventCases.flatMap((event) => event.images.map((image) => image.src)),
  ...heroesCampaign.map((item) => item.src),
  ...packagingPieces.map((item) => item.src),
  ...(teamPhoto ? [teamPhoto.src] : []),
  ...team.map((member) => member.photo.src),
] as const;
