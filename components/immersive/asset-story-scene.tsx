"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./asset-story-scene.module.css";

type StoryAsset = {
  id: string;
  src: string;
  alt: string;
  title: string;
  note: string;
  className: string;
};

const asuMesaAssets: StoryAsset[] = [
  { id: "asu-logo", src: "/assets/portfolio-v12/asu-logo.webp", alt: "Logo de AsuMesa", title: "Identidad", note: "Logo de AsuMesa.", className: "logo" },
  { id: "asu-label-round", src: "/assets/portfolio-v12/asu-label-round.webp", alt: "Diseño de etiqueta redonda de AsuMesa", title: "Etiqueta redonda", note: "Pieza gráfica de etiqueta redonda.", className: "round" },
  { id: "asu-label-pasta", src: "/assets/portfolio-v12/asu-label-pasta.webp", alt: "Diseño de etiqueta para pasta de AsuMesa", title: "Etiqueta de pasta", note: "Pieza gráfica de etiqueta para pasta.", className: "pasta" },
  { id: "asu-flyer", src: "/assets/portfolio-v12/asu-flyer.webp", alt: "Flyer de AsuMesa", title: "Flyer", note: "La pieza incluye una oferta y datos de contacto. Se muestran como parte de la obra gráfica; no se afirma que estén vigentes.", className: "flyer" },
];

const emcAsset: StoryAsset = {
  id: "emc-social",
  src: "/assets/portfolio-v12/emc-social.webp",
  alt: "Tablero visual de piezas para redes sociales de EMC Panamá",
  title: "Sistema social",
  note: "Tablero visual de piezas para redes sociales de EMC Panamá.",
  className: "emc",
};

type HotspotProps = {
  asset: StoryAsset;
  expanded: boolean;
  onToggle: (id: string) => void;
  number: string;
  buttonRef: (element: HTMLButtonElement | null) => void;
};

function Hotspot({ asset, expanded, onToggle, number, buttonRef }: HotspotProps) {
  return (
    <button
      ref={buttonRef}
      className={`${styles.hotspot} ${styles[`hotspot--${asset.className}`]}`}
      type="button"
      data-label={asset.title}
      aria-label={`${expanded ? "Cerrar" : "Ampliar"} ${asset.title}`}
      aria-expanded={expanded}
      aria-haspopup="dialog"
      aria-controls="portfolio-asset-expansion"
      onClick={() => onToggle(asset.id)}
    >
      <span className={styles.hotspot__ring} aria-hidden="true" />
      <span className={styles.hotspot__number}>{number}</span>
    </button>
  );
}

export function AssetStoryScene() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const triggerRefs = useRef(new Map<string, HTMLButtonElement>());
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogCloseRef = useRef<HTMLButtonElement>(null);
  const activeAsset = [...asuMesaAssets, emcAsset].find((asset) => asset.id === activeId);

  useEffect(() => {
    if (!activeAsset || !dialogRef.current || dialogRef.current.open) return;
    dialogRef.current.showModal();
    requestAnimationFrame(() => dialogCloseRef.current?.focus());
  }, [activeAsset]);

  const toggleDetail = (id: string) => {
    if (activeId === id) dialogRef.current?.close();
    else setActiveId(id);
  };

  const restoreTriggerFocus = () => {
    const closedId = activeId;
    setActiveId(null);
    if (closedId) requestAnimationFrame(() => triggerRefs.current.get(closedId)?.focus());
  };

  return (
    <section className={`${styles.scene} asset-story-scene`} data-asset-story data-act="brand" aria-labelledby="asset-story-title">
      <div className={styles.scene__inner}>
        <header className={styles.intro}>
          <p className={styles.kicker}>Identidad en aplicación</p>
          <h2 id="asset-story-title">AsuMesa<span className={styles.intro__period}>.</span></h2>
          <p className={styles.intro__deck}>Una identidad que se despliega en distintas piezas.</p>
        </header>

        <div className={styles.collage} aria-label="Piezas de identidad y comunicación de AsuMesa">
          {asuMesaAssets.map((asset, index) => (
            <figure className={`${styles.artwork} ${styles[`artwork--${asset.className}`]}`} data-asset-reveal={asset.className} key={asset.id}>
              <Image src={asset.src} alt={asset.alt} fill sizes="(max-width: 700px) 80vw, (max-width: 1100px) 44vw, 34vw" />
              <figcaption className={styles.artwork__caption}>{String(index + 1).padStart(2, "0")} <span>{asset.title}</span></figcaption>
              <Hotspot asset={asset} expanded={activeId === asset.id} onToggle={toggleDetail} number={String(index + 1).padStart(2, "0")} buttonRef={(element) => { if (element) triggerRefs.current.set(asset.id, element); }} />
            </figure>
          ))}
          <span className={styles.collage__thread} aria-hidden="true" />
        </div>

        <section className={styles.emcBeat} aria-labelledby="emc-title" data-asset-story-beat="emc">
          <div className={styles.emcBeat__copy}>
            <p className={styles.kicker}>Otra escala de comunicación</p>
            <h3 id="emc-title">EMC Panamá</h3>
            <p>Un tablero visual de piezas para redes sociales.</p>
          </div>
          <figure className={styles.emcArtwork} data-asset-reveal="emc">
            <Image src={emcAsset.src} alt={emcAsset.alt} fill sizes="(max-width: 700px) 90vw, 64vw" />
            <figcaption className={styles.artwork__caption}>01 <span>Social</span></figcaption>
            <Hotspot asset={emcAsset} expanded={activeId === emcAsset.id} onToggle={toggleDetail} number="01" buttonRef={(element) => { if (element) triggerRefs.current.set(emcAsset.id, element); }} />
          </figure>
        </section>

        <dialog className={styles.expansion} id="portfolio-asset-expansion" ref={dialogRef} aria-labelledby="asset-expansion-title" onClose={restoreTriggerFocus}>
          {activeAsset && <div className={styles.expansion__layout}>
            <div className={styles.expansion__visual}>
              <Image src={activeAsset.src} alt={activeAsset.alt} fill sizes="(max-width: 700px) 92vw, 66vw" />
            </div>
            <div className={styles.expansion__copy}>
              <p className={styles.detail__index}>PIEZA / SPACE</p>
              <h2 id="asset-expansion-title">{activeAsset.title}</h2>
              <p>{activeAsset.note}</p>
              <button className={styles.detail__close} type="button" ref={dialogCloseRef} onClick={() => dialogRef.current?.close()}>
                Cerrar <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>}
        </dialog>

        {activeAsset && <span className={styles.liveStatus} role="status" aria-live="polite">Detalle abierto: {activeAsset.title}</span>}
      </div>
    </section>
  );
}
