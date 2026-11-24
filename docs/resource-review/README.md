# Revisión ampliada de recursos — Space Panamá

**Inventario para decidir, no autorización general para incorporar o publicar.** La revisión posterior seleccionó únicamente **dos composiciones históricas completas** de carpetas expresamente autorizadas en S10: Prevengo y Héroes de Panamá. Ver [fuentes, hashes y alcance local](selected-archive-pieces.json) y [revisión actual 09](../worlds-and-accessibility-review.md). La [lista verificable de trabajos](portfolio-evidence.md) separa casos, candidatos pendientes y huecos de servicios; añade la revisión visual específica de candidatos web y de identidad sin incorporarlos al sitio. No se importaron medios de la web oficial ni se añadieron dependencias remotas. Los demás candidatos permanecen en investigación; el permiso de estas dos piezas no se extiende al resto del archivo.

Los JSON siguientes son cortes históricos de inventario; la revisión 09 documenta comprobaciones específicas posteriores en la lista enlazada arriba. No se amplió la selección de medios públicos ni se convirtieron candidatos en casos. Las nuevas capturas 09 son evidencia local de interfaz, no nuevas piezas de portafolio.

## Dónde está cada inventario

| Fuente | Cobertura real | Archivo |
| --- | --- | --- |
| Repositorio | Recursos visuales detectados fuera de dependencias, builds, backups y carpetas ocultas; originales, derivados, iconos y capturas de diseño. Clientes excluidos no se revisan visualmente ni se proponen para uso; su preservación se comprueba por bytes/hash. | [`repository-media-inventory.json`](repository-media-inventory.json); inventario previo de conservados/excluidos: [`../asset-inventory.json`](../asset-inventory.json) |
| `E:/SPACE MARKETING` | **8268 archivos visuales** por metadatos, con formato, ruta, tamaño, dimensiones o motivo de indisponibilidad, asociación tentativa y uso propuesto. | `.local-review/orbit-revision/archive-visual-inventory.json` y `.csv` — locales e ignorados por Git para no difundir posibles nombres de participantes contenidos en rutas. |
| Web oficial | **16 páginas y 8 entradas WP**, 24 URLs únicas y 29 visitas HTML, incluidas Noticias y páginas específicas de servicios. **300 adjuntos WP + 15 referencias adicionales** encontradas en HTML. | [`official-media-inventory.json`](official-media-inventory.json), con fuentes y páginas donde se observaron. |
| Selección para estudiar | **73 fichas**, no 73 piezas aprobadas: muestras de carpetas de proyectos, piezas de convocatoria del concurso, dos documentos de bases y referencias oficiales. No todas tienen revisión visual. | [`visual-candidates.json`](visual-candidates.json) |
| Concurso de pandemia | Evidencia, límites y borrador editorial separado para 2020/2021; no se añadió un caso al sitio. | [`arte-en-casa.md`](arte-en-casa.md) |

Las fichas distinguen `projectHint` / `association` de identificación confirmada: **una carpeta, nombre de archivo o logo no prueba proyecto entregado, autoría o licencia**. Cada entrada indica fuente, nombre, formato, dimensiones/estado, proyecto tentativo y posible uso. No presentar el censo como una revisión visual de miles de imágenes.

## Alcance y límites de E:

- Solo lectura de directorios/cabeceras de recursos gráficos y de video; sin reparación, renombrado o escrituras en E:. Sin extracción de EXIF/geolocalización.
- Medidas: **7011** imágenes por cabecera, **338 PSD**, **325 vectores** (puntos) y **477 videos** con ffprobe: **8151** con dimensiones conocidas. Otros **110 editables** no pudieron medirse por cabecera y **7** recursos tienen metadata no disponible. No se renderizaron editables ni se inventaron tamaños.
- Se podaron clientes excluidos y carpetas internas/inscritos/evaluaciones innecesarias. Solo se consultaron las dos bases de convocatoria pertinentes al relato del concurso; no registros personales, puntuaciones ni consentimientos.
- Error real, ya observado antes: `E:/SPACE MARKETING/2025/año 2020-21/PAPPAGALLO/pappagallo galeria/Ultimas Imagenes/Social Media Nov`, **WinError 1392**, archivo o directorio dañado e ilegible. No se intentó corregirlo. El inventario **no es exhaustivo**: esa subcarpeta es inaccesible y los filtros omiten material fuera del alcance visual.
- Se vieron archivos con posible interés para Marca/Comunicación y Experiencias, pero también referencias/stock y agrupaciones cruzadas. P. Fashion, Héroes de Panamá, Pappagallo y demás carpetas no se convierten automáticamente en casos por la cantidad de archivos.

## Hallazgos históricos de investigación, anteriores a la selección específica

- **Prevengo**: logo verde identificado visualmente; contexto potencial de proyecto, no prueba de autoría del logo. La carpeta también contiene marcas de terceros.
- **SEMM International S.A.**: el logo examinado dice SEMM, aunque la carpeta se llama SENN. Resolver la discrepancia antes de nombrar un caso.
- **SAC**: logo «Servicios Avanzados de Consultoría» y retrato corporativo de grupo. Podrían contextualizar un caso solo después de comprobar rol de Space, crédito fotográfico y alcance de permiso.
- **Marka**: pieza de promoción de redes que lleva la marca Marka Marketing y Eventos. El prefijo de archivo «Space» no permite inferir una historia de rebranding o propiedad de la fotografía.
- **Cruce de carpetas**: existe un archivo `Logo Pappagallo.png` bajo MEDICAL. No se asigna un caso por ubicación del archivo.
- **ARTE en CASA**: identidad, serie de convocatoria y propuesta de taller. Son recursos para un posible caso de Comunicación/Experiencias, **no Hero**. Las piezas están separadas de obras, identidades y consentimientos de participantes.
- La web oficial referencia composiciones de **Don Ceviche y EMC**, logos y otras piezas. Su presencia pública no amplía el permiso local del material ya aprobado ni prueba derechos de terceros. Digital no recibe falsos casos de desarrollo web por mostrar un mockup o una composición social.

## Web oficial: separar evidencia real de plantilla

Se consultaron Inicio, Nosotros, Contacto, Servicios, Noticias, Desarrollo web, Packaging, Flyers, Social Media e Identidad visual, además de las páginas y entradas que devolvieron las colecciones públicas de WordPress. Sus URLs/títulos y asociaciones de medios quedan en el JSON. Páginas inglesas genéricas, testimonios, mockups y recursos de plantilla **no son trabajos de Space**.

Las 315 entradas de medios **no equivalen a 315 proyectos** ni a 315 recursos originales aprobados. Cinco referencias apuntan a `digitalhub.liquid-themes.com` / `staging.liquid-themes.com`: se marcaron como plantilla externa excluida, no se solicitaron y sus dimensiones permanecen desconocidas. En los demás casos, las dimensiones provienen de metadata WP o atributos HTML, no de una decodificación independiente de todos los originales.

No se enviaron formularios, mensajes ni datos personales. No se descargaron archivos de plantilla externos ni se configuraron servicios. Las noticias siguen pendientes de una decisión de conservación/redirección: inventariar ocho entradas no equivale a migrarlas ni aprobarlas.

## Incorporación actual y siguiente decisión

El Hero usa **SVG original inline + CSS**, no recursos del archivo, clientes ni texturas remotas. Las tres copias WebP de Don Ceviche/EMC y las fotos del caso de boda ya autorizadas permanecen en sus usos previos fuera del Hero. Psico Jazmín y AsuMesa siguen sin exposición pública, con bloqueo de medios conservado.

Para incorporar otro recurso: verificar identidad/entrega/autoría, definir permiso y crédito por elemento, seleccionar expresamente, generar únicamente un derivado optimizado local sin modificar el original y revisar su ubicación en la secuencia existente. Ninguna ruta de E: debe enlazarse desde producción. La revisión técnica y este inventario **no son aprobación visual ni autorización de despliegue**.
