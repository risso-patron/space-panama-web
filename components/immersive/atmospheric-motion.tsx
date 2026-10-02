"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AtmosphereFrame = {
  selector: string;
  x: number;
  y: number;
  scale: number;
  opacity: number;
};

const primaryFrames: AtmosphereFrame[] = [
  { selector: ".story-act--opening", x: -8, y: 0, scale: 1, opacity: 0.48 },
  { selector: ".story-act--manifesto", x: 16, y: -14, scale: 1.1, opacity: 0.64 },
  { selector: ".selected-work-chapter", x: -18, y: 15, scale: 1.18, opacity: 0.72 },
  { selector: ".thesis-pause", x: 10, y: 0, scale: 1.08, opacity: 0.58 },
  { selector: ".worlds-act", x: 24, y: -10, scale: 1.14, opacity: 0.66 },
  { selector: ".asset-story-scene", x: -22, y: 14, scale: 1.1, opacity: 0.64 },
  { selector: ".digital-act", x: -10, y: 18, scale: 1.06, opacity: 0.56 },
  { selector: ".method-act", x: 14, y: -12, scale: 0.98, opacity: 0.46 },
  { selector: ".space-conclusion", x: -2, y: 4, scale: 0.9, opacity: 0.38 },
  { selector: ".final-act", x: 18, y: 7, scale: 0.84, opacity: 0.24 },
];

const secondaryFrames: AtmosphereFrame[] = [
  { selector: ".story-act--opening", x: 12, y: 18, scale: 0.92, opacity: 0.3 },
  { selector: ".story-act--manifesto", x: -12, y: 26, scale: 1, opacity: 0.36 },
  { selector: ".selected-work-chapter", x: 20, y: -12, scale: 1.08, opacity: 0.4 },
  { selector: ".thesis-pause", x: -7, y: -20, scale: 1.02, opacity: 0.34 },
  { selector: ".worlds-act", x: -18, y: 12, scale: 0.94, opacity: 0.38 },
  { selector: ".asset-story-scene", x: 18, y: -12, scale: 1.02, opacity: 0.36 },
  { selector: ".digital-act", x: 22, y: -12, scale: 1.02, opacity: 0.34 },
  { selector: ".method-act", x: 9, y: 18, scale: 0.9, opacity: 0.27 },
  { selector: ".space-conclusion", x: -14, y: 12, scale: 0.86, opacity: 0.22 },
  { selector: ".final-act", x: 8, y: -20, scale: 0.78, opacity: 0.12 },
];

export function AtmosphericMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add(
      { desktop: "(min-width: 1101px)", reduced: "(prefers-reduced-motion: reduce)" },
      ({ conditions }) => {
        const { desktop, reduced } = conditions as { desktop: boolean; reduced: boolean };
        if (reduced) return;

        const root = document.querySelector<HTMLElement>("[data-immersive]");
        const canvas = document.querySelector<HTMLElement>(".atmosphere-canvas");
        const primary = canvas?.querySelector<HTMLElement>(".atmosphere-canvas__orb--primary");
        const secondary = canvas?.querySelector<HTMLElement>(".atmosphere-canvas__orb--secondary");
        if (!root || !canvas || !primary || !secondary) return;

        const frames = primaryFrames.map((frame, index) => ({
          selector: frame.selector,
          primary: frame,
          secondary: secondaryFrames[index],
          progress: 0,
        }));
        const state = { progress: 0 };
        const updateOrb = (element: HTMLElement, frame: AtmosphereFrame) => {
          const amplitude = desktop ? 1 : 0.46;
          gsap.set(element, {
            xPercent: frame.x * amplitude,
            yPercent: frame.y * amplitude,
            scale: 1 + (frame.scale - 1) * (desktop ? 1 : 0.5),
            opacity: frame.opacity * (desktop ? 1 : 0.82),
          });
        };
        const render = () => {
          const position = state.progress;
          let upperIndex = frames.findIndex((frame) => frame.progress >= position);
          if (upperIndex < 0) upperIndex = frames.length - 1;
          const lowerIndex = Math.max(0, upperIndex - 1);
          const lower = frames[lowerIndex];
          const upper = frames[upperIndex];
          const span = upper.progress - lower.progress;
          const local = span > 0 ? gsap.utils.clamp(0, 1, (position - lower.progress) / span) : 0;
          const blend = (a: number, b: number) => gsap.utils.interpolate(a, b, local);

          updateOrb(primary, {
            ...lower.primary,
            x: blend(lower.primary.x, upper.primary.x),
            y: blend(lower.primary.y, upper.primary.y),
            scale: blend(lower.primary.scale, upper.primary.scale),
            opacity: blend(lower.primary.opacity, upper.primary.opacity),
          });
          updateOrb(secondary, {
            ...lower.secondary,
            x: blend(lower.secondary.x, upper.secondary.x),
            y: blend(lower.secondary.y, upper.secondary.y),
            scale: blend(lower.secondary.scale, upper.secondary.scale),
            opacity: blend(lower.secondary.opacity, upper.secondary.opacity),
          });
        };
        const setProgress = gsap.quickTo(state, "progress", {
          duration: desktop ? 1.45 : 0.85,
          ease: "power2.out",
          onUpdate: render,
        });

        const measureFrames = () => {
          const total = Math.max(1, ScrollTrigger.maxScroll(window));
          const rootTop = root.getBoundingClientRect().top + window.scrollY;
          frames.forEach((frame) => {
            const section = root.querySelector<HTMLElement>(frame.selector);
            if (!section) return;
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            const visualCenter = sectionTop - rootTop + section.offsetHeight * 0.42 - window.innerHeight * 0.5;
            frame.progress = gsap.utils.clamp(0, 1, visualCenter / total);
          });
          frames.sort((a, b) => a.progress - b.progress);
        };

        measureFrames();
        const trigger = ScrollTrigger.create({
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => setProgress(self.progress),
          onRefresh: measureFrames,
          invalidateOnRefresh: true,
        });
        ScrollTrigger.addEventListener("refresh", measureFrames);
        setProgress(trigger.progress);
        const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => {
          cancelAnimationFrame(refreshFrame);
          ScrollTrigger.removeEventListener("refresh", measureFrames);
          trigger.kill();
          gsap.killTweensOf(state);
          gsap.set([primary, secondary], { clearProps: "transform,opacity" });
        };
      },
    );

    return () => media.revert();
  }, []);

  return null;
}
