# SPACE PANAMÁ WEB — V11.1 Deep Asset Recovery + Attribution

**Corte de investigación:** 2026-10-02  
**Repositorio:** `risso-patron/space-panama-web`  
**Rama:** `codex/asset-discovery-v11`  
**Base:** `main` posterior a V10 (`6f867c06a2532d6b2f89b8d251862dc31ab65afb`)  
**HEAD al comenzar:** `8c0091aae23907a667be274a47b4b9fa38842419`  
**Alcance:** inventario, localización y evaluación documental. No se editaron Home, fuentes originales, Drive ni el sitio público.

## Resumen ejecutivo

- **13 archivos locales** de medios (12 en `public/` y `app/icon.png`), que representan 10 fuentes visuales de proyecto por deduplicación de pares PNG/WebP, más un icono técnico. La distribución local existente sigue concentrada en Don Ceviche, Sissy Méndez, PsicoJazmin y Space.
- La búsqueda ampliada de Drive identificó **al menos 36 localizadores únicos de archivos multimedia o documentos-índice relevantes** en las búsquedas por categorías; este es un mínimo de resultados observados y deduplicados, no el total de Drive. Además, se identificaron assets institucionales publicados en galerías públicas. Los resultados combinan originales visuales, PDFs y presentaciones que contienen material; no deben sumarse como si fueran piezas finales únicas.
- **READY NOW: 0** para incorporar a una nueva escena pública con atribución, actualidad y autorización de uso demostradas. “Encontrado”, “nombrado” o publicado en una galería genérica no acredita por sí solo autoría de Space ni permiso del cliente.
- **NEEDS CONFIRMATION: al menos 20 candidatos concretos** (entre ellos branding/tarjetas Space, logos de clientes identificados por nombre, AsuMesa, social boards de varias marcas y carpetas de campañas). Varios tienen atribución nominal útil y una ubicación en Drive verificable, pero faltan inspección visual completa, rol de Space y autorización.
- **UNATTRIBUTED:** las galerías públicas de identidad, packaging, flyers y web incluyen entradas sin cliente/archivo/caption específico; no se deben transformar en casos atribuidos. Las fotos genéricas de la Home pública tampoco se consideran portfolio verificado.
- La búsqueda sí aumenta el potencial: aparecen logos nombrados para AsuMesa, TorniHogar, SEMM, Yoko Shop, Partycheerpty, EMC Panamá y Seguros con Sissy; materiales impresos/packaging de AsuMesa; cinco tableros sociales de marcas; y más grillas de Don Ceviche y Sissy. La expansión del portfolio requiere validar y abrir esos grupos, no inventar mockups ni adjudicar piezas por semejanza.

## Método y límites de recuento

Drive se consultó en solo lectura con búsquedas independientes por términos de branding, logos, identidad, tarjetas, papelería, packaging/empaque/etiqueta/mockup, flyer/brochure/banner/rollup/invitación, evento/montaje/producción/activación/lanzamiento, post/reel/campaña/social/contenido, website/landing y nombres de clientes/proyectos (SOMOS, HomePower, SALDO, Provivir), BTS/backstage/making of y video/mp4. Se cruzaron consultas por archivos de imagen con búsquedas generales. Los buscadores devuelven páginas limitadas y relevancia aproximada; no se recorrieron todos los archivos, carpetas y descendientes del Drive. Los resultados repetidos por distintas palabras o copias se deduplicaron conceptualmente, no por hash de todos los binarios.

Las galerías de `spaceventos.com` se revisaron como páginas públicas. El extractor expone títulos, secuencia, algunos alt/captions y enlaces de imágenes numerados, pero no resolvió los archivos de imagen a URL directa de origen para inspeccionar dimensiones/píxeles de todas las entradas. Por ello, “galería publicada” no significa asset inspeccionado ni atribución confirmada. No se alteró el sitio.

### Estados

- **READY NOW:** se verifican cliente/proyecto, procedencia, aptitud y autorización explícita de publicación. Cero en este gate.
- **NEEDS CONFIRMATION:** existe evidencia nominal/contextual suficiente para investigarlo como candidato, pero falta permiso, inspección, vigencia o confirmación del rol de Space.
- **UNATTRIBUTED:** el archivo/imagen existe pero no hay nexo verificable con cliente/proyecto o trabajo de Space.
- **NOT SUITABLE:** no conviene usar para portfolio en su estado actual (p. ej. duplicado, antiguo, stock genérico, baja claridad, privado o material sin permiso).

La escala A–D es una impresión de selección visual tomada de V11 donde el archivo pudo inspeccionarse. No mide derechos ni puede elevar un candidato a READY NOW.

## Matriz ampliada de candidatos

| Asset / archivo o grupo | Cliente / proyecto | Categoría | Origen y fecha observada | Formato / calidad | Atribución / confianza | Uso potencial / escena sugerida | Estado |
|---|---|---|---|---|---|---|---|
| `public/assets/space/logo.png` | Space Panamá | Branding | Repo; uso explícito en `app/layout.tsx` | PNG 2275×1166, B | Nombre + uso actual en Home; alta para identidad actual, nula para derechos de terceros | Identificador de Space, no caso de cliente | NEEDS CONFIRMATION (autorización/máster vigente) |
| `LOGOS SPACE/space (1).png`, `space rgb (1).jpg`, `space cmyk (1).jpg` | Space Panamá | Logos/print | Drive, carpeta `LOGOS SPACE` (carpeta de 2020) | PNG/JPEG; uno 2275×1166; C por posible antigüedad | La carpeta atribuye a Space; no acredita vigencia/relación con identidad actual | Archivo de marca/archivo histórico | NEEDS CONFIRMATION |
| `MANUAL de uso SPACE (1).pdf` | Space Panamá | Branding/papelería | Drive, creado 2020 | PDF 3.81 MB; calidad visual no auditada aquí | Identidad nombrada; manual histórico | Referencia para localizar sistema/estacionería antigua | NOT SUITABLE para publicación directa |
| `Tarjetas Personales Space.pdf`, `Tarjetas Personales Space (1).pdf`, `Tarjetas Dario Space.pdf` | Space Panamá | Tarjetas/papelería | Drive; archivos localizados en búsqueda “tarjetas” | PDF 1.40 MB, 1.40 MB y 139 KB | Atribución nominal alta a marca Space; variante/fecha/arte no inspeccionados | Secuencia de papelería de marca; posible escena “archivo Space” | NEEDS CONFIRMATION |
| `Space Eventos Portafolio.pdf` y `Propuesta Portafolio Space.pdf` | Space (índice institucional) | Branding, print, social, web, eventos | Drive; creados julio 2023 | PDF 26.45 MB y 23.52 MB; no contados como piezas sueltas | Institucional por título; asociación puntual de cada lámina/cliente requiere cotejo | Mapa para extracción posterior de originales concretos, no subir PDF entero | NEEDS CONFIRMATION |
| Galería “Logos”, 10 entradas “Mesa de trabajo 1–10” | Clientes no identificados por entrada | Branding | [Identidad Visual pública](https://spaceventos.com/identidad-visual/), revisión 2026-10-02 | Imágenes referenciadas por página; dimensiones/archivos originales no expuestos por extractor | Página las presenta bajo el servicio “Logos”; no especifica cliente, fecha, rol ni permisos. Confianza baja por pieza | Candidato a solicitar/identificar mediante contacto con equipo | UNATTRIBUTED |
| `Asumesa Logo.pdf`, `Asumesa Logo CMYK - copia.jpg` | AsuMesa | Logo/branding | Drive; PDF listado en ago. 2024; copia JPEG localizada | PDF/JPEG; dimensiones no auditadas; peso JPEG 2.45 MB | Nombre específico de cliente/proyecto; atribución nominal media-alta, autoría/alcance no confirmado | Escena identidad → etiqueta → flyer (si se confirma que son del mismo encargo) | NEEDS CONFIRMATION |
| `Etiqueta Redonda AsuMesa.pdf`, `Etiqueta Pasta AsuMesa.pdf` (dos copias con IDs distintos) | AsuMesa | Packaging/etiquetas | Drive; resultados de búsquedas “etiqueta” | PDF; Etiqueta Pasta 2.23 MB; dimensiones no medidas | Nombre/proyecto claro, duplicado probable de Pasta | Microcapítulo de packaging real, enlazado con identidad; confirmar original/producción | NEEDS CONFIRMATION |
| `Asumesa_RGB_FLYER.jpg` | AsuMesa | Print/flyer | Drive; búsqueda “flyer” | JPEG 248 KB; dimensiones no auditadas | Nombre de cliente/proyecto claro; relación de autoría de Space pendiente | Entrada de print si visualmente aprobado | NEEDS CONFIRMATION |
| `TorniHogar Logo.pdf` | TorniHogar | Branding | Drive; búsqueda “logo” | PDF 397 KB | Nombre explícito; sin evidencia de entrega/publicación/permiso | Caso de identidad solo tras localizar aplicaciones y confirmar alcance | NEEDS CONFIRMATION |
| `LOGO SEMM.pdf` | SEMM | Branding | Drive; búsqueda “logo” | PDF 175 KB | Nombre explícito; cliente/categoría nominal, pero archivo no inspeccionado | Candidato a una escena de identidad | NEEDS CONFIRMATION |
| `sharon him art logo.pdf` | Sharon Him Art | Branding | Drive; búsqueda “logo” | PDF 32 KB | Nombre explícito, calidad y autoría no verificadas | Solo inventario hasta inspección | NEEDS CONFIRMATION |
| `yokoshop-logo.png`, `PresentacionClte_Yoko.pdf` | Yoko Shop | Branding / propuesta | Drive, búsqueda imagen “logo” y búsqueda general (2024) | PNG 117 KB; PDF 783 KB | Atribución nominal al cliente en nombre; el PDF parece presentación a cliente, no prueba de trabajo aceptado | Potencial para escena web/identidad después de verificar contenido y relación | NEEDS CONFIRMATION |
| `Partycheerpty-Logo.jpg`, `Emcpanama-Logo.jpg`, `Segurosconsissy-Logo.jpg` | Partycheerpty, EMC Panamá, Seguros con Sissy | Branding / tarjetas | Drive; carpeta de logos identificada por referencia a las galerías | JPEG 724 KB, 2.66 MB, 2.62 MB; Seguros con Sissy ya descrito como mockup de logo sobre papel en V11 | Los nombres aparecen también como alt de tarjetas en página pública de identidad. Vínculo de pieza y marca verificable; derechos, alcance, fecha y rol por aclarar | Escena comparativa de sistemas de identidad solo con permisos independientes | NEEDS CONFIRMATION |
| Galería “Tarjetas de presentación”: alt `17`, `15`, `Segurosconsissy-Logo`, `Partycheerpty-Logo`, `Emcpanama-Logo` | Space / tres marcas nombradas y dos no identificadas | Tarjetas/papelería | [Identidad Visual pública](https://spaceventos.com/identidad-visual/) | 5 imágenes por página; dimensiones y URL de archivo no recuperadas | Relación categoría↔página confirmada; 3 nombres de clientes asociados por alt, las entradas `17`/`15` no atribuibles | Candidatos a escena de papelería; no asumir que alt de logo describe tarjeta completa | NEEDS CONFIRMATION para tres nombrados; UNATTRIBUTED para dos numerados |
| `Segurosconsissy-Social-Media.jpg` | Seguros con Sissy | Social/campaign | Drive; nombre y carpeta del grupo de clientes | JPEG 5.25 MB; no inspeccionado en V11.1 | Atribución nominal alta, contenido, fecha, publicación y permisos pendientes | Sistema de contenido junto al video existente, evitando presentar consejo antiguo como vigente | NEEDS CONFIRMATION |
| `Doncevichepty-Social-Media.jpg` | Don Ceviche | Social/campaign | Drive; nombre y carpeta del grupo | JPEG 6.49 MB; no inspeccionado en V11.1 | Atribución nominal alta; publicación/fecha/derechos pendientes | Extensión del caso existente; posible board de campaña, no un caso nuevo | NEEDS CONFIRMATION |
| `Restaurantemercadomarisco-Social-Media.jpg` | Restaurante Mercado de Mariscos | Social/campaign | Drive; búsqueda “social media” | JPEG 5.87 MB; no inspeccionado | Nombre de cliente/proyecto nominal; confirmar spelling, rol y permiso | Posible capítulo gastronómico independiente si se verifican piezas reales y derechos | NEEDS CONFIRMATION |
| `EMCpanama-Social-Media.jpg` | EMC Panamá | Social/campaign | Drive; búsqueda “social media” | JPEG 5.33 MB; no inspeccionado | Atribución nominal media-alta, no prueba de alcance/fecha | Nueva escena de comunicación si el cliente confirma | NEEDS CONFIRMATION |
| `Yarisapowermindset-Social-Media.jpg` | Yarisa Power Mindset | Social/campaign | Drive; búsqueda “social media” | JPEG 5.05 MB; no inspeccionado | Nombre nominal, no verificado con cliente ni contenido | Caso candidato, quizá identidad/contenido | NEEDS CONFIRMATION |
| `Post 2 - SpacePanamá - Mayo.png` | Space Panamá (marca propia) | Social/campaign | Drive, carpeta localizada por consulta Sissy; fecha “Mayo” sin año resuelto | PNG 1.34 MB; no inspeccionado | Nombre de marca claro; cliente/proyecto es Space mismo | Fragmento de comunicación institucional | NEEDS CONFIRMATION |
| `-_AR - Don Ceviche - Septiembre - Post 4.png` | Don Ceviche | Social/campaign | Drive, septiembre (año no inferido) | PNG 1.51 MB, 2251² según V11; B inspeccionado | Logo/marca y asunto de campaña visibles; fecha/año exacto y permiso no confirmados | Capa de campaña del caso existente | NEEDS CONFIRMATION |
| `GRILLA DON CEVICHE MES 2 - Diciembre.pptx`, `GRILLA DON CEVICHE MES 13.pptx` (dos copias) | Don Ceviche | Social/campaign | Drive; 2022 y marzo 2024 en metadata | PPTX 29.34 MB, 38.50 MB y 38.89 MB (dos copias probables); no inspeccionados slide por slide | Cliente explícito en título; no contar slides como assets finales sin inspección | Útil para identificar campaigns, piezas y fechas y vincular originales | NEEDS CONFIRMATION |
| `GRILLA CONTENIDO MAY-JUN 2025 PSICOJAZMIN.pptx` | PsicoJazmin | Social/editorial | Drive; mayo 2025 | PPTX 8.87 MB, ya localizado en V11 | Cliente/periodo explícitos; no equivale a autorización de portfolio | Contexto/copy y posible índice de originales, revisar privacidad | NEEDS CONFIRMATION |
| `Calendario de Contenido_SAC Febrero2021_SPACEPANAMA.pdf`, `GRILLA SPACE PANAMÁ MAY-JUN 2025.pptx` | Space Panamá | Social/campaign | Drive; 2021 y 2025 | PDF 7.95 MB, PPTX 14.40 MB | Marca y ventana temporal nombradas; piezas incluidas aún no cruzadas a clientes externos | Archivo de campaña de Space; no representa casos de cliente | NEEDS CONFIRMATION |
| `flyer.jpg` (dos resultados de mismo tamaño) | UNATTRIBUTED | Print/flyer | Drive, resultados por término “flyer” | JPEG 22.56 MB; no auditado, dos IDs/títulos iguales | Nombre genérico; ninguna atribución | No usar antes de verificar contenido/origen y duplicidad | UNATTRIBUTED |
| `brucher.pdf` (dos copias) | UNATTRIBUTED | Print/brochure | Drive, resultado de “flyer”/documentos impresos | PDF 7.62 MB, copias aparentes; cliente/fecha no verificados | Nombre ambiguo/typo; falta inspección | Índice interno si se investiga, no portfolio | UNATTRIBUTED |
| `Social Media Space_Venta.pdf` | Space, material comercial | Social/capabilities | Drive, agosto 2024 | PDF 1.01 MB | Presentación comercial, no prueba de campaña implementada para cliente | No usar como caso; puede orientar taxonomía interna | NOT SUITABLE como prueba de trabajo |
| `Diseño de Packaging` gallery (8 imágenes; IDs 20–23 en galería principal más imágenes previas 16–19) | Clientes no identificados por pieza | Packaging | [Packaging público](https://spaceventos.com/diseno-de-packaging/) | 8 entradas de galería; enlace/píxeles no recuperados por el extractor | Servicio y secuencia sí; ningún nombre/caption de cliente asociado | Lista de leads para emparejar con originales AsuMesa u otros, sin asumir identidad | UNATTRIBUTED |
| `Flyers` gallery (2 piezas) | Clientes no identificados | Print | [Flyers público](https://spaceventos.com/diseno-de-flyers/) | 2 entradas; dimensiones no recuperadas | Categoría publicada, sin atribución individual | No usar como caso hasta cotejar originales | UNATTRIBUTED |
| `Website` gallery, alt `14 (1)`, `13 (1)`, `12 (1)` | Clientes no identificados | Digital/web | [Desarrollo Web público](https://spaceventos.com/desarrollo-web/) | 3 entradas; dimensiones y capturas no recuperadas | Página confirma galería de sitios, pero no nombres/URLs de los clientes | Potencial de digital una vez cotejado con dominios activos y autorización | UNATTRIBUTED |
| Home pública: `marketing-data-on-laptop-screen…`, `vertical-shot-of-the-flag-of-panama…`, `creative-digital-development-agency…`, `clients-image@2x-1.jpg` | UNATTRIBUTED / aparente stock o asset genérico | Fotografía / web | [Inicio público](https://spaceventos.com/) | JPG/JPEG con filenames de librería; no descargados ni inspeccionados | Nombres/descripciones genéricas; no son evidencia de producción/cliente Space | No reutilizar como portfolio ni BTS | NOT SUITABLE |
| `Autorizacion Derecho de imagen.docx` | Marco legal/plantilla; personas no identificadas | Derechos / producción | Drive, 2020 | DOCX 281 KB | Documento titulado autorización; no demuestra firma ni aplica automáticamente a archivos concretos | Recuperar y revisar aprobaciones por persona/campaña, sin asumir consentimiento | NOT SUITABLE como evidencia hasta validar documentos firmados |
| Búsquedas de SOMOS Properties, HomePower PTY, SALDO, Provivir/Provivir Panamá | Cuatro marcas del acto Digital | Digital/web | Drive, búsquedas exactas; cero imágenes coincidentes relevantes en los resultados consultados | — | Sin URL/captura/logo verificable recuperado | Solicitar URL y capturas originales; no hacer mockups | NOT SUITABLE por falta de asset |
| Búsquedas de `backstage`, `BTS`, `making of`, `montaje`, `activación`, `producción` | — | BTS/eventos | Drive, búsqueda por categoría | Las consultas citadas no dieron resultados visuales inequívocos de producción de Space; algunas búsquedas de “evento” devolvieron documentos y fotos genéricas | No hay atribución concreta por nombre de evento/cliente | No construir BTS/eventos sin carpeta nominada, fecha, cliente y consentimiento | NOT SUITABLE / UNATTRIBUTED |

## Galerías públicas: mapeo y atribución

| Página / sección | Estructura visible | Alt/caption/nombre observable | Qué permite concluir | Qué no permite concluir |
|---|---|---|---|---|
| [Identidad Visual](https://spaceventos.com/identidad-visual/) | Intro del servicio → Logos (10 imágenes) → Tarjetas de presentación (5 imágenes) | Logos: `Mesa de trabajo 1`…`Mesa de trabajo 10`; tarjetas: `17`, `15`, `Segurosconsissy-Logo`, `Partycheerpty-Logo`, `Emcpanama-Logo` | Space presenta esos materiales bajo sus servicios de identidad y tarjetas; tres alt conectan con nombres de marcas | No prueba que Space diseñó cada logo, qué entregable se hizo, fecha, aprobación ni autorización de portfolio |
| [Packaging](https://spaceventos.com/diseno-de-packaging/) | Encabezado/hero con imágenes → copy de servicio → galería `Packaging` (ocho imágenes enlazadas en la página) | Entradas expuestas como `Image`, sin nombre cliente/caption útil | Se publica capacidad y existe galería | No se atribuye pieza a AsuMesa ni a otro cliente |
| [Flyers](https://spaceventos.com/diseno-de-flyers/) | Intro del servicio → copy → galería de flyers con dos imágenes | Sin captions de cliente; etiquetas genéricas | Servicio y existencia de dos imágenes de muestra | No identifica campaña, cliente ni fecha |
| [Desarrollo Web](https://spaceventos.com/desarrollo-web/) | Copy de servicio → galería `Website` con tres capturas | Alt `14 (1)`, `13 (1)`, `12 (1)` | Página las agrupa como trabajos/sitios web | Sin URL, cliente, fecha ni vínculo a SOMOS/HomePower/SALDO/Provivir |
| [Servicios](https://spaceventos.com/servicios/) | Cards de identidad visual, social media (duplicada), flyers, packaging (duplicada) y web | Imágenes genéricas y repetición de tarjetas de servicio | Catálogo de capacidades | No es archivo de casos y no respalda métricas/resultados |
| [Inicio](https://spaceventos.com/) | Hero, descripción de servicios, imagen editorial y posts/blog | Filenames de assets generales de agencia; extractor también muestra fragmento inconsistente sobre “Azure App Service” bajo Organización de eventos | El sitio es una fuente de texto público de posicionamiento/servicios | Las fotos genéricas no prueban eventos, producción o trabajos de Space. La plantilla además contiene “careers@hub.com” y error de formulario; no citar como contacto fiable de la nueva Home |

**Resolución de URL/ficheros:** el extractor no dio URL de imagen, nombres originales ni dimensiones para las imágenes enlazadas como `Image N`; sus clicks a esos nodos fallaron/no resolvieron la URL. Se registran índice, alt y contexto de página, pero no se presenta una URL inferida como si estuviera verificada. La página pública identifica el teléfono y correo de contacto de Space, pero esto no es permiso para reutilizar las imágenes.

## Conteos por categoría

Conteos de activos/candidatos **observados en este ciclo**, deduplicados aproximadamente por nombre/grupo, no conteos completos de Drive. Una pieza puede pertenecer a más de una categoría; las categorías son no excluyentes.

| Categoría | Recuento mínimo de candidatos con nombre/identificador | Estado de la evidencia |
|---|---:|---|
| Branding/logos | 11+ | Logo Space actual en repo; variantes históricas; AsuMesa, TorniHogar, SEMM, Sharon Him Art, Yoko Shop, Partycheerpty, EMC Panamá, Seguros con Sissy; sin permisos verificados |
| Tarjetas/papelería | 8+ | Tres PDFs Space y cinco imágenes de galería pública; parte de imágenes con marca identificada |
| Packaging | 2 archivos AsuMesa + 8 entradas públicas genéricas | Candidatos nombrados; galería sin atribución por pieza |
| Print (flyer/brochure/etiqueta) | 5+ | Flyer AsuMesa, dos PDF de etiquetas, flyer genérico duplicado, brochure duplicado; más portafolios índice |
| Social/campaign | 10+ | Cinco tableros identificados por marca, piezas Don Ceviche/Sissy/Space y varias grillas de contenido |
| Eventos/producción | 0 assets atribuibles y listos; portafolio institucional como índice | No se identificó un set de fotografías de producción con nombre/fecha/cliente que supere atribución |
| BTS | 0 confirmado | “BTS/backstage/making of” no produjo resultados visuales inequívocos atribuibles |
| Digital/web | 3 capturas de galería pública sin nombre + cero coincidencias relevantes para cuatro marcas Digital buscadas | Se necesitan URL y capturas atribuibles/actuales |
| Videos | 2 clips locales en V11; no se recuperó nuevo video Drive atribuible en las consultas `video`/`mp4` de este ciclo | Los reels aparecen mayormente como carpetas por nombre; hay que inspeccionar descendientes para determinar si contienen videos y a quién corresponden |
| UNATTRIBUTED | 10 logos genéricos + 8 packaging + 2 flyers + 3 web + ≥2 archivos genéricos de Drive | Índices/captions no identifican cliente o archivo fuente |

**Totales pedidos:** 13 archivos locales inventariados; **≥36** localizadores multimedia/índice de Drive encontrados en las búsquedas por categoría (conteo mínimo, incluye documentos que contienen múltiples artes y no equivale a 36 piezas visuales finales); galerías públicas con al menos **26 entradas de imagen** contabilizadas por estructura (identidad 15, packaging 8, flyers 2, web 3; algunas coincidencias/cifras dependen del conteo de hero y el cuerpo se limita a galerías nombradas). READY NOW **0**. NEEDS CONFIRMATION: **≥20 grupos/archivos prioritarios** en la matriz. UNATTRIBUTED: **≥25 entradas de galería/archivos** entre los grupos contabilizados, sin contar fotos genéricas de Home ni copias múltiples. Las clases se solapan, no sumar estados para derivar un total.

### Por qué aparecen varios candidatos nuevos

Los resultados que amplían más allá de los tres casos existentes son: AsuMesa (logo + dos etiquetas + flyer), TorniHogar, SEMM, Sharon Him Art, Yoko Shop, Partycheerpty/EMC Panamá (logos y tableros sociales), Restaurante Mercado de Mariscos (social board), Yarisa Power Mindset (social board), además de muestras de identidad/tarjetas y galerías públicas. **Son leads nominales**, no casos listos: el arte de las imágenes de galería no pudo cotejarse en todos los binarios y no consta autorización de cada cliente.

## Priorización

### READY NOW

**Ninguno para nueva publicación de portfolio.** Los assets locales y algunos Drive tienen relación nominal muy clara con los casos actuales, pero ni código/ruta ni nombre de archivo constituyen autorización de derechos. El logo de Space ya está en uso, pero no se necesita convertirlo en una nueva escena.

### NEEDS CONFIRMATION (orden recomendado)

1. **AsuMesa:** confirmar rol y permiso; inspeccionar juntos logo, etiquetas redonda/pasta y flyer; confirmar si las etiquetas fueron impresas/aplicadas o son artes finales.
2. **Yoko Shop:** validar presentación a cliente, logo, capturas reales/URL y aprobación de caso; propuesta no equivale a trabajo aceptado.
3. **TorniHogar y SEMM:** abrir PDFs, localizar aplicaciones/capturas reales y confirmar entrega y permiso.
4. **Partycheerpty / EMC Panamá:** los alt del sitio y archivos Drive tienen nombres compatibles; cotejar exactamente arte, scope, fecha y permisos separados.
5. **Restaurante Mercado de Mariscos y Yarisa Power Mindset:** abrir los boards sociales, comprobar que no sean solo mockups de venta y obtener aprobación.
6. **Space stationery:** abrir tres PDFs de tarjetas y contrastar manual histórico con identidad actual antes de narrar una escena de marca propia.
7. **Campañas Don Ceviche / Sissy / PsicoJazmin:** extraer piezas concretas de decks/grillas con fechas y links al original, evitando datos personales, consejos vencidos o materiales inéditos.

### UNATTRIBUTED

- Galerías genéricas de 10 logos, packaging, flyers y capturas de web sin proyecto nombrado.
- Entradas `17` y `15` de tarjetas sin cliente identificable.
- `flyer.jpg`, `brucher.pdf` y fotos de Home sin contexto/archivo original comprobados.

### NOT SUITABLE

- Fotos de Home con nombres de librería genéricos que no prueban trabajo propio.
- PDF de ventas de servicios, calendarios y propuestas como “prueba” de resultados.
- Manual Space 2020 como identidad actual sin comparación/confirmación.
- Anuncio fechado de Don Ceviche de cierre 2023 como comunicación vigente.
- Reels/campañas con posible información sensible o regulada sin revisión de contenido/personas.

## Mejores 10 assets/leads para revisar después

No se afirma que todos estén autorizados ni listos para publicación. Orden por potencial de ampliar el portfolio y claridad nominal:

1. [Etiqueta Pasta AsuMesa.pdf](https://drive.google.com/file/d/15n45VghhRyYdeRpQIQsnY6y96qrxLMox/view) — packaging nombrado, con duplicado Drive que se debe resolver.
2. [Etiqueta Redonda AsuMesa.pdf](https://drive.google.com/file/d/12aKjifer7m-vnv4Jao2a68SwBmvZ5Ai-/view) — segunda forma del sistema de etiquetas.
3. [Asumesa_RGB_FLYER.jpg](https://drive.google.com/file/d/1IzIZnO9Fckguve0RGGTQlvs-ZdM5phVb/view) — enlaza print con la marca, sujeto a cotejo visual.
4. [Asumesa Logo CMYK](https://drive.google.com/file/d/1taFq1dO-BohYt8PEZ_E_aQLQFXH68gkR/view) — elemento de identidad complementario.
5. [Yoko Shop logo](https://drive.google.com/file/d/1GnQGhkgcTa1lvZT3ZEBT-Mfxls-CuNCV/view) — marca identificada; localizar diseño digital real.
6. [TorniHogar Logo.pdf](https://drive.google.com/file/d/1vj5c-3fKOII58n20F43hdPzAcDxe9Plf/view) — candidato a un caso de identidad distinto.
7. [LOGO SEMM.pdf](https://drive.google.com/file/d/1m5Ce1bon7lZv3F3Hvb8rY7gp-i4S5Pvq/view) — potencial marca/identidad.
8. [Restaurantemercadomarisco-Social-Media.jpg](https://drive.google.com/file/d/1XJgM5RSABv7ClgvviXZ0ti2yY5FubAGa/view) — candidato a comunicación gastronómica fuera de Don Ceviche.
9. [EMCpanama-Social-Media.jpg](https://drive.google.com/file/d/1qb4KToeFJGzqySTVJHnTw_Qe0a4Ruo3X/view) — set social identificado por nombre.
10. [Partycheerpty-Logo.jpg](https://drive.google.com/file/d/1mopHb0M7nGLCbme6waiMkdo0nbhHoswP/view) — buen candidato para cotejar contra el alt homónimo de Identidad Visual.

**Candidatos de continuidad (no cuentan como nuevos casos):** board social Don Ceviche, board social Seguros con Sissy y grillas 2024 de Don Ceviche; pueden enriquecer casos ya existentes cuando se confirme derechos y vigencia.

## Tres escenas posibles (no implementadas)

1. **ASUMESA — del signo al objeto:** revelar el logo, luego etiqueta redonda y pasta, terminar con el flyer; escena de identidad→packaging→comunicación. Es el conjunto mejor conectado por nombres de archivos, pero requiere confirmar que todo pertenece a un mismo trabajo y obtener fotografía real del producto si se pretende mostrar packaging materializado. Sin foto, presentarlo explícitamente como diseño gráfico/arte, no como empaque fabricado.
2. **IDENTIDADES EN USO — TorniHogar / SEMM / Yoko Shop:** un índice de tres sistemas solo si el equipo confirma autoría y entrega de cada uno, y si se encuentran aplicaciones reales (tarjeta, empaque, website). No combinarlos bajo un único “cliente”; cada identidad debe conservar su atribución.
3. **COMUNICACIÓN CON CONTEXTO — Mercado de Mariscos / EMC Panamá:** escoger un board tras inspección y permiso, hacer una secuencia editorial de formatos/campaña con fechas/canales verificados. Una grilla estática no demuestra alcance ni resultados; evitar cifras no respaldadas.

## Qué sigue faltando

- Confirmación escrita por asset del cliente y del rol de Space; licencias sobre fotos/fuentes y derechos de imagen de personas.
- Inspección visual de candidatos de Drive aún no abiertos, resolución/formato exactos, archivos fuente y fechas de trabajo; resolver duplicados.
- Autoría/case mapping de imágenes públicas de logos, packaging, flyers y websites; recuperación de URL de medios o descarga oficial autorizada para poder cotejar.
- Fotografías reales con cliente/fecha para packaging materializado, eventos, montaje, activación, producción y BTS. Hoy no hay un set atribuible confirmado.
- URLs/capturas vigentes y aprobadas de SOMOS Properties, HomePower PTY, SALDO y Provivir Panamá. Las búsquedas exactas no hallaron imágenes de esos nombres.
- Distinguir portfolio público de documentos internos/comerciales, calendarios, propuestas y contenido inédito.
- Confirmación de que el correo/teléfono publicados en spaceventos.com siguen siendo canales aprobados para esta nueva web, sin copiarlos automáticamente.

## Recomendación concreta para V12

**No iniciar aún una expansión visual multi-cliente ni construir hotspots con arte no inspeccionado.** Abrir un gate breve de confirmación de assets (no V12 de implementación todavía): pedir aprobación y originales para **AsuMesa** primero y revisar los archivos nombrados como conjunto. Si cliente/autoría/permiso y calidad pasan, usarlo como primer nuevo capítulo de packaging/print. En paralelo, abrir los candidatos Yoko Shop, TorniHogar, SEMM, EMC y Mercado de Mariscos y producir una tabla final de “casos aprobados” con URL pública, entregables, fecha aproximada y consentimiento. Si AsuMesa falla en aprobación, el primer paso de V12 debe ser esta confirmación con el cliente, no una escena inventada.

Un criterio de salida útil para futuro V12: **mínimo dos proyectos nuevos aprobados**, cada uno con 2–4 piezas reales inspeccionadas, atribución (cliente + entregable + fecha aproximada) y permiso por escrito; por lo menos uno con uso/aplicación real. No cuentan como aprobación los nombres en el buscador, el alt text, una propuesta no aceptada o que una imagen aparezca en la galería pública.

## Referencias y fuentes

- Repo: [V11 inventory](asset-discovery-v11.md), `public/assets/**`, `app/icon.png`, `lib/space-content.ts`, `app/layout.tsx`.
- Drive: [Space Eventos Portafolio.pdf](https://drive.google.com/file/d/1r487lRvLynVKLAuqVyTnhPkf1Eh_Qvlo/view), [Propuesta Portafolio Space.pdf](https://drive.google.com/file/d/14b7ChWjCkTA_mD0TnBcDkVfMqh_ktzJX/view), [LOGOS SPACE](https://drive.google.com/drive/folders/1lW1tRO0OnGZaw_JWrO7p1fxWYwUel2-t), [Don Ceviche Post 4](https://drive.google.com/file/d/1RRkRMNA54kU91dBmAWzVzH72IvHtndUY/view), [grilla Don Ceviche Mes 13](https://docs.google.com/presentation/d/13VA2yqUqBCG19e4VCCAt7uLB4CK9QkOE/edit), [Sissy social media board](https://drive.google.com/file/d/1rAP0C9EagLziWnpxTdU4uLs0xReWNFeb/view), [PsicoJazmin grid 2025](https://docs.google.com/presentation/d/13m4lhbtUf7DCMgMYHingVyjHtkBiB62R/edit).
- Sitio público: [Inicio](https://spaceventos.com/), [Servicios](https://spaceventos.com/servicios/), [Identidad Visual](https://spaceventos.com/identidad-visual/), [Packaging](https://spaceventos.com/diseno-de-packaging/), [Flyers](https://spaceventos.com/diseno-de-flyers/), [Desarrollo Web](https://spaceventos.com/desarrollo-web/).
- No se verificaron derechos, firma de autorizaciones, vigencia de contenido financiero, dimensiones de todas las galerías ni integridad de cada presentación. La investigación no es auditoría legal ni inventario exhaustivo de toda la unidad de Drive.
