# Home · limpieza editorial para revisión local

> Historial 07: el control junto a la Tierra fue retirado después, a pedido del dueño. La [revisión vigente](site-review-and-motion.md) usa una preferencia general fuera del Hero y amplía trabajo real. [Capturas actuales 08](../design/home-sequence-refinement/08-movimiento-y-trabajo.html).

**Implementada y verificada en la vista previa local: http://127.0.0.1:3218/. Pendiente de revisión del dueño; no implica aprobación final ni publicación.** El dueño indicó que prefiere la composición 06 y pidió limpiar la interfaz sin rediseñarla.

[Capturas actuales de escritorio y móvil](../design/home-sequence-refinement/07-edicion-editorial.html). Los videos y capturas de 06 se conservan como historial de composición: sus rótulos anteriores no representan la interfaz actual.

## Edición aplicada

- Eliminada la leyenda «Órbita lunar · Ciclo de 10 s», sin sustituirla por otro rótulo. También se retiró la etiqueta de implementación «Tierra y Luna · Escena estática» de los estados estáticos.
- Retiradas «01 / Apertura» y la frase de transición «La idea encuentra su espacio ↓»: no añadían orientación que no ofrecieran el titular, los CTA y el Manifiesto. Se mantiene el separador y su espacio para no mover la composición.
- Manifiesto: cinco principios, ahora lista no ordenada, sin marcadores numéricos. Títulos y descripciones intactos.
- Trabajo: retirados los prefijos 01 / y 02 /, conservando las categorías. «Selected Work · Trabajo seleccionado» pasa a «Trabajo seleccionado», sin duplicación bilingüe.
- Cuatro Mundos: retirados los indicadores 01 / 04… porque son categorías, no etapas. Se conservan los cuatro nombres, servicios, enlaces y el título que explica que son cuatro mundos.
- Método: conserva su lista ordenada real, con números simples **1–6**, sin relleno con ceros ni denominadores. Los marcadores visuales quedan ocultos a tecnologías de asistencia para no duplicar el orden que ya comunica la lista.
- El botón muestra **Pausar animación** y, al detenerse, **Reanudar animación**. Conserva foco visible y área mínima de 44 px; queda alineado a la derecha, como antes. Sin rótulo técnico adyacente.
- Se revisaron los demás títulos, categorías, pies de imágenes y llamados a la acción. Se conservan los que identifican servicios, trabajo, enfoque, proceso o contacto: no se eliminó la voz editorial por ser metafórica.

## Conservado y comprobado

- **SVG completo, encuadre, detalle, iluminación y lógica de movimiento idénticos byte por byte** antes del bloque de controles. CSS de órbita, duración y fallback intactos. El ciclo sigue siendo de 10000 ms, sin anunciarlo al visitante.
- Titular, servicios del Hero, logo, CTA, paleta, orden de capítulos, imágenes y datos de contacto conservados.
- Comparación de composición en ocho anchos (1920, 1440, 1024, 768, 681, 680, 390, 320): tamaño de Tierra, posición de escena y geometría del bloque de texto del Hero **exactamente iguales** a la revisión anterior. Titular en tres líneas, sin desbordamientos.
- Solo se ajustaron las grillas del Manifiesto y los grupos de servicios para eliminar las columnas de numeración que dejaron de existir; sin nuevos tamaños, colores o jerarquías.
- Respaldo previo: `.local-review/editorial-polish/before/current-site.tar`, patch y estado Git. 76 archivos comparados antes de documentar: solo cuatro fuentes Home/Hero y un archivo de pruebas cambiaron; ninguno faltante. Otras páginas, librerías, paquetes/lock y tableros históricos intactos.

## Verificaciones ejecutadas

- `npm run lint`: PASS.
- `npm test`: **9 pruebas**, PASS; nueva regresión para etiquetas, semántica y numeración editorial.
- `npm run build`: PASS.
- `npm run test:smoke`: PASS sobre build actualizado.
- Chrome: **20 combinaciones**, cinco rutas × 1440/768/390/320; sin errores de consola, solicitudes fallidas/externas, imágenes rotas o desbordamiento horizontal. Se conserva navegación/menú y enlace de salto por teclado.
- Revisión editorial de Home en cuatro anchos: ausencia de etiquetas técnicas, apertura y numeraciones decorativas; categorías y principios completos; Método 1–6. Cambio de nombre por **Enter** y foco visible, PASS.
- Órbita en 1440/390/320: movimiento real, pausa/reanudación por **Espacio**, posición detenida estable, movimiento retomado y nombres correctos en ambos estados. Nueve muestras del ciclo completo, dos animaciones de 10000 ms y retorno al punto inicial: PASS.
- Movimiento reducido inicial y cambios en vivo en ambas direcciones: estado estático sin control innecesario, recuperación de control al permitir movimiento, PASS.
- Sin JavaScript: Tierra/Luna estáticas y contenido/CTA disponibles. SVG oculto y eliminado: fallback CSS visible. PASS.
- Capturas actuales de Home completa y Hero en escritorio/móvil examinadas. Evidencia, scripts, logs y resultados JSON en `.local-review/editorial-polish/`.

No se probaron Safari, Firefox, dispositivos físicos, lector de pantalla o Core Web Vitals; no es certificación integral de accesibilidad. No hubo nueva investigación de archivos externos, importación de medios, cambios de dependencias, configuración de agentes, commit, push, merge, despliegue ni envío de mensajes.
