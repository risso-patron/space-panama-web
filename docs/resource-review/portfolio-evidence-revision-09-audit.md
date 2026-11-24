# Inventario de trabajos de Space Panamá · auditoría de la revisión 09

Copia ampliada de [portfolio-evidence.md](portfolio-evidence.md), conservado intacto. Documento de decisión, **no aprobación del sitio ni autorización de publicación**. No incorpora casos, modifica medios ni sustituye los registros históricos.

## Resultado y alcance

- La web local conserva **cinco casos**: Don Ceviche, EMC Panamá, Prevengo, Héroes de Panamá y ambientación de casamiento. Esto describe la selección local, no cinco expedientes de derechos completos para publicación.
- Psico Jazmín y AsuMesa siguen fuera de las cinco páginas activas y de la respuesta de `/api/content` comprobadas. Dos accesos directos de muestra a sus medios devolvieron 404; no se declara una auditoría exhaustiva del bloqueo.
- Digital continúa como **servicio sin caso web con capturas verificadas**. EMC muestra Instagram; Prevengo no acredita desarrollo de software; los recursos de Pappagallo no acreditan una web entregada.
- S10 nombra el casamiento y trece proyectos. **No menciona Don Ceviche, EMC, ARTE en CASA ni los candidatos procedentes únicamente de WordPress o del README.** Cada permiso debe conservar su fuente real.
- Se consultaron los documentos locales y metadatos históricos, el código vigente, las capturas 09 y las respuestas HTTP locales. **No se reabrieron originales de E: o F:, no se reprodujeron videos ni se renderizaron editables.** Acceso actual a esos originales: no comprobado, no declarado fallido.

## 1. Fuentes consultadas y fuerza de la evidencia

| Clave | Fuente legible en el repositorio | Qué acredita / límite |
| --- | --- | --- |
| F1 | [Tarea original: S4, S9, S10 y L1, L10–L14](../../odd/tasks/space-panama-full-site.md) | Texto literal de autorización y restricciones; historia de las dos fotos. Sus tareas pendientes son historia, no un estado actualizado automáticamente por esta auditoría. |
| F2 | [Inventario de recursos](../visual-resource-inventory.json) | Selección, rutas, dimensiones, hashes y anotaciones de permiso local. No es una cesión de derechos ni reemplaza la declaración del dueño. |
| F3 | [Composiciones seleccionadas](selected-archive-pieces.json) | Dos piezas completas, hashes origen/destino y alcance local explícito; `deploymentAuthorized: false`. |
| F4 | [Fichas visuales](visual-candidates.json) | Identificadores, dimensiones, estado de revisión histórica y candidatos. `selected: false` y campos de investigación no equivalen a aprobación. |
| F5 | [Reconstrucción ARTE en CASA](arte-en-casa.md) | Análisis documental histórico de dos ediciones, fuentes y límites; no relectura actual de sus PDF/DOCX originales. |
| F6 | [Fuentes del sitio](../site-sources.md) | Registra permiso local de Don Ceviche/EMC y procedencia de recursos. No contiene una transcripción literal de esa autorización comparable a S10. |
| F7 | [Informe original 09](portfolio-evidence.md) | Observaciones visuales históricas, descartes y lista de candidatos; se corrigen precisiones en esta copia, sin alterarlo. |
| F8 | `.local-review/worlds-revision/digital-candidates.json` | Metadata histórica filtrada: Fernando, banner Pappagallo, chat Prevengo y Space-Web, entre otros. No prueba de autoría ni de revisión visual actual. |
| F9 | [README histórico](../../README.md), apartados V6 y pendientes Digital | Nombres históricos, no prueba de entrega, capturas o derechos actuales. |
| F10 | [Contenido vigente](../../lib/public-site.ts), [Trabajo](../../app/trabajo/page.tsx), [Home](../../components/site/site-home.tsx), [proxy](../../proxy.ts) | Casos, imágenes y oferta que el código renderiza; contrastados con HTTP. Un comentario `Public` o una allowlist no concede derechos de publicación. |
| F11 | [Tablero 09](../../design/home-sequence-refinement/09-cuatro-mundos.html) y capturas `review-worlds-{grid,full}-{1440,390}.jpg` del mismo directorio | Evidencia visual de la revisión 09 examinada. No son capturas nuevas del servidor ni prueba de consentimiento. |

**Convenciones:** `A/` = `E:/SPACE MARKETING/2025/año 2020-21/`; `B/` = `E:/SPACE MARKETING/Año 2020-2021/ARTE EN CASA 2021/`; `W/` = `https://spaceventos.com/wp-content/uploads/`. Las abreviaturas se expanden literalmente; no se asume que rutas parecidas sean copias idénticas. Dimensiones en píxeles salvo indicación `pt`. **ND** = no documentadas/verificadas; **NA** = no aplican a una imagen fija. Las dimensiones externas/WordPress son históricas, no mediciones nuevas.

## 2. S10: literal, contexto y permisos separados

Texto de F1, S10, conservado literalmente:

> “En el casamiento [pareja], confirmo la autorizacion, la fotografia son de Space. Las imgenes grandes de Pexel/stock no se usaran pero si puedes usar las que estan en las carpetas de los proyectos que space realizo como prevengo, sharon him, senn, sac, roma, remodelaciones nelson, pappagallo, panama coworking, p.fashion, medical, Marka, fernando estilista y Heroes de panama. Alli podras usar informacion y material para enriquecer la web.”

**Interpretación limitada por el contexto:** S10 sí permite usar información y material de los proyectos nombrados para enriquecer la web; no se reduce su texto a una mera autorización para listar carpetas. Sin embargo, no dice literalmente «revisión local» ni «publicación pública». El límite local proviene de L1 —«Tienes autorización para implementar cambios localmente […] No publiques, despliegues […]»— y de S9. No hay levantamiento documentado de ese límite. S10 no enumera archivos ni entrega una atribución individual de cada foto, logo o ilustración; la excepción explícita es el crédito fotográfico de Space para el casamiento. El término «como» no se usa aquí para ampliar permisos a proyectos no nombrados.

| Código | Revisión / uso local | Publicación pública |
| --- | --- | --- |
| L-S10 | Proyecto nombrado expresamente. Material investigable y utilizable en el contexto local autorizado, sujeto a pieza pertinente, exclusiones y créditos. No equivale a seleccionar todas sus piezas. | No acreditada por S10; pendiente por pieza y por contexto de difusión. |
| L-BODA | S10 confirma autorización y fotografía de Space; L13–L14 acotan la selección anónima a dos detalles del evento. | No habilitada por el contexto local. Nombres, personas y otros encuadres no quedan autorizados por extensión. |
| L-REG | F2/F6 registran autorización del dueño para selección y web local; **no procede de S10**. Declaración literal independiente no recuperada entre estas fuentes. | No acreditada; falta confirmación específica y créditos pertinentes. |
| L-INV | Investigación documental permitida por el encargo actual; no permiso nuevo de exhibición en la web local. | No acreditada. |
| X | Exclusión expresa o evidencia inadecuada para la atribución pretendida. Investigar una referencia no revoca la exclusión. | Excluir; no publicar bajo esta revisión. |

«Incluir» en este informe significa **conservar en la selección local o incorporar al inventario documental indicado**, nunca publicar. No se ejecuta ninguna selección nueva en la web.

## 3. Cinco casos con pieza identificada y selección local existente

### 3.1 Don Ceviche — comunicación gráfica para redes/producto

- **Origen registrado:** `public/assets/don-ceviche/post-4.png`, 2251×2251; `public/assets/don-ceviche/post-7.png`, 2251×2250. F2/F6 identifican los PNG como origen de los derivados; existen versiones WebP históricas, pero no deben confundirse con ese origen.
- **Piezas locales:** `public/assets/selected/don-ceviche-alimentacion.webp`, 1440×1440; `public/assets/selected/don-ceviche-guacho.webp`, 1440×1439. Dimensiones leídas ahora; hashes de los dos PNG coinciden con F2.
- **Evidencia:** F2, F6, F10, F11; `/trabajo#don-ceviche` y ambos recursos referenciados en el HTML actual.
- **Permite afirmar:** existencia de las piezas del Día Mundial de la Alimentación y guacho de mariscos; diseño de comunicación de Space según el registro de confirmación del dueño. La composición visible respalda comunicación de producto, no packaging.
- **No permite afirmar:** diseño del logo, autoría de toda ilustración/fotografía incorporada, gestión de comunidad, estrategia ejecutada, ventas o resultados.
- **Permiso local:** L-REG. **S10:** no lo nombra. **Publicación:** pendiente de confirmación por pieza. **Créditos:** diseño atribuido a Space por F6; fotografía e ilustraciones individuales no atribuidas aquí.
- **Recomendación:** **incluir/conservar localmente** las dos composiciones completas; mantener pendientes otros recursos y el permiso público.

### 3.2 EMC Panamá — piezas de comunicación para redes

- **Origen:** `public/assets/portfolio-v12/emc-social.webp`, 2000×1333. **Derivado:** `public/assets/selected/emc-redes.webp`, 1600×1066, dimensión leída ahora. Hash del origen coincide con F2.
- **Evidencia:** F2/F6/F10/F11; `/trabajo#emc-panama`. Teléfono con Instagram y publicaciones de productos en la composición.
- **Permite afirmar:** composición de piezas sociales; diseño de Space según el registro de autorización local.
- **No permite afirmar:** desarrollo de Instagram, web o aplicación, fotografía de producto, creación de logo, gestión o resultados de campaña.
- **Permiso local:** L-REG. **S10:** no lo nombra. **Publicación:** pendiente por pieza. **Créditos:** diseño según F6; fotografía, marcas y otros elementos incorporados no resueltos individualmente.
- **Recomendación:** **incluir/conservar localmente** como comunicación, nunca como evidencia web.

### 3.3 Ambientación de casamiento — detalles de evento y fotografía

- **Origen histórico F1 L10–L14:** `F:/Casaniento [pareja]/FOTOS/IMG_8970.jpg` y `IMG_9010.jpg`, ambos 3024×4032. No se reabrieron ni se verificó una migración a E:. Se conserva la grafía histórica de la ruta.
- **Archivos locales:** `public/assets/space/casamiento-space-luces.webp` y `casamiento-space-mesa.webp`, ambos 1600×2133; dimensiones y hashes verificados ahora contra F2. F1 registra normalización de orientación EXIF durante la conversión. F2 registra hashes de los WebP, **no hashes de los JPEG externos**.
- **Evidencia:** F1/F2/F6, `/trabajo#casamiento`, módulos Experiencias en F11.
- **Permite afirmar:** ambientación visible —luces, paneles y mesa floral— y fotografía de Space, expresamente confirmada en S10.
- **No permite afirmar:** producción integral de la boda, autoría de torta/flores/mobiliario, lugar, proveedores, asistentes o resultados. Los nombres aparecen en la fuente privada de autorización, no deben trasladarse a la ficha pública.
- **Permiso local:** L-BODA, solo selección anónima de dos detalles. **Publicación:** pendiente; no llamar a esto «caso público» aprobado. **Crédito:** fotografía de Space confirmado; no atribuir todos los elementos de la ambientación a Space sin alcance adicional.
- **Recomendación:** **incluir/conservar localmente**, anónimo y sin ampliar encuadres.

### 3.4 Prevengo — composición promocional de producto

- **Origen:** `A/PREVENGO/Material Publicitario/Redes-Space/Material Marketing/post 3.png`, 1055×1021 (F3/F4, E-04981).
- **Derivado:** `public/assets/selected/prevengo-comunicacion-historica.webp`, 1055×1021; dimensión y hash de destino coinciden con F3. Hash externo registrado, no recalculado ahora.
- **Evidencia:** F1 S10 («prevengo»), F3/F4/F10/F11, `/trabajo#prevengo`.
- **Permite afirmar:** muestra histórica de comunicación de producto con iconos, marca y mensajes. S10 identifica el proyecto como trabajo de Space; no asigna por sí sola cada elemento de la composición.
- **No permite afirmar:** desarrollo de software, diseño de la identidad, validación médica, resultados clínicos/comerciales ni autoría fotográfica.
- **Permiso local:** L-S10, selección completa documentada en F3. **Publicación:** no acreditada. **Créditos:** no separar ni atribuir logos, iconos, fotos o tecnología sin comprobación.
- **Recomendación:** **incluir/conservar localmente** solo la composición completa. Chat y logos aislados continúan pendientes/excluidos como evidencia web (sección 6).

### 3.5 Héroes de Panamá — comunicación de convocatoria cultural

- **Origen:** `A/HEROES DE PANAMA/PRENSA/POSTER OFICIAL.jpeg`, 724×1024 (F3/F4, E-01930).
- **Derivado:** `public/assets/selected/heroes-panama-convocatoria.webp`, 724×1024; dimensión y hash de destino coinciden con F3. Hash externo no recalculado.
- **Evidencia:** F1 S10 («Heroes de panama»), F3/F4/F10/F11, `/trabajo#heroes-de-panama`.
- **Permite afirmar:** cartel histórico de convocatoria de arte y dibujo; Space figura en «Organizan» junto a The Academy y Panamá Accesible. Describe el crédito mostrado, no certifica ejecución contractual.
- **No permite afirmar:** autoría individual de ilustraciones, participantes, ganadores, premios efectivamente entregados, resultados o inscripción vigente.
- **Permiso local:** L-S10 para la composición seleccionada. **Publicación:** pendiente. **Créditos:** conservar los del cartel, sin adjudicar a Space las obras/logos ajenos ni extraerlos.
- **Recomendación:** **incluir/conservar localmente** como convocatoria histórica. Obras, retratos y registros de participantes: **excluir de esta selección**.

## 4. Evidencia identificada, sin selección web

### 4.1 ARTE en CASA 2020 — convocatoria documentada, no resultados

- **Fuentes y dimensiones históricas:** `E:/SPACE MARKETING/ARTE EN CASA/Bases Concurso_ARTEenCASA_SPACE_PANAMA.pdf`, 9 páginas de 612×792 pt; `B/ARTE EN CASA/arte final2 en jpg.jpeg`, 1280×719; `B/ARTE EN CASA/ARTES/1.jpeg` a `5.jpeg`, cada uno 1280×1280; `B/ARTE EN CASA/Invitación_Taller_Lectura_Premio.jpg`, 1000×1000.
- **Evidencia consultada:** F5 y F4 (CONTEST-DOC-pdf, E-07537–E-07542, E-07544); hash del PDF registrado en F4. Lectura actual de la reconstrucción, no de los originales.
- **Permite afirmar:** bases de una convocatoria 2020, tema «Mi Lugar Favorito en Panamá», edades 6–12 y tres disciplinas; calendario y premios **previstos**. La serie gráfica es coherente con esas bases según F5, pero está en una carpeta 2021: edición de cada pieza pendiente. Space/Arckalab y Ministerio de Cultura son créditos comunicados por las piezas, no aval vigente verificado.
- **No permite afirmar:** ejecución, asistencia, impacto educativo, alcance, número de participantes, ganadores, entrega de premios ni autoría integral de imágenes.
- **Permiso local:** L-INV para investigación; **S10 no nombra ARTE en CASA**. No trasladar el permiso de Héroes a este concurso. **Publicación:** pendiente por pieza. **Créditos:** roles de Space, colaboradores, fotos/ilustraciones y derechos de reproducción pendientes; no se verificaron consentimientos firmados de participantes.
- **Recomendación:** **mantener pendiente** como caso; incluir solo la reconstrucción documental en el inventario. Excluir obras, retratos y datos de participantes.

### 4.2 ARTE en CASA 2021 — concurso/taller distinto

- **Origen:** `B/Bases del concurso -ARTE CREATIVO (final).docx`; dimensiones **NA**, documento fluido, no imagen. Hash registrado en F4, CONTEST-DOC-docx.
- **Evidencia:** F4/F5. Título interior «Concurso / Taller de Dibujo ARTE EN CASA 2021», Space Panamá y Arteproyección; grupos 7–12 y 13+, dibujo y talleres previstos.
- **Permite afirmar:** segunda convocatoria documental con mecánica/calendario diferentes. **No permite:** adjudicarle los gráficos compatibles con 2020, resolver inventando la inconsistencia entre puestos y premios, afirmar talleres realizados, premios entregados o resultados.
- **Permiso local:** L-INV; **no nombrado en S10**. **Publicación:** pendiente. **Créditos:** rol por entrega, gráficos propios de 2021 y derechos de colaboradores no confirmados; ningún consentimiento de participantes se da por firmado.
- **Recomendación:** **mantener pendiente**, separado de 2020; no sumar como caso web.

### 4.3 Pappagallo — recursos candidatos de comunicación, no caso web

| Archivo de origen | Dimensiones históricas / evidencia |
| --- | --- |
| `A/PAPPAGALLO/pappagallo galeria/Marketing Box Jennifer/ARTES/REVISTA/Brochure Pappagallo Final.ai` | ND; editable no renderizado. F4 E-04216, metadata. E-07898 es otra ruta bajo `E:/SPACE MARKETING/pappagallo galeria/…`, no equivalencia verificada. |
| `E:/SPACE MARKETING/Año 2020-2021/87ymedia/Capsulas/PAPPAGALLO AUTOMATION VIDEO FINAL .mp4` | 1920×1080, 64.11405 s según metadata ffprobe histórica; F4 E-06302. Contenido no revisado aquí. |
| `A/PAPPAGALLO/pappagallo galeria/videos 2/videos/alejandro/web_video.mp4` | 1280×720, 188.543979 s; F8 E-04797. Metadata, no revisión del video. |
| `A/PAPPAGALLO/pappagallo galeria/Marketing Box Jennifer/WebSite/Home-img-1.jpg` | 1740×792; F8 E-04305. F7 registra revisión visual: habitación con símbolos Wi-Fi, no captura web. |

- **Permite afirmar:** existencia registrada de estos recursos candidatos; la pieza estática observada históricamente es un banner. **Servicio demostrado como entrega de Space:** todavía ninguno cerrado por esta evidencia.
- **No permite afirmar:** diseño/entrega del brochure por decir «Final», producción audiovisual, desarrollo web, fotografía, instalaciones, arquitectura ni vínculo contractual de materiales cruzados con Medical/87ymedia.
- **Permiso local:** L-S10 («pappagallo»); hay que resolver asociación de cada archivo, especialmente fuera de la carpeta nombrada. **Publicación:** pendiente. **Créditos:** fotos, producto, video y colaboradores no verificados.
- **Recomendación:** **mantener pendiente**; no importar nada. Excluir el banner como prueba de desarrollo web. Subcarpeta dañada: ver sección 8.

## 5. Otros candidatos: no convertir nombre o carpeta en caso

Cada fila separa servicio posible de servicio demostrado. **Ninguno queda incluido en la web por esta auditoría.** Las dimensiones de F4/F8 son históricas; WordPress no fue consultado de nuevo.

| Entrada y evidencia material | Servicio realmente acreditado / afirmaciones permitidas y prohibidas | S10, permiso local, publicación y créditos | Recomendación |
| --- | --- | --- | --- |
| **Sharon Him**. F1/F4: búsqueda nominal sin pieza individual localizada. Ruta de archivo y dimensiones ND; no inventar una ruta a partir del nombre. | Ningún servicio visual demostrado. S10 sí identifica el proyecto como de Space; cero coincidencias no prueban inexistencia. | Nombrado «sharon him»: L-S10. Publicación y créditos por recurso pendientes. | **Mantener pendiente**: localizar pieza, entrega y rol. |
| **SENN / SEMM International S.A.** `A/SENN/LOGO SEMM INTERNATIONAL, S.A/LOGO SEMM-01.png`, 2090×1044; `LOGO SEMM.jpg`, 1456×415; `LOGO SEMM.ai`, 351×101 pt. F4 E-05258–E-05260; solo PNG con revisión visual histórica. | Logo identificado como **SEMM**, posible identidad, no diseño acreditado a Space. No resolver nombre/versión por carpeta SENN. | S10 dice «senn»: L-S10; correspondencia SENN↔SEMM pendiente. Publicación y autoría/créditos del logo pendientes. | **Mantener pendiente** hasta confirmar nombre, versión entregada y autor. |
| **SAC**. `A/SAC/LOGOS/SAC-Logo.jpg`, 612×319; `A/SAC/FOTOS Y VIDEOS/Con TapaBoca/SAC2020-100.JPG`, 3000×2000. F4 E-05137/E-05087, revisión visual histórica. | Identidad visible «Servicios Avanzados de Consultoría» y retrato grupal. No prueban diseño de Space ni autoría fotográfica/consentimientos. | S10 «sac»: L-S10. Publicación pendiente; crédito de logo/fotografía y permiso de personas no verificados. | **Mantener pendiente**, no exhibir retratos por mera presencia en carpeta. |
| **Roma**. `A/Roma/zoom_0.mp4`, 2560×1440, 2519.56 s, F4 E-05086, metadata; video no revisado. | Servicio ND. Nombre de reunión/video no demuestra evento entregado ni producción audiovisual. | S10 «roma»: L-S10; no permiso específico de publicación de voces/personas. Créditos y pertinencia pendientes. | **Mantener pendiente**; no extraer participantes. |
| **Remodelaciones Nelson**. F1/F4; sin pieza individual, ruta y dimensiones ND. | Servicio ND. No atribuir remodelación, fotografía ni diseño a Space por el nombre. | S10 «remodelaciones nelson»: L-S10. Publicación/créditos pendientes. | **Mantener pendiente**: identificar archivo y rol. |
| **Panama Coworking**. F1/F4; sin pieza individual, ruta y dimensiones ND. | Servicio ND. Solo proyecto nombrado, no entrega validada. | S10 «panama coworking»: L-S10. Publicación/créditos pendientes. | **Mantener pendiente**: marca, recurso y entrega. |
| **P. Fashion**. `A/P.Fashion/Mr.Model 2005/Eleccion Mr Miodel/`: `doc-45013.jpg` 560×558, `doc-45015.jpg` 485×528, `doc-45018.jpg` 644×418, `doc-45019.jpg` 415×610, `doc-45020.jpg` 471×552. F4 E-03789–E-03793, metadata. | Posible comunicación/evento, **ningún servicio atribuido aún**. No inferir año efectivo, producción ni fotografía del nombre de carpeta. | S10 «p.fashion»: L-S10. Publicación pendiente; autoría fotográfica, uso de imagen y rol por entrega no confirmados. | **Mantener pendiente**; no seleccionar personas sin contexto y permiso. |
| **Medical**. `A/MEDICAL/Pana American Medical-LOGOS 1.jpg` 405×210; `Pana American Medical-LOGOS-2.jpg` 437×249; `Pana American Medical-LOGOS.jpg` 828×1170. F4 E-03300–E-03302, metadata. | Posible identidad, no autoría demostrada. Material Pappagallo cruzado no demuestra otro cliente ni identidad de Medical. | S10 «medical»: L-S10; identidad exacta y asociación pendientes. Publicación/créditos pendientes. | **Mantener pendiente**; separar marcas y confirmar entrega. |
| **Marka**. `A/Anderson/Direccion de Marketing/Febrero2020/Flyer Redes Space/Space-Marka Emprendedor.jpg`, 2000×2000 (E-00094, revisión visual histórica); `Propuesta MARKA Space 002.psd`, 2000×2000 (E-00087, header, sin render). | Pieza promocional visible de Marka Marketing y Eventos, posible comunicación. No prueba rebranding, autoría íntegra o entrega aprobada. | S10 «Marka»: L-S10; ruta Anderson requiere asociación, no permiso general de esa carpeta. Publicación pendiente; fotografía/retrato y colaboradores sin crédito resuelto. | **Mantener pendiente**. |
| **Fernando Estilista / Fernando Méndez**. `A/FERNANDO STILISTA/ENVIADOS FINALES/Marca Fernando Mendez Final (1).jpg`, 1926×1976, F8 E-01081 y observación F7; variantes PNG/AI/CDR citadas sin selección ni dimensiones verificadas aquí. | Marca dorada «Fernando Méndez Style» según revisión histórica. Posible identidad; «Final» no prueba entrega ni autoría. | S10 «fernando estilista»: L-S10. Publicación pendiente; versión entregada y autores/colaboradores por confirmar. | **Mantener pendiente**, no elevar a caso confirmado. |
| **Partycheerpty**. `W/2025/04/Partycheerpty-Logo.jpg`, 3000×2000, F4 WP-8306; metadata WordPress, no decodificación nueva. | Posible identidad; presencia oficial solo acredita una referencia histórica, no entrega de Space. | **No nombrado en S10**. L-INV; exhibición local, publicación y créditos pendientes. | **Mantener pendiente**. |
| **Seguros con Sissy**. `W/2025/04/Segurosconsissy-Logo.jpg`, 3000×2000 (WP-8305); `W/2024/10/Segurosconsissy-Social-Media.jpg`, 4500×3000 (WP-8185), F4. F6 además registra `public/assets/sissy/five-actions.webp` 1127×2008 y poster `sissy-5-acciones-poster.jpg` 720×1270; video `sissy-5-acciones.mp4`, dimensiones ND aquí. | Posible identidad/comunicación; no entrega/resultado aprobado por estar alojado oficialmente o en el repo. | **No nombrado en S10**. L-INV; permiso de exhibición y publicación pendiente; créditos no resueltos. | **Mantener pendiente**, conservar medios históricos fuera de la selección. |
| **Restaurante Mercado Marisco**. `W/2024/10/Restaurantemercadomarisco-Social-Media.jpg`, 4500×3000, F4 WP-8187. | Posible comunicación, no atribución confirmada; identidad exacta del cliente pendiente. | **No nombrado en S10**. L-INV; exhibición/publicación y créditos pendientes. | **Mantener pendiente**. |
| **Yarisa Power Mindset**. `W/2024/10/Yarisapowermindset-Social-Media.jpg`, 4500×3000, F4 WP-8184. | Posible comunicación; nombre, rol y entrega por comprobar; sin métricas. | **No nombrado en S10**. L-INV; exhibición/publicación y créditos pendientes. | **Mantener pendiente**. |
| **SOMOS Properties**. F9, nombre histórico; archivo de sitio, URL y dimensiones ND. | Ningún caso web visual demostrado. El README dice nombres aprobados, no capturas ni autoría verificada. | **No nombrado en S10**. L-INV; permiso específico de recursos locales/públicos y créditos pendientes. | **Mantener pendiente**: paquete web de sección 6. |
| **HomePower PTY**. F9, nombre histórico; archivo, URL y dimensiones ND. | Ninguna entrega web demostrada por esta evidencia; no sintetizar pantallas. | **No nombrado en S10**. L-INV; permisos por recurso y créditos pendientes. | **Mantener pendiente**. |
| **SALDO**. F9, nombre histórico ambiguo; archivo, URL y dimensiones ND. | Servicio/caso concreto sin identificar; no asociar a un sitio por coincidencia de nombre. | **No nombrado en S10**. L-INV; permisos y créditos pendientes. | **Mantener pendiente**: identidad y URL primero. |
| **Provivir Panamá**. Nombre histórico de F9; archivo, URL y dimensiones ND. | Ningún caso web demostrado. | **No nombrado en S10**. L-INV; permisos y créditos pendientes. | **Mantener pendiente**; confirmar nombre y sitio real. |

## 6. Digital y referencias que no demuestran un sitio de Space

| Recurso | Evidencia / dimensiones | Qué permite y qué no; permisos/créditos | Decisión |
| --- | --- | --- | --- |
| `A/Anderson/Direccion de Marketing/Febrero2020/Space-Web.jpg` | F8 E-00177, 1368×769; F7 registra que muestra «we are marketing / Global Growth Agents». | Referencia de otra agencia, no web de Space. S10 no autoriza atribuirla por el prefijo Space; investigación L-INV, publicación/créditos no acreditados. | **Excluir como caso de Space**. |
| Banner Pappagallo `Home-img-1.jpg` | Ruta completa en 4.3; 1740×792, F7/F8. | Habitación/Wi-Fi, no captura de web. L-S10 para el proyecto, créditos/publicación pendientes. Copias nominales en SENN u otras carpetas no acreditan nuevos clientes. | **Excluir como prueba web**; pendiente como recurso de comunicación. |
| `A/PREVENGO/Eduardo/Screenshot_20201130-174548_Prevengo.jpg` | F8 E-04896, 720×1520; F7 describe chat. | Interfaz no prueba rol de Space en software. L-S10 no acredita autores, licencia de interfaz o permiso para datos del chat. | **Excluir de esta selección**; no publicar captura ni atribuir desarrollo. |
| EMC / Instagram | Origen y dimensiones en 3.2. | Comunicación social, no web entregada. L-REG, sin nuevos créditos ni permiso público. | **Incluir solo como comunicación local**, excluir como caso Digital. |
| `Browser*` / referencias Liquid Themes | F7; archivo individual, ruta completa y dimensiones ND en el informe original. No reabiertos ni seleccionados aquí. | No existe evidencia de entrega de Space ni permiso específico. L-INV, créditos pendientes. | **Excluir como portafolio**; no fabricar mockups sustitutos. |

**Para habilitar un caso Digital:** URL real o copia archivada entregada; identidad y aprobación del cliente; rol concreto de Space (diseño/desarrollo/mantenimiento); versión y fecha; capturas originales de escritorio y móvil; autorización diferenciada para revisión local y publicación; créditos de colaboradores/fotos; sanitización autorizada de datos personales. Un nombre, una carpeta `WebSite`, un video llamado `web_video` o una captura de un tercero no sustituyen ese paquete.

## 7. Servicios ofrecidos, no necesariamente casos demostrados

F10 contiene ocho servicios. Su presencia es comprobable en el sitio local; la verificación oficial referida en F6/F7 es histórica. Para estas entradas de **oferta comercial**, archivo/dimensiones de pieza son **NA** salvo los ejemplos indicados; no hay permiso de caso implícito. La publicación del sitio sigue no autorizada.

| Servicio | Evidencia real y alcance | Falta / recomendación |
| --- | --- | --- |
| Identidad visual | Logo institucional Space `public/assets/space/logo.png`, 2275×1166, hash F2 coincidente; F6 lo vincula al logo oficial. Referencia de marca propia, **no sexto cliente ni prueba de quién diseñó el logo**. Uso institucional local registrado, no en S10; autoría individual/publicación nueva no certificadas. | **Incluir como servicio/referencia institucional**. Mantener pendiente un caso cliente con entrega, autoría y permisos; no promover logos candidatos. |
| Diseño de packaging | Oferta F10 y fuente oficial histórica F6. Un producto en un post no acredita diseño del envase. | **Incluir como servicio sin caso**; pedir arte final o foto de empaque con rol, créditos y permisos. |
| Estrategia y dirección | Oferta F10/Método; no brief o resultado de cliente validado. | **Incluir como servicio sin caso**; no inventar decisiones de campaña ni publicar documentos internos. |
| Marketing de contenidos | Piezas Don Ceviche/EMC/Prevengo, con sus límites y permisos de sección 3. | **Incluir oferta**; esas piezas no prueban estrategia integral, calendario ejecutado ni métricas. |
| Social media | Piezas de redes Don Ceviche/EMC. | **Incluir oferta y ejemplos locales**; no convertir diseño en prueba de community management o resultados. |
| Diseño de flyers | Cartel Héroes seleccionado; ARTE en CASA solo investigación. | **Incluir oferta/cartel local**; créditos y permiso público pendientes; ARTE sigue fuera. |
| Organización de eventos | Ambientación fotografiada; coorganización comunicada en Héroes. | **Incluir oferta con alcance acotado**; no afirmar producción integral o resultados no documentados. |
| Desarrollo web | Oferta F10, sin caso con capturas/autoría verificadas. | **Incluir solo servicio**; mantener casos pendientes hasta reunir paquete de sección 6. |

### Exclusiones que no cambian

- **Psico Jazmín:** `public/assets/psicojazmin/identity.webp` 717×963; `notebook.webp` 1600×1200; `tazas.webp` 1600×1200, dimensiones históricas F6. **S4 prohíbe uso**, S10 no lo nombra. No se evalúa autoría ni se transforma su existencia en caso. Permiso local/público: X; créditos no revalidados. **Excluir**, conservar archivos intactos.
- **AsuMesa:** `public/assets/portfolio-v12/asu-flyer.webp` 708×1000; `asu-label-pasta.webp` 1417×1191; `asu-label-round.webp` 1208×1208; `asu-logo.webp` 805×1200, F6. **S4 prohíbe uso**, S10 no lo nombra. No atribuir packaging por el nombre de esos archivos. Permiso local/público: X; créditos no revalidados. **Excluir**, conservar originales.
- **Pexels/stock grandes:** exclusión literal S10; no son evidencia del trabajo de Space. F4 contiene incluso una coincidencia nominal «medical» bajo `Imagenes y videos` (E-07856), no dentro de un proyecto Medical acreditado. **Excluir como caso**, sin copiar ni usar la etiqueta automática de proyecto como permiso.

## 8. Lectura externa y evidencia no revisada

### Limitaciones de E: separadas del estado de la web

1. F2/F4 registran error de `scandir`, código `UNKNOWN`, en `E:/SPACE MARKETING/2025/año 2020-21/PAPPAGALLO/pappagallo galeria/Ultimas Imagenes/Social Media Nov`. F7 lo describe como **WinError 1392**. Son antecedentes, **no diagnóstico reproducido ahora**; no se reparó ni se garantiza integridad/completitud.
2. F2 registra 8279 nombres visuales; F4 registra 8268 recursos y dimensiones conocidas para 8151. Son censos históricos distintos; no se fusionan ni se interpretan como pérdida de 11 archivos. No son números de trabajos, clientes, entregas o participantes.
3. No se montó, escaneó ni reabrió E: en esta auditoría. Por ello acceso actual, hashes originales externos y cambios posteriores al inventario quedan **sin verificar**, no «archivos inexistentes». F: tampoco se consultó; no se presupone equivalencia F:↔E:.
4. Las rutas repetidas de Pappagallo, Space-Web y otros proyectos no establecen identidad de bytes o una entrega adicional. La asociación por carpeta es solo una pista.

### Archivos no revisados directamente en esta auditoría

- Todos los originales externos citados: se leyeron sus **registros locales**, no su contenido actual. Esto incluye los dos originales seleccionados de Prevengo/Héroes y los JPEG del casamiento.
- `Brochure Pappagallo Final.ai`, sus rutas alternativas, `PAPPAGALLO AUTOMATION VIDEO FINAL .mp4`, ambos registros de `web_video.mp4`, `Roma/zoom_0.mp4`, editables PSD/AI/CDR y variantes de Fernando: sin reproducción/render actual. Dimensiones desconocidas no se estimaron.
- PDF/DOCX de ARTE en CASA: lectura histórica documentada en F5, no nueva apertura; los hashes guardados no prueban que sigan iguales hoy.
- Recursos WordPress: metadata histórica de F4, sin descarga/decodificación actual. Los 403 de `/desarrollo-web/`, `/identidad-visual/` y `/diseno-de-packaging/` son los intentos registrados en F7 y `.local-review/worlds-revision/official-check.json`, no nuevos intentos.
- Obras, retratos, planillas, evaluaciones, consentimientos y datos de participantes: no abiertos. No se reproducen rutas con nombres personales incidentales de las fichas históricas. Una cláusula de consentimiento en bases no acredita un consentimiento firmado.
- Sharon Him, Remodelaciones Nelson, Panama Coworking y los cuatro nombres históricos Digital: no se identificó una pieza verificable adicional. Esto no demuestra que no exista.

## 9. Contraste actual y pruebas existentes

**Comprobaciones nuevas, sin modificar el sitio:**

- GET a `http://127.0.0.1:3218/`, `/trabajo`, `/servicios`, `/nosotros`, `/contacto` y `/api/content`: HTTP 200. No se inició/reinició ningún servidor.
- `/trabajo` contiene las secciones `don-ceviche`, `emc-panama`, `prevengo`, `heroes-de-panama`, `casamiento`, con siete imágenes de casos referenciadas. F10 conserva la misma selección.
- Las cinco páginas y la API no contienen coincidencias nominales `psico`/`asumesa`. Accesos directos de muestra a `/assets/psicojazmin/identity.webp` y `/assets/portfolio-v12/asu-flyer.webp`: 404. No se afirma cobertura de todos los aliases, codificaciones u optimizador.
- Dimensiones actuales de los siete medios seleccionados coinciden con las enumeradas en sección 3. Coinciden con F2 los hashes del logo, los dos PNG de Don Ceviche, original EMC y los dos WebP del casamiento; coinciden con F3 los hashes de destino Prevengo/Héroes. F2 no aporta hash de destino para los tres derivados Don Ceviche/EMC: no se afirma una comparación inexistente.
- Examinadas capturas 09 de Home completa y recortes de Cuatro mundos, escritorio/móvil. Recortes: 1440×1926 y 390×2545. Cuatro mundos presenta logo institucional, Don Ceviche, ambientación y Digital tipográfico, **no cuatro casos de cliente**. Home completa permite contrastar presencia de las otras composiciones; la captura móvil completa es demasiado reducida en el visor para validar texto pequeño.
- No hubo nueva navegación visual en navegador, captura responsive ni prueba táctil. HTML actual y capturas históricas son evidencia complementaria, no equivalencia visual garantizada.

**Pruebas anteriores:** `.local-review/worlds-revision/tests.log` registra 12 aprobadas/0 fallidas; `browser-check.log`, 20 combinaciones; `smoke.log`, rutas/destinos; [informe QA 09](../worlds-and-accessibility-review.md) describe lint/build, foco, movimiento y geometría. No se ejecutaron de nuevo ni se convierten en prueba de derechos. No se requiere build para esta copia documental; no cambia comportamiento.

## 10. Diferencias frente al original y decisiones del dueño

### Diferencias documentales

1. Permisos por caso: distingue texto literal de S10, alcance local contextual, autorización registrada en otra fuente y autorización pública pendiente. S10 **no** se usa como permiso universal.
2. Corrige origen Don Ceviche a PNG y medidas exactas de los derivados, sin borrar la existencia de versiones WebP históricas.
3. Recupera procedencia histórica F: del casamiento; el inventario de recursos contiene hashes locales, no una cadena completa de hashes de origen externo. Reemplaza la ambigua expresión «caso público anónimo» por «selección local anónima».
4. Añade dimensiones, identificadores, nivel de evidencia y decisión por entrada; conserva los 18 candidatos del apartado B y los tres del apartado A pendientes, sin promoverlos.
5. Mantiene las dos ediciones de ARTE en CASA separadas y señala expresamente que S10 no las nombra.
6. Contrasta selección actual, exclusiones y Digital mediante código/HTTP/capturas, separando comprobación nueva de QA histórico.
7. Documenta censos distintos, errores históricos de E:, material no abierto y créditos pendientes, sin inventar una recertificación del archivo.

### Decisiones todavía necesarias

- **Publicación:** si se decide publicar más adelante, confirmar por cada una de las siete piezas seleccionadas el uso público permitido, canal/contexto y créditos; la autorización de despliegue es una decisión distinta. Para Don Ceviche/EMC, aportar o confirmar la declaración específica que los registros resumen, sin atribuirla a S10.
- **Identidad/packaging:** elegir un candidato y confirmar cliente, nombre (incluido SENN/SEMM), versión entregada, rol de Space y autores/licencias; ningún logo queda aprobado por este informe.
- **Digital:** elegir un sitio y aportar el paquete verificable de sección 6; confirmar identidad de los nombres históricos antes de reutilizarlos.
- **ARTE en CASA/Pappagallo:** decidir qué piezas investigar después; confirmar edición/rol/créditos antes de seleccionar. No incluir participantes ni abrir material privado como requisito automático.

**Preservación:** el original `portfolio-evidence.md` se leyó con SHA-256 `15ce76d089befdfe49330baa8d48c0b2678d7263ca7a10aa3b55ae4c51141187`. Esta copia es el único archivo creado para el encargo. No cambia código, assets, originales externos ni refs de Git; no autoriza commit, push, merge o despliegue.
