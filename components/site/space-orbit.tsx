import { useId } from "react";
import { serviceGroups } from "@/lib/public-site";
import styles from "./space-orbit.module.css";

// Original vector illustration, not a geographic map or a client asset.
// "La órbita que crece": the four Space worlds sit on rings that open outward from the Earth, as a brand's reach grows.
// Motion is a single CSS entrance (< 3 s, then still), only with prefers-reduced-motion: no-preference. No controls,
// no JavaScript: SSR, no-JS and reduced motion all show the same final, static composition.
const satellites = {
  marca: { cx: 74.9, cy: 461.5, ring: "inner" },
  comunicacion: { cx: 55.4, cy: 154.7, ring: "outer" },
  experiencias: { cx: 310.1, cy: 37.2, ring: "inner" },
  digital: { cx: 584.6, cy: 485.3, ring: "outer" },
} as const;

export function SpaceOrbit() {
  const id = useId().replaceAll(":", "");
  const paint = (name: string) => `url(#${id}-${name})`;

  return (
    <figure className={styles.scene} data-space-orbit aria-label="Ilustración de Space: la Tierra y la Luna en el centro, rodeadas por anillos que se abren hacia afuera con los cuatro mundos de Space: Marca, Comunicación, Experiencias y Digital.">
      <div className={styles.visual}>
        <svg viewBox="0 0 640 640" width="640" height="640" aria-hidden="true" focusable="false" className={styles.illustration}>
          <defs>
            <radialGradient id={`${id}-aura`}><stop offset=".4" stopColor="#659cce" stopOpacity=".13" /><stop offset="1" stopColor="#659cce" stopOpacity="0" /></radialGradient>
            <radialGradient id={`${id}-ocean`} cx="30%" cy="25%" r="82%"><stop stopColor="#75bacd" /><stop offset=".3" stopColor="#307f9f" /><stop offset=".67" stopColor="#195274" /><stop offset="1" stopColor="#071c32" /></radialGradient>
            <linearGradient id={`${id}-land`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#c1cbb2" /><stop offset=".4" stopColor="#7fa598" /><stop offset="1" stopColor="#3b6f68" /></linearGradient>
            <radialGradient id={`${id}-shade`} cx="24%" cy="24%" r="90%"><stop offset=".25" stopColor="#030e23" stopOpacity="0" /><stop offset=".58" stopColor="#030e23" stopOpacity=".07" /><stop offset=".83" stopColor="#030e23" stopOpacity=".55" /><stop offset="1" stopColor="#030e23" stopOpacity=".95" /></radialGradient>
            <radialGradient id={`${id}-rim`} cx="40%" cy="36%" r="65%"><stop offset=".84" stopColor="#b1d9ef" stopOpacity="0" /><stop offset=".97" stopColor="#a3dcf5" stopOpacity=".17" /><stop offset="1" stopColor="#8bc2e6" stopOpacity=".03" /></radialGradient>
            <radialGradient id={`${id}-moon`} cx="28%" cy="23%" r="88%"><stop stopColor="#f0ede2" /><stop offset=".4" stopColor="#c6cbd0" /><stop offset=".75" stopColor="#7d8d9c" /><stop offset="1" stopColor="#33465f" /></radialGradient>
            <clipPath id={`${id}-sphere`}><circle cx="360" cy="320" r="148" /></clipPath>
            {/* Depth: atmosphere glow, specular light, lit-side ring gradient and spherical satellites. */}
            <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%"><stop offset=".72" stopColor="#7fb6e6" stopOpacity="0" /><stop offset=".8" stopColor="#7fb6e6" stopOpacity=".38" /><stop offset=".9" stopColor="#5b8fd0" stopOpacity=".12" /><stop offset="1" stopColor="#5b8fd0" stopOpacity="0" /></radialGradient>
            <radialGradient id={`${id}-specular`} cx="32%" cy="27%" r="38%"><stop stopColor="#ffffff" stopOpacity=".42" /><stop offset=".45" stopColor="#ffffff" stopOpacity=".12" /><stop offset="1" stopColor="#ffffff" stopOpacity="0" /></radialGradient>
            <radialGradient id={`${id}-moonShade`} cx="22%" cy="20%" r="95%"><stop offset=".45" stopColor="#0b1a33" stopOpacity="0" /><stop offset="1" stopColor="#0b1a33" stopOpacity=".75" /></radialGradient>
            <radialGradient id={`${id}-moonGlow`}><stop offset=".55" stopColor="#e9eef5" stopOpacity=".28" /><stop offset="1" stopColor="#e9eef5" stopOpacity="0" /></radialGradient>
            <linearGradient id={`${id}-ringLit`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f3d9a8" stopOpacity=".85" /><stop offset=".5" stopColor="#e0bf8b" stopOpacity=".35" /><stop offset="1" stopColor="#e0bf8b" stopOpacity=".08" /></linearGradient>
            <linearGradient id={`${id}-ringCool`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e3ecf8" stopOpacity=".7" /><stop offset=".55" stopColor="#c4cfdf" stopOpacity=".22" /><stop offset="1" stopColor="#c4cfdf" stopOpacity=".05" /></linearGradient>
            <radialGradient id={`${id}-satGold`} cx="35%" cy="30%" r="70%"><stop stopColor="#fff3d6" /><stop offset=".45" stopColor="#e0bf8b" /><stop offset="1" stopColor="#9c7a45" /></radialGradient>
            <radialGradient id={`${id}-satCool`} cx="35%" cy="30%" r="70%"><stop stopColor="#ffffff" /><stop offset=".45" stopColor="#c4cfdf" /><stop offset="1" stopColor="#6f82a3" /></radialGradient>
          </defs>
          <g transform="translate(-40 0)">
          <circle cx="360" cy="320" r="300" fill={paint("aura")} />
          <g fill="#e3e9f1" opacity=".5">
            <circle cx="109" cy="158" r="1.2" /><circle cx="172" cy="407" r=".8" /><circle cx="567" cy="137" r="1.2" /><circle cx="628" cy="449" r=".9" /><circle cx="431" cy="63" r=".8" /><circle cx="252" cy="561" r="1.1" /><circle cx="92" cy="342" r=".7" /><circle cx="539" cy="528" r=".8" /><circle cx="294" cy="112" r=".7" /><circle cx="658" cy="241" r=".9" />
          </g>
          <circle data-growth-ring className={`${styles.ring} ${styles.ringInner}`} cx="360" cy="320" r="283" pathLength={1} fill="none" stroke={paint("ringLit")} strokeWidth="1.6" strokeDasharray="1 1" />
          <circle data-growth-ring className={`${styles.ring} ${styles.ringOuter}`} cx="360" cy="320" r="312" pathLength={1} fill="none" stroke={paint("ringCool")} strokeWidth="1.4" strokeDasharray="1 1" />
          <circle data-orbit-track cx="360" cy="320" r="253" fill="none" stroke="#cad6df" strokeOpacity=".43" strokeWidth="1" />
          <path d="M107 320 A253 253 0 0 0 613 320" fill="none" stroke="#e0d4bb" strokeOpacity=".4" strokeWidth="1.2" />
          <g transform="translate(360 320) scale(1.35) translate(-360 -320)" data-earth-system>
          <circle cx="360" cy="320" r="178" fill={paint("glow")} />
          <circle cx="360" cy="320" r="153" fill="none" stroke="#8bc2df" strokeOpacity=".075" strokeWidth="5" />
          <circle cx="360" cy="320" r="149" fill="none" stroke="#a2d0e2" strokeOpacity=".3" strokeWidth="1.2" />
          <circle data-earth cx="360" cy="320" r="148" fill={paint("ocean")} />
          <g clipPath={paint("sphere")}>
            <g fill={paint("land")} stroke="#c7d5c1" strokeOpacity=".22" strokeWidth=".7" strokeLinejoin="round">
              <path d="M245 227 258 218 268 202 288 192 301 201 317 197 327 207 342 205 354 218 371 214 382 225 394 224 402 239 392 251 378 254 373 268 363 270 354 284 345 286 349 302 342 306 335 289 322 291 316 300 318 312 330 318 336 327 330 333 323 326 311 322 300 317 294 305 282 299 273 281 265 266 254 263 244 252 235 251 232 240Z" />
              <path d="M244 225 224 227 212 239 221 246 237 239 255 238 269 224 268 214 256 215Z" />
              <path d="M334 331 347 324 360 328 373 338 387 343 396 357 397 370 389 380 384 397 374 408 368 425 354 444 344 448 346 432 342 416 336 402 335 389 328 375 320 360 322 347Z" />
              <path d="M410 190 424 181 444 187 450 201 439 218 430 232 416 223 410 207Z" fill="#cad8d2" />
              <path d="M455 246 465 239 480 244 483 256 497 260 506 274 509 294 496 304 478 301 466 289 454 285 452 273 442 267 447 255Z" />
              <path d="M468 311 479 302 493 305 511 321 518 344 501 356 497 377 485 388 478 373 480 356 469 344 459 329Z" />
              <path d="M342 307 349 308 353 313 347 315Z M358 310 365 314 371 314 367 317 359 315Z" />
            </g>
            <g fill="none" strokeLinecap="round">
              <path d="M273 242 282 260 280 279 291 295 M337 346 338 369 349 392 350 415" stroke="#d0c6a2" strokeWidth="4" opacity=".28" />
              <path d="M308 240 Q339 247 352 235 M354 355 Q366 350 381 359 M350 367 Q368 361 384 371" stroke="#d0dfc2" strokeWidth="1.3" opacity=".24" />
              <path d="M232 220 Q281 174 347 202 T459 217 M219 278 Q252 261 274 273 T322 279 M363 288 Q414 269 475 287 M242 347 Q277 328 297 343 T324 349 M372 411 Q414 384 459 401" stroke="#eaf1f0" strokeWidth="4" opacity=".34" />
              <path d="M244 215 Q279 190 310 203 M241 281 Q254 276 272 282 M388 283 Q416 275 445 282 M253 343 Q275 336 292 345 M387 407 Q418 393 437 400" stroke="#f6f8f5" strokeWidth="2.3" opacity=".75" />
              <path d="M227 377 Q257 371 280 388 M411 331 Q444 323 480 336" stroke="#9bc9d7" strokeWidth="1" opacity=".23" />
            </g>
            <path d="M261 183 Q347 150 408 177 L399 189 376 188 357 196 329 188 310 198 285 191Z M288 455 Q359 449 414 459 L415 481 290 483Z" fill="#d8e5e2" opacity=".75" />
            <g fill="none" strokeLinecap="round">
              <path d="M258 224 Q274 217 289 222 T322 217 M296 262 Q304 251 319 255 M337 356 Q347 362 349 379 T357 404 M354 341 Q364 345 372 343" stroke="#d1cfac" strokeWidth="1.1" opacity=".45" />
              <path d="M256 232 266 238 271 249 M291 234 305 230 314 234 M347 364 352 371 353 385 M364 376 371 381" stroke="#426f69" strokeWidth="2" opacity=".4" />
              <path d="M230 307 C250 290 268 291 285 299 S317 315 327 304 M242 308 Q267 298 278 306 M394 242 C411 230 430 231 447 242 S466 249 476 245 M399 247 Q420 238 435 246 M402 361 C422 345 443 350 452 366 Q453 379 441 378 Q434 374 440 369 M411 368 Q426 357 438 363" stroke="#edf3ef" strokeWidth="2" opacity=".51" />
              <path d="M235 296 Q267 283 297 299 M389 238 Q422 219 451 235 M404 356 Q426 341 445 353" stroke="#a9d1da" strokeWidth="6" opacity=".13" />
            </g>
            <circle cx="360" cy="320" r="148" fill={paint("shade")} />
            <circle cx="360" cy="320" r="148" fill={paint("rim")} />
            <circle cx="360" cy="320" r="148" fill={paint("specular")} />
          </g>
          </g>
          <g className={styles.orbiter} data-orbiter>
            <g className={styles.moonBody}>
              <circle cx="613" cy="320" r="46" fill={paint("moonGlow")} />
              <circle data-moon cx="613" cy="320" r="31.5" fill={paint("moon")} />
              <g fill="#56667a" opacity=".25"><circle cx="602" cy="309" r="7" /><circle cx="623" cy="329" r="10" /><circle cx="608" cy="335" r="4" /><circle cx="624" cy="305" r="3.5" /><circle cx="596" cy="322" r="3" /><circle cx="615" cy="300" r="2" /></g>
              <g fill="none" stroke="#e0e4e0" strokeOpacity=".32" strokeWidth="1"><path d="M597 311 A7 7 0 0 1 608 305 M615 330 A10 10 0 0 1 629 321 M603 337 A4 4 0 0 1 610 333" /></g>
              <circle cx="613" cy="320" r="31.5" fill={paint("moonShade")} />
              <circle cx="613" cy="320" r="31.5" fill="none" stroke="#e5ebee" strokeOpacity=".25" strokeWidth=".7" />
            </g>
          </g>
          {serviceGroups.map((group, index) => {
            const point = satellites[group.id];
            return <g key={group.id} data-satellite={group.id} className={styles.satellite} style={{ animationDelay: `${1.15 + index * .22}s` }}>
              <circle cx={point.cx + 40} cy={point.cy} r="16" fill={point.ring === "inner" ? "#e0bf8b" : "#c4cfdf"} fillOpacity=".16" />
              <circle cx={point.cx + 40} cy={point.cy} r="8" fill={paint(point.ring === "inner" ? "satGold" : "satCool")} />
            </g>;
          })}
          </g>
        </svg>
        <ul className={styles.labels} aria-hidden="true">
          {serviceGroups.map((group, index) => <li key={group.id} data-world={group.id} style={{ animationDelay: `${1.35 + index * .22}s` }}>{group.title}</li>)}
        </ul>
        <div className={styles.fallback} aria-hidden="true" data-orbit-fallback><span className={styles.fallbackEarth} /><span className={styles.fallbackMoon} /></div>
      </div>
    </figure>
  );
}
