# SPACE PANAMÁ WEB — V11 Asset Discovery + Visual Composition Map

**Fecha de corte:** 2026-10-02  
**Repositorio:** `risso-patron/space-panama-web`  
**Rama:** `codex/asset-discovery-v11`  
**Base:** `main` después de V10, `6f867c06a2532d6b2f89b8d251862dc31ab65afb`  
**Alcance:** descubrimiento y propuesta. No se rediseñó ni se modificó la Home ni los originales.

## Resumen ejecutivo

- En el repositorio hay **12 archivos de medios de proyecto bajo `public/`** (aprox. 11,57 MiB) y **`app/icon.png`** (28 KiB, recurso técnico): **13 archivos locales inventariados**. Las parejas PNG/WebP de Don Ceviche son duplicados de los mismos dos artes; descontándolas, son 10 visuales de proyecto distintos más el icono técnico.
- El archivo local contiene proyectos atribuibles por referencias de uso explícitas en `lib/space-content.ts`: **Don Ceviche (5 archivos / 3 visuales fuente), Sissy Méndez (3 / 3 incluyendo poster) y PsicoJazmin (3 / 3)**; más el logo actual de Space (1). La asociación en código identifica uso previsto, pero no verifica titularidad, permiso de publicación ni procedencia original.
- Google Drive devuelve archivos de marca de Space, un portafolio institucional de 2023, un manual de identidad de 2020, archivos de campaña de Don Ceviche y Sissy Méndez y una carpeta/deck de PsicoJazmin. El Drive **no está exhaustivamente enumerado** en este gate; los elementos identificados abajo son una selección con metadatos comprobados, no un total de archivos de Drive.
- El sitio público anuncia identidad, social media, flyers, packaging y desarrollo web y contiene galerías de imágenes; esas páginas prueban que la compañía publica esas capacidades y piezas, **no la autoría, cliente, resultado ni autorización de uso de cada imagen**. La Home incluye imágenes con nombres genéricos/de stock. Se excluyen de casos atribuidos.
- No se encontró evidencia verificada para BTS de producción, fotos atribuibles de eventos, testimonios/resultados, ni assets visuales de SOMOS Properties, HomePower PTY, SALDO o Provivir Panamá.
- **No hay assets listos A para protagonizar un nuevo caso con autorización comprobada.** Hay material B utilizable como punto de partida visual, sujeto a confirmación de derechos/aprobación.

### Escala A/B/C/D

- **A — protagonista:** legible y fuerte en composición/resolución, se puede considerar para escena destacada una vez que derechos/cliente estén aprobados.
- **B — soporte sólido:** imagen usable en web como medio/capa secundaria; puede requerir contexto y todavía requiere autorización.
- **C — uso limitado o pendiente de comprobación:** pieza histórica, derivada, de resolución/composición o contexto poco conveniente; no presentarla como caso principal sin revisión.
- **D — no usar como prueba/caso en este gate:** atribución, procedencia, privacidad/consentimiento o calidad no demostrados. D no quiere decir necesariamente “mal diseño”.

La evaluación visual mide únicamente el archivo revisado; no certifica licencias, derechos, vigencia de copy, relación con cliente ni consentimiento de personas retratadas.

## Inventario local completo

Tamaños y dimensiones se tomaron del archivo local; videos revisados por fotogramas representativos, no cuadro a cuadro. Para identidad/proyecto, se cotejó el nombre, carpeta y referencia de uso en código.

| Asset (path) | Cliente / categoría / tipo | Formato y dimensiones | Peso | Calidad | Origen / evidencia | Uso web posible / escena / prioridad |
|---|---|---:|---:|:---:|---|---|
| `public/assets/don-ceviche/post-3.mp4` | Don Ceviche · Video / campaña social | H.264, 1080×1080, 30 fps, 11,7 s | 4,56 MiB | B | Archivo local; `lib/space-content.ts` lo referencia como video del caso. Fotograma representativo muestra “Conoce nuestra ubicación”. | Medio principal dentro del capítulo existente; revisar copy/fecha y permiso de difusión. **P1** |
| `public/assets/don-ceviche/post-4.webp` | Don Ceviche · Social / campaña | WebP RGBA, 2251×2251 | 264 KiB | B | Referenciado por el modelo local; coincide visualmente con `post-4.png`. | Capa gráfica/hotspot de campaña. **P1** |
| `public/assets/don-ceviche/post-4.png` | Don Ceviche · Social / campaña (fuente de `post-4.webp`) | PNG RGBA, 2251×2251 | 1,45 MiB | B | Duplicado de contenido del WebP. | Mantener como original de inspección; no cargar ambas variantes en página. **P2** |
| `public/assets/don-ceviche/post-7.webp` | Don Ceviche · Social / campaña | WebP RGBA, 2251×2250 | 386 KiB | B | Referenciado por el modelo local; coincide con `post-7.png`. | Capa secundaria con encuadre editorial. **P1** |
| `public/assets/don-ceviche/post-7.png` | Don Ceviche · Social / campaña (fuente de `post-7.webp`) | PNG RGBA, 2251×2250 | 2,33 MiB | B | Duplicado de contenido del WebP. | Guardar como archivo fuente; no duplicar en interfaz. **P2** |
| `public/assets/sissy/sissy-5-acciones.mp4` | Sissy Méndez · Video vertical / campaña | H.264, 720×1270, 24 fps, 29,3 s | 1,96 MiB | B | Archivo y ruta asignados al proyecto en `lib/space-content.ts`; fotograma representativo con contexto de seguros. | Puede sostener una escena vertical editorial; revisar consentimiento, licencias y vigencia regulatoria. **P1** |
| `public/assets/sissy/five-actions.webp` | Sissy Méndez · Social / campaña vertical | WebP RGB, 1127×2008 | 150 KiB | B | Nombre/ruta y contexto de “5 acciones” en el modelo local. | Secundaria al video; no repetir ni ampliar consejo de seguros sin aprobación. **P1** |
| `public/assets/sissy/sissy-5-acciones-poster.jpg` | Sissy Méndez · Poster derivado de video | JPEG RGB, 720×1270 | 78 KiB | C | Poster asignado al video en el modelo. | Placeholder de video/imagen de apoyo; dimensión menor y derivación del mismo contenido. **P2** |
| `public/assets/psicojazmin/identity.webp` | PsicoJazmin · Branding / identidad | WebP RGBA, 717×963 | 43 KiB | B | Referencia de identidad en el modelo local y componente del proyecto. | Elemento focal del sistema; confirmar el uso de marca y si es logo maestro. **P1** |
| `public/assets/psicojazmin/notebook.webp` | PsicoJazmin · Aplicación de identidad / print | WebP RGB, 1600×1200 | 166 KiB | B | Referencia `notebook` en código. | Capa de aplicación del sistema. **P1** |
| `public/assets/psicojazmin/tazas.webp` | PsicoJazmin · Aplicación de identidad / producto | WebP RGB, 1600×1200 | 94 KiB | B | Referencia `tazas` en código. | Capa de aplicación complementaria. **P1** |
| `public/assets/space/logo.png` | Space Panamá · Branding / logo | PNG RGBA, 2275×1166 | 104 KiB | B | Usado por Hero y Open Graph en `app/layout.tsx`. | Identificador de Space; usar integrado al canvas V10, no como tarjeta. **P1** |
| `app/icon.png` | Identidad técnica del sitio · favicon/app icon | PNG RGBA, 512×512 | 28 KiB | B (técnico) | Icono de Next.js; no es asset de Selected Work. | No proponer como pieza de portfolio. — |

Las dos parejas PNG/WebP de Don Ceviche tienen dimensiones y arte iguales; las versiones WebP reducen el peso conjunto de esos pares aproximadamente **83 %**. El WebP ya es la variante más razonable para presentar; PNG queda como referencia fuente.

## Material adicional identificado en Drive

Las filas de Drive son candidatos/localizadores del archivo, con links a la fuente original. El buscador encontró registros y metadatos; solo algunas imágenes de la tabla fueron descargadas temporalmente por el conector para inspección visual/dimensiones. No se escribieron ni reemplazaron archivos originales.

| Asset / archivo en Drive | Proyecto / categoría | Formato / dimensiones | Peso | Calidad | Evidencia / estado | Posible escena / prioridad |
|---|---|---:|---:|:---:|---|---|
| [Space Eventos Portafolio.pdf](https://drive.google.com/file/d/1r487lRvLynVKLAuqVyTnhPkf1Eh_Qvlo/view) | Space · Branding, print, social, web, eventos (archivo institucional) | PDF | 26.45 MB | C | Creado 2023. Extracción de texto enumera tarjetas, flyers, revistas digitales, posts/feeds, Facebook cover, web, presentaciones musicales y artículos promocionales. No se confirmó cada imagen ni atribución a clientes de forma individual. | Índice para localizar originales; no subir el PDF entero a la Home. **P1 investigación** |
| [MANUAL de uso SPACE (1).pdf](https://drive.google.com/file/d/1AKtLsXbV2Kiu6hG-FkZbo7c3oPMTmOr5/view) | Space · Manual de identidad / papelería / logos | PDF | 3.81 MB | C | Creado 2020. Texto extraído indica Pantone Classic Blue 19-4052 y Bank Gothic Medium; incluye referencias a tarjetas, membrete y tarjetas personales. Histórico: no dar por vigente frente al logo de Home V10 sin confirmación. | Fuente histórica para localizar vectores actuales; no usar sus mockups directamente sin revisar vigencia. **P2** |
| `space (1).png` — [Drive](https://drive.google.com/file/d/1a69aczaKJXHEAA_77Tb2g3_FdvV5U_f8/view) | Space · Logo | PNG, 2275×1166 | 106,303 B | C | Visualmente logo Classic Blue; pertenece al folder `LOGOS SPACE`. Puede ser una versión histórica distinta al arte que ya se usa en el repo. | Comparar con el logo aprobado actual antes de reemplazar/añadir. **P2** |
| `space rgb (1).jpg` — [Drive](https://drive.google.com/file/d/1K9NJhMXFchujCLarpmIUx5xynWvACQhQ/view) | Space · Logo RGB | JPEG, dimensiones no leídas | 108,564 B | C | Metadata: variante “rgb” en el folder `LOGOS SPACE`; dimensiones no inspeccionadas. | Posible máster secundario. **P2** |
| `space cmyk (1).jpg` — [Drive](https://drive.google.com/file/d/1jpvnzS2ZUKMAymENewZUW7rdaX66HzjX/view) | Space · Logo CMYK/print | JPEG, dimensiones no leídas | 2,095,081 B | C | Metadata: variante “cmyk”; dimensiones no inspeccionadas. | Solo referencia/impresión; no cargar tal cual en web. **P3** |
| `-_AR - Don Ceviche - Septiembre - Post 4.png` — [Drive](https://drive.google.com/file/d/1RRkRMNA54kU91dBmAWzVzH72IvHtndUY/view) | Don Ceviche · Social/campaña “Día Mundial de la Alimentación” | PNG, 2251×2251 | 1,513,892 B | B | Visualmente inspeccionada; diseño nítido, ilustración de alimentos y marca. La asociación se apoya en el nombre y archivo dentro del grupo `Don Ceviche`; confirmar aprobación/autoría antes de publicar. | Buen candidato a capa secundaria de campaña, no como mockup de packaging. **P1** |
| `PostDonCeviche-27enero2023-02-01.png` — [Drive](https://drive.google.com/file/d/1A2Qi7zP8qI_QmrdXjq3qkIq4y64tgvbo/view) | Don Ceviche · Social/post temporal | PNG, 4500×4500 | 1,126,865 B | C | Visualmente inspeccionada: anuncio de cierre el viernes 27 de enero de 2023. Resolución alta pero contenido fechado/no vigente. | Archivo de proceso/archivo histórico solo si se contextualiza; no mostrar como pieza actual. **P3** |
| `Doncevichepty-Social-Media.jpg` — [Drive](https://drive.google.com/file/d/1sYndV0d83mucri5Dvl-6IyC1OpVw6z0e/view) | Don Ceviche · Social/media | JPEG, 4500×3000 | 6,492,874 B | C | Archivo y dimensiones comprobados; no se hizo evaluación visual del contenido. | Revisar si es arte compuesto/contact sheet antes de decidir. **P2** |
| `P - Frase Seguro - Sissy Méndez.png` — [Drive](https://drive.google.com/file/d/1Tm3nnxNH8JqjeHKRJ7z-JMeTIs7kbnYh/view) | Sissy Méndez · Social/campaña | PNG, 1080×1350 | 391,802 B | B | Visualmente inspeccionada: pieza vertical legible, marca “Sissy Méndez / Seguros con Sissy”; archivo en resultados de búsqueda de Sissy. | Capa de campaña; no reutilizar la frase como recomendación actual ni testimonio. **P1** |
| `Segurosconsissy-Logo.jpg` — [Drive](https://drive.google.com/file/d/1MdsyhGdOL8_X6QpJJw7i91w0X_TVrduv/view) | Sissy Méndez · Identidad/aplicación | JPEG, 3000×2000 | 2,615,914 B | B | Inspeccionada: aplicación fotográfica del logo impresa sobre papel; asociación sugerida por nombre, no autorización/alcance probado. | Capa pequeña de identidad, no el logo maestro. **P2** |
| `Segurosconsissy-Social-Media.jpg` — [Drive](https://drive.google.com/file/d/1rAP0C9EagLziWnpxTdU4uLs0xReWNFeb/view) | Sissy Méndez · Social/campaña | JPEG, 4500×3000 | 5,248,053 B | C | Nombre/tamaño en Drive; no se inspeccionó visualmente el contenido. | Revisar composición antes de uso. **P2** |
| `P - Frase Seguro`, grillas Sissy (marzo 2024) y campañas de Don Ceviche (grillas mensuales) | Sissy / Don Ceviche · Social/campaña | PNG y presentaciones Google Slides/PPTX | Archivo individual hallado entre 3.9–38.9 MB para algunas grillas; dimensiones por slide pendientes | C | Se encontraron varias grillas mensuales y carpetas “Alta Resolución”/“HD” en Drive. No se contaron todos los descendientes ni se inspeccionó cada slide. | Hacer selección por página/elemento, pedir permiso y luego extraer originales; no usar grillas como imagen de portada. **P1 investigación** |
| `GRILLA CONTENIDO MAY-JUN 2025 PSICOJAZMIN.pptx` y folder `PSICOJAZMIN` — [presentación](https://docs.google.com/presentation/d/13m4lhbtUf7DCMgMYHingVyjHtkBiB62R/edit) | PsicoJazmin · Social/campaña (candidato) | PPTX | 8,867,898 B | C | Resultado de búsqueda por cliente. Aún no se inspeccionó la presentación visualmente; asociación por título, no permisos. | Buscar assets aprobados que amplíen identidad aplicada; no asumir nuevos items. **P2** |
| [Galerías públicas por servicio: identidad](https://spaceventos.com/identidad-visual/), [flyers](https://spaceventos.com/diseno-de-flyers/), [packaging](https://spaceventos.com/diseno-de-packaging/) y [web](https://spaceventos.com/desarrollo-web/) | Space · Identidad, print, packaging, digital | Galerías web de imágenes | Dimensiones/peso no extraídos; el acceso de inspección a las imágenes fue inconsistente | D | Las páginas muestran imágenes bajo categorías de servicio; los títulos/galerías no atribuyen claramente cada pieza a clientes concretos. No prueba que cada imagen sea un caso Space. | No descargar/atribuir como portfolio hasta verificar autoría y originales. **P3** |

### Colecciones/archivos Drive que requieren inspección aparte

- **Space:** folder `LOGOS SPACE`, PDF de portafolio institucional de 2023 y manual corporativo de 2020; búsquedas también hallaron posts de marca 2023–2025 y papelería. Hay evidencia de varias generaciones, no una única fuente de marca actual.
- **Don Ceviche:** folder con mensualidades y subfolders `ALTA RESOLUCIÓN`/`HD`; las búsquedas hallaron grillas y posts históricos. Se revisaron solo los archivos nombrados arriba; el inventario del Drive no es exhaustivo.
- **Sissy Méndez:** folders de contenido y grillas 2024, además de imágenes mencionadas arriba.
- **PsicoJazmin:** carpeta 2025, grilla de contenido y varios PDFs tipo producto editorial; no se consideran automáticamente material de portfolio. No se inspeccionó su contenido por slide.
- La búsqueda de imágenes de Drive por “PsicoJazmin” no devolvió resultados etiquetados; ello no contradice los 3 recursos locales que sí se usan en la Home.

## Totales y distribución revisada

### Conteo local (exhaustivo para medios del repo en este checkout)

| Conteo por archivo | Total | A | B | C | D |
|---|---:|---:|---:|---:|---:|
| `public/` + `app/icon.png` | 13 | 0 | 12* | 1 | 0 |

\* La calificación B del icono es solamente técnica; no cuenta como trabajo de portfolio.  
Entre 12 medios de `public/`: A 0, B 11, C 1, D 0. La evaluación presupone que el archivo ya puede cargar técnicamente; derechos y aprobación siguen abiertos.

### Categorías por presencia local / evidencia externa

| Categoría | Material local comprobado | Material Drive/web adicional localizado | Estado |
|---|---|---|---|
| Branding / identidad | logo Space, logo PsicoJazmin, elementos visuales Sissy | logo Space RGB/CMYK e histórico; logo aplicado Sissy; portafolio/manual | Más material de identidad existe; confirmar versión vigente y atribución antes de presentar una escena nueva. |
| Packaging | Ningún asset inequívoco de empaque en `public/` | El sitio anuncia el servicio y una galería; el portafolio PDF menciona packaging dentro del contenido extraído, sin asignar marcas en el texto | **Servicio sí; caso con asset verificable no.** |
| Print / papelería | notebook PsicoJazmin como aplicación | Manual de marca y membrete Space; portfolio menciona tarjetas/flyers/revistas | Candidatos históricos; revisar originales, legibilidad y derechos. |
| Social / campaña | Don Ceviche posts; Sissy cinco acciones | Campañas mensuales archivadas para Don Ceviche y Sissy; posts de Space propios | Sí hay mucha materia potencial, pero elegir originales aprobados y quitar publicaciones temporales. |
| Eventos / activaciones | Ninguna fotografía de evento atribuible | Portafolio institucional describe presentaciones musicales y artículos promocionales; sitio anuncia organización de eventos | Capacidades/contenido promocional no equivalen a BTS ni a evento verificable. |
| Video | Don Ceviche 1080² / 11.7s; Sissy 720×1270 / 29.3s | Grillas/documentos podrían contener video adicional, no inventariados | Dos videos locales reales; ambos necesitan revisión de permisos, vigencia y reproducción completa. |
| BTS | Ninguno identificado | Ningún archivo confirmado como BTS en la revisión parcial de Drive | **No verificado.** |
| Digital / website | Ninguna captura de sitios/clientes | El sitio público anuncia desarrollo web; grillas/catálogo 2023 lo listan como servicio | **Capacidad anunciada, no casos web con pruebas visuales atribuibles.** |

La suma “13 archivos locales” es el conteo total verificable dentro del checkout, no el total de archivos de Drive. Las carpetas de Drive contienen archivos que no se inventariaron uno por uno. No se suman copias o derivados de Drive con local porque no se hizo comparación de hash.

## Clientes / proyectos

| Cliente/proyecto | Asset set real confirmado | Nivel de calidad observado | Evidencia y límites |
|---|---|---|---|
| Don Ceviche | Local: 2 artes cuadradas (PNG+WebP) y video cuadrado. Drive: al menos 2 imágenes individualizadas más grillas/campañas históricas. | B para artes/clip local; B para post ilustrado sep.; C para anuncio cerrado 2023 y archivos no inspeccionados. | Nombre/carpeta + referencias del sitio local; Drive añade continuidad de contenido. No confirma permiso para publicar originales ni su actualidad. |
| Sissy Méndez / Seguros con Sissy | Local: pieza vertical, video vertical, poster. Drive: quote graphic, aplicación de logo, colección social/grillas. | B para material local/quote/identidad; C para poster/archivos no inspeccionados. | Identidad en nombres y asset/code mapping. Contenido de seguro requiere aprobación vigente; no narrar como testimonio/resultado. |
| PsicoJazmin | Local: identity, notebook, tazas. Drive: folder/grilla 2025 y PDFs editoriales no inspeccionados. | B para los 3 stills locales; C provisional para grilla Drive. | Assets locales inequívocos en código; no asumir que producto fotografiado es objeto fabricado versus mockup. |
| Space Panamá (marca propia) | Local: logo vigente usado en Hero/OG. Drive: 3 variantes de logo, manual y folio histórico, posts/papelería. | B logo local; C variantes/manual históricos por posible desactualización. | El manual usa Classic Blue y Bank Gothic; comparar con logo y art direction ya aprobados antes de recuperar elementos. |
| SOMOS Properties, HomePower PTY, SALDO, Provivir Panamá | No se hallaron logos, capturas ni mockups locales identificables. | D (no hay pieza para evaluar). | Nombres aparecen en acto Digital aprobado, pero no constituyen evidencia de que assets de esos proyectos estén disponibles. |

## Propuesta de escenas (no implementadas)

Integrar todo al **único background atmosférico V10**. Los proyectos aportan color y texturas; no se agrega un nuevo fondo independiente. Mantener estructura narrativa horizontal ya aprobada en Selected Work, sin convertir el inventario en grid de productos.

1. **MARCA / IDENTIDAD — Space + PsicoJazmin:** abrir con logo limpio como gesto principal; posteriormente anclar notebook y tazas en tamaños distintos y con profundidad; una marca/índice editorial en espacio negativo. Para assets de Space de Drive, usar solo después de confirmar que las versiones de 2020 siguen vigentes. Hotspots posibles: 2 (logo y una aplicación; la tercera pieza permanece en composición, no necesita marcador).
2. **COMUNICACIÓN — Don Ceviche / Sissy:** no combinar sus clientes en una falsa campaña común. Don Ceviche puede vivir como expansión del capítulo existente: pieza ilustrada con alimentos y clips reales, con el arte social como capas. Sissy debe conservar su lenguaje humano/editorial de video vertical + pieza gráfica, y no repetir frases de asesoría como si fueran citas/testimonio. Hotspots: hasta 2 por proyecto.
3. **PACKAGING:** no crear aún una escena de caso. El servicio aparece en el sitio, pero no se encontró un archivo de empaque local o Drive con atribución y calidad evaluadas. Conseguir fotos originales/planos de un trabajo, proyecto, aprobación del cliente y autorización antes de componer.
4. **PRINT:** tarjetas, flyers y revistas se localizan como categorías del portafolio 2023, no como archivos sueltos validados. Una futura escena podría usar hojas apiladas y recortes a escala editorial, solo tras extracción de originales y atribución.
5. **EXPERIENCIAS / EVENTOS:** no recrear ni simular escenarios. Esperar fotos de producción autorizadas con fecha/cliente y suficientes tomas para identificar el trabajo. Si llegan, una foto amplia puede ser plano de contexto; detalles reales entran como capas, no tarjetas.
6. **DIGITAL / WEB:** no convertir solo los nombres de cuatro marcas en mockups. Solicitar URL pública/capturas originales y permiso de cada cliente; entonces elegir scrolls recortados en capas, evitando dispositivos renderizados falsos.
7. **PAUSA:** dejar respirar el canvas V10 entre escenas y usar los cambios de color propios de los assets, no sumar fondos coloridos nuevos.

## Arquitectura propuesta de hotspots (sin implementar)

- Solo los assets elegidos reciben hotspot: **máximo 2–4 por escena**, idealmente 2. El visual principal permanece visible y no se marca como video con icono de play si es imagen.
- Hotspot es un `<button>` nativo, target de tamaño táctil, con `aria-label` específico y focus visible. En desktop, hover/focus revela una etiqueta corta; click/Enter/Space abre una expansión editorial sobre el canvas existente. En móvil, tap abre directamente; nunca depender solo de hover.
- Expansión puede ser un `<dialog>` no modal si el fondo queda navegable o modal con `aria-modal=true` y focus management si la interacción efectivamente bloquea el fondo. Evitar modal blanco, tarjetas y nuevas superficies de color. `Escape` cierra; cierre retorna el foco al botón que abrió. Descripción de imagen/video, pausa de video y controles accesibles son obligatorios.
- Reducir motion mediante `prefers-reduced-motion`; sin zoom/cambio de contexto animado si está activado. Fallback muestra imagen accesible. No usar ícono play sobre arte estático.

## Desktop y mobile

- **Desktop:** composición asimétrica con un asset principal y hasta 2–3 piezas secundarias que pueden recortarse parcialmente, variar de escala y reaccionar a cursor/hotspot; interacciones no deben tapar copy ni depender del desplazamiento horizontal para descubrir contenido.
- **Mobile:** composición vertical más simple, una pieza por momento; hotspot/tap con controles claros, sin hover ni arrastre horizontal obligatorio. Evitar assets con copy detallado en tamaños donde no pueda leerse; el texto debe quedar accesible mediante etiqueta/descrición.
- Ambos formatos comparten el background maestro V10; baja la complejidad y la cantidad de motion en mobile. Aún no hubo prototipo/QA de este sistema y no se reclama comportamiento implementado.

## Riesgos, faltantes y siguiente paso

**Riesgos:** falta autorización escrita para reusar originales/rostros/marcas; assets de seguros pueden envejecer o implicar consejo de productos; el material de enero 2023 está fechado; el manual de Space es de 2020; archivos JPEG multimegapixel deben optimizarse en un gate de implementación con originales conservados; posible divergencia entre distintas generaciones de logo; imágenes de las galerías públicas no identifican claramente cliente o autor.

**Faltantes a solicitar:**

1. Lista aprobada de clientes/trabajos que sí se pueden publicar, con rol exacto de Space y autorización por asset/persona.
2. Originales editables/hi-res de packaging y print con contexto de proyecto.
3. Carpeta de fotos reales de producción/eventos con cliente, fecha y permiso.
4. URL y capturas aprobadas para SOMOS Properties, HomePower PTY, SALDO y Provivir Panamá.
5. Confirmación de logo/paleta/brand guide actual de Space (el Drive encontrado es antiguo).
6. Confirmación de qué videos se pueden publicar, rango/edición aprobada y subtítulos/transcripción.

**Primer bloque visual recomendado:** extender **PsicoJazmin** con una composición de identidad → cuaderno → tazas, usando únicamente los tres stills que ya están en el repositorio, como una escena asimétrica dentro del canvas V10. Tiene el set más coherente y no requiere inventar un caso nuevo ni buscar packaging; puede demostrar 2–3 hotspots y expansión accesible de forma aislada. Antes de publicar, confirmar autorización del cliente y que las fotos de aplicaciones pueden mostrarse. En paralelo, pedir los masters vigentes de Space y originales para packaging/eventos.

## Fuentes y límites

- Repositorio local: `public/assets/**`, `app/icon.png`, `lib/space-content.ts`, `app/layout.tsx`, `README.md`.
- Drive (búsqueda selectiva de solo lectura): `Space Eventos Portafolio.pdf`, `MANUAL de uso SPACE (1).pdf`, folder `LOGOS SPACE`, carpetas Don Ceviche / Sissy Méndez / PSICOJAZMIN y algunos archivos nombrados en la matriz. No se recorrieron todos sus descendientes. Búsqueda y descarga de muestra no alteraron Drive.
- Sitio público: [Inicio](https://spaceventos.com/), [Servicios](https://spaceventos.com/servicios/), [Identidad Visual](https://spaceventos.com/identidad-visual/), [Diseño de Flyers](https://spaceventos.com/diseno-de-flyers/), [Diseño de Packaging](https://spaceventos.com/diseno-de-packaging/), [Desarrollo Web](https://spaceventos.com/desarrollo-web/). La web anuncia esos servicios y publica galerías; no se asumió atribución/propiedad a clientes. [Servicios](https://spaceventos.com/servicios/) · [Identidad Visual](https://spaceventos.com/identidad-visual/) · [Packaging](https://spaceventos.com/diseno-de-packaging/) · [Flyers](https://spaceventos.com/diseno-de-flyers/) · [Desarrollo Web](https://spaceventos.com/desarrollo-web/).
- Limitación: no se verificaron derechos, fechas de todas las piezas, procedencia original ni desempeño/uso real; no se vio completo cada video ni cada página de las grillas. Calidad A–D es una valoración preliminar de selección visual, no evaluación de marca o resultados comerciales.

