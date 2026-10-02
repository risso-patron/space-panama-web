import Link from "next/link";

export const metadata = {
  title: "Página no encontrada | Space Panamá",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="site-message" aria-labelledby="not-found-title">
      <p className="eyebrow">Space Panamá · 404</p>
      <h1 id="not-found-title">Esta órbita<br /><em>no existe.</em></h1>
      <p>La página que buscas no está disponible. Vuelve al inicio para recorrer Space.</p>
      <Link href="/">Volver al inicio</Link>
    </main>
  );
}
