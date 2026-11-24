import Image from "next/image";
import Link from "next/link";
import { homeMethod, selectedWork, eventCases, brandIdentities, brandCards, digitalWork, developerWork, socialPieces, packagingPieces } from "@/lib/public-site";
import styles from "./site-home.module.css";

// Evidence shared by Inicio (Cuatro mundos teaser) and Servicios (qué hacemos y cómo). Uses the editorial dark styles.
type WorldId = "marca" | "comunicacion" | "experiencias" | "digital";

// Event setups for Experiencias: the wedding and the XV Años, without identifiable guests.
const eventPhotos = [eventCases[0].images[2], eventCases[0].images[1], eventCases[0].images[5], eventCases[1].images[0], eventCases[1].images[1], eventCases[0].images[4]];

export function WorldMedia({ group }: Readonly<{ group: WorldId }>) {
  const ceviche = selectedWork[0];
  return group === "marca" ? <figure className={`${styles.worldMedia} ${styles.worldBrand}`}>
                <div className={styles.identityPlate}>
                  <ul className={styles.identityGrid} aria-label="Logos de identidad creados por Space">
                    {brandIdentities.map(item => <li key={item.src}><Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 680px) 18vw, 10vw" /></li>)}
                  </ul>
                  <ul className={styles.identityCards} aria-label="Identidades presentadas sobre tarjetas">
                    {brandCards.map(item => <li key={item.src}><Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 680px) 30vw, 16vw" /></li>)}
                  </ul>
                </div>
                <figcaption>Identidades creadas por Space · 10 logos y 3 aplicaciones sobre tarjeta, publicadas en spaceventos.com</figcaption>
              </figure> : group === "comunicacion" ? <figure className={styles.worldMedia}>
                <div className={styles.worldFrame}>
                  <Image className={styles.worldBackdrop} src={ceviche.images[1].src} alt="" aria-hidden="true" width={1440} height={1439} sizes="(max-width: 680px) 30vw, 14vw" />
                  <Image className={styles.worldPiece} src={ceviche.images[1].src} alt={ceviche.images[1].alt} width={1440} height={1439} sizes="(max-width: 680px) 92vw, 42vw" />
                </div>
                <figcaption>Don Ceviche · Comunicación de producto</figcaption>
              </figure> : group === "experiencias" ? <figure className={`${styles.worldMedia} ${styles.worldEvent}`}>
                <div role="group" aria-label="Fotos de ambientaciones de Space; se desplazan horizontalmente" tabIndex={0}>{eventPhotos.map(image => <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 680px) 82vw, 21vw" />)}</div>
                <figcaption>Boda (2024) y XV Años (2023) · Ambientación y coordinación de Space</figcaption>
              </figure> : <figure className={`${styles.worldMedia} ${styles.worldDigital}`}>
                <Image src={digitalWork[1].src} alt={digitalWork[1].alt} width={digitalWork[1].width} height={digitalWork[1].height} sizes="(max-width: 680px) 92vw, 42vw" />
                <figcaption>{digitalWork[1].name} · Sitio web desarrollado por Space</figcaption>
              </figure>}

// What the Comparo360 captures show, in the words of the Digital service. Pins sit on the real desktop capture.
const digitalNotes = [
  { id: "identidad", title: "Identidad", text: "Logo, color y tipografía que se reconocen desde el primer vistazo." },
  { id: "contenido", title: "Contenido", text: "Un mensaje claro arriba: qué es y para quién." },
  { id: "navegacion", title: "Navegación", text: "Un menú corto y una acción principal siempre visible." },
] as const;

export function DigitalShowcase() {
  const [desktopShot, mobileShot] = developerWork.images;
  return (
        <div className={`${styles.sectionWrap} ${styles.digitalShowcase}`} id="sitios-web">
          {/* Real captures of the live site; the three notes point at what is visible in them. Static on purpose. */}
          <figure className={styles.showcaseFigure} aria-labelledby="showcase-caption">
            <div className={styles.showcaseDesktop}>
              <Image src={desktopShot.src} alt={desktopShot.alt} width={desktopShot.width} height={desktopShot.height} sizes="(max-width: 680px) 92vw, 62vw" />
              <ul className={styles.showcasePins} aria-hidden="true">
                {digitalNotes.map(note => <li key={note.id} data-note={note.id}><i />{note.title}</li>)}
              </ul>
            </div>
            <div className={styles.showcaseMobile}>
              <Image src={mobileShot.src} alt={mobileShot.alt} width={mobileShot.width} height={mobileShot.height} sizes="(max-width: 680px) 56vw, 18vw" />
            </div>
              <ul className={styles.digitalNotes} aria-label="Qué muestra el sitio de Comparo360">
              {digitalNotes.map(note => <li key={note.id}><h3><i aria-hidden="true" />{note.title}</h3><p>{note.text}</p></li>)}
            </ul>
            <figcaption id="showcase-caption"><strong>{developerWork.name}</strong> · {developerWork.summary}<br />{developerWork.credit} · Capturas reales de escritorio y móvil</figcaption>
          </figure>
          <div className={styles.digitalMore}>
            <figure>
              <Image src={digitalWork[1].src} alt={digitalWork[1].alt} width={digitalWork[1].width} height={digitalWork[1].height} sizes="(max-width: 680px) 92vw, 34vw" />
              <figcaption><strong>{digitalWork[1].name}</strong> · {digitalWork[1].sector}<br />{digitalWork[1].scope} · Presentación publicada en spaceventos.com</figcaption>
            </figure>
            <div>
              <p className={styles.eyebrow}>Más sitios del equipo</p>
              <p>Fénix Refrigeración, con logo y web de Space, está entre los casos destacados.</p>
              <Link className={styles.textAction} href="/trabajo#fenix-refrigeracion">Ver el caso Fénix</Link>
              <Link className={styles.textAction} href="/trabajo#sitios-web">Ver todos los sitios</Link>
            </div>
          </div>
        </div>
  );
}

export function MethodSequence() {
  return (
        <div className={styles.sectionWrap}>
          <header className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>Cómo trabajamos</p><h2 id="method-title">Una idea lleva<br /><em>a la siguiente.</em></h2></div>
            <p>Criterio para empezar.<br />Aprendizaje para continuar.</p>
          </header>
          <ol className={styles.methodSequence}>
            {homeMethod.map((step, index) => <li key={step.title}><span className={styles.index} aria-hidden="true">{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}
          </ol>
        </div>
  );
}

// Social media pieces published by Space at spaceventos.com/social-media/: square posts, shown whole, never cropped.
export function SocialGallery({ caption = true }: Readonly<{ caption?: boolean }>) {
  return (
    <figure className={styles.socialGallery}>
      <ul aria-label="Publicaciones para redes diseñadas por Space">
        {socialPieces.map(piece => <li key={piece.src}><Image src={piece.src} alt={piece.alt} width={piece.width} height={piece.height} sizes="(max-width: 680px) 44vw, 22vw" /><span>{piece.client}</span></li>)}
      </ul>
      {caption && <figcaption>Social media · Don Ceviche, Total Import, Pappagallo Automation y WeCareShare · Publicado en spaceventos.com</figcaption>}
    </figure>
  );
}

export function PackagingPiece() {
  const piece = packagingPieces[0];
  return (
    <figure className={styles.packagingPiece}>
      <Image src={piece.src} alt={piece.alt} width={piece.width} height={piece.height} sizes="(max-width: 680px) 70vw, 26vw" />
      <figcaption>Diseño de packaging · {piece.client} · Publicado en spaceventos.com</figcaption>
    </figure>
  );
}
