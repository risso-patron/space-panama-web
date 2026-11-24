# Blog · plan pendiente

Estado: **implementado en local (2026-11-21)**, a pedido de Luis. Ver la sección «Implementación» al final. Luis lo pidió para una etapa posterior (2026-11-21), cuando se defina quién escribe y con qué frecuencia (recomendado: 2 artículos al mes como mínimo).

## Artículos aportados por Luis (autor), publicados hoy en spaceventos.com

Verificados con HTTP 200 el 2026-11-21. Copia local del HTML (solo referencia, ignorada por Git): `.local-review/session-11/spaceventos-pages/blog-*.html`.

| Título publicado | URL actual |
| --- | --- |
| Marketing de Afiliados en 2025: el poder de conectar desde lo humano y lo digital | https://spaceventos.com/marketing-de-afiliados-en-2025-el-poder-de-conectar-desde-lo-humano-y-lo-digital/ |
| Branding para Empresas: Claves para Construir una Identidad de Marca Sólida | https://spaceventos.com/branding-para-empresas-claves-para-construir-una-identidad-de-marca-solida/ |
| Psicología y Marketing: Cómo Entender la Mente del Consumidor para Vender Más | https://spaceventos.com/psicologia-y-marketing-como-entender-la-mente-del-consumidor-para-vender-mas/ |

## Propuesta técnica (sin servicios externos)

- Ruta `/blog` y `/blog/[slug]` en el mismo Next.js; artículos como archivos en el repo (Markdown/MDX) con título, descripción, fecha, autor e imagen.
- Metadata por artículo (title, description, canonical, Open Graph), datos estructurados `Article`, inclusión en `sitemap.xml`.
- **Redirecciones 301** desde las URLs actuales de WordPress a `/blog/<slug>` para conservar posicionamiento; revisar también las 8 entradas de «Noticias» detectadas en el inventario.
- Revisar cada texto antes de migrar: cifras, fuentes y enlaces externos; imágenes con licencia confirmada.
- Navegación: añadir «Blog» al menú solo cuando haya al menos 3–4 artículos y calendario de publicación.

## Implementación (2026-11-21)

- Contenido en `lib/blog.ts` (sin servicios externos ni dependencias): `/blog` (índice) y `/blog/[slug]` (estático, `dynamicParams = false`), metadata por artículo con Open Graph `article`, datos estructurados `BlogPosting`, entradas en `sitemap.xml` y **redirecciones 308** desde las URLs de WordPress.
- «Blog» añadido al menú principal y al pie (6 enlaces).
- Autor mostrado: «Luis Risso Patrón · Space Panamá» (en WordPress figuraban «Space» y «Developers»). Fechas de publicación tomadas de WordPress.

| Título nuevo (para buscadores) | Slug nuevo | URL anterior (redirige) |
| --- | --- | --- |
| Marketing de afiliados: cómo conectar lo humano y lo digital para vender | `/blog/marketing-de-afiliados-humano-y-digital` | `/marketing-de-afiliados-en-2025-el-poder-de-conectar-desde-lo-humano-y-lo-digital/` |
| Branding para empresas: 5 claves para una identidad de marca sólida | `/blog/branding-para-empresas-identidad-de-marca` | `/branding-para-empresas-claves-para-construir-una-identidad-de-marca-solida/` |
| Psicología del consumidor: 6 principios de marketing para vender más | `/blog/psicologia-del-consumidor-marketing` | `/psicologia-y-marketing-como-entender-la-mente-del-consumidor-para-vender-mas/` |

**Ediciones ligeras al texto original:** encabezados en minúscula inicial, sin emojis ni ✅, «en 2025» → «hoy» en el artículo de afiliados (para que no caduque; fecha de actualización 21/11/2026), «son los lives» (concordancia) y comillas latinas. Sin cambios de contenido ni cifras nuevas. No se usó la imagen genérica del lateral de WordPress (foto de banco); los artículos no tienen imagen propia.

**Pendiente:** revisar las otras «Noticias» del WordPress antes de migrarlas; definir calendario (recomendado 2 artículos al mes).
