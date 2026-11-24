# Space Panamá — fuentes y recursos de la versión local

## Revisión vigente 09 · evidencia antes de ilustrar servicios

Ver [lista de trabajos con piezas, fuentes, permisos y huecos](resource-review/portfolio-evidence.md) y [revisión actual](worlds-and-accessibility-review.md). No se incorporan nuevos originales de E: ni medios remotos. Marca usa la identidad institucional existente; Comunicación, una segunda pieza autorizada de Don Ceviche; Experiencias, las fotos autorizadas de ambientación. **Digital sin capturas inventadas**: los candidatos web examinados no prueban sitios entregados por Space. Otros nombres del historial permanecen pendientes. Las tres consultas oficiales de servicios de esta revisión devolvieron 403, no se presentan como una revisión visual actual exitosa. Sin movimiento automático ni control de navegación; preferencia del sistema prioritaria.

## Historial 08 · movimiento y selección real

Ver [alcance actual](site-review-and-motion.md) y [selección específica con hashes](resource-review/selected-archive-pieces.json). El Hero conserva el SVG y su composición, sin controles; la preferencia general está en navegación. Se incorporaron **dos piezas completas de carpetas expresamente autorizadas por el dueño en S10**, contrastadas visualmente: comunicación de Prevengo y cartel histórico de Héroes de Panamá con Space como coorganizador. Solo uso local; sin atribuir software, logotipos, fotografía, resultados o premios no documentados. **207926 B** adicionales. Ningún medio remoto ni cliente excluido incorporado; originales intactos. El permiso no autoriza despliegue.

## Historial · recuperación editorial y primer Hero Tierra–Luna

La versión anterior no está aprobada visualmente. Se conserva la base y la secuencia de `design/home-sequence-refinement/01-continuidad.html` / `design/home-manifiesto-resto/01-manifiesto-y-recorrido.html`. A pedido del dueño, **solo el Hero** vuelve a una escena propia de Space con Tierra y Luna separadas: ilustración SVG original, órbita CSS de 10 s, pausa y alternativas estáticas. No muestra clientes, fotografías ni piezas comerciales. Texto, logo, CTA y demás capítulos se conservan. Don Ceviche y EMC siguen autorizados para Selected Work/Trabajo **locales**, no para un despliegue.

El inventario previo a los tres derivados se conserva en [`visual-resource-inventory.json`](visual-resource-inventory.json). La revisión ampliada está en [`resource-review/README.md`](resource-review/README.md), [`visual-candidates.json`](resource-review/visual-candidates.json) y [`official-media-inventory.json`](resource-review/official-media-inventory.json): fuentes, formatos, dimensiones o estado desconocido, asociación por verificar y posibles usos. El catálogo completo de 8268 archivos visuales de E: queda local e ignorado por Git por posibles nombres de participantes en las rutas. Se revisaron únicamente las bases de convocatoria de ARTE en CASA 2020/2021 necesarias para reconstruir el caso, no registros de inscritos, evaluaciones ni consentimientos. **En esa revisión no se incorporaron medios nuevos de E: o de la web; la selección posterior de dos composiciones está documentada arriba.** Descubrir no autoriza exhibir; el error WinError 1392 sigue registrado y no se reparó el disco.

## Alcance y evidencia

Repositorio: `space-panama-web`, rama `codex/immersive-earth-hero-v13`, base `8cf0f77`. El estado anterior tenía 13 archivos versionados modificados, rutas nuevas, diseños y medios sin seguimiento. Se conserva una copia local de los archivos de trabajo y del diff inicial en `.local-review/baseline/` (ignorada por Git, sin `.env.local`). No se ha hecho commit ni publicación.

Además de las cinco páginas principales verificadas inicialmente, la revisión ampliada consultó 16 páginas y 8 entradas de WordPress: 29 visitas HTML, 24 URLs únicas, incluyendo noticias y servicios específicos. Se inspeccionó HTML/texto y metadata pública; esto no equivale a validar visualmente ni acreditar derechos sobre cada medio.

| Dato | Fuente | Clasificación y decisión |
| --- | --- | --- |
| Agencia creativa de marketing digital; pymes, emprendimientos y marcas | [Nosotros](https://spaceventos.com/nosotros/), Inicio y contenido previo del repositorio | Coherente. Se conserva sin promesas de resultados. |
| Ciudad de Panamá | Nosotros; contacto indica Panamá | Coherente. Sin dirección física, horarios ni mapa inventados. |
| `info@spaceventos.com`, `+507 6784-7093`, `https://wa.me/50767847093` | [Contacto](https://spaceventos.com/contacto/), pies de las cinco páginas y enlace oficial de WhatsApp | Confirmados como destinos publicados, no se ha enviado correo, llamado ni abierto una conversación. No prueba que alguien responda. |
| Identidad visual, social media, flyers, packaging, desarrollo web | [Servicios](https://spaceventos.com/servicios/) e Inicio | Coherente. Se agrupan editorialmente en Marca, Comunicación y Digital. |
| Estrategia y dirección; marketing de contenidos | [Inicio](https://spaceventos.com/) | Una fuente pública, consistente con Nosotros y los textos anteriores. No se prometen métricas ni prestaciones no enumeradas. |
| Organización de eventos | Inicio y fotografías locales del casamiento | Categoría confirmada; formatos, equipo, precios y alcance comercial requieren conversación. Se excluye la descripción de Azure. |
| Personas, lugares, cultura y tecnología | Nosotros | Voz de marca verificable; no se convierte en credenciales o resultados. |
| Casamiento: iluminación, estructura de madera y mesa floral | Dos fotos locales y `odd/tasks/space-panama-full-site.md`, S10 y L11–L14 | Autorización expresa del dueño registrada en la tarea anterior, fotografía de Space. Presentación anónima, sin personas identificables ni fecha, lugar o resultados inferidos. |
| Don Ceviche y EMC Panamá | Confirmación expresa del dueño en esta revisión; imágenes originales del repositorio | Trabajos de Space autorizados para la revisión y web local. No se infieren resultados, desarrollo web, fecha ni autoría fotográfica. Otros clientes y materiales externos siguen pendientes. |

## Contenido excluido

- `careers@hub.com`, tarjetas de empleo, referencias a Hub, Azure App Service en eventos, carrito y avisos de formulario inexistente: errores de plantilla corroborados en la web oficial.
- Testimonios repetidos de “FELICIA MARCI / TWITTER CEO”: plantilla, no evidencia de clientes de Space.
- Repeticiones de Nosotros, misión, Social Media y Packaging: se deduplican, no se migran como bloques distintos.
- Newsletter, formularios, analítica, CMS, Supabase y servicios externos: no integrados ni autorizados. El contacto es directo. La API de formulario no acepta ni almacena mensajes y devuelve 503 para una solicitud válida.
- [Noticias](https://spaceventos.com/noticias/): el listado visible inicial mostraba tres artículos. La revisión ampliada encontró ocho entradas en WordPress, incluida una aparente entrada de plantilla en inglés; sus URLs y títulos quedan inventariados. No se migran automáticamente: falta validar actualidad, autoría, imágenes y mantenimiento. No se presenta una sección vacía ni falsa periodicidad. El dueño debe decidir conservación o redirección artículo por artículo antes de un reemplazo oficial.
- No se inventan cifras, premios, años, testimonios, equipo, clientes ni resultados. Los casos añadidos tienen confirmación expresa del dueño.

## Inventario de medios

Pesos en bytes del archivo local. Todos los originales existentes se conservan. La existencia de un archivo **no** acredita permiso. El inventario completo legible por máquina está en `docs/asset-inventory.json`.

### Medios usados

| Archivo local | Origen | Dimensiones / formato / peso | Uso y recorte | Permisos / crédito |
| --- | --- | --- | --- | --- |
| `public/assets/space/logo.png` | https://spaceventos.com/wp-content/uploads/2019/10/logo-space.png | 2275×1166 PNG, 106303 B | Cabecera; proporción íntegra, sin filtros. Derivados separados para metadata. | Identidad oficial existente. No se atribuye a otro autor. |
| `public/assets/space/casamiento-space-luces.webp` | `IMG_8970.jpg`; procedencia registrada en L10–L14 del documento de tarea | 1600×2133 WebP, 208178 B | Solo caso secundario de Eventos en Trabajo; proporción íntegra | Fotografía de Space; permiso expreso registrado en S10/L11/L13. Pareja anónima. |
| `public/assets/space/casamiento-space-mesa.webp` | `IMG_9010.jpg`; mismo registro | 1600×2133 WebP, 209662 B | Segunda imagen del caso de Eventos en Trabajo; encuadre íntegro | Mismo permiso. No se identifica pareja ni lugar. |
| `public/assets/space/social-card.jpg` | Derivado local del logo oficial y colores de marca, creado en esta tarea | 1200×630 JPEG; peso exacto en JSON | Vista previa social, composición nueva, logo íntegro | Sin fotografía de terceros. |
| `public/assets/selected/don-ceviche-alimentacion.webp` | Original `public/assets/don-ceviche/post-4.png` | 1440×1440 WebP, 129302 B | Selected Work y Trabajo; diseño completo, sin recorte | Diseño de Space; permiso local expreso del dueño. |
| `public/assets/selected/don-ceviche-guacho.webp` | Original `public/assets/don-ceviche/post-7.png` | 1440×1439 WebP, 185506 B | Segunda pieza en Trabajo, no Hero; sin recorte | Mismo permiso local; no se asigna autor de fotografía individual. |
| `public/assets/selected/emc-redes.webp` | Original `public/assets/portfolio-v12/emc-social.webp` | 1600×1066 WebP, 141076 B | Selected Work y Trabajo, no Hero; composición íntegra | Diseño de Space, uso local autorizado; es una composición de redes, no evidencia de una web desarrollada. |

Los tres derivados nuevos suman 455884 B antes de las variantes responsive de Next Image. No se modificaron ni reemplazaron sus originales. El Hero no solicita imágenes: contiene SVG inline. Next Image precarga el logo; los casos conservan carga diferida.

### Medios conservados, no incluidos en la experiencia pública

| Ruta | Dimensiones / formato / peso | Motivo |
| --- | --- | --- |
| `public/assets/psicojazmin/identity.webp` | 717×963 WebP, 44396 B | Prohibición expresa de uso. |
| `public/assets/psicojazmin/notebook.webp` | 1600×1200 WebP, 174372 B | Prohibición expresa de uso. |
| `public/assets/psicojazmin/tazas.webp` | 1600×1200 WebP, 96672 B | Prohibición expresa de uso. |
| `public/assets/portfolio-v12/asu-flyer.webp` | 708×1000 WebP, 84738 B | AsuMesa: prohibición expresa. |
| `public/assets/portfolio-v12/asu-label-pasta.webp` | 1417×1191 WebP, 102772 B | AsuMesa: prohibición expresa. |
| `public/assets/portfolio-v12/asu-label-round.webp` | 1208×1208 WebP, 155960 B | AsuMesa: prohibición expresa. |
| `public/assets/portfolio-v12/asu-logo.webp` | 805×1200 WebP, 29894 B | AsuMesa: prohibición expresa. |
| `public/assets/portfolio-v12/emc-social.webp` | 2000×1333 WebP, 208340 B | Autorizado para uso local. Original bloqueado; solo se sirve el derivado seleccionado. |
| `public/assets/don-ceviche/post-4.png` y `.webp` | 2251×2251; PNG 1522880 B / WebP 270674 B | Uso local autorizado. Originales bloqueados; solo se sirve el derivado seleccionado. |
| `public/assets/don-ceviche/post-7.png` y `.webp` | 2251×2250; PNG 2442445 B / WebP 404890 B | Uso local autorizado. Originales bloqueados; solo se sirve el derivado seleccionado. |
| `public/assets/don-ceviche/post-3.mp4` | MP4, 4785074 B | No seleccionado: la dirección local no necesita video. |
| `public/assets/sissy/five-actions.webp` | 1127×2008 WebP, 153392 B | Permiso/contexto de Sissy sin confirmar. |
| `public/assets/sissy/sissy-5-acciones-poster.jpg` | 720×1270 JPEG, 79985 B | Mismo motivo. |
| `public/assets/sissy/sissy-5-acciones.mp4` | MP4, 2051490 B | Mismo motivo. |
| `public/assets/earth-hero/blue-marble-january-2004-4096.webp` | 4096×2048 WebP, 723470 B | Escena anterior no necesaria; procedencia/licencia no revalidada. |
| `public/assets/space/hero-orbit.mp4` | H.264, 1920×1080, 10.04 s, 3160903 B | Medio proporcionado para iteración local; publicación no acreditada. No se necesita video decorativo. |
| `public/assets/space/hero-orbit-poster.webp` | 1920×1080 WebP, 188728 B | Derivado del video, mismo límite. |
| `public/assets/space/orbital-starfield.webp` | 1280×2160 WebP, 91130 B | Derivado del poster, mismo límite. |

Las imágenes de la web oficial distintas del logo no se incorporan: no se puede inferir licencia o relación con proyectos por su presencia en WordPress. Los diseños Gentle y los componentes inmersivos anteriores se conservan como referencia, sin montarlos en las rutas actuales.

## Dirección implementada

Recuperar **Hero → Manifiesto → Selected Work → Cuatro Mundos → Digital → Método → cierre**. Azul `#3B598D` suavizado en la atmósfera de apertura/cierre, tinta `#222d3d`, crema `#f5ead8`, mar `#173641` y serif editorial de los artboards anteriores. Logo oficial íntegro en cabecera. El Hero identifica explícitamente estudio/agencia creativa de Panamá y muestra Tierra y Luna ilustradas, no boda, clientes ni “PANAMÁ” sobre el globo. La Luna completa una órbita de 10 s, sin rotación de la Tierra, flashes ni movimiento de cámara. La escena se anima solo tras hidratación y sin preferencia de movimiento reducido; sin JS es estática y, si falta el SVG, aparece una alternativa CSS. Hero y Manifiesto comparten fondo continuo; el texto del Manifiesto está siempre en flujo, sin textos competidores ni pantallas intermedias. La escena orbital es secundaria al texto y no controla el scroll. Selected Work presenta ambos clientes; Cuatro Mundos enlaza a los servicios existentes. Digital comunica capacidades sin inventar casos de sitios web. Método recupera los seis pasos previos como recorrido editorial, no métricas ni compromisos de resultados. El cierre conserva la invitación y contactos reales. Sin WebGL, video automático, GSAP montado en Home, scroll forzado, fuentes remotas ni dependencias nuevas. No se implementa animación de entrada: la transición es por lectura/scroll natural. La versión sin JavaScript conserva contenido, menú nativo y contacto. Pendiente de aprobación visual del dueño.
