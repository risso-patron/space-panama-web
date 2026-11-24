# Verificación de la versión local

## Revisión vigente 11 · continuidad y verificación de entrega (Linux)

[Cambios, checks y bloqueadores](session-11-progress.md). Next 16.4.6 (parche de seguridad), pie corregido, transición Hero → Manifiesto sin corte, piezas únicas de Trabajo con ancho máximo, Contacto y Cuatro mundos más compactos en móvil, `alt` legible ante fallos y excepción Sissy precisa en las pruebas. Lint, **15 pruebas**, build, smoke, 24 vistas Chrome, teclado/carrusel/menú, movimiento reducido, sin JS, fallos provocados y Lighthouse (A11y/BP/SEO 100) pasan. Sin publicación. Evidencia: `.local-review/session-11/`.

## Historial 09 · mundos y movimiento opcional

[Alcance y checks](worlds-and-accessibility-review.md) · [Capturas actuales](../design/home-sequence-refinement/09-cuatro-mundos.html) · [Lista verificable](resource-review/portfolio-evidence.md). Sin control en navegación/Hero ni flechas diagonales. Escena quieta por defecto, animación opcional con parada accesible desde el pie y salida rápida de teclado. Retícula 2/1 columnas; tres módulos con recursos auténticos, Digital editorial sin simular casos.

Lint, **12 pruebas**, build, smoke, 20 vistas, ocho anchos de composición y pruebas de teclado/movimiento reducido/sin JS/fallback pasan. Sin originales modificados, nueva dependencia o autorización de publicación. A 768 px el CTA refluye al quitar la flecha, sin mover escena/Tierra; ver informe. **http://127.0.0.1:3218/**, pendiente de revisión del dueño. Evidencia: `.local-review/worlds-revision/`.

## Historial 08 · movimiento general y trabajo real

[Alcance, fuentes y checks actuales](site-review-and-motion.md) · [Capturas actuales](../design/home-sequence-refinement/08-movimiento-y-trabajo.html). Hero sin controles ni barra; preferencia general **Reducir movimiento** en navegación/menú. Composición y SVG conservados. Revisión editorial de las cinco páginas y dos piezas históricas autorizadas de Prevengo/Héroes, fuera del Hero.

Lint, **11 pruebas**, build, smoke, 20 combinaciones de navegador, ocho tamaños de composición y checks de movimiento/persistencia/reducción/sin-JS/fallback pasan. Originales y dependencias intactos. **Vista local http://127.0.0.1:3218/, pendiente de revisión del dueño; sin publicación.** Evidencia: `.local-review/site-edit/`.

---

## Historial · limpieza editorial de Home 07

Ver [alcance y checks actuales](editorial-home-review.md) y [capturas actuales](../design/home-sequence-refinement/07-edicion-editorial.html). Sin leyendas técnicas ni numeraciones decorativas; control «Pausar animación / Reanudar animación», con movimiento reducido y sin JS conservados. Lint, **9 pruebas**, build, smoke, 20 combinaciones de navegador, ocho anchos de composición y checks de órbita/editorial/fallback pasan. Ilustración, lógica orbital y geometría del Hero conservadas.

**Vista local http://127.0.0.1:3218/, pendiente de revisión del dueño. Sin publicación.** Evidencia actual: `.local-review/editorial-polish/`.

---

## Historial · composición planetaria 06

El dueño no aprobó el Hero 05. Se revisó **solo escala/jerarquía/ilustración/controles del Hero**, conservando copy, logo, CTA y todos los capítulos posteriores. Ver [mediciones y checks actuales](hero-composition-review.md) y [capturas + grabaciones reales de 12 s](../design/home-sequence-refinement/06-composicion-planetaria.html). Lint, 8 pruebas, build, smoke, 20 combinaciones de navegador, ocho tamaños de composición y órbita/fallback pasan. La grabación final usa frames Chrome CDP con timestamps para conservar el ciclo de 10 s.

**Pendiente de revisión visual del dueño. No aprobado, terminado ni publicado.** Respaldo y evidencia actuales: `.local-review/planet-composition/`.

---

## Historial · revisión Tierra–Luna 05, no aprobada

El registro que sigue pertenece a la revisión anterior y no reemplaza los resultados de composición 06. Capturas anteriores conservadas: [`05-hero-tierra-luna.html`](../design/home-sequence-refinement/05-hero-tierra-luna.html).

## Entorno y preservación

- Next.js `16.4.1`, Node `v24.22.1`, Windows; Playwright `1.54.1` ya disponible y Chrome instalado. Sin dependencias, navegador o texturas nuevos.
- Checks sobre build de producción en **http://127.0.0.1:3218/**, ligado únicamente a loopback. No se detuvieron procesos ajenos ni los del puerto 3000.
- Backup antes de esta revisión: `.local-review/orbit-revision/before/current-site.tar`, `current.patch` y `status.txt`. Baselines y backups anteriores se conservan. El árbol ya estaba modificado; no atribuir todo el diff contra HEAD a esta revisión.
- Cotejo con el tar: **100 archivos: 88 intactos, 12 revisiones intencionales, ninguno ausente**. Además, 32 hashes de fuentes del repositorio/E: verificados sin diferencias. Medios originales, dependencias/lockfile y los artboards originales 01/02/03 intactos. El código de Home **desde Manifiesto hasta el final es exactamente igual** al respaldo; el diff CSS elimina únicamente reglas del antiguo collage Hero. No se cambió ninguna otra página ni contactos/contenido de casos.
- Código nuevo: `space-orbit.tsx` / `.module.css`. Revisiones de montaje/estilos del Hero, tests, smoke y documentación. Informe de preservación: `.local-review/orbit-revision/preservation.json`.

## Checks ejecutados

| Comprobación | Resultado real |
| --- | --- |
| `npm run lint` | **PASS**, cero errores/advertencias ESLint. `.local-review/**` sigue ignorado, no el código productivo. |
| `npm test` | **PASS, 8 pruebas**: canonical, contenido/rutas/assets/contacto, bytes, procedencia y hashes de originales, contrato de escena sin recursos externos/estática/10 s, contraste y validación de contacto. Aviso no bloqueante `MODULE_TYPELESS_PACKAGE_JSON` de Node al importar TS. |
| `npm run build` | **PASS**, compilación/TypeScript; cinco rutas, 404, APIs, robots/sitemap y Proxy. |
| `npm run test:smoke` | **PASS** sobre producción: páginas/metadata/enlaces/anclas, secuencia de siete capítulos, Hero sin imágenes/clientes/PANAMÁ sobre SVG y SSR estático, escenas Tierra/Luna, tres casos, imágenes optimizadas 200, medios restringidos 404/400, API segura, redirects y 404. |
| Chrome: cinco rutas × cuatro anchos | **PASS: 20 combinaciones**, 1440/768/390/320 px y 900 px de alto; sin desborde horizontal, imágenes rotas, errores de consola, solicitudes fallidas o requests externos en recorrido normal. |
| Teclado / navegación | **PASS**: skip link, foco visible, menú nativo, Enter/Tab, Escape con retorno al summary y navegación móvil. |
| Sin JavaScript | **PASS**: cinco páginas y navegación móvil; escena SSR estática, Tierra/Luna visibles, cero animaciones y sin botón de pausa inútil. |
| Movimiento reducido | **PASS**: cero animaciones, scroll sin suavizado; comprobado también al cambiar la preferencia con la página abierta. |
| Órbita | **PASS** a 1440/390/320: dos animaciones de **10000 ms** (órbita y contrarrotación de luz); nueve muestras 0–10 s, separación positiva durante todo el ciclo y retorno al punto inicial al completarlo. |
| Pausa/reanudación | **PASS con Space desde botón enfocado**: posición lunar estable al pausar y movimiento al reanudar. La Tierra no gira. |
| Fallo visual | **PASS** en página sin JS: SVG ocultado y retirado; alternativa Tierra/Luna CSS visible y estática, titular/CTA/navegación disponibles. Es una prueba provocada, no un recurso roto del recorrido normal. |
| Artboard local | **PASS** a 1440/390 px: cinco capturas decodificadas, sin desborde ni errores; informe local `artboard-checks.json`. |
| `git diff --check` | **PASS**. Conversión LF/CRLF anunciada por Git no es un fallo funcional. Sin cambio de rama, commit, push, merge o despliegue. |

Los logs, scripts y resultados están en `.local-review/orbit-revision/`: `final-lint.log`, `final-tests.log`, `final-build.log`, `final-smoke.log`, `browser-results.json`, `orbit-checks.json` y capturas. El script de órbita mide coordenadas **relativas al SVG** para no confundir el scroll al enfocar un botón móvil con movimiento lunar. Las capturas completas se realizan después de cargar/decodificar las imágenes lazy; se conservaron también las primeras capturas incompletas como evidencia del ajuste del harness, no como versión visual final.

## Revisión visual y accesibilidad

Se examinaron la primera pantalla de escritorio/móvil, Home completa, escena alternativa CSS y las capturas de continuidad. La escena tiene continentes/nubes/atmósfera y Luna con cráteres, sin material de clientes ni rótulos en el globo. En móvil queda debajo del texto/CTA. El logo original no se toca y el resto del recorrido se conserva.

El movimiento usa solo transformaciones CSS, sin cámara, flashes, scroll pinning o entradas que oculten contenido. Existe pausa con nombre de acción accesible y foco visible; la figura tiene descripción, el SVG es decorativo y la leyenda permanece independiente. El espacio de la escena está reservado. Los doce pares de texto/acciones existentes siguen superando el umbral matemático AA de 4.5:1; no equivale a certificar toda la accesibilidad.

La API de contacto permanece deshabilitada: pruebas solo sintéticas, sin envío ni almacenamiento y sin éxito ficticio. No se abrieron WhatsApp, correo ni teléfono.

## Inventario y concurso

- Repositorio: [`resource-review/repository-media-inventory.json`](resource-review/repository-media-inventory.json), complementado por el inventario anterior de medios conservados y bloqueados. La ilustración nueva es código SVG, no un archivo de cliente o una textura histórica.
- E: **8268 registros de metadata**, **8151** con dimensiones y **117** sin medidas verificables. No son 8268 imágenes examinadas visualmente ni proyectos acreditados. El catálogo completo queda local/ignorado por posibles nombres personales en rutas. La selección documental contiene **71 fichas** con estado de revisión.
- Web oficial: **24 URLs únicas**, 16 páginas/8 entradas y 29 visitas HTML; **300 adjuntos WP + 15 referencias HTML**. Cinco referencias de plantilla Liquid Themes fuera del host oficial se excluyeron sin solicitarlas; dimensiones desconocidas. Medidas WP/HTML no se presentan como decodificación independiente de todos los archivos.
- WinError **1392** en una subcarpeta de Pappagallo: se registró, no se reparó E:. El inventario no es exhaustivo.
- ARTE en CASA: bases de 2020/2021 y piezas de convocatoria revisadas; ediciones, calendario anunciado y resultados separados en [`arte-en-casa.md`](resource-review/arte-en-casa.md). No se abrieron registros de inscritos, evaluaciones ni consentimientos; no hay cifras de resultados verificadas ni permisos deducidos de formularios en blanco. No se añadió un caso al sitio.
- **Cero medios nuevos de E: o de la web importados.** Psico Jazmín/AsuMesa y los originales no seleccionados permanecen bloqueados; no se publica el inventario en la API.

## Rendimiento, seguridad y límites

- Escena SVG inline + CSS, sin requests de imágenes/texturas propios. Chunk de cliente que contiene la escena: **7956 B**, **2700 B al comprimir con gzip localmente**; no es el peso total del Hero, framework, HTML, CSS o página, ni una medición de transferencia de red.
- Los tres derivados existentes Don Ceviche/EMC suman 455884 B, ahora fuera del Hero y con carga diferida. Fotografías de boda solo en Trabajo. Se precarga el logo, no una imagen de Hero. No se montan GSAP, Three/WebGL, video, analítica ni fuentes remotas.
- Dependencias y lockfile no cambiaron en esta revisión. Auditoría **previa**: producción sin vulnerabilidades y siete avisos moderados de desarrollo en `typescript-eslint → minimatch`. No se reejecutó `npm audit`; no se inventa un estado de vulnerabilidades actualizado.
- No se probaron Safari/Firefox, hardware móvil, lector de pantalla, Lighthouse/Core Web Vitals, hosting ni entrega real de contacto. Viewports Chrome no equivalen a dispositivos físicos o una certificación de accesibilidad/rendimiento.
- No se validaron permisos de todos los candidatos ni resultados del concurso. La presencia pública, una carpeta o un logo no prueba autoría; las discrepancias SEMM/SENN y el logo Pappagallo bajo MEDICAL se señalan, no se convierten en casos.

## Condición de entrega

**Revisable localmente; pendiente de aprobación visual del dueño.** No es publicación, aprobación de derechos o migración integral de WordPress. Antes de sustituir la web oficial: autorización explícita, derechos/créditos para publicación, origen canónico y decisión sobre Noticias/URLs históricas. Ejecutar como Next.js con Proxy: nunca publicar `public/` por separado.
