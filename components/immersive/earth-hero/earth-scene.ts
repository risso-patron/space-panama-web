import * as THREE from "three";
import { EARTH_TEXTURE, PANAMA, START_VIEW, geoVector } from "./earth-config";

export type EarthSceneHandle = { setProgress: (progress: number) => void; dispose: () => void };

export async function createEarthScene(canvas: HTMLCanvasElement, onReady: () => void): Promise<EarthSceneHandle> {
  const texture = await new THREE.TextureLoader().loadAsync(EARTH_TEXTURE);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.36;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 30);
  camera.position.z = 4.05;
  // Keep the globe legible as a sunlit object while preserving a gentle night-side falloff.
  const skyFill = new THREE.HemisphereLight(0xc8e2ff, 0x34402f, 2.9);
  skyFill.position.set(0, 1, 0);
  scene.add(skyFill);
  const sun = new THREE.DirectionalLight(0xfff3df, 4.1);
  sun.position.set(-0.6, 1.8, 8);
  scene.add(sun);

  const geometry = new THREE.SphereGeometry(1, 96, 64);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  const earthMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 1,
    metalness: 0,
    // A restrained blue ambient emission lifts the ocean shadows without flattening day-side detail.
    emissive: 0x081b3a,
    emissiveIntensity: 0.5,
  });
  const earth = new THREE.Mesh(geometry, earthMaterial);
  scene.add(earth);

  const atmosphereGeometry = new THREE.SphereGeometry(1.035, 64, 48);
  const atmosphereMaterial = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uOpacity: { value: 0.2 } },
    vertexShader: "varying vec3 vNormal; varying vec3 vView; void main(){ vNormal=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.0); vView=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",
    fragmentShader: "uniform float uOpacity; varying vec3 vNormal; varying vec3 vView; void main(){ float rim=pow(1.0-max(dot(normalize(vNormal),normalize(vView)),0.0),3.0); gl_FragColor=vec4(0.30,0.55,0.82,rim*uOpacity); }",
  });
  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  scene.add(atmosphere);
  const earthBaseColor = new THREE.Color(0xffffff);
  const earthHazeColor = new THREE.Color(0x8fa2b4);

  const starsGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(450 * 3);
  for (let i = 0; i < starPositions.length; i += 3) {
    const radius = 5 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    starPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
    starPositions[i + 1] = radius * Math.cos(phi);
    starPositions[i + 2] = radius * Math.sin(phi) * Math.sin(theta);
  }
  starsGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
  const starsMaterial = new THREE.PointsMaterial({ color: 0xc8d4e5, size: 0.012, transparent: true, opacity: 0.36, sizeAttenuation: true });
  scene.add(new THREE.Points(starsGeometry, starsMaterial));

  const start = geoVector(START_VIEW.latitude, START_VIEW.longitude);
  const destination = geoVector(PANAMA.latitude, PANAMA.longitude);
  const startVector = new THREE.Vector3(start.x, start.y, start.z).normalize();
  const panamaVector = new THREE.Vector3(destination.x, destination.y, destination.z).normalize();
  const startRotation = new THREE.Quaternion().setFromUnitVectors(startVector, new THREE.Vector3(0, 0, 1));
  const panamaRotation = new THREE.Quaternion().setFromUnitVectors(panamaVector, new THREE.Vector3(0, 0, 1));
  const reducedDpr = Math.min(window.devicePixelRatio || 1, window.innerWidth <= 700 ? 1.2 : 1.5);
  renderer.setPixelRatio(reducedDpr);

  let progress = 0;
  let inView = true;
  let frame = 0;
  let disposed = false;
  const render = () => {
    if (disposed || !inView || document.hidden) return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => renderer.render(scene, camera));
  };
  const resize = () => {
    const { width, height } = canvas.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    render();
  };
  const applyProgress = (value: number) => {
    progress = THREE.MathUtils.clamp(value, 0, 1);
    const mobile = window.innerWidth <= 700;
    const tablet = window.innerWidth <= 1100;
    const abstractionStart = mobile ? 0.68 : tablet ? 0.75 : 0.82;
    const abstractionEnd = mobile ? 0.82 : tablet ? 0.88 : 0.93;
    const orientationEnd = mobile ? 0.44 : tablet ? 0.42 : 0.4;
    const zoomStart = mobile ? 0.5 : 0.47;
    const zoomEnd = mobile ? abstractionEnd - 0.08 : abstractionEnd - 0.12;
    const orientationProgress = THREE.MathUtils.clamp(progress / orientationEnd, 0, 1);
    // Ease-out starts moving as soon as scroll progress changes (smoothstep has
    // a zero-velocity start that made the first part of the interaction feel inert).
    const orientationAmount = 1 - (1 - orientationProgress) ** 2;
    const orientation = progress < orientationEnd
      ? startRotation.clone().slerp(panamaRotation, orientationAmount)
      : panamaRotation;
    earth.quaternion.copy(orientation);
    atmosphere.quaternion.copy(orientation);
    const zoom = THREE.MathUtils.smoothstep(progress, zoomStart, zoomEnd);
    const abstraction = THREE.MathUtils.smoothstep(progress, abstractionStart, abstractionEnd);
    camera.position.z = THREE.MathUtils.lerp(4.45, 2.7, zoom);
    // Keep the opening globe on the right of the editorial copy. During the zoom,
    // ease it toward the optical center so the Panama vector (rotated to +Z) is
    // centered by the camera instead of drifting toward open ocean.
    const initialX = mobile ? camera.aspect * 1.03 : tablet ? 0.82 : 1.05;
    const finalX = mobile ? 0.02 : tablet ? 0.04 : 0.06;
    const horizontalOffset = THREE.MathUtils.lerp(initialX, finalX, zoom);
    earth.position.set(horizontalOffset + abstraction * (mobile ? 0.04 : 0.15), abstraction * -0.04, 0);
    const initialScale = mobile ? Math.min(0.48, camera.aspect * 0.62) : tablet ? 0.98 : 1.08;
    const zoomScale = mobile ? 0.68 : tablet ? 0.72 : 0.72;
    earth.scale.setScalar(initialScale + zoom * zoomScale + abstraction * 0.04);
    atmosphere.position.copy(earth.position);
    atmosphere.scale.setScalar(earth.scale.x * (1.035 + abstraction * 0.025));
    earthMaterial.color.copy(earthBaseColor).lerp(earthHazeColor, abstraction * 0.86);
    const literal = 1 - THREE.MathUtils.smoothstep(progress, abstractionEnd - 0.08, abstractionEnd);
    earthMaterial.opacity = literal;
    earthMaterial.transparent = literal < 0.999;
    earth.visible = literal > 0.001;
    atmosphereMaterial.uniforms.uOpacity.value = 0.11 + abstraction * 0.34;
    starsMaterial.opacity = 0.28 + THREE.MathUtils.smoothstep(progress, 0.72, 1) * 0.34;
    render();
  };
  const onProgress = (event: Event) => applyProgress((event as CustomEvent<{ progress: number }>).detail.progress);
  const onVisibility = () => render();
  const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; if (inView) render(); }, { threshold: 0.01 });
  observer.observe(canvas);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("earth-hero-progress", onProgress);
  resize();
  applyProgress(progress);
  onReady();

  return {
    setProgress: applyProgress,
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect(); resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("earth-hero-progress", onProgress);
      geometry.dispose(); texture.dispose(); earthMaterial.dispose();
      atmosphereGeometry.dispose(); atmosphereMaterial.dispose();
      starsGeometry.dispose(); starsMaterial.dispose(); renderer.dispose();
    },
  };
}
