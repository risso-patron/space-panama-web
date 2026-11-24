---
name: space-panama-design
description: Evaluate and propose visual direction, editorial hierarchy, scroll narrative, intentional motion, responsive behavior, accessibility, and performance for the Space Panamá website. Use when auditing, storyboarding, comparing, or refining this site's visual experience; do not treat this as authorization to implement.
---

# Space Panamá Design Direction

## Purpose and authority

This skill supports design evaluation and proposals for the existing Space Panamá site. It does not authorize code, asset, copy, or Git changes by itself. Follow the user's current scope and approval, repository instructions, and established Space Panamá content and brand decisions first. If this skill conflicts with those authorities, defer to them and identify the conflict rather than silently resolving it.

Space Panamá is an editorial, multi-intent home experience, not a conventional single-offer landing page. Preserve the site's story, pacing, brand character, and distinct section sequence. Do not impose a generic conversion template, mandatory section list, visual-token system, typography, color palette, or animation recipe from another skill. Recommendations should fit the existing site and its actual content.

## Evidence discipline

Separate statements into:

- **Fact:** directly verified in current source, repository documentation, or an authenticated/currently accessible site.
- **Observation:** what is visibly or structurally present in the reviewed material, with the scope of that review stated.
- **Hypothesis:** an interpretation or proposed explanation that still needs validation.

Name the evidence source and its date or revision where useful. Code inspection is not visual verification. A local recording, stale deployment preview, old screenshot, or wireframe does not prove what the current site looks like. If no browser or current visual capture is available, say so plainly and describe wireframes as proposals, not captures. Do not claim full-site, mobile, keyboard, or reduced-motion verification unless each was actually checked.

Never invent projects, clients, services, outcomes, testimonials, metrics, interfaces, screenshots, behind-the-scenes material, or publication permissions. Do not infer permission from a file existing in the repository. Label asset rights and attribution as confirmed only when evidence supports it; otherwise mark them pending. Keep unverified material out of public-facing recommendations, or make its use conditional on verification.

## Review method

Before proposing a direction:

1. Confirm the exact site/repository context, current instructions, and whether the request is proposal-only or authorizes implementation.
2. Map the current homepage's section order, content hierarchy, and transitions. Distinguish current behavior from desired direction.
3. Inventory only real, relevant assets and content. Record source, project, format, and known rights/credit constraints; note absences without creating placeholders that could be mistaken for real material.
4. State the audience and communication goal only where supported by project materials; label assumptions as hypotheses.
5. Evaluate the experience across desktop and mobile, including how the narrative works without motion and how the first content after the Hero becomes legible.

For proposals, provide concrete text wireframes or storyboard frames. Show opening, reveal/transition, and settled next section when relevant; include desktop and mobile behavior, genuine assets that could be used, permission status, static/reduced-motion alternative, and unresolved evidence needs. Compare alternatives using observable criteria rather than aesthetic adjectives alone.

## Art direction and narrative

- Seek a recognizable Space Panamá point of view, not an interchangeable agency aesthetic.
- Use real work and the brand's editorial voice as evidence. Avoid stock imagery or decorative effects that could imply an unverified client, place, result, or service.
- Treat scroll as pacing and narrative, not as a reason to add animation to every section.
- Preserve clear hierarchy: at each moment, identify the primary message, supporting context, and next meaningful action or section.
- Do not layer competing headlines, labels, section titles, or panels over a focal visual. A transition must clarify the story, not obscure it.
- Do not place “PANAMÁ” over the planet, or introduce intermediate “ESTRATEGIA” screens during an Earth approach. The Earth concept may be changed or removed when the user requests exploration of alternate directions; do not assume it is mandatory.
- Keep the transition into Manifiesto and Selected Work readable and intentional. Do not turn the Home into a conventional campaign landing page or break its broader editorial journey to optimize one isolated Hero.

## Motion with intent

Motion is justified only when it communicates a relationship, creates deliberate pacing, or helps orient the viewer. For each proposed animation, state its narrative purpose, trigger, duration/behavior at a high level, and fallback. Prefer a small number of coherent transitions over continuous ambient movement or unrelated effects.

- Keep the message and content understandable without animation. Never make essential copy or navigation available only during a motion sequence.
- Preserve the existing site's motion architecture and conventions unless implementation is explicitly authorized and inspected. Do not prescribe a specific library, timing token, easing curve, or implementation pattern without checking current project code and runtime constraints.
- Respect `prefers-reduced-motion`: provide a stable, complete reading experience without spatial movement, zoom, parallax, pinning, or scrubbed transitions. Do not merely reduce animation distance if the sequence remains disorienting.
- Avoid scroll hijacking, forced pacing, excessive pinning, flashes, rapid scale changes, and motion that creates competing focal points.
- Include a static/no-WebGL/no-video fallback where a proposal depends on a rendered scene or media asset. The page must retain meaningful content if the visual fails or is unavailable.

## Responsive, accessibility, and performance

Treat mobile as a designed composition, not a compressed desktop scene. Define reading order, type hierarchy, focal placement, crop, controls, and transition behavior for narrow screens. Do not assume hover, high bandwidth, a large viewport, or precision pointer input.

Proposals should account for:

- Semantic headings and landmarks, logical reading and focus order, keyboard access, visible focus, sufficient contrast, and meaningful alternative text for informative imagery.
- Captions or equivalent context for meaningful video; avoid autoplay audio. Provide usable pause/stop controls for motion that continues beyond a brief transition.
- Reduced-motion and failure fallbacks, including static imagery/text when WebGL, video, or JavaScript is unavailable.
- Initial-load cost, media dimensions and formats, responsive delivery, lazy loading below the fold, layout stability, and the cost of animation/rendering on mobile. Treat performance impact as something to verify, not as a claim based on appearance.

Do not add analytics, tracking, third-party visual services, fonts, or dependencies as a design recommendation without noting the privacy, licensing, performance, and approval implications.

## Deliverable and approval boundary

A design review or proposal should conclude with:

1. What is verified versus observed versus hypothesized.
2. The recommended direction and why it fits Space Panamá's existing narrative.
3. The storyboard or hierarchy changes, including desktop/mobile and static alternatives.
4. Real assets that are available, rights/credits still pending, and missing material that must be supplied.
5. Risks and concrete acceptance checks for clarity, continuity, responsiveness, accessibility, and performance.
6. Explicitly whether the result is proposal-only or implemented and verified.

Do not label a direction approved based on a text storyboard. Visual approval requires review of the actual current result at relevant viewport sizes, plus reduced-motion and accessibility checks appropriate to the change. Implementation remains a separate user-authorized step.
