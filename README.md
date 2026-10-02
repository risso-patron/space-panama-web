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
