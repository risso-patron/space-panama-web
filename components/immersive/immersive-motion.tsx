"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ImmersiveMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add({ desktop: "(min-width: 1101px)", reduced: "(prefers-reduced-motion: reduce)" }, ({ conditions }) => {
      const { desktop, reduced } = conditions as { desktop: boolean; reduced: boolean };
      if (reduced) return;

      const refresh = () => ScrollTrigger.refresh();
      gsap.fromTo(".motion-headline", { yPercent: 14, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 1.25, ease: "power3.out" });
      gsap.fromTo(".hero__atmosphere", { scale: 0.78, autoAlpha: 0.3 }, { scale: 1, autoAlpha: 1, duration: 1.8, ease: "power2.out" });
      gsap.to(".hero__content", { yPercent: -10, scale: 0.94, autoAlpha: 0.68, ease: "none", scrollTrigger: { trigger: ".scene--hero", start: "top top", end: "bottom top", scrub: 0.8 } });
      gsap.to(".hero__atmosphere", { yPercent: 24, scale: 1.12, ease: "none", scrollTrigger: { trigger: ".scene--hero", start: "top top", end: "bottom top", scrub: 1 } });

      const manifesto = document.querySelector<HTMLElement>(".scene--manifesto");
      const steps = gsap.utils.toArray<HTMLElement>(".manifesto-step");
      const fill = document.querySelector<HTMLElement>(".manifesto__progress-fill");
      const label = document.querySelector<HTMLElement>(".manifesto__progress-label");
      const bar = document.querySelector<HTMLElement>(".manifesto__progress");
      if (manifesto && steps.length) {
        manifesto.classList.add("is-pinned");
        gsap.set(steps, { autoAlpha: 0, y: 42, scale: 0.96 });
        gsap.set(steps[0], { autoAlpha: 1, y: 0, scale: 1 });
        steps.forEach((step, i) => step.setAttribute("aria-hidden", String(i !== 0)));
        bar?.setAttribute("aria-valuenow", "1");
        const timeline = gsap.timeline({ scrollTrigger: {
          trigger: manifesto, start: "top top", end: () => `+=${window.innerHeight * (steps.length + 1)}`,
          pin: ".manifesto__stage", scrub: 0.8, invalidateOnRefresh: true,
          onUpdate: (self) => {
            const active = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
            steps.forEach((step, i) => step.setAttribute("aria-hidden", String(i !== active)));
            if (label) label.textContent = `${String(active + 1).padStart(2, "0")} — ${String(steps.length).padStart(2, "0")}`;
            bar?.setAttribute("aria-valuenow", String(active + 1));
          },
        } });
        steps.forEach((step, i) => {
          if (!i) return;
          const at = i;
          timeline.to(steps[i - 1], { autoAlpha: 0, y: -32, scale: 0.975, duration: 0.34 }, at - 0.12)
            .fromTo(step, { autoAlpha: 0, y: 46, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.42 }, at);
        });
        if (fill) timeline.to(fill, { scaleX: 1, duration: steps.length - 1 }, 0);
        const finalStep = steps[steps.length - 1];
        if (finalStep) timeline.to(finalStep, { scale: 0.93, y: -42, autoAlpha: 0.62, duration: 0.9, ease: "none" });
        gsap.to(".manifesto__track", { scaleY: 1, ease: "none", scrollTrigger: { trigger: manifesto, start: "top top", end: () => `+=${window.innerHeight * (steps.length + 1)}`, scrub: true } });
        gsap.to(".story-act--ceviche", { yPercent: -8, ease: "none", scrollTrigger: { trigger: manifesto, start: "bottom bottom", end: "bottom top", scrub: 0.7 } });
      }

      const workItems = gsap.utils.toArray<HTMLElement>(".selected-work > .story-act, .selected-work > .brand-work");
      workItems.forEach((item, index) => {
        const intro = item.querySelector<HTMLElement>(".work-story__intro, .brand-work__intro");
        if (intro) gsap.fromTo(intro, { y: 56, autoAlpha: 0.3 }, { y: 0, autoAlpha: 1, ease: "none", scrollTrigger: { trigger: item, start: "top 82%", end: "top 32%", scrub: 0.8 } });
        if (index < workItems.length - 1) gsap.to(item, { yPercent: -8, autoAlpha: 0.72, scale: 0.97, ease: "none", scrollTrigger: { trigger: item, start: "bottom 72%", end: "bottom 15%", scrub: 0.8 } });
      });

      const ceviche = document.querySelector<HTMLElement>(".story-act--ceviche");
      const mainMedia = ceviche?.querySelector<HTMLElement>(".work-story__main");
      const cevicheLayers = gsap.utils.toArray<HTMLElement>(".story-act--ceviche .work-story__layer");
      const cevicheOutro = ceviche?.querySelector<HTMLElement>(".work-story__outro");
      if (ceviche && mainMedia && cevicheLayers.length === 2 && cevicheOutro) {
        const story = gsap.timeline({ scrollTrigger: { trigger: ceviche, start: desktop ? "top 78%" : "top 86%", end: desktop ? "bottom 8%" : "bottom 16%", scrub: 1.1, invalidateOnRefresh: true } });
        story.fromTo(mainMedia, { clipPath: "inset(22% 28% 22% 28% round 1.5rem)", scale: 0.78 }, { clipPath: "inset(0 0 0 0 round 1.5rem)", scale: 1, duration: 1.3, ease: "none" });
        story.fromTo(cevicheLayers[0], { xPercent: 44, yPercent: 18, autoAlpha: 0, clipPath: "inset(0 0 0 52% round 1rem)" }, { xPercent: 0, yPercent: 0, autoAlpha: 1, clipPath: "inset(0 0 0 0 round 1rem)", duration: 0.8, ease: "none" }, "+=0.1");
        story.fromTo(cevicheLayers[1], { xPercent: -40, yPercent: -18, autoAlpha: 0, clipPath: "inset(0 52% 0 0 round 1rem)" }, { xPercent: 0, yPercent: 0, autoAlpha: 1, clipPath: "inset(0 0 0 0 round 1rem)", duration: 0.8, ease: "none" }, "+=0.08");
        story.fromTo(cevicheOutro, { y: 50, autoAlpha: 0.2 }, { y: 0, autoAlpha: 1, duration: 0.65, ease: "none" }, "+=0.22");
        story.to(mainMedia, { scale: 0.92, yPercent: -7, autoAlpha: 0.65, duration: 0.5, ease: "none" });
      }

      const sissy = document.querySelector<HTMLElement>(".brand-work--sissy");
      const sissyVideo = sissy?.querySelector<HTMLElement>(".brand-work__video-card");
      const sissyCampaign = sissy?.querySelector<HTMLElement>(".brand-work__image-card--sissy");
      const sissyCopy = sissy?.querySelector<HTMLElement>(".brand-work__description");
      if (sissy && sissyVideo && sissyCampaign && sissyCopy) {
        const story = gsap.timeline({ scrollTrigger: { trigger: sissy, start: desktop ? "top 82%" : "top 88%", end: desktop ? "bottom 12%" : "bottom 14%", scrub: 1, invalidateOnRefresh: true } });
        story.fromTo(sissyVideo, { x: desktop ? -130 : -26, y: 58, scale: 0.84, autoAlpha: 0.25, clipPath: "inset(18% 0 22% 0 round 1.1rem)" }, { x: 0, y: 0, scale: 1, autoAlpha: 1, clipPath: "inset(0 0 0 0 round 1.1rem)", duration: 1.2, ease: "none" });
        story.fromTo(sissyCampaign, { x: desktop ? 148 : 28, y: 44, scale: 0.9, autoAlpha: 0, clipPath: "inset(0 0 0 52% round 1.1rem)" }, { x: 0, y: 0, scale: 1, autoAlpha: 1, clipPath: "inset(0 0 0 0 round 1.1rem)", duration: 1, ease: "none" }, "+=0.22");
        story.fromTo(sissyCopy, { y: 50, autoAlpha: 0.15 }, { y: 0, autoAlpha: 1, duration: 0.75, ease: "none" }, "+=0.16");
        story.to(sissyVideo, { y: -34, scale: 0.94, autoAlpha: 0.72, duration: 0.5, ease: "none" });
      }

      const psico = document.querySelector<HTMLElement>(".brand-work--psicojazmin");
      const logo = psico?.querySelector<HTMLElement>(".brand-work__identity-card");
      const notebook = psico?.querySelector<HTMLElement>(".brand-work__image-card--notebook");
      const mugs = psico?.querySelector<HTMLElement>(".brand-work__image-card--mugs");
      if (psico && logo && notebook && mugs) {
        const story = gsap.timeline({ scrollTrigger: { trigger: psico, start: desktop ? "top 80%" : "top 88%", end: desktop ? "bottom 12%" : "bottom 14%", scrub: 1, invalidateOnRefresh: true } });
        story.fromTo(logo, { scale: 0.68, y: 62, autoAlpha: 0.18, clipPath: "inset(18% 14% 18% 14% round 1.2rem)" }, { scale: 1, y: 0, autoAlpha: 1, clipPath: "inset(0 0 0 0 round 1.2rem)", duration: 0.9, ease: "none" });
        story.fromTo(notebook, { x: desktop ? -120 : -24, y: 36, autoAlpha: 0, clipPath: "inset(0 48% 0 0 round 1rem)" }, { x: 0, y: 0, autoAlpha: 1, clipPath: "inset(0 0 0 0 round 1rem)", duration: 0.8, ease: "none" }, "+=0.2");
        story.fromTo(mugs, { x: desktop ? 126 : 24, y: 28, autoAlpha: 0, clipPath: "inset(0 0 0 48% round 1rem)" }, { x: 0, y: 0, autoAlpha: 1, clipPath: "inset(0 0 0 0 round 1rem)", duration: 0.8, ease: "none" }, "+=0.2");
      }

      gsap.fromTo(".thesis-pause h2", { y: 90, autoAlpha: 0.35, clipPath: "inset(18% 0 18% 0)" }, { y: 0, autoAlpha: 1, clipPath: "inset(0 0 0 0)", ease: "none", scrollTrigger: { trigger: ".thesis-pause", start: "top 78%", end: "center center", scrub: 0.8 } });

      const worldScenes = gsap.utils.toArray<HTMLElement>(".world-scene");
      const worlds = document.querySelector<HTMLElement>(".worlds-act");
      const worldsStage = document.querySelector<HTMLElement>(".worlds-stage");
      if (worlds && worldsStage && worldScenes.length && desktop) {
        worlds.classList.add("worlds-act--pinned");
        gsap.set(worldScenes, { autoAlpha: 0, y: 70, scale: 0.96 });
        gsap.set(worldScenes[0], { autoAlpha: 1, y: 0, scale: 1 });
        const sequence = gsap.timeline({ scrollTrigger: { trigger: worldsStage, start: "top top", end: () => `+=${window.innerHeight * worldScenes.length * 1.25}`, pin: worldsStage, scrub: 0.8, invalidateOnRefresh: true } });
        worldScenes.forEach((scene, i) => { if (i) sequence.to(worldScenes[i - 1], { autoAlpha: 0, y: -64, scale: 0.97, duration: 0.32 }, i - 0.15).fromTo(scene, { autoAlpha: 0, y: 72, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.48 }, i); });
        gsap.to(".worlds-progress span", { scaleX: 1, ease: "none", scrollTrigger: { trigger: worldsStage, start: "top top", end: () => `+=${window.innerHeight * worldScenes.length * 1.25}`, scrub: true } });
      }

      gsap.utils.toArray<HTMLElement>(".digital-name").forEach((name, i) => gsap.fromTo(name, { y: 52, autoAlpha: 0.25, x: i % 2 ? 38 : -38 }, { y: 0, autoAlpha: 1, x: 0, ease: "none", scrollTrigger: { trigger: name, start: "top 88%", end: "top 50%", scrub: 0.6 } }));
      gsap.fromTo(".method-step", { x: (i) => i % 2 ? 72 : -72, autoAlpha: 0.28 }, { x: 0, autoAlpha: 1, stagger: 0.16, ease: "none", scrollTrigger: { trigger: ".method-sequence", start: "top 85%", end: "bottom 34%", scrub: 0.9 } });
      gsap.fromTo(".space-conclusion h2, .final-act h2", { y: 62, autoAlpha: 0.4 }, { y: 0, autoAlpha: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: ".space-conclusion", start: "top 82%", end: "bottom 42%", scrub: 0.8 } });
      requestAnimationFrame(refresh);
      return () => { manifesto?.classList.remove("is-pinned"); worlds?.classList.remove("worlds-act--pinned"); };
    });

    media.add("(max-width: 1100px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".manifesto-step, .work-story__main, .work-story__layer, .brand-work__intro, .brand-work__video-card, .brand-work__image-card, .brand-work__identity-card, .thesis-pause h2, .world-scene, .digital-name, .method-step, .space-conclusion h2, .final-act h2").forEach((element, index) => {
        gsap.fromTo(element, { y: index % 2 ? 38 : 48, x: index % 2 ? 18 : -18, autoAlpha: 0.25, clipPath: "inset(0 0 14% 0)" }, { y: 0, x: 0, autoAlpha: 1, clipPath: "inset(0 0 0 0)", ease: "none", scrollTrigger: { trigger: element, start: "top 88%", end: "top 48%", scrub: 0.55, invalidateOnRefresh: true } });
      });
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => media.revert();
  }, []);
  return null;
}
