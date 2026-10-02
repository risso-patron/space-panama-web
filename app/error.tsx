"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="site-message" aria-labelledby="error-title">
      <p className="eyebrow">Space Panamá</p>
      <h1 id="error-title">Una pausa<br /><em>inesperada.</em></h1>
      <p>No pudimos completar esta parte del recorrido. Puedes intentarlo nuevamente.</p>
      <button type="button" onClick={() => reset()}>Intentar de nuevo</button>
    </main>
  );
}
