import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Adds restrained handoffs between existing scenes; no content or layout is introduced. */
export function setupSceneContinuity(desktop: boolean) {
  const scrub = desktop ? 0.8 : 0.45;
  const hero = document.querySelector<HTMLElement>(".scene--hero");
  const manifesto = document.querySelector<HTMLElement>(".scene--manifesto");
  const work = document.querySelector<HTMLElement>(".scene--work");
  const sissy = document.querySelector<HTMLElement>(".brand-work--sissy");
  const psico = document.querySelector<HTMLElement>(".brand-work--psicojazmin");

  if (hero && manifesto) {
    const headline = hero.querySelector<HTMLElement>(".motion-headline");
    const atmosphere = hero.querySelector<HTMLElement>(".hero__atmosphere");
    if (headline) {
      gsap.to(headline, {
        yPercent: -5,
        scale: 0.97,
        autoAlpha: 0.55,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "bottom 92%", end: "bottom 28%", scrub, invalidateOnRefresh: true },
      });
    }
    if (atmosphere) {
      gsap.to(atmosphere, {
        scale: 1.12,
        autoAlpha: 0.18,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "bottom 100%", end: "bottom 15%", scrub, invalidateOnRefresh: true },
      });
    }
    const intro = manifesto.querySelector<HTMLElement>(".manifesto__intro");
    if (intro) {
      gsap.fromTo(intro, { y: 30, autoAlpha: 0.55 }, {
        y: 0, autoAlpha: 1, ease: "none",
        scrollTrigger: { trigger: manifesto, start: "top 90%", end: "top 30%", scrub, invalidateOnRefresh: true },
      });
    }
    gsap.to(manifesto, {
      backgroundColor: "rgba(113, 131, 159, 0.08)",
      ease: "none",
      scrollTrigger: { trigger: manifesto, start: "top bottom", end: "top 15%", scrub, invalidateOnRefresh: true },
    });
  }

  if (manifesto && work) {
    gsap.to(work, {
      backgroundColor: "rgba(23, 54, 65, 0.18)",
      ease: "none",
      scrollTrigger: { trigger: work, start: "top bottom", end: "top 24%", scrub, invalidateOnRefresh: true },
    });
    if (!desktop) {
      const finalStep = manifesto.querySelector<HTMLElement>(".manifesto-step:last-child");
      if (finalStep) {
        gsap.to(finalStep, {
          y: -18, scale: 0.98, autoAlpha: 0.55, ease: "none",
          scrollTrigger: { trigger: work, start: "top 86%", end: "top 35%", scrub: 0.55, invalidateOnRefresh: true },
        });
      }
    }
  }

  if (work && sissy) {
    gsap.to(work, {
      backgroundColor: "rgba(245, 234, 216, 0.045)",
      ease: "none",
      scrollTrigger: { trigger: sissy, start: "top bottom", end: "top 25%", scrub, invalidateOnRefresh: true },
    });
    const workVisuals = work.querySelector<HTMLElement>(".work-story__scene");
    if (workVisuals) {
      gsap.to(workVisuals, {
        yPercent: -3, scale: 0.975, autoAlpha: 0.74, ease: "none",
        scrollTrigger: { trigger: sissy, start: "top 92%", end: "top 30%", scrub, invalidateOnRefresh: true },
      });
    }
  }

  if (sissy && psico) {
    gsap.to(sissy, {
      backgroundColor: "rgba(64, 32, 95, 0.07)",
      ease: "none",
      scrollTrigger: { trigger: psico, start: "top bottom", end: "top 24%", scrub, invalidateOnRefresh: true },
    });
    const sissyVisuals = sissy.querySelector<HTMLElement>(".brand-work__visuals");
    const psicoVisuals = psico.querySelector<HTMLElement>(".brand-work__visuals");
    if (sissyVisuals) {
      gsap.to(sissyVisuals, {
        yPercent: -4, scale: 0.96, autoAlpha: 0.68, ease: "none",
        scrollTrigger: { trigger: psico, start: "top 95%", end: "top 28%", scrub, invalidateOnRefresh: true },
      });
    }
    if (psicoVisuals) {
      gsap.fromTo(psicoVisuals, { y: 24, scale: 0.98, autoAlpha: 0.82 }, {
        y: 0, scale: 1, autoAlpha: 1, ease: "none",
        scrollTrigger: { trigger: psico, start: "top 88%", end: "top 32%", scrub, invalidateOnRefresh: true },
      });
    }
  }

  // Refresh once the matchMedia branch and its scene targets are mounted.
  requestAnimationFrame(() => ScrollTrigger.refresh());
}
