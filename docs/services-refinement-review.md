# Revisión local 10 · ajustes de Servicios

Local, **sin commit, push, merge ni despliegue**. Vista: <http://127.0.0.1:3218/#servicios>. Fuentes, hashes y dudas: [services-refinement-sources.md](resource-review/services-refinement-sources.md). Informe 09 y auditoría 09 intactos.

## Qué cambió

| Pedido | Resultado verificado |
| --- | --- |
| Quitar «Reducir movimiento» y `↗` | **Ya no existían** al abrir la versión actual; se verificó en 5 rutas × 4 anchos (cero coincidencias). No se tocó nada. Órbita: quieta por defecto; con `prefers-reduced-motion` hay 0 animaciones. |
| Logo de Space transparente | `public/assets/space/logo.png` **ya tiene canal alfa**; el rectángulo blanco venía del marco CSS. En Cuatro mundos, Marca pasa a mostrar identidades (abajo), así que ese marco blanco desaparece. |
| Marca con identidades de Space | Placa crema con **10 logos** (1:1) y **3 tarjetas** (3:2) de spaceventos.com, copias exactas, proporciones conservadas, sin recolor ni recorte. Solo en Marca; ninguno se asigna a otros mundos. |
| Don Ceviche sin bandas | Pieza completa (`object-fit: contain`) sobre un respaldo desenfocado y oscurecido de la propia pieza (decorativo, `aria-hidden`). Sin recorte ni deformación. |
| Fotos de Experiencias en móvil | Carrusel horizontal con ajuste al deslizar (foco por teclado, flechas): cada foto mide 294 px a 390 px y 236 px a 320 px, frente a ~176 px antes. En escritorio sigue el par. |
| Altura móvil | 2545 → **2507 px** (−38). Se quitó espacio repetido (bordes y huecos entre mundos, mínimo del panel Digital), pero las fotos grandes de Experiencias añaden ~160 px a propósito. No se comprimió el texto. |
| Digital | Sin caso web confirmado: el módulo de Cuatro mundos sigue siendo explicación del servicio. El capítulo Digital añade una **propuesta local «Pendiente de confirmar atribución a Space»** con 4 capturas de escritorio del portfolio de Luis. SALDO queda fuera; **no hay vistas móviles** y no se fabricaron. |

Medidas (Chrome real): Cuatro mundos 1440 px: 1926 → 1926 · 390 px: 2545 → 2507 · 320 px: 2470. Capítulo Digital: 624 → 1588 (1440) y 801 → 2084 (390), por la propuesta añadida.

## Verificaciones

- `npm run lint`: salida 0 · `npm test`: **15/15** (3 pruebas nuevas, RED observado antes) · `npm run build`: 0 · `npm run test:smoke`: pasa.
- Chrome real: **20 combinaciones** (5 rutas × 1440/768/390/320) sin errores de consola, peticiones fallidas o externas, desbordes horizontales ni imágenes rotas; pies fuera de las imágenes; proporciones; foco, subrayado y cursor en los enlaces de Cuatro mundos y Digital (1440 y 390).
- Defectos reales hallados y corregidos: `.page img {height:auto}` pisaba el marco de Don Ceviche (pieza de 600 px en un marco de 380). Tres fallos del script de verificación eran del script, no de la página, y se corrigieron.
- Cambios a pruebas existentes (`tests/site.test.mjs`): la guarda ya no prohíbe cualquier «sissy» sino la ruta `assets/sissy` (el logo Seguros con Sissy está autorizado por el dueño) y espera el nuevo mosaico en vez del pie «Marca institucional».
- Capturas: `.local-review/services-refinement/after/{cuatro-mundos,digital}-{1440,390}.png`; antes: `.local-review/services-refinement-before-1794508432454/`.

## Pendiente de confirmar

1. **Atribución a Space** de SOMOS Properties, HomePower PTY, HostPro Panamá y Provivir Panamá (el portfolio no menciona a Space). Provivir: la interfaz la diseñó otro profesional. La captura de HostPro muestra personas reales: permiso de imagen.
2. **Permiso de cada cliente** para mostrar sus 13 identidades. «ARTE en CASA» y «Prevengo» seguían pendientes en la auditoría 09 (créditos, coorganizadores). «Him Fine Art» no se vincula con Sharon Him sin tu confirmación. La tarjeta «Empoderando · Mente y cuerpo» se llama `Emcpanama-Logo`; la sigla EMC no figura en la página.
3. Publicación: nada de esto autoriza despliegue.

## No verificado

Estado hover (solo se midieron subrayado, cursor y foco), Safari/Firefox, dispositivos físicos, lector de pantalla. A 320 px los logos del mosaico miden ~50 px: se reconocen, pero el detalle fino no se lee. Las capturas del portfolio se descargaron una vez; no se comprobó que sigan iguales hoy.
