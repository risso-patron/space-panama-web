# Entrega local — Space Panamá

## Estado y alcance

Versión local **en revisión visual, no aprobada ni declarada terminada**, sobre Next.js 16, sin migración tecnológica, publicación, commit, push, merge, servicios externos ni cambios en SpaceOS o en la configuración de agentes. Se trabajó directamente por la excepción temporal autorizada por el usuario; no se crearon agentes ni se amplió la excepción de modelo de SpaceOS.

Rama: `codex/immersive-earth-hero-v13`. HEAD conservado: `8cf0f77a4d8c6c0a31ca7ba76e2748a23899b04e`. El árbol **no está limpio**: contiene tanto el trabajo previo como esta entrega. No interpretar todo el diff contra HEAD como nuevo trabajo de esta sesión. El diff y copia previa local están en `.local-review/baseline/`, sin secretos.

## Recorrido público

- `/`: Hero → Manifiesto → Selected Work → Cuatro Mundos → Digital → Método → cierre. Base editorial conservada. Solo el Hero se revisó a pedido del dueño con Tierra y Luna originales, órbita CSS de 10 s y alternativas estáticas; no contiene clientes.
- `/servicios`: ocho servicios agrupados en Marca, Comunicación, Experiencias y Digital, con descripciones y acceso al trabajo de eventos.
- `/trabajo`: Don Ceviche (dos diseños para redes), EMC Panamá (composición de piezas digitales) y, como caso secundario, un casamiento anónimo con dos fotos de Space. Solo proyectos confirmados; no se inventan resultados.
- `/nosotros`: presentación y voz de marca respaldadas por la web oficial. Sin equipo, antigüedad, premios ni resultados inferidos.
- `/contacto`: correo, teléfono y WhatsApp oficiales. No hay formulario de envío ni falso éxito.
- Navegación activa, menú móvil nativo, salida con Escape cuando hay JavaScript, skip link, footer, 404, error boundary, títulos, canonical, Open Graph/Twitter, icono, robots y sitemap de cinco páginas.
- Cinco rutas históricas de servicios se redirigen permanentemente al grupo correspondiente en `/servicios`. No se redirigen noticias a destinos irrelevantes.

## Diseño y medios

Se recuperan la serif editorial, tinta `#222d3d`, crema `#f5ead8`, mar `#173641` y continuidad atmosférica de los artboards previos, con azul de marca `#3B598D` suavizado. Logo íntegro y agencia/estudio creativo de Panamá identificados desde la apertura. El Hero muestra una ilustración propia de Tierra y Luna separadas, sin fotografías, logos de clientes ni “PANAMÁ” sobre el globo. Conserva copy/CTA, pausa por teclado, versión estática SSR/sin JS/movimiento reducido y fallback CSS ante pérdida del SVG; ninguna boda en Home. El Manifiesto permanece en flujo sobre el mismo fondo. Selected Work alterna dos casos, Cuatro Mundos conserva los servicios verificados, Digital presenta capacidades sin falsos casos de web, Método recupera los seis pasos y el cierre ofrece contacto directo. Sin animación de entrada ni hover de imágenes, video, WebGL, scroll forzado o fuentes/dependencias nuevas. Todo el contenido está disponible sin JavaScript y con movimiento reducido.

Fuentes, permisos, exclusiones, dimensiones, pesos y recortes: [`site-sources.md`](site-sources.md), [`asset-inventory.json`](asset-inventory.json) e inventario **previo a incorporación** [`visual-resource-inventory.json`](visual-resource-inventory.json). Los tres derivados seleccionados suman 455884 B, con proporciones completas. Autorización del dueño para Don Ceviche y EMC: **revisión y versión local**, no publicación. El inventario ampliado en [`resource-review/README.md`](resource-review/README.md) cubre 8268 medios de E: y la web oficial (24 URLs únicas y 315 referencias de medios, incluidas cinco de plantilla excluidas). Se consultaron únicamente las bases de convocatoria de ARTE en CASA 2020/2021 necesarias para el caso, no registros personales, evaluaciones ni consentimientos. La investigación inicial no importó recursos externos; la selección posterior incorpora solo dos composiciones históricas de Prevengo y Héroes de Panamá desde carpetas autorizadas en S10, sin medios remotos. El error de E: WinError 1392 queda registrado, sin reparación. Respaldo de esta revisión en `.local-review/orbit-revision/before/`; las copias de etapas anteriores también se conservan. Artboard vigente: `design/home-sequence-refinement/09-cuatro-mundos.html`, con capturas actuales. [Revisión actual y checks](worlds-and-accessibility-review.md) y [lista verificable de trabajos](resource-review/portfolio-evidence.md): sin rótulos técnicos ni numeración decorativa, escena quieta por defecto, acción opcional de animación en el pie y preferencia del sistema prioritaria, sin control de navegación ni flechas diagonales, números solo en el proceso Método. La ilustración y composición no cambian. La revisión de escala y sus videos de 12 s quedan documentados en [`hero-composition-review.md`](hero-composition-review.md); los artboards 04/05/06/07/08 se conservan como historial y los rótulos de 06 ya no representan la interfaz vigente. Se conservan los archivos originales y los componentes/diseños anteriores. `proxy.ts` devuelve 404 para los assets históricos no incluidos en la allowlist pública; el optimizador de imágenes también restringe sus rutas. **Esta protección requiere ejecutar Next.js**, no copiar `public/` a un hosting estático ni servir esa carpeta directamente por otro servidor.

La API de contenido publica únicamente información aprobada de esta versión; ya no serializa clientes ni imágenes de prototipos históricos. La API de contacto sigue deshabilitada: valida entradas pero responde 503 ante una entrada válida, sin enviarla ni almacenarla. No requiere proveedor ni claves.

## Seguridad y configuración

- Revisión 11: parche `16.4.1` → `16.4.6` de `next` y `eslint-config-next` (auditoría de producción: 0 vulnerabilidades). Antes: actualización correctiva de Next.js instalado `16.3.8` a `16.4.1`, manteniendo Next 16 y fijando también `eslint-config-next` a `16.4.1`. La auditoría inicial reportaba vulnerabilidades críticas de Next. Se actualizó el lockfile y dependencias transitivas compatibles, sin scripts de instalación ni actualizaciones forzadas de major.
- Auditoría de producción de la entrega anterior: **0 vulnerabilidades**. No se reejecutó durante la revisión del Hero; dependencias y lockfile sin cambios. Auditoría completa previa: **7 avisos moderados** en la cadena de desarrollo `typescript-eslint → minimatch@10.2.6` (`GHSA-g3hv-75wg-m249`). `npm audit fix --ignore-scripts` no los resuelve con las versiones compatibles publicadas. No se fuerza minimatch 11 sobre un consumidor que declara 10. No son dependencias servidas al visitante; requieren seguimiento de una versión compatible del tooling.
- Node **22.18 o superior**, recomendado Node 24 LTS; las pruebas nativas importan TypeScript mediante el soporte de Node.
- Única variable de esta versión: `NEXT_PUBLIC_SITE_URL`, origen canónico público. `.env.example` no contiene secretos. La URL oficial actual es el fallback; confirmar el origen definitivo antes de generar una entrega destinada a otro host. Esto no cambia DNS ni asigna dominios.
- No se leyó ni modificó `.env.local`. Next lo carga automáticamente al ejecutar build/start, pero esta versión pública no utiliza sus adaptadores históricos ni conecta servicios remotos.
- Se mantienen los headers de protección existentes. No se añade analítica, cookies de aplicación, almacenamiento de contactos, fuentes remotas ni integración de terceros.

## Revisión local

Desde el directorio del repositorio:

```sh
npm ci --ignore-scripts
npm run lint
npm test
npm run build
npm run start -- --hostname 127.0.0.1 --port 3218
```

Abrir `http://127.0.0.1:3218`. En otra terminal:

```sh
npm run test:smoke
```

`test:smoke` usa por defecto ese puerto y solo permite destinos loopback. Para otro puerto, definir `SITE_TEST_URL` antes de ejecutarlo. Para desarrollo usar `npm run dev -- --hostname 127.0.0.1 --port 3219`. No ejecutar dev y build simultáneamente sobre la misma salida `.next`. Si el puerto está ocupado, elegir otro, sin detener procesos ajenos.

No es necesario copiar `.env.example` para revisar localmente. Para cambiar el canonical, hacerlo antes del build: Next fija metadata estática durante su generación.

## Verificaciones realizadas

Resultados y límites de la revisión se detallan en [`verification.md`](verification.md). Los logs y capturas actuales están en `.local-review/`, ignorados por Git. El ejecutor visual de esta sesión usa Playwright ya disponible en el entorno del usuario y Chrome instalado; no se agregó una dependencia de navegador ni se descargaron browsers.

## Publicación futura — instrucciones, NO ejecutadas

1. Revisar y aprobar esta versión local. Antes de reemplazar el sitio oficial, el dueño debe decidir qué hacer con Noticias y las URLs adicionales de WordPress; el inventario ampliado detecta ocho entradas, incluida una aparente plantilla. Sus contenidos no están migrados ni completamente auditados. Los cinco redirects de servicios no sustituyen un inventario SEO completo.
2. Confirmar el origen canónico y establecer `NEXT_PUBLIC_SITE_URL` en el entorno de construcción autorizado. No se necesitan secretos, Supabase ni un servicio de formulario.
3. Usar un entorno Node compatible y desplegar como aplicación Next.js con soporte de App Router, Route Handlers, optimización de imágenes y `proxy.ts`. **No usar exportación estática ni publicar `public/` por separado**, porque expondría medios conservados sin permiso.
4. En la copia de entrega autorizada, ejecutar instalación reproducible desde el lockfile, lint, pruebas y build. Resolver nuevos avisos críticos si aparecieran. El comando de arranque es `npm run start` (el host puede proporcionar `PORT`).
5. Probar en un entorno de prepublicación autorizado las cinco páginas, 404, navegación, contacto directo, sitemap/canonical y el 404/400 de medios restringidos. No enviar datos de contacto reales.
6. Solo después de una autorización separada ejecutar cualquier operación de publicación, dominio o Git. Esta tarea no realiza ninguna.

### Decisiones del dueño antes de reemplazar la web oficial

- Aprobar la composición y textos de la versión local. La revisión técnica/visual del agente no equivale a aprobación comercial.
- Confirmar el dominio canónico y el plan de conservación/redirección de Noticias y cualquier URL histórica adicional. No se declara completada una migración integral de WordPress.
- Para ampliar el portafolio, aportar medios y contexto específicos autorizados; los proyectos excluidos no bloquean la versión de cinco páginas porque no se presentan al público.

Los casos mostrados tienen autorización de uso **local**: confirmación actual de Don Ceviche/EMC y registro previo del casamiento. Los permisos pendientes de material **excluido** se mantienen separados de defectos técnicos. No extrapolar ese permiso a despliegue. Esta versión sigue pendiente de aprobación visual del dueño; no se declara terminada, autorizada ni completamente preparada para sustituir el dominio oficial. Cualquier publicación requeriría autorización específica, validación de derechos/créditos para ese uso y resolución de las decisiones de migración anteriores.
