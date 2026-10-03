# V13 — Immersive Earth → Panamá Hero prototype

## Status

This is a review prototype, not a production replacement. The original `Hero` component remains in `components/hero.tsx`; only the homepage composition currently renders `EarthHero` so the concept can be evaluated. The prototype remains local and is not merged or promoted to production.

## Texture provenance and processing

- Source: [NASA Blue Marble: Next Generation Base Map](https://science.nasa.gov/earth/earth-observatory/blue-marble-next-generation/base-map/), January 2004 equirectangular Blue Marble image: [original NASA JPEG](https://assets.science.nasa.gov/content/dam/science/esd/eo/images/bmng/bmng-base/january/world.200401.3x21600x10800.jpg).
- NASA lists the source map at 21,600 × 10,800 pixels (2 km/pixel). The downloaded original was 23,716,627 bytes.
- Repository derivative: `public/assets/earth-hero/blue-marble-january-2004-4096.webp`, resized to 4,096 × 2,048 and encoded as WebP, quality 88 / effort 6; 723,470 bytes.
- NASA's Blue Marble page requests credit to “NASA Earth Observatory.” NASA's [image-use FAQ](https://science.nasa.gov/earth/faq/) says most Earth Observatory imagery is reusable, including commercial reuse, unless a copyright notice indicates otherwise. The project should retain that credit and re-check the individual asset terms before a production launch.
- Asset is provisional for this prototype. It is not live-hotlinked; it is served locally. The stylized atmosphere/lighting is a prototype treatment, not a claim that this is a current or real-time Earth image.

## Orientation and motion

Three.js `SphereGeometry` maps `u = phi / 2π`, `v = 1 - theta / π`, and its surface vector is `(-cos(phi)cos(lat), sin(lat), sin(phi)cos(lat))`. The equirectangular texture maps longitude to `u=(longitude+180)/360`; the source surface vector is consequently computed from the same UV convention. The globe quaternion maps the configured starting point to camera-forward and slerps to Panama at latitude 8.98°, longitude −79.52°. This is a mathematical orientation, not a hand-positioned approximation.

ScrollTrigger pins the Hero for 400vh desktop, 320vh tablet and 250vh mobile, only after WebGL and texture initialization succeed and only for `prefers-reduced-motion: no-preference`. Scrub progress rotates, approaches, abstracts and fades the globe into the existing V10 atmosphere; the pin releases into the existing Manifesto. The browser retains native scrolling. Reduced motion, loading and failure states use a static composition with no pin.

## Fallback and constraints

The original Hero component remains available as the straightforward rollback path. If WebGL, the texture, or the renderer fails, the new Hero retains its local CSS globe fallback and accessible HTML copy. The new symbol/logo master is not recreated; the existing approved Space logo is used. This prototype does not use a map, live geodata, React Three Fiber, or new portfolio scenes.
