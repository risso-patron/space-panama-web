# Hero · revisión de escala y composición

> Historial de composición 06. La [limpieza editorial posterior](editorial-home-review.md) retiró los rótulos técnicos y la numeración decorativa y cambió los nombres del control. Las capturas y videos de esta revisión ya no representan esos textos de interfaz; la ilustración y la composición se conservan. La limpieza 07 también es histórica: el control pasó después a la navegación general. Ver [revisión vigente y capturas 08](site-review-and-motion.md).

**Implementado para revisión local, NO aprobado visualmente.** El dueño no aprobó el Hero anterior. Preview vigente: **http://127.0.0.1:3218/**. Evidencia visual: [`06-composicion-planetaria.html`](../design/home-sequence-refinement/06-composicion-planetaria.html).

## Qué cambió, y qué se conservó

- El mismo titular, sin cambiar sus palabras, ahora tiene tres cortes deliberados: «Creamos experiencias / que hacen / crecer marcas.». Se comprobó que ninguna línea se desborda ni genera un cuarto renglón.
- Los servicios existentes —estrategia, diseño, comunicación y eventos— tienen una línea propia y mayor contraste. Se conserva el texto que identifica agencia creativa y Ciudad de Panamá: la identidad no depende solo del titular genérico. No se inventó una nueva promesa comercial.
- Más espacio para la escena, menos dominancia tipográfica. Diámetro visible de Tierra a 1440 px: **236.5 → 400.8 px (+69%)**; a 390 px: **147.2 → 223.5 px (+52%)**. Son diámetros renderizados medidos, no porcentajes de peso o rendimiento.
- SVG de encuadre cuadrado, más detalle de relieve/nubes, colores e iluminación revisados. Es una ilustración original, no fotografía ni atlas. La trayectoria está junto a la Tierra; el fondo propio del Hero tapa los grandes anillos decorativos sin editar el fondo ni estilos del Manifiesto.
- Luna separada, iluminación contrarrotada y período de **10000 ms**. Nota de 13–14 px y botón delineado de al menos 44 px, sin competir con el CTA principal.
- **Logo, copy, CTA, Manifiesto y demás secciones conservados.** No hay clientes dentro del Hero. No se cambiaron contactos, proyectos, otras páginas, dependencias o archivos originales de medios.
- Se mantienen pausa/reanudación por teclado, escena estática SSR/sin JS, movimiento reducido (incluido cambio en vivo) y fallback CSS si el SVG falta o se oculta. Sin WebGL, video en Home, zoom de cámara, pinning o scroll forzado.

## Evidencia de movimiento real

| Evidencia local | Qué permite juzgar |
| --- | --- |
| `design/home-sequence-refinement/review-composition-motion-1440.mp4` | **12 s**, H264, 1440×900, 30 fps de salida; escritorio, titular y escena juntos. |
| `design/home-sequence-refinement/review-composition-motion-390.mp4` | **12 s**, H264, 390×900, 30 fps de salida; lectura y recorrido completo en móvil. |
| `review-composition-cycle-1440.jpg` / `-390.jpg` en el mismo directorio | Fotogramas extraídos de esos videos a 0/2.5/5/7.5/10 s, sin mover manualmente la Luna. |
| `review-composition-hero-1440.jpg` / `-390.jpg` | Capturas de composición con la órbita pausada; la captura no prueba por sí sola el movimiento. |

Los videos son **frames reales del navegador**, capturados mediante Chrome CDP con tiempos monotónicos explícitos y codificados a MP4; no hay animación recreada o fotogramas intermedios generados. Se grabó más de 12 s sin tocar el reloj de animación. Se comprobó que la posición lunar a 0 y 10 s coincide (estimación por píxeles dentro de 0.05°), además del contrato CSS de 10 s. Las primeras pruebas con `recordVideo` de Playwright comprimían el tiempo en este entorno Windows/Chrome y se descartaron como evidencia final; se conservan localmente para diagnóstico.

Durante la observación continua de 12.6 s por viewport se muestreó cada frame del navegador: Luna dentro de la escena y separada de Tierra, texto y controles. Separación mínima aproximada: **21.8 px en escritorio y 12.1 px en móvil de 390 px**. A 320 px, las muestras geométricas de ciclo completo mantienen más de 9 px. No es una simulación astronómica a escala.

Se examinaron capturas completas de escritorio/móvil, frames reales del video durante el ciclo y las secuencias de cinco posiciones. Los reproductores del artboard no tienen autoplay: permiten inspeccionar, pausar y repetir sin imponer movimiento.

## Comprobaciones ejecutadas

- **PASS:** `npm run lint`, **8 pruebas Node**, `npm run build`, `npm run test:smoke` y `git diff --check`.
- **PASS:** Chrome, cinco rutas × cuatro anchos (1440/768/390/320): 20 combinaciones, sin desborde, imágenes rotas, errores de consola ni solicitudes fallidas/externas en ejecución normal.
- **PASS:** composición a 1920/1440/1024/768/681/680/390/320: tres líneas reales, texto intacto, límites de columna, tamaño de controles y escena debajo del copy en móvil.
- **PASS:** órbita completa y pausa/reanudación a 1440/390/320; nueve muestras geométricas entre 0 y 10 s. Prueba continua en tiempo real adicional a 1440/390, sin superposición ni salidas de cuadro.
- **PASS:** sin JS, movimiento reducido y cambio de preferencia en vivo; SVG ocultado/retirado con fallback CSS. Menú nativo, skip link y teclado conservados.
- El artboard 06 también se comprueba a 1440/390, con imágenes y videos locales decodificados, sin desborde y reproducción real del archivo MP4.

Scripts, logs, métricas y respaldos: `.local-review/planet-composition/` (ignorado). El backup previo está en `before/current-site.tar`, `current.patch` y `status.txt`. La preservación se comprueba contra ese backup, no contra HEAD, porque el árbol ya estaba modificado. El código desde Manifiesto hasta el final de Home es idéntico; los cambios CSS se limitan al Hero. Artboards anteriores y material original no se sustituyen.

## Límites y estado

Chrome con viewports emulados no equivale a Safari/Firefox o hardware móvil. No se midió Core Web Vitals/Lighthouse, lector de pantalla, despliegue o entrega de contacto. Los contrastes comprobados son pares concretos, no certificación integral.

**Listo para que el dueño revise esta composición; no aprobado ni declarado terminado.** Sin cambio de rama, commit, push, merge, despliegue, servicios externos, SpaceOS o configuración de agentes. No se incorporaron nuevos recursos de clientes ni se reabrió la investigación de E:.
