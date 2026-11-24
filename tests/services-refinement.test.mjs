import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { brandIdentities, brandCards, digitalWork, developerWork, fenixIdentity, team, teamPhoto, publicAssets } from "../lib/public-site.ts";
const about = readFileSync("app/nosotros/page.tsx", "utf8");
const work = readFileSync("app/trabajo/page.tsx", "utf8");
const home = readFileSync("components/site/site-home.tsx", "utf8");

const sources = readFileSync("docs/resource-review/services-refinement-sources.md", "utf8");
const css = readFileSync("components/site/site-home.module.css", "utf8");
const sha256 = (path) => createHash("sha256").update(readFileSync(path)).digest("hex");
const row = (needle) => sources.split("\n").find((line) => line.includes(needle)) ?? "";

test("brand identity examples are 10 logos plus 3 card photos, exact copies listed with source URL and SHA-256", () => {
  assert.equal(brandIdentities.length, 10);
  assert.equal(brandCards.length, 3);
  for (const item of [...brandIdentities, ...brandCards]) {
    assert.ok(publicAssets.includes(item.src), item.src);
    assert.ok(existsSync(`public${item.src}`), item.src);
    const line = row(`public${item.src}`);
    assert.ok(line.includes(item.source), `${item.src}: source URL not recorded`);
    assert.ok(line.includes(sha256(`public${item.src}`)), `${item.src}: hash differs from the published original`);
    assert.match(item.source, /^https:\/\/spaceventos\.com\/wp-content\/uploads\//);
    assert.ok(item.alt.length > 15);
  }
});

test("Digital shows only the two Space web projects published at spaceventos.com/desarrollo-web, never the employment portfolio", () => {
  assert.deepEqual(digitalWork.map((item) => item.name), ["Fénix Refrigeración", "Rosas Rodríguez & Asociados"]);
  for (const item of digitalWork) {
    assert.ok(publicAssets.includes(item.src), item.src);
    assert.equal(item.page, "https://spaceventos.com/desarrollo-web/");
    assert.match(item.source, /^https:\/\/spaceventos\.com\/wp-content\/uploads\/2025\/04\//);
    assert.ok(row(`public${item.src}`).includes(sha256(`public${item.src}`)), `${item.src}: hash not recorded`);
    assert.ok(item.alt.length > 40);
  }
  // Built by Luis for another employer: kept on disk as research only, never public.
  assert.ok(!publicAssets.some((asset) => asset.includes("digital-proposal")));
  assert.doesNotMatch(JSON.stringify(digitalWork) + home, /SOMOS Properties|HomePower|HostPro|Provivir|SALDO|drgraphic|risso-patron|Pendiente de confirmar atribución/i);
});

test("Fénix is a full Space case (logo + web); Rosas keeps its own logo uncredited to Space; Comparo360 uses real captures", () => {
  assert.equal(fenixIdentity.src, "/assets/services-refinement/identity/mesa-de-trabajo-3.png");
  assert.match(digitalWork[0].scope, /Identidad y sitio web/);
  assert.match(digitalWork[1].scope, /logo de la firma no es de Space/);
  assert.match(work, /"fenix-refrigeracion"/);
  assert.match(work, /fenixIdentity/);
  assert.equal(developerWork.url, "https://comparo360.risso-patron.com/");
  assert.deepEqual(developerWork.images.map((image) => image.view), ["escritorio", "móvil"]);
  for (const image of developerWork.images) {
    assert.ok(publicAssets.includes(image.src), image.src);
    assert.ok(row(`public${image.src}`).includes(sha256(`public${image.src}`)), `${image.src}: hash not recorded`);
  }
  assert.doesNotMatch(JSON.stringify(developerWork), /bellomonte|drgraphic|SALDO/i, "Bello Monte is not live yet; drgraphic is not Space work");
});

test("Nosotros team section stays hidden until real photos, roles and bios exist", () => {
  assert.equal(teamPhoto, null);
  assert.equal(team.length, 0);
  assert.match(about, /team\.length > 0/);
  for (const member of team) assert.ok(member.name && member.role && member.bio && member.photo.alt.length > 15);
});

test("Cuatro mundos is only the orbit: each world links to its Servicios section, changes colour on hover, no motion or numbering", () => {
  const worlds = home.slice(home.indexOf('data-chapter="cuatro-mundos"'), home.indexOf('data-chapter="cierre"'));
  assert.match(worlds, /aria-label="Los cuatro mundos de Space: ir a Servicios"/);
  assert.match(worlds, /href=\{`\/servicios#\$\{group\.id\}`\}/);
  assert.doesNotMatch(worlds, /worldGrid|WorldMedia|<Image|group\.number|↗/, "No world cards or images left in Inicio");
  const orbitCss = css.slice(css.indexOf(".worldOrbit"), css.indexOf(".worldGrid {"));
  assert.match(orbitCss, /\.worldOrbit a:hover, \.worldOrbit a:focus-visible \{[^}]*background: var\(--editorial-accent\)/);
  assert.doesNotMatch(orbitCss, /animation|@keyframes/);
});

test("Manifiesto shows Estrategia and Creatividad as two lines from the brief to growth, drawn once and never hidden", () => {
  const path = readFileSync("components/site/manifesto-path.tsx", "utf8");
  const pathCss = readFileSync("components/site/manifesto-path.module.css", "utf8");
  assert.match(home, /<ManifestoPath>\s*<ul className=\{styles\.principles\}>/);
  assert.match(path, /data-line="estrategia"/);
  assert.match(path, /data-line="creatividad"/);
  assert.match(path, /useState<Stage>\("static"\)/, "SSR and no-JS show the full drawing");
  assert.match(path, /prefers-reduced-motion: reduce/);
  assert.match(path, /getBoundingClientRect\(\)\.top < window\.innerHeight/, "Content already in view is never hidden");
  assert.doesNotMatch(pathCss, /animation-timeline|infinite/, "No scroll scrubbing or loops");
  for (const [, duration, delay = "0"] of pathCss.matchAll(/transition: [\w-]+ ([\d.]+)s [^;]*?(?:([\d.]+)s)?;/g)) {
    assert.ok(Number(duration) + Number(delay) <= 3, `${duration}s + ${delay}s`);
  }
});

test("Selected Work: three featured cases marked with the worlds they touch; Fénix shows logo and web", () => {
  const work = home.slice(home.indexOf('data-chapter="selected-work"'), home.indexOf('data-chapter="cuatro-mundos"'));
  assert.equal((work.match(/<WorldMarks worlds=/g) || []).length, 3);
  assert.match(work, /<WorldMarks worlds=\{\["marca", "digital"\]\} \/>/);
  assert.match(work, /fenixIdentity\.src/);
  assert.match(work, /digitalWork\[0\]\.src/);
  assert.ok(work.indexOf("heroes-title") < work.indexOf("fenix-home-title") && work.indexOf("fenix-home-title") < work.indexOf("emc-title"));
  assert.doesNotMatch(work, /ceviche-title/, "Don Ceviche left the featured cases (owner, 2026-11-21); it stays in Servicios and Trabajo");
  assert.match(work, /<WorldMarks worlds=\{\["comunicacion", "experiencias"\]\} \/>/);
  assert.match(home, /className=\{styles\.srOnly\}>Mundos:/, "World marks are announced as text");
});

test("Digital demonstrates 'cómo estar' on real Comparo360 captures, without repeating Fénix or adding motion", () => {
  const evidence = readFileSync("components/site/service-evidence.tsx", "utf8");
  const servicesPage = readFileSync("app/servicios/page.tsx", "utf8");
  const digital = evidence.slice(evidence.indexOf("export function DigitalShowcase"), evidence.indexOf("export function MethodSequence"));
  assert.match(servicesPage, /Digital,<br \/><em>en todas las pantallas\.<\/em>/);
  assert.match(servicesPage, /<DigitalShowcase \/>/);
  assert.doesNotMatch(servicesPage + digital, /en movimiento/);
  assert.match(digital, /desktopShot\.src/);
  assert.match(digital, /mobileShot\.src/);
  assert.match(evidence, /title: "Identidad"[\s\S]*title: "Contenido"[\s\S]*title: "Navegación"/);
  assert.match(digital, /digitalNotes\.map\(note => <li key=\{note\.id\}><h3>/, "Notes are real text, not only pins on the image");
  assert.doesNotMatch(digital, /digitalWork\[0\]\.src/, "Fénix is featured in Selected Work, not repeated here");
  assert.match(digital, /href="\/trabajo#fenix-refrigeracion"/);
  const showcaseCss = css.slice(css.indexOf(".digitalShowcase"), css.indexOf(".digitalMore > div {"));
  assert.ok(digital.indexOf("<h3><i aria-hidden") < digital.indexOf('<figcaption id="showcase-caption"'), "Notes live inside the figure, before its caption");
  assert.doesNotMatch(showcaseCss, /animation|transition/);
});

test("Inicio is a short trailer and Servicios carries qué hacemos y cómo (worlds, Digital showcase, Método)", () => {
  const servicesPage = readFileSync("app/servicios/page.tsx", "utf8");
  assert.doesNotMatch(home, /data-chapter="digital"|data-chapter="metodo"|archiveWork\.map|DigitalShowcase|MethodSequence/);
  assert.match(home, /href="\/trabajo">Ver todo el trabajo/);
  assert.match(servicesPage, /<WorldMedia group=\{group\.id\} \/>/);
  assert.match(servicesPage, /<MethodSequence \/>/);
  assert.match(servicesPage, /id="metodo"/);
});

test("Service-page pieces from spaceventos.com are exact copies with recorded hashes; template mockups, AsuMesa and the unlicensed flyer stay out", async () => {
  const { socialPieces, packagingPieces } = await import("../lib/public-site.ts");
  assert.equal(socialPieces.length, 8);
  for (const piece of [...socialPieces, ...packagingPieces]) {
    assert.ok(publicAssets.includes(piece.src), piece.src);
    const line = row(`public${piece.src}`);
    assert.ok(line.includes(piece.source) && line.includes(sha256(`public${piece.src}`)), `${piece.src}: provenance/hash`);
    assert.ok(piece.alt.length > 40);
  }
  const all = JSON.stringify([...socialPieces, ...packagingPieces, ...publicAssets]);
  assert.doesNotMatch(all, /asumesa|2024\/08\/(12|13|15|17|18|20|21|22|23|24)\.webp|2025\/04\/(9|10)-1\.png/i);
  const servicesPage = readFileSync("app/servicios/page.tsx", "utf8");
  assert.match(servicesPage, /<SocialGallery \/>/);
  assert.match(servicesPage, /<PackagingPiece \/>/);
  assert.match(readFileSync("app/trabajo/page.tsx", "utf8"), /"redes-sociales"/);
});

test("Event cases and the Héroes campaign use recorded derivatives, the owner's texts and no participants' data", async () => {
  const { eventCases, heroesCampaign } = await import("../lib/public-site.ts");
  assert.deepEqual(eventCases.map(event => event.title), ["Boda", "XV Años"]);
  // Owner (2026-11-21): no guests, couple or quinceañera's family are shown or named.
  // No couple names: event titles and texts use no "Name & Name" pairs (the specific names are kept out of the repo too).
  for (const event of eventCases) assert.doesNotMatch(`${event.title} ${event.intro}`, /\b[A-ZÁÉÍÓÚ][a-záéíóú]+ (?:&|y) [A-ZÁÉÍÓÚ][a-záéíóú]+\b/, event.id);
  for (const image of [...eventCases.flatMap(event => event.images), ...heroesCampaign]) {
    assert.ok(publicAssets.includes(image.src), image.src);
    if (image.src.startsWith("/assets/casos/")) assert.ok(row(`public${image.src}`).includes(sha256(`public${image.src}`)), `${image.src}: hash not recorded`);
    assert.ok(image.alt.length > 40);
  }
  assert.doesNotMatch(JSON.stringify(heroesCampaign.map(piece => piece.src)), /dibujo|seleccionad|ganador|certificad|jurado|DIBUJOS|SELECCIONADOS|GANADORES|CERTIFICADOS|JURADOS|Primer lugar|Segundo lugar/i);
  assert.equal(heroesCampaign.length, 8);
  const work = readFileSync("app/trabajo/page.tsx", "utf8");
  assert.match(work, /eventCases\.map/);
  assert.match(work, /heroesCampaign\.map/);
  assert.match(work, /"casamiento"/, "Existing /trabajo#casamiento links keep working");
});

test("Backgrounds come from one Space-blue palette (no teal or cream bands) and Instagram is listed", async () => {
  const { contact } = await import("../lib/public-site.ts");
  assert.equal(contact.instagramHref, "https://www.instagram.com/agenciaspacepanama/");
  for (const file of ["components/site/site-shell.tsx", "app/contacto/page.tsx", "components/site/site-home.tsx"]) assert.match(readFileSync(file, "utf8"), /contact\.instagram(Href)?/, file);
  for (const file of ["components/site/site-home.module.css", "components/site/site-pages.module.css", "components/site/manifesto-path.module.css", "components/site/space-orbit.module.css"]) {
    const sheet = readFileSync(file, "utf8");
    assert.doesNotMatch(sheet, /#173641|#222d3d|#2b3a52|#354a67|background: #f5ead8/i, file);
  }
  assert.match(css, /--space-blue: #3b598d/);
});

test("Trabajo is ordered by world with featured cases, a filter that never hides content without JavaScript, and stable anchors", () => {
  const filter = readFileSync("components/site/work-filter.tsx", "utf8");
  assert.match(work, /<WorkFilter worlds=\{groups\} \/>/);
  assert.match(work, /data-work-featured/);
  assert.match(work, /data-work-case data-worlds=/);
  for (const anchor of ["don-ceviche", "emc-panama", "prevengo", "heroes-de-panama", "casamiento", "fenix-refrigeracion", "redes-sociales", "sitios-web"]) assert.match(work, new RegExp(`"${anchor}"`), anchor);
  assert.match(filter, /href=\{`#grupo-\$\{world\.id\}`\}/, "Chips are links, so every group is reachable without JavaScript");
  assert.doesNotMatch(work, /\shidden[=\s>]/, "Nothing is hidden in the server-rendered page");
});

test("Blog: the owner's three articles with SEO metadata, structured data, sitemap entries and redirects from WordPress", async () => {
  const { blogPosts, readingMinutes } = await import("../lib/blog.ts");
  const config = readFileSync("next.config.ts", "utf8");
  const sitemap = readFileSync("app/sitemap.ts", "utf8");
  const postPage = readFileSync("app/blog/[slug]/page.tsx", "utf8");
  assert.equal(blogPosts.length, 3);
  for (const post of blogPosts) {
    assert.match(post.slug, /^[a-z0-9-]+$/);
    assert.ok(post.title.length <= 75, `${post.slug}: title too long for search results`);
    assert.ok(post.description.length >= 110 && post.description.length <= 165, `${post.slug}: description length ${post.description.length}`);
    assert.ok(readingMinutes(post) >= 1);
    assert.ok(config.includes(`source: "${post.legacyPath}", destination: "/blog/${post.slug}", permanent: true`), post.legacyPath);
    assert.doesNotMatch(JSON.stringify(post.blocks), /[\u{1F300}-\u{1FAFF}\u2705]/u, "No emojis in the article body");
  }
  assert.match(sitemap, /blogPosts\.map/);
  assert.match(postPage, /"@type": "BlogPosting"/);
  assert.match(postPage, /dynamicParams = false/);
});

test("Inner pages share an illustrated header; blog covers are original vector art (no stock photos)", () => {
  const visuals = readFileSync("components/site/hero-visuals.tsx", "utf8");
  assert.match(readFileSync("app/nosotros/page.tsx", "utf8"), /visual=\{<AboutHeroVisual \/>\}/);
  assert.match(readFileSync("app/contacto/page.tsx", "utf8"), /visual=\{<ContactHeroVisual \/>\}/);
  assert.match(work, /visual=\{<WorkHeroVisual \/>\}/);
  assert.match(readFileSync("app/blog/page.tsx", "utf8"), /<BlogCover slug=\{post\.slug\} \/>/);
  assert.match(readFileSync("app/blog/[slug]/page.tsx", "utf8"), /<BlogCover slug=\{post\.slug\} label=/);
  const cover = visuals.slice(visuals.indexOf("export function BlogCover"), visuals.indexOf("export function BlogHeroVisual"));
  assert.doesNotMatch(cover, /<image|next\/image|https?:\/\/(?!www\.w3)/, "Covers are drawn, not photos");
});

test("styles: brand frame is no longer a white rectangle, Don Ceviche has a backdrop and mobile event photos scroll-snap", () => {
  assert.doesNotMatch(css.match(/\.worldBrand[^{]*\{[^}]*\}/)?.[0] ?? "", /#fff\b/i);
  assert.match(css, /\.worldFrame \.worldBackdrop\b/, "backdrop needs frame-level specificity to beat .page img");
  assert.match(css, /\.worldFrame \.worldPiece\b/);
  const mobile = css.slice(css.indexOf("@media (max-width: 680px)"));
  assert.match(mobile, /\.worldEvent[^{]*\{[^}]*\}/);
  assert.match(mobile, /scroll-snap-type/);
});
