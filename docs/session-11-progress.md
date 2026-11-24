# Revisión local 11 · continuidad y verificación de entrega

Sesión del 2026-11-20 en Linux. Local: **sin commit, push, merge, despliegue ni cambios en dominios, analítica o servicios externos.** Pendiente de revisión del dueño.

## 1. Estado de Git al iniciar (sin cambios en Git durante la sesión)

- Raíz: `/home/luis/Proyectos/space-panama-web` · `origin https://github.com/risso-patron/space-panama-web.git` (coincide con el remoto indicado por Luis).
- Rama `codex/immersive-earth-hero-v13`, HEAD `8cf0f77a4d8c` (2026-10-06), **1 commit por delante** de `origin/codex/immersive-earth-hero-v13`; 37 commits por delante de `main` local (`main` local está 27 por detrás de `origin/main`; no se tocó).
- Árbol ya modificado al llegar: 33 archivos modificados + 39 entradas sin seguimiento (revisiones 05–10, incluida la 10 de Servicios). Se conservó todo.
- Respaldo previo: `.local-review/session-11/before/` (`current.patch`, `status.txt`, `current-site.tar`, sin `node_modules`, `.env.local` ni `.git`).
- Se encontró otra copia en `/media/luis/LINUX MINT/space-panama-web` (misma rama y HEAD, 72 entradas en `git status`). **No se sincronizó ni se modificó.**
- `E:\SPACE MARKETING` no está montado en este equipo: no se consultó.

## 2. Entorno

- Node v26.13.1 · Chrome del sistema `/usr/bin/google-chrome` (headless) · Playwright-core 1.54.1 y Lighthouse 12 instalados **solo en el scratchpad de la sesión**, no en el proyecto.
- Los `node_modules` venían de Windows (binarios `win32`, `.bin` sin permiso de ejecución; `npm run lint` fallaba con *Permission denied*). Se movieron intactos a `.local-review/session-11/node_modules-windows` (y `.next` a `next-windows`) y se reinstaló con `npm ci --ignore-scripts` desde el mismo lockfile.

## 3. Cambios de esta sesión

| Archivo | Cambio | Motivo (evidencia) |
| --- | --- | --- |
| `package.json`, `package-lock.json` | `next` y `eslint-config-next` 16.4.1 → **16.4.6** (versión exacta, mismo major/minor) | `next build` se detenía con un aviso de seguridad; `npm audit --omit=dev` listaba 7 avisos de Next 16.4.1 (caché, optimizador de imágenes SVG, cabeceras). Tras el parche: **0 vulnerabilidades de producción**. No se ejecutó el `next upgrade --agent=security` que sugiere la salida del build. |
| `components/site/site-shell.tsx`, `site-shell.module.css` | Clase `footerDescription` para el texto del pie | El selector `.footerIntro > p:last-child` dejó de aplicar cuando el control de animación pasó a ser el último hijo: el texto quedaba pegado a «PANAMÁ», más grande y sin el color atenuado. |
| `components/site/site-home.module.css` | El fondo del Hero se desvanece (máscara inferior del 28 %) en el degradado común de la apertura; la línea entre Hero y Manifiesto se difumina en los extremos | Corte de color medido en Chrome (#2a3c54 → #27354a) y línea dura entre capítulos. Ilustración Tierra–Luna, copy, CTA y geometría intactos. |
| `components/site/site-home.module.css` | Panel Digital de Cuatro mundos más compacto en móvil | Bloque de texto decorativo de ~330 px sin contenido nuevo, repetido justo antes del capítulo Digital. Cuatro mundos a 390 px: 2551 → 2521 px. |
| `components/site/site-home.module.css` | Texto alternativo legible si falla una imagen | En la prueba provocada, el `alt` de Don Ceviche aparecía crema sobre gris claro (ilegible). |
| `app/trabajo/page.tsx` | Piezas únicas cuadradas ≤ 680 px y verticales ≤ 560 px (sin recorte) | Prevengo ocupaba ~1055 px de ancho y dominaba la página. Trabajo a 1440 px: 8588 → 8030 px. |
| `components/site/site-pages.module.css` | Tarjetas de Contacto móviles sin altura mínima fija | Hueco vacío entre etiqueta y dato. Contacto a 390 px: 2019 → 1926 px. |
| `tests/site.test.mjs` | Excepción Sissy precisa | Además de prohibir `assets/sissy`, exige que el **único** asset público con «sissy» sea `segurosconsissy-logo.jpg` y que nada de `/assets/sissy/` sea público. Psico Jazmín, AsuMesa y `portfolio-v12` siguen bloqueados. |

No se modificaron originales de medios, el inventario, la ilustración, rutas, navegación, contenidos ni datos de contacto.

## 3b. Actualización tras la confirmación de Luis (2026-11-20, 21:20)

Luis confirmó que SOMOS Properties, HomePower PTY, HostPro Panamá y Provivir Panamá las hizo él en un empleo para otra empresa, y que los sitios hechos en Space son **Fénix Refrigeración** y **Rosas Rodríguez & Asociados**.

| Archivo | Cambio |
| --- | --- |
| `public/assets/digital/*.png` | Copias exactas de los mockups de Space publicados en https://spaceventos.com/desarrollo-web/ (12-1.png y 13-1.png). Hashes en `resource-review/services-refinement-sources.md` § D. |
| `lib/public-site.ts` | `digitalProposal` (portfolio del empleo) sustituido por `digitalWork` (Fénix, Rosas Rodríguez). Las 4 capturas del empleo salen de `publicAssets` y el Proxy las responde con 404; siguen en disco. |
| `next.config.ts` | El optimizador de imágenes permite `/assets/digital/*` y ya no `digital-proposal/*`. |
| `components/site/site-home.tsx` / `.module.css` | Capítulo Digital: «Sitios desarrollados por Space» con los dos mockups. Cuatro mundos: el panel de texto de Digital pasa a mostrar el sitio de Rosas Rodríguez, con enlace «Ver los sitios». |
| `app/trabajo/page.tsx`, `site-pages.module.css` | Nueva sección `#sitios-web` (Digital · Desarrollo web) con ambos sitios sobre panel oscuro; metadata actualizada. |
| `app/servicios/page.tsx` | Digital enlaza a `/trabajo#sitios-web`; Experiencias enlaza a `/trabajo#casamiento`. |
| `tests/services-refinement.test.mjs`, `scripts/smoke.mjs` | La prueba exige solo los dos sitios de Space, sus hashes y que ningún asset `digital-proposal` ni los nombres del empleo aparezcan; el smoke comprueba el 404 de una captura del empleo. RED observado antes de implementar. |

Excluidos de esa página de spaceventos.com: el mockup «drgraphic» (no confirmado) y dos imágenes genéricas (25/26.webp). Resultado: lint, 15/15 pruebas, build, smoke y 24/24 vistas Chrome sin desbordes, imágenes rotas ni errores (salvo el 404 esperado). Capturas: `.local-review/session-11/r2/`.

## 3c. Segunda ronda de respuestas (2026-11-20, 21:35)

- **Fénix:** Space hizo logo y web → nuevo caso `#fenix-refrigeracion` en Trabajo (logo de Marca + mockup del sitio). En Inicio el pie dice «Identidad y sitio web de Space».
- **Rosas Rodríguez & Asociados:** se rotula «Sitio web de Space · el logo de la firma no es de Space». No hay más material en spaceventos.com.
- **drgraphic:** excluido (no es trabajo para Space).
- **Comparo360:** capturas reales de escritorio y móvil del sitio vivo (2026-11-20) en Inicio (Digital) y Trabajo (`#comparo360`). Crédito provisional «Desarrollo de Luis Risso Patrón, del equipo de Space». Bello Monte se añadirá cuando esté en línea.
- **Nosotros:** sección Equipo preparada (`team`, `teamPhoto` en `lib/public-site.ts`), oculta mientras esté vacía; una prueba impide mostrarla sin foto, función y descripción.
- Pruebas: 17/17 (2 nuevas, RED observado antes), lint, build, smoke y 24/24 vistas Chrome.

## 3d. Cuatro mundos · «Una misma órbita» (2026-11-20, 22:00)

Problema observado: el título promete una órbita, pero la sección eran cuatro tarjetas iguales sin relación visual con el Hero; los ocho servicios reales no aparecían en Inicio; el bloque era largo en móvil sin un índice.

| Cambio | Detalle |
| --- | --- |
| Índice orbital estático | SVG con dos elipses (misma línea y crema del Hero) y un núcleo azul `#3B598D` «Space»; los cuatro mundos son enlaces reales (HTML, no dentro del SVG) a `#mundo-marca`, `#mundo-comunicacion`, `#mundo-experiencias`, `#mundo-digital`. Sin animación, sin numeración. En móvil pasa a una cuadrícula 2 × 2 de enlaces. |
| Servicios por mundo | Debajo de cada introducción, las etiquetas de los servicios reales de `serviceGroups` (8 en total), las mismas de /servicios. |
| Anclas | Cada mundo tiene `id` y `scroll-margin-top` para no quedar bajo la cabecera fija. |
| Prueba nueva | Índice con 4 enlaces a `#mundo-*`, servicios listados, sin `animation`/`@keyframes` ni números ni `↗` en el índice. |

Medidas (Chrome): sin solapamientos ni desborde a 1440/1024/768/390/320; enlaces de 44–48 px de alto. Altura de la sección: 1926 → 2338 px (1440), 2602 → 2940 px (390). Resultados: lint, **18/18** pruebas, build, smoke, 24/24 vistas (solo el 404 esperado), teclado/carrusel/movimiento reducido/sin JS sin cambios. Lighthouse Inicio móvil: A11y/BP/SEO 100; rendimiento 85–93 en tres corridas (mismo peso, 312 KiB; la variación es TBT de la máquina local).

## 3e. Hero · opción A «La órbita que crece» (aprobada por Luis, 2026-11-20 22:14)

Propuesta hecha con la skill `.agents/skills/space-panama-design`; Luis eligió la opción A. Respaldo previo: `.local-review/session-11/hero-a-before/`.

| Archivo | Cambio |
| --- | --- |
| `components/site/space-orbit.tsx` | Tierra–Luna original intacta. Se añaden dos anillos de crecimiento (r 283 y 312) y los cuatro mundos de `serviceGroups` como satélites, con etiquetas HTML decorativas; el `aria-label` de la figura nombra los cuatro mundos. Pasa a componente de servidor (sin JavaScript de cliente). |
| `components/site/space-orbit.module.css` | Una sola entrada, solo con `prefers-reduced-motion: no-preference`: anillos que se dibujan hacia afuera, satélites y etiquetas que aparecen escalonados y la Luna que llega a su posición. **Termina a los 2,51 s** y no queda ninguna animación activa; sin bucle. La composición final es el estado por defecto (SSR, sin JS, movimiento reducido). En móvil, «Comunicación» va sobre su punto para no salirse a 320 px. Fallback CSS si falla el SVG: `~` en lugar de `+` para seguir funcionando con las etiquetas. |
| `components/site/site-shell.tsx` / `.module.css` | Se quitan «Animar la Tierra/Detener animación» del pie y el atajo de teclado: con una entrada menor de 5 s no hace falta control (WCAG 2.2.2). |
| `components/site/site-motion-control.tsx`, `lib/site-motion.ts` | Eliminados (sin uso; copia en el respaldo). |
| `tests/site.test.mjs`, `scripts/smoke.mjs` | Pruebas: 2 anillos y 4 satélites; animaciones solo dentro de la media query, sin `infinite`, todas terminan antes de 3 s; sin botones ni textos de pausa/movimiento. Smoke: el HTML del Hero trae 2 anillos y 4 satélites. |

Medidas (Chrome headless): 1440/1024/768/390/320 sin desborde, sin etiquetas fuera de pantalla, sin solapes entre etiquetas ni con la Luna o el titular; CTA visible en la primera pantalla; 0 animaciones tras 3 s; 0 con movimiento reducido; sin JS: 2 anillos, 4 satélites, 0 botones; fallo del SVG: alternativa visible. Lint, **18/18** pruebas, build, smoke, 24/24 vistas. Lighthouse Inicio móvil: rendimiento 96–97, A11y/BP/SEO 100, CLS 0.

## 3f. Manifiesto · opción A «Dos líneas, un rumbo» (aprobada por Luis, 2026-11-20 22:29)

Respaldo previo: `.local-review/session-11/manifesto-a-before/`.

| Archivo | Cambio |
| --- | --- |
| `components/site/manifesto-path.tsx` (nuevo) | Dibujo SVG: Estrategia (recta, azul de marca aclarado `#6f8fc4`) y Creatividad (curva libre, crema) salen de «Brief», se cruzan en Experiencias, se unen en Digital y suben juntas a Crecimiento. Los cinco principios siguen siendo HTML (`<ul>`), en cinco columnas bajo sus estaciones. Móvil (≤ 760 px): versión vertical con la recta y la curva a la izquierda de la lista. |
| `components/site/manifesto-path.module.css` (nuevo) | Estado por defecto = dibujo completo (SSR, sin JS, movimiento reducido, sección ya visible al cargar). Solo si la sección está fuera de pantalla al hidratar y el movimiento está permitido, las líneas se dibujan **una vez** al entrar (1,6–2,05 s; estaciones a 1,4 + 0,6 s). Sin scroll atado, sin bucle. |
| `components/site/site-home.tsx` / `.module.css` | El Manifiesto envuelve la lista en `ManifestoPath`; se quitan los estilos de filas anteriores. |
| `tests/services-refinement.test.mjs` | Nueva prueba: dos líneas nombradas, estado inicial estático, respeto de movimiento reducido, nunca ocultar contenido ya visible, sin `animation-timeline`/`infinite`, transiciones ≤ 3 s. |

Medidas: sin solapes ni desborde a 1440/1024/768/390/320; 0 animaciones activas al terminar; movimiento reducido, sin JS y pantalla alta → estado estático. Altura del Manifiesto: 1440 px 1078 → 1079; 390 px 1078 → 1098 (+20 px). Lint, **19/19** pruebas, build, smoke, 24/24 vistas; Hero y resto de checks sin cambios. Lighthouse Inicio móvil: rendimiento 85–88 (TBT de la máquina local), A11y/BP/SEO 100, CLS 0.

## 3g. Trabajo seleccionado · «Cada caso, su mundo» (aprobada por Luis, 2026-11-20 22:41)

Respaldo previo: `.local-review/session-11/work-a-before/`.

| Cambio | Detalle |
| --- | --- |
| Fénix en Inicio | Nuevo caso destacado entre Don Ceviche y EMC, con fondo intermedio `#2b3a52`, imagen a la izquierda (alternancia) y el logo junto al mockup de la web; enlaza a `/trabajo#fenix-refrigeracion`. |
| Marcas de mundo | Componente `WorldMarks`: los cuatro mundos con el punto dorado del Hero encendido según el caso (Don Ceviche y EMC: Comunicación; Fénix: Marca y Digital). Texto oculto «Mundos: …» para lectores de pantalla; los nombres apagados mantienen contraste AA (Lighthouse marcó 1,7–2,4:1 en el primer intento con opacidad y se corrigió). |
| Detalles | La pieza de Don Ceviche ya no tiene fondo gris; en móvil, previsualizaciones de Prevengo/Héroes a 220 px y rellenos verticales más compactos. |
| Prueba nueva | Tres casos con `WorldMarks`, Fénix con logo y web, orden Don Ceviche → Fénix → EMC, texto accesible. |

Medidas: Trabajo seleccionado 1440 px 3181 px; 390 px 3030 → 3512 px (+482, algo más de los ~400 previstos por la imagen doble de Fénix). Lint, **20/20** pruebas, build, smoke, 24/24 vistas; imágenes de la sección cargadas en navegación real (las capturas de página completa a veces las omiten por la carga diferida: es un límite del método de captura, no de la página). Lighthouse móvil: Inicio rendimiento 86, Trabajo 92; A11y/BP/SEO 100; CLS 0.

## 3h. Digital · «Cómo se ve estar bien en la web» (aprobada por Luis, 2026-11-21 18:07)

Respaldo previo: `.local-review/session-11/digital-a-before/`. Herramientas de verificación ahora guardadas de forma durable en `.local-review/session-11/tools/` (el scratchpad se borró entre sesiones).

| Cambio | Detalle |
| --- | --- |
| Título | «Digital en movimiento» → **«Digital, en todas las pantallas.»** (pedido de Luis). La sección no tiene movimiento. |
| Vitrina | Capturas reales de Comparo360 (escritorio + móvil) con tres marcas sobre la captura de escritorio: Identidad (logo), Navegación (menú) y Contenido (titular). Las tres notas son texto real (`<h3>` + frase) dentro de la figura; las marcas son decorativas (`aria-hidden`). Sustituyen la lista genérica «Identidad · Contenido · Navegación». |
| Sin repetir | Fénix sale de Digital (ya está destacado en Trabajo seleccionado) y queda un enlace «Ver el caso Fénix»; Rosas Rodríguez pasa a segundo ejemplo con «Ver todos los sitios». |
| Móvil | Solo la captura móvil, al lado de las tres notas; la de escritorio (y sus marcas) no se muestra ni se descarga. |
| Prueba nueva | Título, capturas, notas como texto dentro de la figura, sin `digitalWork[0]` (Fénix) en la sección, sin animación ni transición. |

Medidas: sin solapes de marcas ni marcas fuera de la captura (1440/1024/768); Digital 390 px **2001 → 1748 px**, 1440 px 2053 px. Lint, **21/21** pruebas, build, smoke, 24/24 vistas sin incidencias, teclado/carrusel/menú/movimiento reducido/sin JS/fallback SVG correctos. Lighthouse Inicio móvil: rendimiento 86–87, A11y/BP/SEO 100, CLS 0, 320 KiB.

## 3i. Reorganización de páginas: Inicio = tráiler, Servicios = qué hacemos y cómo (aprobada por Luis, 2026-11-21 18:21)

Estrategia acordada: Inicio atrae y muestra pocas pruebas; Servicios explica qué y cómo; Trabajo muestra todo; Nosotros, confianza (fotos del equipo el lunes); Blog más adelante, solo con publicación constante. Respaldo previo: `.local-review/session-11/reorg-before/`.

| Archivo | Cambio |
| --- | --- |
| `components/site/service-evidence.tsx` (nuevo) | `WorldMedia` (pruebas por mundo, compartidas por Inicio y Servicios), `DigitalShowcase` (Comparo360 con notas + Rosas + enlace a Fénix) y `MethodSequence` (seis pasos). |
| `components/site/site-home.tsx` | Inicio queda en **Hero → Manifiesto → 3 casos → Cuatro mundos → cierre**. Salen Digital y Método (a Servicios) y Prevengo/Héroes (siguen en Trabajo), con un botón «Ver todo el trabajo». «Ver los sitios» apunta a `/servicios#sitios-web`. |
| `app/servicios/page.tsx` | Título «Qué hacemos y cómo lo hacemos.»; índice de mundos; Marca, Comunicación y Experiencias con sus servicios y su prueba real en panel oscuro; banda Digital con la vitrina; banda «Cómo trabajamos» con Método; llamada a contacto. Metadata actualizada. |
| `site-home.module.css` / `site-pages.module.css` | Clase `.band` (tokens editoriales oscuros reutilizables), `.evidencePanel`, `.serviceBand`, `.workAll`, `.serviceIndex`. Se corrigió en el acto un selector partido que desbordaba Trabajo a 390 px. |
| Pruebas y smoke | Nueva prueba de la reorganización; las de Digital/Método/mundos leen ahora `service-evidence.tsx`. Smoke: capítulos de Inicio = 5 y sin Método/vitrina/archivo; Servicios con `#marca`…`#digital`, `#sitios-web`, `#metodo`, los seis pasos y Comparo360. |

Alturas: Inicio 1440 px **11 550 → 8 168**, 390 px **12 996 → 9 214**; Servicios 1440 px 3 269 → 8 236 (ahora contiene las pruebas, Digital y Método). Lint, **22/22** pruebas, build, smoke, 24/24 vistas sin incidencias, teclado/carrusel/menú/movimiento reducido/sin JS/fallback correctos. Lighthouse móvil: Inicio 95, Servicios 94, Trabajo 89 en rendimiento; A11y/BP/SEO 100 y CLS 0 en las tres.

## 3j. Material de las páginas de servicio de spaceventos.com (2026-11-21 18:37)

Luis aportó /social-media/, /identidad-visual/, /diseno-de-flyers/ y /diseno-de-packaging/. Detalle de las 21 imágenes, hashes y exclusiones en `resource-review/services-refinement-sources.md` § F.

| Cambio | Detalle |
| --- | --- |
| `public/assets/spaceventos/social/*` (8) y `/packaging/prevengo-caja.png` | Copias exactas: 4 publicaciones de Don Ceviche, Total Import, 2 de Pappagallo Automation, WeCareShare y el empaque de Prevengo. |
| `lib/public-site.ts`, `next.config.ts` | `socialPieces`, `packagingPieces`; entran en la lista pública y en el optimizador de imágenes. |
| Servicios | Marca: identidades + empaque de Prevengo. Comunicación: galería de las 8 publicaciones (enlace a `/trabajo#redes-sociales`). |
| Trabajo | Nueva sección «Publicaciones para redes. Cada marca, su tono.» y el empaque dentro del caso Prevengo. Metadata acortada. |
| Prueba nueva | Procedencia y hash de cada pieza; fuera los mockups genéricos, AsuMesa (10-1) y el flyer con fotografía de futbolista (9-1). |

Excluidas: 10 imágenes genéricas de plantilla, el flyer con AsuMesa y el de «Banderazo en Casco». Resultados: lint, **23/23** pruebas, build, smoke, 24/24 vistas sin incidencias y checks de interacción correctos. Lighthouse móvil: Servicios 99 y Trabajo 99 en rendimiento; A11y/BP/SEO 100, CLS 0.

## 3k. Respuestas del dueño y Héroes de Panamá destacado (2026-11-21 18:49)

- Flyer «Campeonato de Truco / Banderazo en Casco»: **fuera** (confirmado).
- Fotos de banco (p. ej. WeCareShare): normalmente con licencia, pero **sin confirmar**; sigue como pendiente antes de publicar.
- Pappagallo: empresa en crecimiento que se dividió en **Pappagallo Automation** y **Pappagallo Medical**; los rótulos actuales ya los nombran por separado.
- **Trabajo seleccionado (Inicio):** Héroes de Panamá reemplaza a Don Ceviche como primer caso (cartel vertical con ancho máximo de 440 px, mundos Comunicación y Experiencias, enlace a `/trabajo#heroes-de-panama`). Don Ceviche sigue en Cuatro mundos, Servicios y Trabajo. Respaldo: `.local-review/session-11/heroes-before/`.
- **Blog:** tres artículos de Luis registrados en [`blog-plan.md`](blog-plan.md) para cuando se cree el blog.

Resultados: lint, **23/23** pruebas, build, smoke y 24/24 vistas sin incidencias. Lighthouse Inicio móvil: A11y/BP/SEO 100, CLS 0.

## 3l. Cuatro mundos: solo la órbita (pedido de Luis, 2026-11-21 19:00)

Se quitaron de Inicio las cuatro tarjetas con imágenes (siguen en Servicios). Queda la órbita con «Space» al centro y Marca, Comunicación, Experiencias y Digital como enlaces a `/servicios#<mundo>`; al pasar el puntero o con foco de teclado, la píldora se vuelve dorada con texto oscuro. Sin movimiento. Respaldo: `.local-review/session-11/orbit-only-before/`. Inicio 1440 px: 8 168 → **6 628 px**; 390 px: 9 214 → **7 002 px**. Lint, 23/23 pruebas, build, smoke, 24/24 vistas sin incidencias; hover verificado (rgb 34,45,61 → 224,191,139) y clic que abre `/servicios#comunicacion` bajo la cabecera. Lighthouse Inicio móvil 96 / 100 / 100 / 100, CLS 0.

## 3m. Boda, XV Años y campaña de Héroes de Panamá (2026-11-21 19:15)

Material: `SPACE MARKETING` (disco montado en Linux) y 4 fotos + textos del XV Años y de la boda aportados por Luis. Procedencia, hashes y exclusiones: `resource-review/services-refinement-sources.md` § G.

| Cambio | Detalle |
| --- | --- |
| `public/assets/casos/{boda,xv,heroes}/*.webp` (16) | 6 fotos nuevas de la boda (montajes sin invitados), 2 del XV Años (pastel y mesa de dulces; rincón de fotos) y 8 piezas de la campaña de Héroes de Panamá (identidad, lanzamiento y carrusel de bases/participación/concepto/premios/calendario/organizadores). |
| `lib/public-site.ts` | `eventCases` (Boda · Octubre 2024; XV Años · Noviembre 2023) con los textos de Luis condensados; `heroesCampaign`; descripción de Héroes ampliada (identidad, cartel y campaña en redes). |
| Trabajo | El antiguo «casamiento» pasa a **Boda** (mismo ancla `#casamiento`, 8 fotos en mosaico, alcance y frase de Luis); nuevo caso **XV Años** (`#xv-anos`); Héroes de Panamá muestra la campaña bajo el cartel. |
| Servicios → Experiencias | Tira horizontal con 6 fotos (boda y XV), desplazable con teclado y tacto. |
| Prueba nueva | Derivados con hash, textos del dueño, 8 piezas de campaña sin datos de participantes, ancla `#casamiento` conservada. |

No se usan dibujos, nombres, certificados, jurados, ganadores ni documentos de Héroes de Panamá; ni fotos con invitados. Resultados: lint, **24/24** pruebas, build, smoke, 24/24 vistas sin incidencias, interacción correcta. Lighthouse móvil: Trabajo 100, Servicios 99, Inicio 95 en rendimiento; A11y/BP/SEO 100 y CLS 0.

## 3n. Aprobación de Héroes y eventos sin personas (2026-11-21 19:44)

Luis confirmó el visto bueno de The Academy y Panamá Accesible para la campaña de Héroes de Panamá y decidió no mostrar invitados, novios ni la familia del XV Años. Se quitaron los nombres de la pareja: el caso pasa a «Boda · Octubre 2024» (ancla `#casamiento` intacta) y el pie de Servicios dice «Boda (2024) y XV Años (2023)». Una prueba impide reintroducir los nombres.

## 3o. Instagram y paleta unificada con el azul del logo (2026-11-21 20:00)

- **Instagram** `@agenciaspacepanama` (https://www.instagram.com/agenciaspacepanama/, aportado por Luis; faltaba en la web pública): en `contact` (`lib/public-site.ts`), pie de página, cierre de Inicio y nueva tarjeta en Contacto (cuatro tarjetas).
- **Paleta:** el logo es un solo azul (#3B598D sobre blanco). Fondos oscuros unificados en esa familia: base navy `#1B2A46`, paso alterno `#22365A`, apertura en degradado desde `#3B598D`, cierre `#2B4574`; texto blanco frío `#F2F5FB`. Desaparecen el verde azulado `#173641`, la franja crema de EMC y los grises `#222D3D/#2B3A52/#354A67`. Placas de logos y piezas pasan de crema a blanco. Pie y fondos claros a `#F4F7FB`. El dorado queda solo como acento pequeño (puntos y etiquetas). Respaldo: `.local-review/session-11/colors-before/`.
- Contraste AA recalculado para los 20 pares de texto/fondo (prueba actualizada); prueba nueva que impide volver a los colores retirados y verifica Instagram.

Resultados: lint, **25/25** pruebas, build, smoke, 24/24 vistas sin incidencias. Lighthouse móvil: Inicio 97, Servicios 97, Contacto 98; A11y/BP/SEO 100, CLS 0.

## 3p. Paleta B «más luz» (elegida por Luis, 2026-11-21 20:36)

Clase `.light` (+ `.lightTint`) en `site-home.module.css`: reasigna los mismos tokens a fondo blanco / azul claro `#F4F7FB`, texto `#17233B`, secundario `#4F5E75`, acentos y enlaces en el azul del logo `#3B598D`/`#29436F`. Aplicada a Manifiesto, Trabajo seleccionado (blanco/claro alternos), Cuatro mundos y, en Servicios, a los paneles de cada mundo, Digital y Método. El azul oscuro queda solo en el Hero y el cierre (y la llamada a contacto). Las líneas del Manifiesto pasan a azul de marca y azul claro; los paneles de sitios web de Trabajo a `#EAF0F7`. Respaldo de la paleta anterior: `.local-review/session-11/palette-a-before/`.

Resultados: lint, 25/25 pruebas (contraste ampliado con los pares claros), build, smoke, 24/24 vistas sin incidencias. Lighthouse móvil: Inicio 87, Servicios 86, Trabajo 98 en rendimiento (variación de la máquina local, mismo peso); A11y/BP/SEO 100, CLS 0.

## 3q. Más profundidad en Hero y «El universo Space»; logo en el pie (2026-11-21 20:42)

Comentario recibido: «todo se ve muy plano». Respaldo: `.local-review/session-11/depth-before/`.

- **Hero (SVG, sin imágenes nuevas):** halo de atmósfera alrededor de la Tierra, brillo especular, Luna con resplandor y lado en sombra, anillos con degradado (más luz en el lado iluminado), satélites como pequeñas esferas con luz, etiquetas con sombra y sombra general de la ilustración (`drop-shadow`). Geometría, colores base, entrada de 2,5 s y alternativas intactas.
- **El universo Space:** plano de la órbita con degradado, mitad lejana tenue y mitad cercana marcada (perspectiva), sombra proyectada bajo la esfera, esfera «Space» con luz y sombra internas, píldoras con relieve (degradado, sombra) que en hover pasan a dorado y se elevan 2 px (sin transición con movimiento reducido).
- **Pie:** el logo de Space (enlace a Inicio) reemplaza el texto «SPACE PANAMÁ».

Resultados: lint, 25/25 pruebas, build, smoke, 24/24 vistas sin incidencias; Hero sin etiquetas fuera de pantalla ni solapes y 0 animaciones tras la entrada; hover verificado. Lighthouse móvil: Inicio 93, Servicios 99; A11y/BP/SEO 100, CLS 0.

## 3r. Profundidad en el Manifiesto (2026-11-21 20:54)

Mismo tratamiento que el Hero: plano sombreado bajo el dibujo, sombras difusas proyectadas por las dos líneas, Estrategia con degradado de azul de marca (más gruesa) y Creatividad en azul claro, estaciones como esferas con luz (doradas, azules en los cruces, gris en «Brief») con su sombra, y halo en Crecimiento. En móvil, los marcadores de la lista también son esferas con sombra. El dibujo de entrada (una vez, < 3 s) y el estado estático por defecto no cambian; la sombra aparece con las estaciones. Respaldo en `.local-review/session-11/depth-before/`. Lint, 25/25 pruebas, build, smoke, 24/24 vistas; Lighthouse Inicio móvil 86 / 100 / 100 / 100, CLS 0.

## 3s. Servicios · «Un mundo por capítulo» (aprobada por Luis, 2026-11-21 21:02)

Respaldo: `.local-review/session-11/services-a-before/`.

| Archivo | Cambio |
| --- | --- |
| `app/servicios/page.tsx` | Estructura propia: encabezado con mini órbita (esfera «Space» y los cuatro mundos como enlaces a cada capítulo); índice lateral fijo; Marca, Comunicación y Experiencias en dos columnas (tarjetas de servicio + ejemplo real), fondos blanco/azul claro alternos; Digital con su vitrina; Método; llamada a contacto. Enlaces a casos: Fénix, publicaciones para redes, boda y XV. |
| `components/site/services-index.tsx` (nuevo) | Índice que resalta en dorado el capítulo que se está leyendo (`aria-current="location"`); los enlaces funcionan sin JavaScript. En pantallas < 1000 px pasa a una fila fija desplazable bajo la cabecera. |
| `components/site/services-page.module.css` (nuevo) | Estilos del capítulo, tarjetas con relieve, mini órbita, índice. Hover con elevación de 2 px desactivado con movimiento reducido. |
| `site-home.module.css` | Método (`.methodSequence`) como recorrido: seis esferas numeradas sobre una línea con degradado; la última dorada. 3 columnas a ≤ 1000 px y vertical en móvil. |

Alturas: 1440 px **8 263 → 6 730**; 390 px 7 471 → 8 232 (las tarjetas de servicio ocupan más en una columna). Se corrigió en el acto un desborde horizontal del índice móvil. Lint, 25/25 pruebas, build, smoke, 24/24 vistas sin incidencias; índice activo verificado al desplazarse. Lighthouse Servicios móvil 96 / 100 / 100 / 100, CLS 0.

## 3t. Trabajo · «El trabajo, por mundos» (aprobada por Luis, 2026-11-21 22:50)

Respaldo: `.local-review/session-11/work-page-before/`.

| Archivo | Cambio |
| --- | --- |
| `app/trabajo/page.tsx` | Encabezado con filtro por mundo; **Destacados** (Héroes de Panamá, Fénix, EMC) como tarjetas grandes; luego cuatro grupos por mundo con los casos a dos columnas (texto, mundos encendidos y alcance | mosaico con las piezas completas). Marca: Fénix, Identidades. Comunicación: Don Ceviche, EMC, Publicaciones para redes, Prevengo (con packaging). Experiencias: Héroes de Panamá (cartel + campaña), Boda, XV Años. Digital: Rosas Rodríguez y Comparo360. Se conservan todas las anclas (`#don-ceviche`, `#casamiento`, `#fenix-refrigeracion`, `#redes-sociales`, `#sitios-web`, etc.). La primera imagen destacada se precarga (LCP). |
| `components/site/work-filter.tsx` (nuevo) | Chips Todos/Marca/Comunicación/Experiencias/Digital: con JavaScript muestran solo los casos del mundo (un caso con varios mundos aparece en todos ellos) y anuncian el cambio (`aria-live`); sin JavaScript son enlaces a cada grupo y nada se oculta. |
| `components/site/work-page.module.css` (nuevo) | Tarjetas y mosaicos con relieve, fondos blanco/azul claro alternos por grupo. |
| Pruebas | Nueva prueba de estructura, filtro y anclas; dos aserciones adaptadas al nuevo formato de ids. |

Medidas: Trabajo 1440 px **15 236 → 9 487 px**. Filtro verificado (Digital → Fénix y sitios web; Experiencias → Héroes, boda, XV; Todos → 10 casos; sin JS: 10 casos, 0 ocultos). Lint, **26/26** pruebas, build, smoke, 24/24 vistas sin incidencias. Lighthouse Trabajo móvil: 97–98 / 100 / 100 / 100, CLS 0.

## 3u. Blog (pedido de Luis, 2026-11-21 23:04)

`/blog` y tres artículos de Luis migrados desde spaceventos.com con títulos y slugs nuevos, SEO completo y redirecciones; «Blog» en el menú y el pie. Detalle, títulos y ediciones: [`blog-plan.md`](blog-plan.md). Archivos: `lib/blog.ts`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `components/site/blog.module.css`, `app/sitemap.ts`, `next.config.ts`, `lib/public-site.ts`. Pruebas: nueva prueba del blog (títulos ≤ 75, descripciones 110–165 caracteres, redirecciones, sin emojis, `BlogPosting`, sitemap); el smoke recorre `/blog` y un artículo, verifica la redirección 308, JSON-LD, 404 de un slug inexistente y 9 URLs en el sitemap. Lint, **27/27** pruebas, build, smoke, 24/24 vistas. Lighthouse móvil: `/blog` 91, artículo 98; A11y/BP/SEO 100, CLS 0.

## 3v. Encabezados ilustrados, Contacto y portadas del blog (2026-11-21 23:20)

Respaldo: `.local-review/session-11/heroes-pages-before/`.

- `components/site/page-hero.tsx` + `.module.css` (nuevo): encabezado común (texto a la izquierda, ilustración con profundidad a la derecha, órbita tenue de fondo). `SitePage` lo usa; Trabajo y Blog también. Opción `compact` para títulos largos (artículos).
- `components/site/hero-visuals.tsx` + `.module.css` (nuevo): **Trabajo** — collage de tres piezas reales (cartel de Héroes, web de Fénix, composición de EMC) en tarjetas inclinadas con sombra; **Nosotros** — órbita «Space» con Personas, Lugares, Cultura y Tecnología (de la declaración de Space «amor por las personas, los lugares, la cultura y la tecnología»); **Contacto** — órbita «Hablemos» cuyos satélites son enlaces reales a Correo, WhatsApp, Instagram y Teléfono; **Blog** — abanico de portadas.
- **Portadas del blog:** ilustraciones vectoriales propias por tema (red de afiliados, capas de identidad, ondas de decisión), en la paleta de Space; sin fotos de banco. En la tarjeta del índice, en el encabezado del artículo (con texto alternativo) y en «Sigue leyendo».
- **Contacto:** tarjetas con relieve, esfera dorada por canal y hover con elevación (sin movimiento con movimiento reducido).

Resultados: lint, 28/28 pruebas (nueva prueba de encabezados y portadas), build, smoke, 24/24 vistas y 10 primeras pantallas sin desborde. Lighthouse móvil: Trabajo 92, Nosotros 98, Blog 98, Contacto 92; A11y/BP/SEO 100, CLS 0.

## 3w. Revisión completa de enlaces (2026-11-21 23:35)

Rastreador local (`.local-review/session-11/tools/linkcheck.cjs`, Chrome con JavaScript) desde «/» siguiendo cada enlace interno; resultado en `.local-review/session-11/linkcheck.json`.

- **9 páginas** encontradas y todas responden 200: Inicio, Servicios, Trabajo, Nosotros, Blog, Contacto y los 3 artículos.
- **49 anclas** (`/servicios#marca`, `/trabajo#casamiento`, `#sitios-web`, etc.): todas apuntan a un `id` existente.
- **0 enlaces sin texto accesible.**
- **71 imágenes**: todas cargan. Las dos únicas que el rastreador vio sin cargar son fotos de la tira horizontal de Experiencias que quedan fuera de vista (carga diferida); pedidas directamente responden 200.
- **Externos** (solo lectura): `wa.me/50767847093` → 200 (redirige a WhatsApp), `instagram.com/agenciaspacepanama/` → 200; `mailto:info@spaceventos.com` y `tel:+50767847093` con formato válido (no se abrieron).
- **Redirecciones antiguas**: las 5 de servicios y las 3 del blog responden 308 al destino correcto; `sitemap.xml` y `robots.txt` 200; una ruta inexistente da 404.

## 3x. Consejos de revisión externa: títulos y esquinas (2026-11-24)

Comentarios de Luis Moreno sobre la vista previa: títulos muy grandes y redondeo inconsistente entre contenedores y botones. Cambios: escala tipográfica reducida (títulos de página 99 → 70 px a 1440 px; títulos de sección 76–105 → 49–63 px; títulos de caso 62 → 46 px, con equivalentes en móvil) y una sola regla de esquinas: contenedores 16 px, piezas internas 10 px y botones en píldora (Hablemos, Explorar, Contactar, Ver todo el trabajo). Respaldo: `.local-review/session-11/feedback-before/`. Lint, 28/28 pruebas, build, smoke, 24/24 vistas sin incidencias.

## 4. Verificaciones ejecutadas (servidor de producción en http://127.0.0.1:3218)

| Comprobación | Resultado |
| --- | --- |
| `npm run lint` | **PASS** (0 errores, 0 advertencias) |
| `npm test` | **PASS 15/15** (aviso no bloqueante `MODULE_TYPELESS_PACKAGE_JSON`) |
| `npm run build` | **PASS** con Next 16.4.6: 5 páginas, 404, 3 APIs, robots, sitemap, icono y Proxy |
| `npm run test:smoke` | **PASS** (5 páginas + destinos locales, sitemap, medios reales, medios restringidos 404, API pública, 404 y redirect histórico) |
| Chrome headless: 6 rutas × 1440/768/390/320 | **24/24**: sin desbordes horizontales, imágenes rotas, imágenes sin `alt`, solicitudes fallidas ni externas. Único error de consola: el propio 404 del documento en `/no-existe` (esperado). |
| Teclado (escritorio) | Skip link primero; orden lógico logo → navegación → Hablemos → CTA del Hero → casos; foco visible (contorno sólido de 3 px) en todos. |
| Menú móvil | Enter abre, Tab entra a «Inicio», Escape cierra y devuelve el foco al `summary`. Sin JS también abre. |
| Carrusel de Experiencias (390 px) | Flecha derecha 0 → 237 px, flecha izquierda vuelve a 0, deslizamiento táctil (CDP) 0 → 237 px, Tab sale a «Explorar Experiencias», Shift+Tab vuelve al carrusel: **sin trampa de foco**; contorno de foco 2 px. |
| `prefers-reduced-motion: reduce` | 0 animaciones activas. |
| Movimiento por defecto | (Hasta la sección 3e) 0 animaciones al cargar con «Animar la Tierra» opcional. **Ahora:** entrada única de 2,51 s y 0 animaciones después; sin controles. |
| Sin JavaScript (390 px) | 5 páginas con su H1 y contenido, escena SVG estática, sin desborde. |
| Fallo del SVG (provocado) | Alternativa CSS Tierra–Luna visible (~401 px). |
| Fallo de imagen (provocado) | Espacio reservado, pie visible y `alt` ahora legible. |
| Metadata | Título, descripción, canonical, Open Graph e `lang="es"` en las 5 páginas; un H1 por página; 404 con `noindex` y estado 404. |
| Lighthouse 12 (Chrome local) | Accesibilidad, Buenas prácticas y SEO **100** en Inicio, Servicios, Trabajo, Nosotros y Contacto. Rendimiento móvil simulado: Inicio 97, Trabajo 91, Servicios 91, Nosotros 90, Contacto 87; escritorio 100. CLS 0 en todas. Peso transferido: Inicio 309 KiB, Trabajo 372 KiB (móvil). |
| Recursos externos (hoy) | Las 13 piezas de spaceventos.com y las 4 capturas de risso-patron.com responden 200 y su SHA-256 es **idéntico** a las copias locales. El portfolio sigue sin mencionar a Space. |
| `git diff --check` | Reporta finales de línea CRLF en archivos modificados en sesiones anteriores en Windows (p. ej. `app/globals.css`, componentes `immersive/`). Los archivos tocados hoy no tienen CRLF. No se normalizaron para no inflar el diff. |

Evidencia: `.local-review/session-11/` (`final-*.log`, `final/` con capturas completas y de primera pantalla, `results.json`, `interaction-checks.json`, `lighthouse/*.json`; `shots-before/` con el estado anterior).

**No verificado:** Safari, Firefox, dispositivos físicos, lector de pantalla, red real/hosting, entrega real de contacto (no existe formulario; la API sigue deshabilitada a propósito) y estado *hover* más allá de lo medido.

## 5. Bloqueadores de publicación

1. **Digital:** permiso de publicación de Fénix Refrigeración y Rosas Rodríguez & Asociados; licencia de la foto de portada de Fénix (persona, probable banco de imágenes). fenixrefrigeracion.com hoy no está en línea (listado vacío).
2. **Marca y redes:** permiso de Don Ceviche, Total Import, Pappagallo Automation, WeCareShare (y licencia de su foto de personas) y Prevengo para las piezas de spaceventos.com; permiso de cada cliente para exhibir las 13 identidades; «Empoderando · Mente y cuerpo» no puede rotularse EMC sin confirmación; «Him Fine Art» no se vincula con Sharon Him; créditos y coorganizadores de ARTE en CASA y Prevengo sin verificar.
3. **Eventos:** sin personas ni nombres por decisión del dueño (2026-11-21); la campaña de Héroes de Panamá está **aprobada** por The Academy y Panamá Accesible.
4. **Casos de Trabajo/Home:** Don Ceviche, EMC Panamá, Prevengo, Héroes de Panamá y el casamiento tienen autorización **solo para revisión local**; falta permiso de publicación.
4. **Aprobación visual y comercial** del dueño de esta versión.
5. **Migración:** origen canónico definitivo (`NEXT_PUBLIC_SITE_URL`), plan para Noticias y URLs históricas de WordPress, y prueba en un entorno de prepublicación autorizado. Debe ejecutarse como app Next.js con `proxy.ts` (nunca publicar `public/` suelto).

## 6. Mejoras opcionales (no bloquean)

- El carrusel de Experiencias es una parada de tabulación también en escritorio, donde no se desplaza; y su etiqueta menciona «en móvil».
- Hay dos `meta robots` en el 404 (`noindex` de Next y `noindex, follow` propio); no es un error.
- Rendimiento móvil de Contacto/Nosotros (87–90) por TBT de JavaScript en la simulación; se puede revisar el JS de cliente común.
- Servicios en móvil sigue sin imágenes propias por servicio (solo texto), por falta de material autorizado por servicio.
- Normalizar CRLF → LF en los archivos heredados de Windows cuando se prepare el commit.
- Actualizar los avisos moderados de desarrollo (`typescript-eslint → minimatch`) cuando exista una versión compatible.

## 7. Arranque local

```sh
cd /home/luis/Proyectos/space-panama-web
npm ci --ignore-scripts
npm run build
npm run start -- --hostname 127.0.0.1 --port 3218
# en otra terminal
npm run test:smoke
```
