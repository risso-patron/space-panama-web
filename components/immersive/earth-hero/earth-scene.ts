import * as THREE from "three";
import { EARTH_TEXTURE, PANAMA, START_VIEW, geoVector } from "./earth-config";

export type EarthSceneHandle = { setProgress: (progress: number) => void; dispose: () => void };

export async function createEarthScene(canvas: HTMLCanvasElement, onReady: () => void): Promise<EarthSceneHandle> {
  const texture = await new THREE.TextureLoader().loadAsync(EARTH_TEXTURE);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 30);
  camera.position.z = 4.05;
  scene.add(new THREE.AmbientLight(0x9cb1d0, 2.25));
  const sun = new THREE.DirectionalLight(0xffe7c1, 2.2);
  sun.intensity = 3;
  sun.position.set(-3.5, 2.2, 4);
  scene.add(sun);

  const geometry = new THREE.SphereGeometry(1, 96, 64);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  const earthMaterial = new THREE.MeshStandardMaterial({ map: texture, roughness: 1, metalness: 0 });
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
    const orientation = progress < 0.45
      ? startRotation.clone().slerp(panamaRotation, THREE.MathUtils.smoothstep(progress, 0.2, 0.45))
      : panamaRotation;
    earth.quaternion.copy(orientation);
    atmosphere.quaternion.copy(orientation);
    const zoom = THREE.MathUtils.smoothstep(progress, 0.45, 1);
    const abstraction = THREE.MathUtils.smoothstep(progress, 0.72, 1);
    camera.position.z = THREE.MathUtils.lerp(4.05, 2.18, zoom);
    earth.position.set(abstraction * 0.13, abstraction * -0.035, 0);
    earth.scale.setScalar(1 + abstraction * 0.025);
    atmosphere.position.copy(earth.position);
    atmosphere.scale.setScalar(1 + abstraction * 0.2);
    earthMaterial.color.copy(earthBaseColor).lerp(earthHazeColor, abstraction * 0.72);
    const literal = 1 - THREE.MathUtils.smoothstep(progress, 0.76, 1);
    earthMaterial.opacity = literal;
    earthMaterial.transparent = literal < 0.999;
    earth.visible = literal > 0.001;
    atmosphereMaterial.uniforms.uOpacity.value = 0.18 + abstraction * 1.75;
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
