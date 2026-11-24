# Space Panamá Web

## Versión local actual

**En revisión visual del dueño: no aprobado ni declarado terminado.** Sitio de cinco páginas: **Inicio, Servicios, Trabajo, Nosotros y Contacto**. La Home recupera el recorrido Hero → Manifiesto → Selected Work → Cuatro Mundos → Digital → Método → cierre de la dirección elegida “La Tierra cede el foco”. El Hero conserva Tierra y Luna ilustradas, sin clientes ni controles: carga quieto y permite activar/detener la órbita desde una acción discreta en el pie, con prioridad de movimiento reducido. Se retiraron las flechas diagonales de las cinco páginas. Cuatro mundos usa una retícula editorial responsive con piezas reales; Digital no inventa capturas de sitios. Don Ceviche, EMC, Prevengo y Héroes son evidencia seleccionada para uso local; las fotos de ambientación autorizadas aparecen en su caso y en Experiencias. El trabajo previo se conserva; la Home pública actual usa `components/site/site-home.tsx`, no los prototipos inmersivos. No hay despliegue ni operaciones Git de publicación autorizadas.

- [Entrega local, configuración y publicación futura](docs/local-release.md)
- [Fuentes, contenido y permisos](docs/site-sources.md)
- [Inventario de recursos](docs/asset-inventory.json)
- [Procedencia, selección y derechos de recursos visuales](docs/visual-resource-inventory.json)
- [Inventario ampliado y reconstrucción de ARTE en CASA](docs/resource-review/README.md)
- [Vista actual 09: cuatro mundos, enlaces y capturas](design/home-sequence-refinement/09-cuatro-mundos.html)
- [Alcance y verificaciones actuales](docs/worlds-and-accessibility-review.md)
- [Lista verificable de trabajos, candidatos y material faltante](docs/resource-review/portfolio-evidence.md)
- [Historial 08: anterior al retiro del control de navegación](design/home-sequence-refinement/08-movimiento-y-trabajo.html)
- [Historial de limpieza editorial 07, anterior al traslado del control](design/home-sequence-refinement/07-edicion-editorial.html)
- [Historial de composición y grabaciones de 12 s, anterior a la limpieza de rótulos](design/home-sequence-refinement/06-composicion-planetaria.html)
- [Hero Tierra–Luna anterior, no aprobado](design/home-sequence-refinement/05-hero-tierra-luna.html)
- [Recuperación editorial anterior, conservada como historial](design/home-sequence-refinement/04-recuperacion-local.html)
- [Verificaciones y límites](docs/verification.md)

Node 22.18+ (recomendado 24 LTS). Para revisar:

```sh
npm ci --ignore-scripts
npm run lint
npm test
npm run build
npm run start -- --hostname 127.0.0.1 --port 3218
```

Abrir **http://127.0.0.1:3218**. En otra terminal, `npm run test:smoke`. Para desarrollo: `npm run dev -- --hostname 127.0.0.1 --port 3219`.

Contacto directo confirmado en la web oficial. Sin formulario, CMS, analítica ni secretos requeridos. `NEXT_PUBLIC_SITE_URL` controla canonical y sitemap; consultar `.env.example`. Los medios históricos no autorizados permanecen en disco pero su acceso público se bloquea: ejecutar como Next.js, **no publicar la carpeta `public/` por separado**.

**Antes de sustituir el sitio oficial:** obtener autorización específica de publicación y derechos para ese uso (la confirmación de los clientes nuevos es local), aprobar visualmente la versión, confirmar origen canónico y resolver conservación/redirecciones de artículos históricos. No se declara terminada una migración completa de WordPress.

---

## Archivo histórico de iteraciones

Las notas siguientes se conservan para no perder decisiones ni trabajo previo. Describen versiones anteriores y **no son instrucciones vigentes de contacto, rutas, publicación o Git**. Para el estado actual prevalecen los documentos enlazados arriba.

Base inicial independiente para la nueva web de **Space Panamá**. Este proyecto vive separado de SpaceOS dentro del subdirectorio `space-panama-web` y tiene su propio repositorio Git local.

## Estado del primer gate

- Dirección visual: editorial premium, oscuro/crema, alto contraste, escenas verticales con sensación de timeline.
- Vertical slice: `Hero`, `Manifiesto` y `Don Ceviche` como trabajo seleccionado.
- Backend inicial: Route Handlers de Next.js con adaptadores estáticos/en memoria.
- Supabase: solo frontera futura documentada; no se conecta ningún proyecto remoto ni se usan credenciales de SpaceOS.

## Stack

- Next.js App Router
- React
- TypeScript estricto
- CSS global sin framework para reducir superficie inicial
- API routes en `app/api/**/route.ts`

## Arquitectura

```txt
app/
  page.tsx                 # Página principal server-rendered
  layout.tsx               # Metadata y layout raíz
  api/
    health/route.ts        # Estado de servicio y adaptadores
    content/route.ts       # API de contenido estático
    contact/route.ts       # Submit de contacto con adapter in-memory
components/
  hero.tsx
  manifesto.tsx
  selected-work.tsx
lib/
  space-content.ts         # Capa de contenido tipada
  adapters/
    content-adapter.ts     # Adapter static y frontera futura Supabase
    contact-adapter.ts     # Adapter memory y frontera futura Supabase
    supabase-boundary.ts   # Nota/config placeholder para futura conexión
```

## Variables de entorno

Copia `.env.example` a `.env.local` si necesitas sobreescribir valores locales.

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SPACE_CONTENT_ADAPTER=static
SPACE_CONTACT_ADAPTER=memory
```

Placeholders reservados para un gate futuro, sin credenciales reales:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

No agregues `SUPABASE_SERVICE_ROLE_KEY` a código público. Si se crean tablas futuras en Supabase y quedan expuestas a clientes, deben tener RLS activo y políticas diseñadas explícitamente.

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Gates de trabajo

1. **Inspect**: confirmar que el proyecto vive dentro de `space-panama-web` y que no se modifica `sources/` ni `AGENTS.md`.
2. **Decide**: mantener la primera versión sin dependencias visuales pesadas; CSS-only motion y adaptadores simples.
3. **Implement**: construir vertical slice + APIs iniciales.
4. **Verify**: ejecutar `npm install`, `npm run lint`, `npm run build` cuando la red permita instalar dependencias.
5. **Commit**: dejar cambios limpios en `codex/init-space-panama-web`.
6. **Report**: listar rutas, verificación, commit y riesgos.

## Próximo gate recomendado

Definir el sistema de contenido real antes de conectar infraestructura:

- Qué casos de estudio entran después de Don Ceviche.
- Qué campos necesita el CMS o Supabase.
- Qué canal de contacto será real.
- Qué políticas RLS aplican a leads/contactos si se persisten en Supabase.

## V6 — deuda interna de assets (no renderizar en la Home)

La escena Digital muestra únicamente los nombres aprobados; no hay material visual verificado en `main` para estos proyectos. Antes de diseñar una galería visual, solicitar por cada proyecto **SOMOS Properties**, **HomePower PTY**, **SALDO** y **Provivir Panamá**:

- Logo/wordmark original autorizado para uso público (SVG o PNG transparente) y nombre exacto aprobado.
- Captura real de la página principal en escritorio y móvil, más una captura de una página interior o flujo representativo; incluir URL y fecha de captura para verificar que corresponden al producto publicado.
- Si se usa un mockup, export/captura de pantalla real como contenido del dispositivo: no crear interfaces de muestra que parezcan producto real.
- Confirmación de permisos para exhibir marca, interfaz y cualquier dato visible; ocultar datos personales/sensibles antes de entregar.

Para un acto Behind the Work, **no reutilizar artes finales ni material de campaña como backstage**. Se requiere evidencia de proceso original de Space: por ejemplo, grabación/fotos auténticas de producción audiovisual, preparación/ejecución de evento o sesión de trabajo real. Cada asset debe venir con contexto verificable (actividad/proyecto y fecha aproximada), identificación/atribución confirmada de las personas y permisos de uso. Si no se entrega evidencia que cumpla esto, mantener el acto omitido.

Esta deuda es documentación interna: no mostrar estos requisitos, notas de ausencia ni placeholders en la experiencia pública.

## V9 — production readiness

- `robots.txt` allows the public site and excludes `/api/`; `sitemap.xml` currently lists the only public route, `/`. Both use the configured public URL, then Vercel's production hostname, then the stable Vercel fallback. Set `NEXT_PUBLIC_SITE_URL` to the approved canonical origin before any future custom-domain launch; this gate does not configure DNS or assign `spaceventos.com`.
- The current contact destinations are direct email/WhatsApp links. The JSON contact endpoint validates requests but returns `503` until a persistent, approved provider is available; it must never report durable acceptance through process-local memory.
- Analytics are not installed and no analytics provider is configured. Do not add one without explicit approval and privacy/configuration review.
- Global response headers include MIME sniffing, framing, referrer, and browser-permission protections. No CSP was added because the existing GSAP/Next runtime needs a nonce-aware CSP design rather than a brittle blanket policy.
- No persistent integration credentials belong in the repository or `.env.example`; API health output omits adapter and Supabase internals.

## V7 — continuidad Four Worlds → Digital → Method → Closing

- Four Worlds se presenta como una sola escena de estados en desktop; tablet/móvil y reduced-motion conservan todas las capacidades como contenido legible en flujo.
- El capítulo Digital actual solo muestra nombres aprobados: SOMOS Properties, HomePower PTY, SALDO y Provivir Panamá. El inventario de `public/assets/` en esta rama solo contiene piezas de Don Ceviche, Sissy, PsicoJazmin y el logo de Space; **no hay screenshots, capturas responsive, logos de cliente ni mockups verificados** para los cuatro proyectos digitales.
- Para habilitar un showcase visual solicitar por cada proyecto: wordmark autorizado; capturas reales de Home desktop/móvil y una pantalla interior representativa; URL y fecha de captura; permiso de exhibición; sanitización de datos personales. No sintetizar screenshots ni mostrar carcasas de navegador vacías que puedan confundirse con el producto real.
- Método se mantiene en seis verbos aprobados y la frase “No entregamos y desaparecemos.”; Space cierra la narrativa y “Cuéntanos.” permanece conceptual mientras no haya un canal confirmado.

## V8 — asset enrichment y polish

- Los dos artes reales de Don Ceviche tienen derivados WebP para servir el mismo contenido visual con menos bytes; se conservan los PNG originales como fuentes.
- El inventario local solo contiene assets de Don Ceviche, Sissy Méndez, PsicoJazmin y el logo de Space. La búsqueda de metadatos de Drive para los cuatro proyectos Digital y material de backstage no encontró evidencia disponible para esta tarea.
- No se añadieron interfaces ficticias, mockups, BTS, testimonios ni resultados. Digital sigue como capítulo tipográfico con los cuatro nombres aprobados; Behind the Work, Testimonials y Results permanecen omitidos.
- No hay canal de contacto guardado en el contenido base del repositorio; el sitio oficial actual de Space Eventos publica `info@spaceventos.com` y WhatsApp `+507 6784-7093`, por lo que esos dos destinos verificados se habilitan en el cierre. Instagram no se añadió sin verificarlo.
- La metadata usa la URL pública de Vercel como fallback y `NEXT_PUBLIC_SITE_URL` como override para canonical y social metadata cuando se confirme el dominio final. No se asigna `spaceventos.com`.

## Portada editorial A — revisión local

- La Home monta `components/immersive/editorial-opening.tsx`, con estilos aislados en `editorial-opening.module.css`. Conserva el archivo original del logo, el titular, el texto introductorio y los cinco términos del Manifiesto.
- Hero y Manifiesto se leen en flujo normal, sin WebGL, zoom, pin ni animaciones de entrada. El único movimiento nuevo es el video decorativo automático con alternativa estática. Los efectos posteriores de Selected Work y del resto de la Home no se reemplazan.
- El Hero usa el video orbital facilitado para esta revisión (`public/assets/space/hero-orbit.mp4`, H.264, 1920 × 1080, 10 s, aproximadamente 3 MB), con texto claro y protección de contraste sobre la escena oscura. El Manifiesto continúa sobre un cielo estrellado oscuro estático, con texto `#F8FAFC` y acentos `#E1EBF8`, sin repetir el planeta ni la órbita.
- El logo original se muestra sin filtros, mezcla ni deformación, sobre fondo transparente y sin recuadro claro. El encuadre móvil reserva la escena en la zona inferior y la lectura arriba, en lugar de comprimir el escritorio.
- El Hero no contiene piezas, nombres ni referencias de clientes ni añade claims. El video es decorativo y queda fuera del árbol accesible. Los casos, imágenes y materiales del portfolio posterior no se modifican; incorporar el archivo proporcionado no acredita permisos generales de publicación.
- El titular conserva `.opening .title` para prevalecer sobre `.immersive h1` sin tocar los estilos compartidos. Hero y Manifiesto mantienen el flujo natural, sin zoom ni pin. Se retiran la firma `SPACE / PANAMÁ` y el enlace `Leer manifiesto ↘` del Hero, sin borrar el contenido del Manifiesto ni cambiar su ancla `#manifiesto`. Se retira por completo el fundido azul. La continuidad se resuelve con el cielo oscuro del Manifiesto, sin añadir altura, transiciones por scroll, parpadeos ni animaciones. `orbital-starfield.webp` es una textura estática de unos 89 KiB derivada del recorte izquierdo de 640 × 1080 px del poster: sin Tierra, luna u órbita; reflejada para continuidad de bordes y oscurecida para asegurar contraste. La textura no requiere JavaScript y mantiene un color oscuro de respaldo si no carga.
- `hero-video.tsx` reproduce a `0.40×` (60 % menos velocidad que el original, aproximadamente 25,1 s por ciclo), sin audio, en línea y en bucle, sin botón de reproducción/pausa en la página, según el ajuste visual solicitado. Esta variante no ofrece pausa manual en la página; el respeto de movimiento reducido no reemplaza esa función. La velocidad se aplica en el reproductor, sin recodificar el MP4 original. Si el navegador rechaza autoplay, queda la imagen estática, sin arranque manual. Con movimiento reducido (también al activarlo durante la visita) o sin JavaScript se muestra el poster `hero-orbit-poster.webp`, extraído del mismo archivo, sin descargar el MP4. Ante un error del video se conserva el poster; no se vuelve a intentar automáticamente.
- Los componentes anteriores de Hero terrestre y Manifiesto se conservan como referencia, sin borrar ni reescribir sus cambios locales. No agregar cambios a `AGENTS.md` ni a los assets para esta revisión.
