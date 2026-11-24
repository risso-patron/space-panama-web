# Revisión local 09 · cuatro mundos, enlaces y movimiento opcional

Pendiente de revisión del dueño. **Sin commit, push, merge, cambio de rama ni despliegue.** [Vista local](http://127.0.0.1:3218/) · [Capturas reales 09](../design/home-sequence-refinement/09-cuatro-mundos.html) · [Lista verificable de trabajos y huecos](resource-review/portfolio-evidence.md).

## Decisión de movimiento

Retirar el único control visible de una animación automática infinita no habría resuelto el problema. La solución implementada evita esa situación:

- **Escena quieta al cargar**, antes y después de hidratar. No se restaura el permiso de autoplay de la versión anterior.
- Ningún control en la navegación de escritorio, menú móvil ni Hero. No se esconde un control imprescindible mientras el movimiento arranca solo.
- En el pie, acción textual discreta **Animar la Tierra / Detener animación**; botón nativo, foco visible y objetivo de al menos 44 px. Activación explícita permite la órbita original de 10 s; detener conserva la fase.
- Mientras está activa existe además un **Detener animación solo al recibir foco de teclado**, al principio del documento y fuera de navegación/Hero. Es una salida rápida accesible, no un icono flotante. Al detener, devuelve el foco a Saltar al contenido.
- `prefers-reduced-motion` inicial y en vivo tiene prioridad. Con reducción no hay animaciones, la acción está deshabilitada con explicación accesible. Al quitar la reducción no se reinicia sola: hace falta otra acción explícita.
- Elección solo en memoria durante la página/sesión de navegación cliente; **recargar vuelve a quieto**. No se leen/escriben preferencias locales antiguas ni se sincroniza autorización entre pestañas. Sin JS: escena estática, sin botón inerte. Fallback CSS conservado.

Es una revisión deliberada del autoplay anterior, no una certificación integral de accesibilidad. El dibujo SVG, escala, iluminación, ciclo y trayectoria no se rediseñaron.

## Enlaces sin flechas diagonales

Se retiraron los `↗` de las cinco rutas activas y componentes compartidos. Se conservan todos sus destinos. Enlaces textuales subrayados, grosor mayor al hover, cursor pointer y contorno visible al foco; navegación mantiene su estado activo. Los módulos no se presentan como tarjetas enteras clicables: las acciones son enlaces textuales claros.

Solo queda la flecha vertical del CTA **Explorar nuestro trabajo**, que navega al ancla real `#trabajo`. No se modificaron artes originales que pudieran contener símbolos propios ni los tableros históricos, que no son rutas públicas.

## Retícula editorial implementada

Dos columnas de escritorio/tableta y una hasta 680 px, en orden Marca → Comunicación → Experiencias → Digital. Marcos de imagen amplios, piezas completas con `object-fit: contain`, pies fuera de las imágenes, títulos y textos breves, enlaces de servicios originales conservados y enlaces a evidencia cuando existe.

| Mundo | Recurso real utilizado | Alcance honesto |
| --- | --- | --- |
| Marca | Logo institucional actual de Space, ya autorizado y servido. | **Referencia institucional**, no nuevo caso de cliente ni afirmación sobre quién lo dibujó. No hay caso cliente de identidad/packaging suficientemente confirmado para atribuirlo; Fernando Méndez y otros permanecen pendientes en la lista. |
| Comunicación | Segunda pieza autorizada de Don Ceviche, guacho de mariscos, antes disponible en Trabajo. | Comunicación de producto, no diseño de packaging ni métricas. Permite mostrar otra pieza auténtica en Home. |
| Experiencias | Las dos fotos autorizadas de la ambientación, crédito fotográfico de Space confirmado por el dueño. | Evidencia de ambientación, sin nombres de la pareja, invitados o proveedores inventados. |
| Digital | Módulo editorial tipográfico, **sin captura simulada ni caso inventado**. | Servicio web, no portafolio demostrado. No se hace pasar Instagram/EMC o el chat de Prevengo por sitios desarrollados. |

Por tanto hay **tres módulos con material auténtico y uno editorial**, no cuatro casos de clientes verificados. Para completar el objetivo visual de clientes faltan un caso de identidad/packaging confirmado y un sitio entregado con autoría, capturas y permiso. [Requisitos y descartes concretos](resource-review/portfolio-evidence.md#digital-material-concreto-que-falta).

Digital se acota a sitios web, contenido, identidad y navegación; no presume un caso con imagen no respaldada. No se añadieron nuevas imágenes a `public/`, importaciones remotas, clientes pendientes o dependencias. Ningún original de E: o del repositorio se modificó/movió.

## Continuidad y alcance

Se mantiene Hero → Manifiesto → Trabajo seleccionado → Cuatro mundos → Digital → Método → cierre. Ilustración SVG idéntica; CSS del Hero/órbita sin cambios. Las únicas diferencias del Hero son la eliminación del icono solicitado y el inicio estático. En ocho anchos se conserva el diámetro de Tierra y la posición de la escena; a 768 px el bloque de CTA ocupa una línea menos al quitar la flecha, por lo que cambia su caja de texto, **no el texto ni la escala tipográfica del título ni la posición de la escena**. A los otros siete anchos la caja de texto también es idéntica.

Manifiesto, casos existentes, Método 1–6 y cierre conservados; demás páginas solo pierden iconos, sin reemplazar contenidos útiles. Originales, derivados, dependencias y tableros históricos se comparan con `.local-review/worlds-revision/before/current-site.tar`.

## Verificaciones de esta revisión

- `npm run lint`, **12 pruebas nativas**, `npm run build`, `npm run test:smoke` y `git diff --check`: pasan.
- Chrome real local: **20 combinaciones** (cinco rutas × 1440/768/390/320), cero errores de consola, peticiones fallidas/externas, imágenes rotas o desbordes de documento. También se comprobó que el contenido interno de los cuatro módulos no sobresale y que los pies quedan fuera de las cajas de imagen. Una regresión real de `min-size: auto` en la pareja de fotos se reprodujo con test fallando y se corrigió con fila `minmax(0, 1fr)` y mínimos a cero; el test pasa ahora en los cuatro anchos.
- Enlaces y anclas de las cinco páginas por HTTP; restricción de medios históricos/excluidos y optimizador conservadas. Sin envíos reales a contactos.
- Foco visible, subrayado y cursor en todos los enlaces de `main` de las 20 vistas; salto al contenido y menú nativo con Enter/Escape; Tab por los seis enlaces de mundos y Enter al destino Digital.
- Composición en 1920/1440/1024/768/681/680/390/320; título en sus tres líneas, sin controles superpuestos ni Hero con imágenes de clientes.
- En 1440/390/320: quieto inicial incluso con preferencia antigua de autoplay; activación con Espacio, movimiento real, parada con Enter y fase estable; salida rápida por teclado/foco; recarga quieta; reducción del sistema inicial/en vivo y vuelta sin reinicio espontáneo; almacenamiento bloqueado irrelevante.
- Dos animaciones de 10000 ms tras opt-in; nueve muestras del ciclo en tres anchos, regreso a posición y separación Tierra–Luna mayor de 9 px. No se añadió video ni WebGL.
- Cinco páginas y navegación móvil sin JS; escena sin movimiento ni botón muerto; fallback al ocultar y retirar el SVG.
- Home completa y recortes actuales examinados en escritorio/móvil. Evidencia privada en `.local-review/worlds-revision/`.

No se afirma prueba en dispositivos físicos, Safari/Firefox, lector de pantalla ni certificación WCAG/CWV. Intentos oficiales de servicios devolvieron 403; la investigación usa su inventario histórico sin aparentar una revisión actual exitosa. Aprobación visual, créditos/permisos para publicación, dominio, hosting y decisiones de WordPress siguen pendientes.
