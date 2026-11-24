# Space Panamá · movimiento general y revisión del sitio

> **Historial 08, no interfaz vigente.** La [revisión 09](worlds-and-accessibility-review.md) retira el control de navegación, elimina flechas diagonales y activa movimiento solo por elección del visitante. [Capturas actuales 09](../design/home-sequence-refinement/09-cuatro-mundos.html).

**Implementado para revisión local, pendiente de revisión del dueño. Sin commit, push, merge ni despliegue.** Vista previa: **http://127.0.0.1:3218/**. [Capturas actuales](../design/home-sequence-refinement/08-movimiento-y-trabajo.html).

## Hero y accesibilidad del movimiento

Se retiraron por completo el botón y su barra del Hero. La ilustración SVG es **idéntica byte por byte** al respaldo, y las mediciones de tamaño de Tierra, posición de escena y geometría del bloque de texto coinciden exactamente con composición 06/07 en ocho anchos. Logo, titular, descripción y CTA no se modificaron. Se conserva el espacio de composición que antes ocupaba el control, sin línea ni contenido ficticio.

La estructura permite una preferencia general sin recurrir a reproducción manual:

- Casilla nativa **Reducir movimiento** en la navegación de escritorio y dentro del menú móvil. Etiqueta clicable de al menos 44 px y foco visible; fuera del `main` y del Hero.
- Marcada: detiene la órbita en su posición, pausa animaciones del sitio —incluidos pseudo-elementos— y elimina transiciones y scroll suave. Desmarcada: permite movimiento, si el dispositivo lo permite.
- Elección guardada en `localStorage` como un único booleano, sin identificadores, analítica o servicios externos. Se conserva al navegar y recargar; se sincroniza entre pestañas. Si el almacenamiento está bloqueado, sigue funcionando en memoria durante la página/sesión de navegación cliente.
- `prefers-reduced-motion` tiene prioridad y nunca se fuerza movimiento contra esa preferencia. En ese caso la casilla aparece marcada y deshabilitada, con descripción accesible de su origen. Cambios en vivo en ambas direcciones conservan la elección manual previa.
- SSR/sin JavaScript: ilustración estática, sin casilla inoperante. SVG oculto o ausente: fallback CSS estático. Navegación, contenido y CTA siguen disponibles.
- El ciclo automático sigue siendo de **10000 ms**; ese dato no aparece como texto de interfaz.

Implementación compartida: `lib/site-motion.ts`, `components/site/site-motion-control.tsx`, navegación y CSS global. No se introdujo una librería de animación ni se cambió el dibujo.

## Revisión editorial de las cinco páginas

| Área | Problema concreto | Cambio y límites |
| --- | --- | --- |
| Home / Hero | Control visual compitiendo junto al planeta | Fuera del Hero, preferencia general en navegación. Sin rediseño. |
| Home / Manifiesto | Repetición de «órbita» con Cuatro Mundos | «Del brief al crecimiento: estrategia y creatividad». Se mantiene la metáfora orbital de Cuatro Mundos y el resto de títulos con significado. |
| Home / trabajo | Dos marcas concentradas en comunicación comercial | Dos muestras secundarias con contexto y enlace a sus casos, sin desplazar Don Ceviche/EMC ni poner clientes en Hero. |
| Servicios | Categorías numeradas como si fueran etapas | Retirados los cuatro índices y su columna; títulos, descripciones, enlaces y orden intactos. |
| Trabajo | Índices decorativos de casos y de las dos fotos | Eliminados. Se preservan pies descriptivos y créditos confirmados. Casos nuevos muestran solo alcance verificable. |
| Nosotros | «Personas, lugares, cultura y tecnología» repetido en introducción, párrafo y cuatro tarjetas; audiencia repetida | Se conserva la declaración de marca en la entrada, se retiran las tarjetas redundantes y se concreta cómo se eligen los formatos. Audiencia y enlace a servicios se mantienen sin repetir el párrafo. |
| Contacto | Aclaración «sin formularios ni pasos intermedios» sobre implementación | Retirada. Se mantienen canales reales, ayuda para el primer mensaje y enlaces de contacto. No se envió nada. |

Se conservaron navegación, menú nativo, enlace de salto, contacto directo, títulos orientadores, pies útiles, créditos confirmados y los pasos **1–6 de Método**. No se eliminaron textos solo por ser metafóricos ni se llenaron áreas con logos sin contexto. Las grandes familias visuales y la secuencia de siete capítulos se mantienen.

## Selección real de trabajo

Permiso primario: declaración expresa del dueño sobre las carpetas de proyectos en `odd/tasks/space-panama-full-site.md`, **S10**, reiterada por la petición actual de enriquecer la vista local. No se deduce autoría de una carpeta o un logo aislado. Se revisó la pieza completa, su asociación visible y el alcance documentable.

| Pieza | Evidencia observada y alcance mostrado | Derivado local |
| --- | --- | --- |
| Prevengo · `Material Publicitario/Redes-Space/Material Marketing/post 3.png` | Marca Prevengo, cuatro iconos y mensajes de presentación de producto. Se muestra **comunicación gráfica histórica**, no desarrollo de la aplicación, validación médica, resultados o creación del logo. Se eligió esta pieza sin fotografía de personas, no las alternativas con mockup de mano o capturas de aplicación. | `prevengo-comunicacion-historica.webp`, **1055×1021**, **50074 B** |
| Héroes de Panamá · `PRENSA/POSTER OFICIAL.jpeg` | Cartel de arte y dibujo con Space en «Organizan», junto a The Academy y Panamá Accesible. Se muestra difusión de una **convocatoria histórica**, sin inferir año por directorio, asistentes, ganadores, entrega de premios ni autoría individual de la ilustración o fotografía incluida. No es un formulario ni una convocatoria operada por esta web. | `heroes-panama-convocatoria.webp`, **724×1024**, **157852 B** |

**Dos piezas completas, 207926 B adicionales**, sin recortes, ampliación de resolución, extracción de elementos o alteración de sus créditos visibles. Se conserva exactamente la máscara alfa de la pieza PNG, sin convertir bordes transparentes en negro. Fuente, dimensiones decodificadas actuales, bytes y SHA-256 de originales/derivados en [`resource-review/selected-archive-pieces.json`](resource-review/selected-archive-pieces.json). Hashes de los originales verificados después: intactos. Los créditos de elementos incluidos no se atribuyen por separado a Space. Uso local de la composición completa conforme al permiso del dueño, no autorización independiente de stock ni de publicación.

Se reproducen en Home y Trabajo, cargadas de forma diferida, preservando proporciones. En las tarjetas Home se contienen dentro del marco, sin recortar. Los casos completos limitan la figura al ancho del original. Se añadieron **solo esas dos rutas exactas** a la allowlist pública/optimizador: los originales, clientes excluidos y medios históricos restantes siguen bloqueados. `public/` no debe servirse por separado de Next.

### Investigación efectivamente realizada

- Reutilización del censo y las fichas existentes; revisión dirigida de material promocional en las carpetas autorizadas de Prevengo y Héroes. Lectura de E: únicamente, sin reparaciones o escrituras. No se abrió información de inscritos, certificados, evaluaciones, consentimientos ni trabajos de participantes. No se incorporó ARTE en CASA ni se confundió con Héroes de Panamá.
- Home oficial `https://spaceventos.com/`: respuesta 200, HTML consultado y menú de servicios contrastado. Se excluyeron restos de plantilla de Hub; no se copiaron clientes, métricas o contactos ficticios. Consultas WP de búsqueda «Prevengo» y «Heroes»: respuesta 200 y listas vacías. **No son corroboración independiente de estos casos**: su respaldo es la autorización nominada del dueño y las piezas observadas. No se afirma haber revisado de nuevo todo WordPress.
- Ningún medio remoto se importó. No se usaron Psico Jazmín, AsuMesa, retratos corporativos con permisos pendientes, logos de asociación ambigua ni grandes imágenes de stock. No se renderizaron editables ni se reparó la subcarpeta de Pappagallo con WinError 1392. El censo histórico sigue sin ser exhaustivo.

## Verificaciones sobre build actualizado

- Lint, **11 pruebas nativas**, build de producción y smoke: PASS. Smoke verifica los cinco casos de Trabajo, nuevas rutas directas y optimizadas, enlaces/anclas, restricciones de medios, SSR estático y Hero sin controles/clientes.
- Chrome: **20 combinaciones**, cinco rutas × 1440/768/390/320; sin errores de consola, solicitudes fallidas/externas, imágenes rotas o desbordamientos. Teclado, menú, Escape y enlace de salto conservados.
- Composición: 1920/1440/1024/768/681/680/390/320, tres líneas del titular y geometría previa del Hero exactas, sin controles dentro de la escena.
- Movimiento: 1440/390/320, control fuera del Hero, Espacio/foco, pausa con posición estable y reanudación; nueve muestras de geometría del ciclo, dos animaciones de 10000 ms y retorno inicial. PASS.
- Preferencia persistente en recarga y navegación entre páginas, sincronización entre pestañas, almacenamiento totalmente bloqueado y almacenamiento legible con escritura fallida (cuota/solo lectura), reducción inicial del dispositivo y cambios en vivo en ambas direcciones: PASS. No se probaron todos los navegadores ni lectores de pantalla.
- Sin JS y fallback SVG oculto/eliminado: PASS. Capturas actuales de Home completa, cinco rutas y menú/preferencia en escritorio/móvil examinadas; no son capturas de una revisión anterior.
- SVG original, tres derivados anteriores y package/lock intactos; backups y tableros históricos conservados. Respaldo y evidencia: `.local-review/site-edit/`.

No se probaron Safari/Firefox, dispositivos físicos, lector de pantalla, Lighthouse/Core Web Vitals, hosting o entrega de contacto. No se afirma certificación integral de accesibilidad ni finalización del sitio, ni se autoriza reemplazar WordPress. No hubo cambios de ramas, agentes/modelos, servicios externos o despliegue.
