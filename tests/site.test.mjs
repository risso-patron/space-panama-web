import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { contact, navigation, selectedWork, archiveWork, homeMethod, serviceGroups, weddingImages, publicAssets } from "../lib/public-site.ts";
import { getSiteUrl } from "../lib/site-url.ts";
import { POST } from "../app/api/contact/route.ts";

const originalEnvironment = { ...process.env };

test("canonical origin normalizes paths and rejects invalid origins and credentials", () => {
  try {
    process.env.NODE_ENV = "production";
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
    for (const value of ["not a URL", "javascript:alert(1)", "http://localhost:3000", "https://user:password@example.com"]) {
      process.env.NEXT_PUBLIC_SITE_URL = value;
      assert.equal(getSiteUrl().origin, "https://spaceventos.com");
    }
    process.env.NEXT_PUBLIC_SITE_URL = "https://spaceventos.com/path?query=1";
    assert.equal(getSiteUrl().href, "https://spaceventos.com/");
    process.env.NODE_ENV = "development";
    process.env.NEXT_PUBLIC_SITE_URL = "http://127.0.0.1:3218/path";
    assert.equal(getSiteUrl().href, "http://127.0.0.1:3218/");
    delete process.env.NEXT_PUBLIC_SITE_URL;
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "approved.example.com";
    assert.equal(getSiteUrl().origin, "https://approved.example.com");
  } finally {
    for (const key of ["NODE_ENV", "NEXT_PUBLIC_SITE_URL", "VERCEL_PROJECT_PRODUCTION_URL"]) {
      if (originalEnvironment[key] === undefined) delete process.env[key];
      else process.env[key] = originalEnvironment[key];
    }
  }
});

test("every navigation route and public asset exists locally", () => {
  for (const item of navigation) assert.ok(existsSync(`app${item.href === "/" ? "" : item.href}/page.tsx`), item.href);
  assert.equal(new Set(navigation.map((item) => item.href)).size, 6);
  for (const asset of publicAssets) assert.ok(existsSync(`public${asset}`), asset);
  assert.equal(weddingImages.length, 2);
  assert.equal(contact.emailHref, `mailto:${contact.email}`);
  assert.equal(contact.phoneHref, "tel:+50767847093");
  assert.equal(contact.whatsappHref, "https://wa.me/50767847093");
});

test("public content excludes restricted clients, template copy and invented metrics", () => {
  const content = JSON.stringify({ serviceGroups, selectedWork, archiveWork, weddingImages, publicAssets });
  assert.doesNotMatch(content, /psicojazmin|asumesa|portfolio-v12|assets\/sissy|careers@hub|Azure|2026|testimonio|E:\//i);
  // The only owner-authorized "Sissy" asset is the Seguros con Sissy identity card; the historical campaign stays excluded.
  assert.deepEqual(publicAssets.filter((asset) => /sissy/i.test(asset)), ["/assets/services-refinement/identity/segurosconsissy-logo.jpg"]);
  assert.ok(!publicAssets.some((asset) => asset.startsWith("/assets/sissy/")));
  assert.deepEqual(selectedWork.map(project => project.client), ["Don Ceviche", "EMC Panamá"]);
  assert.deepEqual(homeMethod.map(step => step.title), ["Entendemos", "Pensamos", "Creamos", "Ejecutamos", "Medimos", "Mejoramos"]);
  assert.equal(serviceGroups.flatMap((group) => group.services).length, 8);
  for (const image of weddingImages) assert.ok(image.alt.length > 30);
});

test("asset inventory records exact local byte sizes and social-card dimensions", () => {
  const inventory = JSON.parse(readFileSync("docs/asset-inventory.json", "utf8"));
  for (const item of inventory) assert.equal(readFileSync(item.path).byteLength, item.bytes, item.path);
  const social = inventory.find((item) => item.path.endsWith("social-card.jpg"));
  assert.equal(social.width, 1200);
  assert.equal(social.height, 630);
});

test("visual resource selection records provenance, local-only rights and intact repository originals", async () => {
  const { createHash } = await import("node:crypto");
  const inventory = JSON.parse(readFileSync("docs/visual-resource-inventory.json", "utf8"));
  assert.equal(inventory.deploymentAuthorized, false);
  assert.equal(inventory.internalDocumentsOpened, 0);
  for (const item of inventory.items.filter(item => item.selected)) {
    assert.ok(item.originalPath && item.name && item.format && item.width && item.height && item.project && item.service && item.proposedUse);
    assert.ok(["local-authorized", "brand-existing"].includes(item.rights));
    assert.ok(!item.originalPath.startsWith("E:"), "No external asset has been approved/selected implicitly");
    assert.equal(createHash("sha256").update(readFileSync(item.originalPath)).digest("hex"), item.sha256, item.originalPath);
    if (item.derivative) {
      assert.ok(item.derivative.bytes < item.bytes);
      assert.equal(readFileSync(item.destination).byteLength, item.derivative.bytes);
      assert.ok(publicAssets.includes(item.destination.replace(/^public/, "")));
    }
  }
  for (const asset of selectedWork.flatMap(project => project.images)) {
    assert.ok(asset.alt.length > 40);
    assert.ok(inventory.items.some(item => item.selected && item.destination === `public${asset.src}`));
  }
});

test("Space Hero illustration is self-contained, shows the growing orbit and keeps static fallbacks", () => {
  const component = readFileSync("components/site/space-orbit.tsx", "utf8");
  const css = readFileSync("components/site/space-orbit.module.css", "utf8");
  const svg = component.match(/<svg[\s\S]*?<\/svg>/)?.[0];
  assert.ok(svg);
  assert.doesNotMatch(svg, /PANAM[AÁ]|<image|https?:|assets\//i);
  assert.doesNotMatch(component, /next\/image|three|gsap|<canvas|<video|"use client"/);
  assert.match(component, /data-orbit-fallback/);
  assert.match(component, /data-orbit-track/);
  assert.match(component, /scale\(1\.35\)/);
  assert.equal((component.match(/data-growth-ring/g) || []).length, 2, "Two growth rings");
  assert.match(component, /data-satellite=\{group\.id\}/, "The four real worlds orbit Space");
  assert.ok(Buffer.byteLength(component + css) < 25000, "Keep the vector scene lightweight");
  const home = readFileSync("components/site/site-home.tsx", "utf8");
  assert.equal((home.match(/data-hero-line/g) || []).length, 3, "Three deliberate title lines");
});

test("Hero motion is one short entrance gated by the system preference, with no loop and no controls", () => {
  const css = readFileSync("components/site/space-orbit.module.css", "utf8");
  assert.doesNotMatch(css, /infinite/);
  const gated = css.slice(css.indexOf("@media (prefers-reduced-motion: no-preference)"));
  const outside = css.slice(0, css.indexOf("@media (prefers-reduced-motion: no-preference)"));
  assert.doesNotMatch(outside, /animation:/, "Animations only apply when motion is allowed");
  // Every entrance ends before 3 s (duration + delay); satellite/label delays come from the component (max index 3).
  for (const [, duration, delay = "0"] of gated.matchAll(/animation: \w+ ([\d.]+)s [^;]*?(?:([\d.]+)s )?both/g)) {
    assert.ok(Number(duration) + Number(delay) <= 3, `${duration}s + ${delay}s`);
  }
  assert.ok(1.35 + 3 * .22 + .5 <= 3 && 1.15 + 3 * .22 + .55 <= 3, "Staggered satellites and labels also finish before 3 s");
  for (const file of ["components/site/site-shell.tsx", "components/site/space-orbit.tsx", "components/site/site-navigation.tsx"]) {
    assert.doesNotMatch(readFileSync(file, "utf8"), /<button|Animar la Tierra|Detener animación|Pausar|Reanudar|Reducir movimiento/, file);
  }
});

test("Home keeps process order but removes production labels and decorative numbering", () => {
  const home = readFileSync("components/site/site-home.tsx", "utf8");
  const orbit = readFileSync("components/site/space-orbit.tsx", "utf8");
  assert.doesNotMatch(home, /01 \/ Apertura|La idea encuentra su espacio|Selected Work ·|group\.number/);
  assert.match(home, /<ul className=\{styles\.principles\}>/);
  const evidence = readFileSync("components/site/service-evidence.tsx", "utf8");
  assert.equal(((home + evidence).match(/styles\.index/g) || []).length, 1, "Only the real method uses numbered markers");
  assert.match(readFileSync("components/site/service-evidence.tsx", "utf8"), /<ol className=\{styles\.methodSequence\}>/);
  assert.doesNotMatch(orbit, /Ciclo de|Escena estática|Pausar órbita|Reanudar órbita/);
  assert.doesNotMatch(orbit, /<button|Pausar animación|Reanudar animación/);
  const services = readFileSync("app/servicios/page.tsx", "utf8");
  const work = readFileSync("app/trabajo/page.tsx", "utf8");
  assert.doesNotMatch(services, /groupNumber|group\.number/);
  assert.doesNotMatch(work, /index \+ 1|03 \/ Experiencias/);
});

test("live pages remove diagonal arrows and reserve image-backed evidence for known work", () => {
  for (const file of ["components/site/site-shell.tsx", "components/site/site-home.tsx", "components/site/site-page.tsx", "app/servicios/page.tsx", "app/trabajo/page.tsx", "app/nosotros/page.tsx", "app/contacto/page.tsx"]) {
    assert.doesNotMatch(readFileSync(file, "utf8"), /↗|&#8599;|&#x2197;/i, file);
  }
  assert.doesNotMatch(readFileSync("components/site/site-navigation.tsx", "utf8"), /SiteMotionControl|Reducir movimiento/);
  const home = readFileSync("components/site/site-home.tsx", "utf8");
  const homeAndEvidence = home + readFileSync("components/site/service-evidence.tsx", "utf8");
  assert.match(home, /styles\.worldOrbit/);
  assert.match(homeAndEvidence, /brandIdentities\.map/);
  assert.match(homeAndEvidence, /ceviche\.images\[1\]/);
  assert.match(homeAndEvidence, /eventPhotos\.map/);
  assert.doesNotMatch(home, /fernando|pappagallo|Screenshot|Space-Web/i, "Research candidates are not delivered web cases");
  assert.doesNotMatch(readFileSync("components/site/site-shell.tsx", "utf8"), /SiteMotionControl|MotionQuickStop/);
});

test("archive portfolio selections have explicit provenance and exact local derivatives", async () => {
  const { createHash } = await import("node:crypto");
  const records = JSON.parse(readFileSync("docs/resource-review/selected-archive-pieces.json", "utf8"));
  assert.equal(records.deploymentAuthorized, false);
  assert.equal(records.items.length, 2);
  assert.deepEqual(archiveWork.map(p => p.client), ["Prevengo", "Héroes de Panamá"]);
  for (const project of archiveWork) for (const image of project.images) {
    const record = records.items.find(r => r.destination === `public${image.src}`);
    assert.ok(record && record.permission && record.sourceSha256);
    assert.equal(image.width, record.width);
    assert.equal(image.height, record.height);
    assert.ok(publicAssets.includes(image.src));
    const bytes = readFileSync(record.destination);
    assert.equal(bytes.byteLength, record.destinationBytes);
    assert.equal(createHash("sha256").update(bytes).digest("hex"), record.destinationSha256);
  }
});

function luminance(hex) {
  const components = hex.match(/[a-f\d]{2}/gi).map((value) => parseInt(value, 16) / 255);
  const [r, g, b] = components.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return .2126 * r + .7152 * g + .0722 * b;
}

test("primary text and action color pairs meet AA normal-text contrast", () => {
  // Unified Space palette (2026-11-21): navy #1B2A46, navy-2 #22365A, closing #2B4574, hero #2F4B7C, light #F4F7FB.
  for (const [foreground, background] of [["#3B598D", "#FFFFFF"], ["#3B598D", "#EAF0F7"], ["#17233B", "#EAF0F7"], ["#4F5E75", "#FFFFFF"], ["#4F5E75", "#EAF0F7"], ["#FFFFFF", "#3B598D"], ["#E7D7B5", "#3B598D"], ["#3B598D", "#F4F7FB"], ["#4F5E75", "#F4F7FB"], ["#F2F5FB", "#1B2A46"], ["#C4CFDF", "#1B2A46"], ["#E0BF8B", "#1B2A46"], ["#F2F5FB", "#22365A"], ["#C4CFDF", "#22365A"], ["#E0BF8B", "#22365A"], ["#E0BF8B", "#2B4574"], ["#DCE5F3", "#2B4574"], ["#D0DCED", "#2F4B7C"], ["#F2F5FB", "#2F4B7C"], ["#1B2A46", "#E0BF8B"], ["#17233B", "#FFFFFF"], ["#17233B", "#F4F7FB"], ["#29436F", "#F4F7FB"], ["#3B598D", "#FFFFFF"], ["#FFFFFF", "#29436F"]]) {
    const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
    assert.ok((values[0] + .05) / (values[1] + .05) >= 4.5, `${foreground} on ${background}`);
  }
});

function request(body, headers = { "content-type": "application/json" }) {
  return new Request("http://localhost/api/contact", { method: "POST", body, headers });
}

test("contact endpoint never accepts or stores a message", async () => {
  assert.equal((await POST(request("hello", { "content-type": "text/plain" }))).status, 415);
  assert.equal((await POST(request("{"))).status, 400);
  assert.equal((await POST(request(JSON.stringify({})))).status, 422);
  assert.equal((await POST(request(JSON.stringify({ name: "QA", email: "invalid", message: "Test" })))).status, 422);
  assert.equal((await POST(request("x".repeat(16385)))).status, 413);
  assert.equal((await POST(request("{}", { "content-type": "application/json", "content-length": "20000" }))).status, 413);
  const response = await POST(request(JSON.stringify({ name: "Synthetic QA", email: "qa@example.invalid", message: "Synthetic test; do not send or store." })));
  assert.equal(response.status, 503);
  assert.equal(response.headers.get("cache-control"), "no-store");
  const result = await response.json();
  assert.ok(result.error);
  assert.equal(result.id, undefined);
  assert.equal(result.success, undefined);
});
