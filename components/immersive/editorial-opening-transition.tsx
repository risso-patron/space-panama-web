"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function EditorialOpeningTransition() {
  useEffect(() => {
    const opening = document.querySelector<HTMLElement>("[data-editorial-opening]");
    const hero = opening?.querySelector<HTMLElement>("[data-editorial-hero]");
    const media = hero?.querySelector<HTMLElement>("[data-editorial-media]");
    const manifesto = opening?.querySelector<HTMLElement>("[data-editorial-manifesto]");

    if (!hero || !media || !manifesto) return;

    gsap.registerPlugin(ScrollTrigger);
    const mediaQueries = gsap.matchMedia();

    mediaQueries.add(
      {
        desktop: "(min-width: 1101px)",
        compact: "(max-width: 1100px)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      ({ conditions }) => {
        const { desktop, reduced } = conditions as {
          desktop: boolean;
          compact: boolean;
          reduced: boolean;
        };
        if (reduced) return;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "bottom 88%",
            end: "bottom 38%",
            scrub: desktop ? 0.8 : 0.45,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(media, {
            autoAlpha: 0.12,
            scale: desktop ? 1.045 : 1,
            ease: "none",
          }, 0)
          .to(hero.querySelectorAll(".title, .stage"), {
            autoAlpha: 0.16,
            y: desktop ? -18 : 0,
            ease: "none",
          }, 0)
          .fromTo(
            manifesto,
            { autoAlpha: 0, y: desktop ? 28 : 8 },
            { autoAlpha: 1, y: 0, ease: "none", immediateRender: true },
            0.18,
          );

        return () => timeline.scrollTrigger?.kill();
      },
    );

    return () => mediaQueries.revert();
  }, []);

  return null;
}
