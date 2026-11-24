import assert from "node:assert/strict";
import { publicAssets } from "../lib/public-site.ts";

// Read-only local checks. Never contacts external links or submits contact data.
const base = new URL(process.env.SITE_TEST_URL || "http://127.0.0.1:3218");
assert.ok(["localhost", "127.0.0.1", "[::1]"].includes(base.hostname), "Smoke checks are restricted to loopback.");
const routes = ["/", "/servicios", "/trabajo", "/nosotros", "/contacto", "/blog", "/blog/branding-para-empresas-identidad-de-marca"];
const links = new Set();
const anchors = [];
for (const route of routes) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, route);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  const html = await response.text();
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: one h1`);
  assert.ok(html.includes('id="main-content"'));
  assert.match(html, /<title>[^<]*Space Panamá[^<]*<\/title>/);
  assert.match(html, /name="description"/);
  assert.match(html, /rel="canonical"/);
  assert.doesNotMatch(html, /careers@hub|Azure App|psicojazmin|asumesa|portfolio-v12|sissy-5|<form\b/i);
  assert.doesNotMatch(html, /↗|&#8599;|&#x2197;|Reducir movimiento/i);
  for (const match of html.matchAll(/href="([^" ]*#[^" ]+)"/g)) {
    const url = new URL(match[1], new URL(route, base));
    if (url.origin === base.origin) anchors.push(url);
  }
  for (const match of html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    if (!match[1].startsWith("/_next/")) links.add(match[1]);
  }
  if (route === "/servicios") {
    for (const id of ["marca", "comunicacion", "experiencias", "digital", "sitios-web", "metodo"]) assert.match(html, new RegExp(`id="${id}"`), id);
    assert.match(html, /Entendemos[\s\S]*Mejoramos/);
    assert.match(html, /comparo360-escritorio/);
    assert.match(html, /boda-altar-noche/);
    assert.match(html, /xv-pastel-y-mesa-de-dulces/);
  }
  if (route === "/") {
    assert.deepEqual([...html.matchAll(/data-chapter="([^"]+)"/g)].map(match => match[1]), ["hero", "manifiesto", "selected-work", "cuatro-mundos", "cierre"]);
    assert.doesNotMatch(html, /id="metodo"|showcasePins|prevengo-comunicacion/, "Inicio stays a short trailer: method, Digital showcase and archive live elsewhere");
    assert.doesNotMatch(html, /<video|<canvas/);
    for (const id of ["marca", "comunicacion", "experiencias", "digital"]) assert.match(html, new RegExp(`href="/servicios#${id}"`), id);
    assert.doesNotMatch(html, /id="world-marca"|casamiento-space-luces/, "Cuatro mundos keeps only the orbit");
    assert.match(html, /Don Ceviche/);
    assert.match(html, /EMC Panamá/);
    const hero = html.match(/data-chapter="hero"[\s\S]*?<\/section>/)?.[0];
    assert.ok(hero);
    assert.doesNotMatch(hero, /<img|<button|<input|Reducir movimiento|Pausar|Don Ceviche|EMC|assets\/selected/);
    assert.match(hero, /data-space-orbit/);
    assert.equal((hero.match(/data-growth-ring/g) || []).length, 2); // SSR is the final, static composition.
    assert.equal((hero.match(/data-satellite=/g) || []).length, 4);
    assert.match(hero, /data-earth/);
    assert.match(hero, /data-moon/);
    const globe = hero.match(/<svg[\s\S]*?<\/svg>/)?.[0];
    assert.doesNotMatch(globe, /PANAM[AÁ]|<image|https?:/i);
  }
  if (route === "/trabajo") for (const id of ["don-ceviche", "emc-panama", "prevengo", "heroes-de-panama", "casamiento"]) assert.ok(html.includes(`id="${id}"`));
  console.log(`PASS ${route}: headings, metadata, content, headers`);
}
for (const link of links) assert.equal((await fetch(new URL(link, base))).status, 200, link);
for (const url of anchors) {
  const html = await (await fetch(url)).text();
  const id = decodeURIComponent(url.hash.slice(1));
  assert.ok(html.includes(`id="${id}"`), `${url.pathname}: missing anchor ${id}`);
}
assert.equal((await fetch(new URL("/not-a-page", base))).status, 404);
const sitemap = await (await fetch(new URL("/sitemap.xml", base))).text();
assert.equal((sitemap.match(/<loc>/g) || []).length, 9, "5 pages + /blog + 3 articles");
for (const asset of publicAssets) {
  assert.equal((await fetch(new URL(asset, base))).status, 200, asset);
}
for (const selected of publicAssets.filter(path => path.startsWith("/assets/selected/"))) {
  const optimized = new URL("/_next/image", base);
  optimized.searchParams.set("url", selected);
  optimized.searchParams.set("w", "640");
  optimized.searchParams.set("q", "75");
  assert.equal((await fetch(optimized)).status, 200, `optimized ${selected}`);
}
for (const blocked of ["/assets/psicojazmin/identity.webp", "/assets/portfolio-v12/asu-logo.webp", "/assets/portfolio-v12/emc-social.webp", "/assets/sissy/five-actions.webp", "/assets/don-ceviche/post-7.webp", "/assets/space/hero-orbit.mp4", "/assets/services-refinement/digital-proposal/hostpro-panama-desktop.webp"]) {
  assert.equal((await fetch(new URL(blocked, base))).status, 404, blocked);
}
const blockedImage = new URL("/_next/image", base);
blockedImage.searchParams.set("url", "/assets/psicojazmin/identity.webp");
blockedImage.searchParams.set("w", "640");
blockedImage.searchParams.set("q", "75");
assert.equal((await fetch(blockedImage)).status, 400);
const content = await (await fetch(new URL("/api/content", base))).text();
assert.doesNotMatch(content, /psicojazmin|asumesa|portfolio-v12|sissy|2026|file:|E:/i);
assert.equal((await fetch(new URL("/api/health", base))).status, 200);
const legacy = await fetch(new URL("/identidad-visual", base), { redirect: "manual" });
assert.equal(legacy.status, 308);
assert.ok(legacy.headers.get("location").endsWith("/servicios#marca"));
const legacyPost = await fetch(new URL("/branding-para-empresas-claves-para-construir-una-identidad-de-marca-solida", base), { redirect: "manual" });
assert.equal(legacyPost.status, 308);
assert.ok(legacyPost.headers.get("location").endsWith("/blog/branding-para-empresas-identidad-de-marca"));
const postHtml = await (await fetch(new URL("/blog/psicologia-del-consumidor-marketing", base))).text();
assert.match(postHtml, /application\/ld\+json/);
assert.equal((await fetch(new URL("/blog/no-existe", base))).status, 404);
assert.match(await (await fetch(new URL("/sitemap.xml", base))).text(), /\/blog\/marketing-de-afiliados-humano-y-digital/);
console.log(`PASS ${links.size} local destinations, sitemap, real media, restricted media, public API, 404 and legacy redirect`);
