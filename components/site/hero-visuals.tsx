import Image from "next/image";
import { contact, digitalWork, selectedWork, archiveWork } from "@/lib/public-site";
import styles from "./hero-visuals.module.css";

// Page-specific header illustrations (owner, 2026-11-21: "mejora el diseño de los hero"). Original vector art or real
// Space pieces only; no stock imagery. Each keeps the orbit language of Inicio, with light and depth.

const Defs = () => (
  <defs>
    <radialGradient id="hv-core" cx="32%" cy="26%" r="80%"><stop stopColor="#c9d9f2" /><stop offset=".2" stopColor="#6f8fc4" /><stop offset=".55" stopColor="#3b598d" /><stop offset="1" stopColor="#1b2a46" /></radialGradient>
    <radialGradient id="hv-gold" cx="35%" cy="30%" r="70%"><stop stopColor="#fff3d6" /><stop offset=".45" stopColor="#e0bf8b" /><stop offset="1" stopColor="#9c7a45" /></radialGradient>
    <radialGradient id="hv-cool" cx="35%" cy="30%" r="70%"><stop stopColor="#ffffff" /><stop offset=".5" stopColor="#c4cfdf" /><stop offset="1" stopColor="#6f82a3" /></radialGradient>
    <radialGradient id="hv-plane" cx="50%" cy="50%" r="50%"><stop stopColor="#3b598d" stopOpacity=".14" /><stop offset="1" stopColor="#3b598d" stopOpacity="0" /></radialGradient>
    <filter id="hv-soft"><feGaussianBlur stdDeviation="6" /></filter>
  </defs>
);

// Orbit with a central sphere and labelled satellites (labels in HTML so they stay crisp and, when given, clickable).
function Orbit({ core, points }: Readonly<{ core: string; points: readonly { label: string; href?: string; x: number; y: number; gold?: boolean }[] }>) {
  return (
    <div className={styles.orbit}>
      <svg viewBox="0 0 440 300" aria-hidden="true" focusable="false">
        <Defs />
        <ellipse cx="220" cy="160" rx="210" ry="96" fill="url(#hv-plane)" />
        <path d="M10 160 A210 86 0 0 1 430 160" fill="none" stroke="#3b598d" strokeOpacity=".25" strokeWidth="1.2" />
        <path d="M10 160 A210 86 0 0 0 430 160" fill="none" stroke="#3b598d" strokeOpacity=".6" strokeWidth="2.4" />
        <ellipse cx="220" cy="160" rx="150" ry="58" fill="none" stroke="#e0bf8b" strokeOpacity=".55" strokeWidth="1.2" strokeDasharray="2 7" />
        <ellipse cx="220" cy="214" rx="46" ry="9" fill="#17233b" fillOpacity=".18" filter="url(#hv-soft)" />
        <circle cx="220" cy="160" r="46" fill="url(#hv-core)" />
        <ellipse cx="204" cy="140" rx="16" ry="10" fill="#ffffff" fillOpacity=".25" />
        {points.map(point => <circle key={point.label} cx={point.x} cy={point.y} r="8" fill={point.gold ? "url(#hv-gold)" : "url(#hv-cool)"} />)}
      </svg>
      <span className={styles.core} aria-hidden="true">{core}</span>
      <ul>
        {points.map(point => <li key={point.label} style={{ left: `${(point.x / 440) * 100}%`, top: `${((point.y - 24) / 300) * 100}%` }}>
          {point.href ? <a href={point.href}>{point.label}</a> : <span>{point.label}</span>}
        </li>)}
      </ul>
    </div>
  );
}

// Points on the ellipse cx 220, cy 160, rx 210, ry 86 (left, upper-left, upper-right, right).
const ring = [{ x: 18, y: 178 }, { x: 108, y: 94 }, { x: 332, y: 94 }, { x: 422, y: 178 }] as const;

export function WorkHeroVisual() {
  const heroes = archiveWork.find(project => project.id === "heroes-de-panama")!;
  const pieces = [heroes.images[0], digitalWork[0], selectedWork[1].images[0]];
  return (
    <div className={styles.collage} aria-hidden="true">
      {pieces.map((image, index) => <figure key={image.src} data-slot={index}><Image src={image.src} alt="" width={image.width} height={image.height} sizes="(max-width: 860px) 40vw, 18vw" preload={index === 0} /></figure>)}
      <span className={styles.collageGlow} />
    </div>
  );
}

export function AboutHeroVisual() {
  // From Space's own statement: "con amor por las personas, los lugares, la cultura y la tecnología".
  const words = ["Personas", "Lugares", "Cultura", "Tecnología"];
  return <div aria-hidden="true"><Orbit core="Space" points={words.map((label, index) => ({ label, ...ring[index], gold: index % 2 === 0 }))} /></div>;
}

export function ContactHeroVisual() {
  const channels = [
    { label: "Correo", href: contact.emailHref },
    { label: "WhatsApp", href: contact.whatsappHref },
    { label: "Instagram", href: contact.instagramHref },
    { label: "Teléfono", href: contact.phoneHref },
  ];
  return (
    <nav aria-label="Canales de contacto">
      <Orbit core="Hablemos" points={channels.map((channel, index) => ({ ...channel, ...ring[index], gold: index % 2 === 1 }))} />
    </nav>
  );
}

// Original covers for the blog (no stock photos): one abstract motif per topic, in the Space palette.
export function BlogCover({ slug, label }: Readonly<{ slug: string; label?: string }>) {
  return (
    <svg className={styles.cover} viewBox="0 0 640 400" role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} focusable="false">
      <Defs />
      <rect width="640" height="400" fill="#1b2a46" />
      <rect width="640" height="400" fill="url(#hv-plane)" />
      <circle cx="560" cy="-40" r="260" fill="#3b598d" fillOpacity=".35" />
      {slug.startsWith("marketing-de-afiliados") && <g>
        {/* A network: people and screens linked by lines, converging on one point. */}
        <g stroke="#8ea6d1" strokeOpacity=".6" strokeWidth="2" fill="none">
          <path d="M120 120 L320 210 L520 110 M110 300 L320 210 L530 300 M320 60 L320 210 L320 350" />
        </g>
        {[[120, 120], [520, 110], [110, 300], [530, 300], [320, 60], [320, 350]].map(([x, y], index) => <circle key={index} cx={x} cy={y} r={index % 2 ? 14 : 18} fill={index % 2 ? "url(#hv-cool)" : "url(#hv-gold)"} />)}
        <circle cx="320" cy="210" r="44" fill="url(#hv-core)" />
      </g>}
      {slug.startsWith("branding") && <g>
        {/* Identity as concentric layers: essence, value, look, voice, experience. */}
        {[150, 122, 94, 66, 38].map((r, index) => <circle key={r} cx="320" cy="210" r={r} fill="none" stroke={index % 2 ? "#e0bf8b" : "#8ea6d1"} strokeOpacity={.35 + index * .12} strokeWidth={index === 4 ? 4 : 2} />)}
        <circle cx="320" cy="210" r="28" fill="url(#hv-gold)" />
        <g fill="url(#hv-cool)"><circle cx="470" cy="210" r="9" /><circle cx="320" cy="88" r="9" /><circle cx="226" cy="306" r="9" /></g>
      </g>}
      {slug.startsWith("psicologia") && <g>
        {/* Decision ripples: a choice spreading outward, with one highlighted path. */}
        {[40, 80, 120, 160, 200].map((r, index) => <ellipse key={r} cx="250" cy="220" rx={r * 1.25} ry={r * .7} fill="none" stroke="#8ea6d1" strokeOpacity={.7 - index * .12} strokeWidth="2" />)}
        <path d="M250 220 C330 190 400 160 520 120" stroke="#e0bf8b" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="250" cy="220" r="26" fill="url(#hv-core)" />
        <circle cx="520" cy="120" r="20" fill="url(#hv-gold)" />
      </g>}
    </svg>
  );
}

export function BlogHeroVisual({ posts }: Readonly<{ posts: readonly { slug: string; category: string; title: string }[] }>) {
  return (
    <div className={styles.stack} aria-hidden="true">
      {posts.slice(0, 3).map((post, index) => <div key={post.slug} className={styles.stackCard} data-slot={index}>
        <BlogCover slug={post.slug} />
        <span>{post.category}</span>
      </div>)}
    </div>
  );
}

