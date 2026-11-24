"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import styles from "./editorial-opening.module.css";

const motionQuery = "(prefers-reduced-motion: reduce)";
const playbackRate = 0.4;
function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
const allowsMotion = () => !window.matchMedia(motionQuery).matches;
const staticOnServer = () => false;

export function HeroVideo() {
  const motionAllowed = useSyncExternalStore(subscribeMotion, allowsMotion, staticOnServer);
  const video = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const player = video.current;
    if (!motionAllowed || failed || !player) return;
    player.defaultPlaybackRate = playbackRate;
    player.playbackRate = playbackRate;
    // Autoplay may be denied; retain the static media fallback without retrying.
    void player.play().catch(() => {});
    return () => player.pause();
  }, [motionAllowed, failed]);

  return (
    <div className={styles.media} data-editorial-media aria-hidden="true">
      <video
        ref={video}
        id="space-hero-video"
        className={styles.video}
        src={motionAllowed && !failed ? "/assets/space/hero-orbit.mp4" : undefined}
        poster="/assets/space/hero-orbit-poster.webp"
        preload="none"
        muted
        loop
        playsInline
        disablePictureInPicture
        tabIndex={-1}
        data-failed={failed}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
