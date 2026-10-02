# Space Panamá Web

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
