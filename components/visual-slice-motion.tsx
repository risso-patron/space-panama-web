"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function VisualSliceMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      document.documentElement.dataset.motion = "reduced";
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.from(".motion-headline", {
        yPercent: 24,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".motion-reveal").forEach((element) => {
        gsap.from(element, {
          y: 44,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".motion-card").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 60, rotate: -2, opacity: 0.72 },
          {
            y: -18,
            rotate: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".manifesto-step").forEach((element, index) => {
        gsap.fromTo(
          element,
          { "--step-progress": "0%" },
          {
            "--step-progress": "100%",
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: index === 0 ? "top 78%" : "top 72%",
              end: "bottom 38%",
              scrub: true,
            },
          },
        );
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
