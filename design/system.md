# Design system

## Recuperación editorial local — revisión vigente

La Home conserva la base editorial **01 · La Tierra cede el foco**: Hero → Manifiesto → Selected Work → Cuatro Mundos → Digital → Método → cierre. Hero con Tierra y Luna originales, quieto por defecto y sin controles en escena/navegación. Movimiento opcional desde el pie, ciclo de 10 s y prioridad del sistema; no se restaura autoplay. Ver [artboard vigente](home-sequence-refinement/09-cuatro-mundos.html). Cuatro mundos usa retícula 2/1 columnas con marca institucional, comunicación y ambientación auténticas; Digital editorial sin falsa captura. Enlaces textuales sin flechas diagonales, subrayado/hover/foco accesibles. La revisión editorial de las cinco páginas retira números y repeticiones sin función; Método conserva orden 1–6. Dos piezas autorizadas de Prevengo y Héroes enriquecen Home/Trabajo sin cambiar el dibujo ni la composición 06. No es aprobación final del dueño.

Los tokens globales inventariados abajo se conservan como referencia histórica; la Home actual se implementa en `components/site/site-home.module.css`, dentro de `site-shell.module.css`. No asumir que todos los componentes globales antiguos se montan en Home.

| Valor vigente | Función |
| --- | --- |
| `#3B598D` | Azul de marca del logo, navegación y mezcla atmosférica suavizada |
| `#222d3d` | Tinta editorial y fondo de Manifiesto/Cuatro Mundos/Método |
| `#f5ead8` | Texto claro y pausa editorial de EMC |
| `#173641` | Capítulos de trabajo y Digital |
| `#354a67` | Cierre, continuidad del azul suavizado |
| `#c4cfdf` / `#e0bf8b` | Texto secundario / índices sobre oscuro |

Logo oficial sin distorsión, filtros ni recoloración. Georgia en titulares y serif editorial; sistema sans en cuerpo. Hero sin material de clientes ni texto sobre el globo. Diseños completos, sin recortes ni efectos de hover: Don Ceviche y EMC en Selected Work y Trabajo. La boda solo aparece en Trabajo. Móvil reorganiza la lectura y usa dos columnas para los seis pasos; sin scroll horizontal, pinning ni contenido inicialmente oculto. El relevo Hero → Manifiesto ocurre por lectura natural sobre un mismo fondo, no por animación. Sin JS/movimiento reducido se conserva el recorrido completo con SVG estático. Si se oculta o retira el SVG, la escena tiene fallback CSS estático; no usa recursos remotos. Permisos locales y procedencia: `docs/visual-resource-inventory.json`; publicación no autorizada.

## Inventario global preservado

Synced from the current source `app/globals.css`. This is a factual inventory of tokens found in source, not a complete component specification.

## Colors (11)

| Token | Value | Usage | Source |
|---|---|---|---|
| `--ink` | `#222d3d` | Base ink/background | `app/globals.css` |
| `--ink-soft` | `#3a475a` | Softer ink | `app/globals.css` |
| `--cream` | `#f5ead8` | Primary light text | `app/globals.css` |
| `--cream-strong` | `#fff6e8` | Strong light text | `app/globals.css` |
| `--space-blue` | `#71839f` | Space blue accent | `app/globals.css` |
| `--purple` | `#40205f` | Purple accent | `app/globals.css` |
| `--gold` | `#c69a55` | Gold accent | `app/globals.css` |
| `--lime` | `#ffd324` | Lime highlight / focus | `app/globals.css` |
| `--sea` | `#173641` | Sea accent | `app/globals.css` |
| `--line` | `rgba(245, 234, 216, 0.16)` | Dividers | `app/globals.css` |
| `--shadow` | `0 30px 120px rgba(0, 0, 0, 0.38)` | Elevation | `app/globals.css` |

## Typography (2 families)

- Body: `"Inter", "Segoe UI", system-ui, -apple-system, sans-serif` — `app/globals.css`.
- Display headings: `Georgia, "Times New Roman", serif` — `app/globals.css`.

## Spacing, radius, shadows

- Spacing: no named spacing token scale found in `app/globals.css`; components use explicit values and `clamp()`.
- Radius: no named radius tokens found in `app/globals.css`; components use explicit values.
- Shadows: `--shadow` above. Other component-local shadows exist; this sync records only the global token.

## Component rules

- Visible focus outline: `2px solid var(--lime)` with `4px` offset on links, buttons, video, and `[tabindex]` — `app/globals.css`.
- Buttons: inline-flex, pill shape (`999px` radius), uppercase letter-spaced labels — `.button` in `app/globals.css`.
- Scenes use grid layout, responsive `clamp()` spacing, and horizontal section dividers — `.scene` in `app/globals.css`.
- Reduced motion disables smooth scrolling and reduces animation/transition duration; content visibility is restored — `@media (prefers-reduced-motion: reduce)` in `app/globals.css`.

## Self-check

Proposal boards use only the listed global color tokens and system font stacks. No local fonts or external resources are used. The proposed storyboards are not production UI verification.
