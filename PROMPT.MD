# SUPER PROMPT — CONTEXTIFY

## Rol

Actúa como un equipo multidisciplinario compuesto por los mejores especialistas del mundo en:

* Product Manager Senior (Google)
* Staff Software Architect (Vercel)
* Principal Frontend Engineer (Vercel)
* Senior Next.js Engineer
* Senior React Engineer
* Senior TypeScript Engineer
* Senior TailwindCSS Engineer
* Senior shadcn/ui Engineer
* Senior UX Designer (Linear)
* Senior Product Designer (Stripe)
* Senior Design Systems Architect
* Senior SEO Technical Specialist
* Senior Web Performance Engineer
* Senior Accessibility (WCAG 2.2) Specialist
* Senior Developer Experience (DX) Engineer
* Senior Markdown Processing Engineer
* Senior Documentation Platform Engineer
* Senior AI Tooling Engineer
* Senior LLM Context Engineering Specialist
* Senior Open Source Maintainer
* Senior Vercel Deployment Engineer
* Senior Analytics Engineer
* Senior QA Automation Engineer

Tu misión es construir una aplicación SaaS moderna llamada:

# Contextify

**Tagline**

Turn any webpage into AI-ready Markdown.

---

# Objetivo del Producto

Contextify es una herramienta web que permite al usuario ingresar una URL pública y obtener una versión optimizada del contenido en:

* Markdown
* Clean Markdown
* LLM Context Markdown
* JSON
* Texto plano

La aplicación debe ser completamente frontend para desplegarse en Vercel.

No se utilizarán servidores propios.

La extracción de contenido utilizará:

```txt
https://r.jina.ai/http://URL
```

como proveedor principal.

---

# Requisitos Técnicos

## Stack Obligatorio

* Next.js 15 App Router
* React 19
* TypeScript
* TailwindCSS
* shadcn/ui
* Lucide Icons
* Framer Motion
* Zustand
* React Hook Form
* Zod
* Sonner
* Vercel Analytics
* Vercel Speed Insights

No utilizar backend propio.

No utilizar bases de datos.

No utilizar autenticación.

Todo debe funcionar desde Vercel Free.

---

# Objetivos de Diseño

Inspirarse visualmente en:

* Linear
* Vercel
* Raycast
* Stripe
* Notion
* Perplexity
* Warp

Características visuales:

* Minimalista
* Moderna
* Profesional
* Espaciado generoso
* Excelente jerarquía visual
* Responsive Mobile First
* Dark Mode por defecto
* Light Mode opcional
* Animaciones suaves

---

# Arquitectura General

## Landing Page

Hero principal:

Título:

```txt
Turn Any Webpage Into AI-Ready Markdown
```

Subtítulo:

```txt
Convert websites into clean Markdown optimized for ChatGPT, Claude, Gemini, DeepSeek, Cursor and AI workflows.
```

Campo:

```txt
Enter URL...
```

Botón:

```txt
Generate
```

---

# Flujo Principal

Usuario ingresa:

```txt
https://example.com
```

El sistema:

1. Valida URL
2. Construye URL Jina

```txt
https://r.jina.ai/http://example.com
```

3. Obtiene contenido
4. Procesa contenido
5. Genera diferentes formatos
6. Muestra resultados

---

# Tabs de Resultado

## Markdown

Mostrar Markdown original.

Funciones:

* Copy
* Download .md
* Download .txt

---

## Clean Markdown

Eliminar:

* URLs redundantes
* navegación
* footer
* publicidad
* secciones repetidas

Mostrar resultado limpio.

---

## AI Context

Generar estructura:

```markdown
# PAGE SUMMARY

Resumen de la página

# MAIN CONTENT

Contenido principal

# IMPORTANT FACTS

- item

# LINKS

- link

# METADATA

Título
Autor
URL
```

Esta vista debe estar optimizada para:

* ChatGPT
* Claude
* Gemini
* DeepSeek
* Cursor
* Windsurf
* Cline

---

## JSON

Transformar contenido a:

```json
{
  "title":"",
  "url":"",
  "content":"",
  "links":[]
}
```

Mostrar con syntax highlighting.

---

## Plain Text

Mostrar texto plano limpio.

---

# Funciones Premium de UX

Agregar:

## URL History

Historial local usando LocalStorage.

Mostrar últimas:

* 10 URLs

Sin backend.

---

## Favorites

Guardar páginas favoritas.

Persistencia local.

---

## Character Counter

Mostrar:

```txt
Characters
Words
Tokens (estimados)
```

---

## Token Estimator

Estimar tokens para:

* GPT
* Claude
* Gemini

---

## Reading Time

Calcular tiempo de lectura.

---

# SEO

Generar automáticamente:

## Metadata

Open Graph

Twitter Cards

JSON-LD

Sitemap

Robots

Canonical URLs

---

# Performance

Objetivos:

* Lighthouse 95+
* Performance 95+
* Accessibility 100
* SEO 100
* Best Practices 100

---

# Accesibilidad

Cumplir WCAG 2.2 AA.

Incluir:

* navegación por teclado
* aria labels
* focus states
* screen reader support

---

# Estructura del Proyecto

Crear una estructura profesional:

```txt
src/
 ├─ app/
 ├─ components/
 ├─ features/
 ├─ hooks/
 ├─ services/
 ├─ lib/
 ├─ store/
 ├─ types/
 ├─ utils/
 └─ styles/
```

---

# Componentes

Generar componentes reutilizables:

* Header
* Footer
* ThemeToggle
* UrlInput
* ResultTabs
* MarkdownViewer
* JsonViewer
* CopyButton
* DownloadButton
* TokenCounter
* HistoryPanel
* FavoritesPanel
* LoadingState
* ErrorState

---

# Calidad de Código

Aplicar:

* Clean Architecture
* SOLID
* DRY
* KISS
* Type Safety estricta
* ESLint
* Prettier

---

# Entregables Esperados

Generar:

1. Arquitectura completa.
2. Estructura de carpetas.
3. Modelos TypeScript.
4. Servicios.
5. Hooks.
6. Stores Zustand.
7. Componentes UI.
8. Diseño Responsive.
9. Código completo funcional.
10. Configuración Vercel.
11. SEO completo.
12. README profesional.
13. Roadmap v2.

---

# Roadmap V2

Preparar arquitectura para futuras funcionalidades:

* Batch URL Processing
* Multi Page Crawl
* Website to Markdown
* Documentation Export
* ZIP Export
* Knowledge Base Generator
* RAG Context Generator
* AI Agent Context Pack

---

# Instrucción Final

Construye una aplicación de nivel producción, con calidad equivalente a un producto lanzado por Vercel o Linear.

No entregues ejemplos simplificados.

No generes pseudocódigo.

Genera implementación completa, escalable, mantenible y lista para desplegar en Vercel.
