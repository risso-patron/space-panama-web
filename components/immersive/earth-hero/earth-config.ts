export const EARTH_TEXTURE = "/assets/earth-hero/blue-marble-january-2004-4096.webp";
export const PANAMA = { latitude: 8.98, longitude: -79.52 };
export const START_VIEW = { latitude: 12, longitude: -120 };

/** SphereGeometry uses x=-cos(phi), z=sin(phi), u=phi/2π, v=1-theta/π. */
export function geoVector(latitude: number, longitude: number) {
  const lat = (latitude * Math.PI) / 180;
  const u = (longitude + 180) / 360;
  const phi = 2 * Math.PI * u;
  return { x: -Math.cos(lat) * Math.cos(phi), y: Math.sin(lat), z: Math.cos(lat) * Math.sin(phi) };
}

export const EARTH_SCROLL = { desktop: 400, tablet: 320, mobile: 250 };
