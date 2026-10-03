"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EARTH_SCROLL } from "./earth-config";

export function EarthMotion({ active }: { active: boolean }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-earth-hero]");
    const skip = root?.querySelector<HTMLAnchorElement>("[data-earth-skip]");
    const manifesto = document.querySelector<HTMLElement>("#manifiesto");
    if (!skip || !manifesto) return;
    const skipToManifesto = (event: MouseEvent) => {
      event.preventDefault();
      const y = manifesto.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "auto" });
      window.setTimeout(() => manifesto.focus({ preventScroll: true }), 50);
    };
    skip.addEventListener("click", skipToManifesto);
    return () => skip.removeEventListener("click", skipToManifesto);
  }, []);

  useEffect(() => {
    if (!active) return;
    gsap.registerPlugin(ScrollTrigger);
    const root = document.querySelector<HTMLElement>("[data-earth-hero]");
    const section = root?.querySelector<HTMLElement>(".scene--hero");
    const manifesto = document.querySelector<HTMLElement>("#manifiesto");
    if (!root || !section || !manifesto) return;
    const media = gsap.matchMedia();
    media.add({ desktop: "(min-width: 1101px)", tablet: "(min-width: 701px) and (max-width: 1100px)", mobile: "(max-width: 700px)", motion: "(prefers-reduced-motion: no-preference)" }, ({ conditions }) => {
      const { desktop, tablet, motion } = conditions as { desktop: boolean; tablet: boolean; mobile: boolean; motion: boolean };
      if (!motion) return;
      const distance = desktop ? EARTH_SCROLL.desktop : tablet ? EARTH_SCROLL.tablet : EARTH_SCROLL.mobile;
      const releaseBuffer = desktop ? 20 : tablet ? 14 : 8;
      const copyExit = desktop ? [0.74, 0.84] : tablet ? [0.66, 0.76] : [0.6, 0.71];
      const handoffStart = desktop ? 0.82 : tablet ? 0.75 : 0.68;
      const indexRange = desktop ? [0.88, 0.93] : tablet ? [0.82, 0.87] : [0.78, 0.84];
      const titleRange = desktop ? [0.93, 0.975] : tablet ? [0.87, 0.93] : [0.84, 0.92];
      const copyRange = desktop ? [0.975, 1] : tablet ? [0.93, 1] : [0.92, 1];
      const reveal = (value: number, range: number[]) => {
        const linear = gsap.utils.clamp(0, 1, (value - range[0]) / (range[1] - range[0]));
        return linear * linear * (3 - 2 * linear);
      };
      const setTransition = (progress: number) => {
        const handoff = reveal(progress, [handoffStart, 1]);
        const panamaIn = reveal(progress, [0.38, 0.55]);
        const panamaOut = reveal(progress, desktop ? [0.74, 0.82] : [0.64, 0.72]);
        root.style.setProperty("--earth-progress", String(progress));
        root.style.setProperty("--earth-panama", String(panamaIn * (1 - panamaOut)));
        root.style.setProperty("--earth-handoff", String(handoff));
        root.style.setProperty("--earth-globe-opacity", String(0.82 * (1 - handoff)));
        root.style.setProperty("--earth-copy", String(1 - reveal(progress, copyExit)));
        root.style.setProperty("--earth-bridge-index", String(reveal(progress, indexRange)));
        root.style.setProperty("--earth-bridge-title", String(reveal(progress, titleRange)));
        root.style.setProperty("--earth-bridge-copy", String(reveal(progress, copyRange)));
        root.style.setProperty("--earth-bridge-y", `${(1 - reveal(progress, titleRange)) * 10}px`);
        updateBridgeOpacity();
        window.dispatchEvent(new CustomEvent("earth-hero-progress", { detail: { progress } }));
      };
      const updateBridgeOpacity = () => {
        const bridge = Math.max(
          Number(root.style.getPropertyValue("--earth-bridge-index")) || 0,
          Number(root.style.getPropertyValue("--earth-bridge-title")) || 0,
          Number(root.style.getPropertyValue("--earth-bridge-copy")) || 0,
        );
        const entered = Number(root.style.getPropertyValue("--earth-manifest-entry")) || 0;
        root.style.setProperty("--earth-bridge-opacity", String(bridge * (1 - reveal(entered, [0, 0.28]))));
      };
      root.classList.add("earth-hero--motion-ready");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section, start: "top top", end: () => `+=${window.innerHeight * (distance + releaseBuffer) / 100}`,
          pin: section, scrub: 0.8, anticipatePin: 1, invalidateOnRefresh: true,
          onUpdate: (self) => setTransition(self.progress),
          onRefresh: (self) => setTransition(self.progress),
        },
      });
      timeline.to({}, { duration: 0.2 });
      timeline.to({}, { duration: 0.25 });
      timeline.to({}, { duration: 0.25 });
      timeline.to({}, { duration: 0.2 });
      const firstStep = manifesto.querySelector<HTMLElement>(".manifesto-step");
      const entry = ScrollTrigger.create({
        trigger: manifesto, start: "top 76%", end: "top 34%", scrub: true, invalidateOnRefresh: true,
        onUpdate: (self) => {
          root.style.setProperty("--earth-manifest-entry", String(self.progress));
          if (firstStep) {
            firstStep.style.opacity = "1";
            firstStep.style.visibility = self.progress > 0.001 ? "visible" : "hidden";
            firstStep.style.setProperty("--manifest-index", String(reveal(self.progress, [0, 0.25])));
            firstStep.style.setProperty("--manifest-title", String(reveal(self.progress, [0.3, 0.7])));
            firstStep.style.setProperty("--manifest-copy", String(reveal(self.progress, [0.65, 1])));
          }
          updateBridgeOpacity();
        },
        onRefresh: (self) => {
          root.style.setProperty("--earth-manifest-entry", String(self.progress));
          if (firstStep) {
            firstStep.style.opacity = "1";
            firstStep.style.visibility = self.progress > 0.001 ? "visible" : "hidden";
            firstStep.style.setProperty("--manifest-index", String(reveal(self.progress, [0, 0.25])));
            firstStep.style.setProperty("--manifest-title", String(reveal(self.progress, [0.3, 0.7])));
            firstStep.style.setProperty("--manifest-copy", String(reveal(self.progress, [0.65, 1])));
          }
          updateBridgeOpacity();
        },
      });
      requestAnimationFrame(() => { ScrollTrigger.sort(); ScrollTrigger.refresh(); });
      return () => {
        entry.kill();
        if (firstStep) {
          firstStep.style.removeProperty("opacity");
          firstStep.style.removeProperty("visibility");
          firstStep.style.removeProperty("--manifest-index");
          firstStep.style.removeProperty("--manifest-title");
          firstStep.style.removeProperty("--manifest-copy");
        }
        root.classList.remove("earth-hero--motion-ready");
        root.style.removeProperty("--earth-progress");
        root.style.removeProperty("--earth-panama");
        root.style.removeProperty("--earth-handoff");
        root.style.removeProperty("--earth-globe-opacity");
        root.style.removeProperty("--earth-copy");
        root.style.removeProperty("--earth-bridge-index");
        root.style.removeProperty("--earth-bridge-title");
        root.style.removeProperty("--earth-bridge-copy");
        root.style.removeProperty("--earth-bridge-y");
        root.style.removeProperty("--earth-manifest-entry");
        root.style.removeProperty("--earth-bridge-opacity");
      };
    });
    return () => media.revert();
  }, [active]);
  return null;
}
