export type Language = "en" | "es";

export interface Translations {
  // Header
  "header.features": string;
  "header.howItWorks": string;
  "header.useCases": string;
  "header.tryNow": string;
  "header.about": string;
  "header.toggleTheme": string;
  "header.toggleMenu": string;
  "header.toggleLanguage": string;

  // Footer
  "footer.description": string;
  "footer.product": string;
  "footer.features": string;
  "footer.howItWorks": string;
  "footer.tryNow": string;
  "footer.about": string;
  "footer.connect": string;
  "footer.github": string;
  "footer.twitter": string;
  "footer.copyright": string;
  "footer.madeWith": string;

  // Home — hero
  "home.badge": string;
  "home.heroTitle": string;
  "home.heroDescription": string;
  "home.privacyFirst": string;
  "home.noSignUp": string;
  "home.freeForever": string;

  // Home — features section
  "home.featuresTitle": string;
  "home.featuresSubtitle": string;
  "home.featureInstantConversion.title": string;
  "home.featureInstantConversion.description": string;
  "home.featureAIOptimized.title": string;
  "home.featureAIOptimized.description": string;
  "home.featureMultipleFormats.title": string;
  "home.featureMultipleFormats.description": string;
  "home.featurePrivacyFirst.title": string;
  "home.featurePrivacyFirst.description": string;
  "home.featureNoSignUp.title": string;
  "home.featureNoSignUp.description": string;
  "home.featureLightningFast.title": string;
  "home.featureLightningFast.description": string;

  // Home — how it works
  "home.howItWorks": string;
  "home.howItWorksSubtitle": string;
  "home.step1.title": string;
  "home.step1.description": string;
  "home.step2.title": string;
  "home.step2.description": string;
  "home.step3.title": string;
  "home.step3.description": string;

  // Home — use cases
  "home.builtFor": string;
  "home.builtForSubtitle": string;
  "home.useCaseDevelopers.title": string;
  "home.useCaseDevelopers.description": string;
  "home.useCaseCreators.title": string;
  "home.useCaseCreators.description": string;
  "home.useCaseResearchers.title": string;
  "home.useCaseResearchers.description": string;
  "home.useCaseEngineers.title": string;
  "home.useCaseEngineers.description": string;

  // Home — CTA
  "home.ctaTitle": string;
  "home.ctaSubtitle": string;
  "home.ctaButton": string;

  // Convert page
  "convert.backToHome": string;
  "convert.title": string;
  "convert.description": string;
  "convert.loading": string;
  "convert.loadingDefault": string;
  "convert.errorTitle": string;
  "convert.errorRetry": string;

  // URL Input
  "urlInput.placeholder": string;
  "urlInput.converting": string;
  "urlInput.generate": string;
  "urlInput.invalidUrl": string;
  "urlInput.urlMustStartWith": string;
  "urlInput.ariaLabel": string;

  // Result Tabs
  "tabs.markdown": string;
  "tabs.clean": string;
  "tabs.aiContext": string;
  "tabs.json": string;
  "tabs.plainText": string;
  "tabs.addToFavorites": string;
  "tabs.removeFromFavorites": string;

  // Token Counter
  "tokenCounter.characters": string;
  "tokenCounter.words": string;
  "tokenCounter.estTokens": string;
  "tokenCounter.readingTime": string;

  // Copy Button
  "copyButton.copy": string;
  "copyButton.copied": string;
  "copyButton.copiedToClipboard": string;
  "copyButton.failedToCopy": string;

  // Download Button
  "downloadButton.download": string;
  "downloadButton.failedToDownload": string;

  // History Panel
  "history.recentUrls": string;
  "history.clearAll": string;

  // Favorites Panel
  "favorites.favorites": string;

  // Generic errors
  "errors.unexpectedError": string;

  // About page
  "about.heroTitle": string;
  "about.heroName": string;
  "about.heroRole": string;
  "about.heroBio": string;
  "about.heroBio2": string;
  "about.heroCTALinkedIn": string;
  "about.heroCTAGitHub": string;

  "about.statsTitle": string;
  "about.statsSideProjects": string;
  "about.statsSideProjectsValue": string;
  "about.statsGithubStars": string;
  "about.statsGithubStarsValue": string;
  "about.statsUsers": string;
  "about.statsUsersValue": string;

  "about.techStackTitle": string;
  "about.techStackSubtitle": string;

  "about.achievementsTitle": string;
  "about.achievementsSubtitle": string;
  "about.achievement1.title": string;
  "about.achievement1.description": string;
  "about.achievement2.title": string;
  "about.achievement2.description": string;
  "about.achievement3.title": string;
  "about.achievement3.description": string;

  "about.timelineTitle": string;
  "about.timelineSubtitle": string;
  "about.timeline1.date": string;
  "about.timeline1.title": string;
  "about.timeline1.description": string;
  "about.timeline2.date": string;
  "about.timeline2.title": string;
  "about.timeline2.description": string;
  "about.timeline3.date": string;
  "about.timeline3.title": string;
  "about.timeline3.description": string;
  "about.timeline4.date": string;
  "about.timeline4.title": string;
  "about.timeline4.description": string;

  "about.footerQuote": string;
  "about.footerQuoteAuthor": string;
}

const en: Translations = {
  "header.features": "Features",
  "header.howItWorks": "How It Works",
  "header.useCases": "Use Cases",
  "header.tryNow": "Try Now",
  "header.about": "About",
  "header.toggleTheme": "Toggle theme",
  "header.toggleMenu": "Toggle menu",
  "header.toggleLanguage": "Switch language",

  "footer.description":
    "Turn any webpage into AI-ready Markdown. Free, privacy-first, no sign-up required. Built for the AI era.",
  "footer.product": "Product",
  "footer.features": "Features",
  "footer.howItWorks": "How It Works",
  "footer.tryNow": "Try Now",
  "footer.about": "About",
  "footer.connect": "Connect",
  "footer.github": "GitHub",
  "footer.twitter": "Twitter",
  "footer.copyright": "© {year} Contextify. All rights reserved.",
  "footer.madeWith": "Made with ♥ for the AI community",

  "home.badge": "Now with AI Context Format",
  "home.heroTitle": "Turn Any Webpage Into AI-Ready Markdown",
  "home.heroDescription":
    "Convert websites into clean Markdown optimized for ChatGPT, Claude, Gemini, DeepSeek, Cursor, Windsurf, Cline, and all AI workflows.",
  "home.privacyFirst": "Privacy-first",
  "home.noSignUp": "No sign-up",
  "home.freeForever": "Free forever",

  "home.featuresTitle": "Everything You Need to Convert Content",
  "home.featuresSubtitle":
    "Contextify is built from the ground up for the AI era. Every feature designed to make web content instantly usable in your AI workflows.",

  "home.featureInstantConversion.title": "Instant Conversion",
  "home.featureInstantConversion.description":
    "Paste any URL and get clean Markdown in milliseconds. No waiting, no queues — just instant results.",
  "home.featureAIOptimized.title": "AI-Optimized",
  "home.featureAIOptimized.description":
    "Output structured specifically for ChatGPT, Claude, Gemini, DeepSeek, Cursor, and all major AI tools.",
  "home.featureMultipleFormats.title": "Multiple Formats",
  "home.featureMultipleFormats.description":
    "Get Markdown, Clean Markdown, AI Context, JSON, and Plain Text — all from a single URL input.",
  "home.featurePrivacyFirst.title": "Privacy First",
  "home.featurePrivacyFirst.description":
    "All processing happens client-side via Jina API. No servers, no databases, no tracking. Your URLs stay private.",
  "home.featureNoSignUp.title": "No Sign Up",
  "home.featureNoSignUp.description":
    "Start converting immediately. No accounts, no email required, no credit card — just enter a URL and go.",
  "home.featureLightningFast.title": "Lightning Fast",
  "home.featureLightningFast.description":
    "Optimized for speed with edge-powered content extraction. Get results faster than you can type the URL.",

  "home.howItWorks": "How It Works",
  "home.howItWorksSubtitle":
    "Three simple steps from webpage to AI-ready content. No complex setup, no API keys, no hassle.",

  "home.step1.title": "Paste URL",
  "home.step1.description":
    "Enter any webpage URL you want to convert. Articles, docs, blogs — anything on the web.",
  "home.step2.title": "Generate",
  "home.step2.description":
    "Click Generate and we fetch, parse, and convert the content into multiple AI-optimized formats.",
  "home.step3.title": "Copy / Download",
  "home.step3.description":
    "Copy to clipboard or download as .md, .json, or .txt. Ready to paste into any AI tool.",

  "home.builtFor": "Built for Everyone",
  "home.builtForSubtitle":
    "Whether you're coding, writing, researching, or building AI — Contextify fits your workflow.",

  "home.useCaseDevelopers.title": "For Developers",
  "home.useCaseDevelopers.description":
    "Convert documentation, READMEs, and blog posts into structured Markdown for your knowledge base, code comments, or AI coding assistants like Cursor and Copilot.",
  "home.useCaseCreators.title": "Content Creators",
  "home.useCaseCreators.description":
    "Extract research materials, competitor content, and reference articles into clean formats for your writing workflow and content planning.",
  "home.useCaseResearchers.title": "Researchers",
  "home.useCaseResearchers.description":
    "Save web articles as structured data. Build personal knowledge bases, literature reviews, and research collections from any online source.",
  "home.useCaseEngineers.title": "AI Engineers",
  "home.useCaseEngineers.description":
    "Generate LLM-optimized context for RAG pipelines, fine-tuning datasets, and AI agent knowledge packs. Structured, clean, ready to embed.",

  "home.ctaTitle": "Ready to Convert?",
  "home.ctaSubtitle":
    "Start converting webpages into AI-ready Markdown instantly. Free, no sign-up, no limits.",
  "home.ctaButton": "Start Converting Now",

  "convert.backToHome": "Back to Home",
  "convert.title": "Convert Webpage",
  "convert.description":
    "Enter any URL to convert it into AI-ready Markdown.",
  "convert.loading": "Fetching and converting webpage content...",
  "convert.loadingDefault": "Converting webpage to Markdown...",
  "convert.errorTitle": "Something went wrong",
  "convert.errorRetry": "Try Again",

  "urlInput.placeholder": "https://example.com",
  "urlInput.converting": "Converting...",
  "urlInput.generate": "Generate",
  "urlInput.invalidUrl": "Please enter a valid URL",
  "urlInput.urlMustStartWith": "URL must start with https://",
  "urlInput.ariaLabel": "Enter URL to convert",

  "tabs.markdown": "Markdown",
  "tabs.clean": "Clean",
  "tabs.aiContext": "AI Context",
  "tabs.json": "JSON",
  "tabs.plainText": "Plain Text",
  "tabs.addToFavorites": "Add to favorites",
  "tabs.removeFromFavorites": "Remove from favorites",

  "tokenCounter.characters": "Characters",
  "tokenCounter.words": "Words",
  "tokenCounter.estTokens": "Est. Tokens",
  "tokenCounter.readingTime": "Reading Time",

  "copyButton.copy": "Copy",
  "copyButton.copied": "Copied!",
  "copyButton.copiedToClipboard": "Copied to clipboard!",
  "copyButton.failedToCopy": "Failed to copy",

  "downloadButton.download": "Download",
  "downloadButton.failedToDownload": "Failed to download",

  "history.recentUrls": "Recent URLs",
  "history.clearAll": "Clear all",

  "favorites.favorites": "Favorites",

  "errors.unexpectedError": "An unexpected error occurred",

  // About page
  "about.heroTitle": "About Contextify",
  "about.heroName": "Robinson Salgado",
  "about.heroRole": "Full-Stack Developer & Creator",
  "about.heroBio":
    "Contextify was born from a simple idea: every developer and AI engineer wastes too much time cleaning up scraped web content. I built Contextify to make web-to-Markdown conversion effortless, AI-optimized, and privacy-first — no accounts, no tracking, just results.",
  "about.heroBio2":
    "As a full-stack developer passionate about developer tools and AI workflows, I created Contextify to bridge the gap between the open web and the AI ecosystem — so you can focus on building, not cleaning data.",
  "about.heroCTALinkedIn": "Connect on LinkedIn",
  "about.heroCTAGitHub": "View on GitHub",

  "about.statsTitle": "Project Stats",
  "about.statsSideProjects": "Side Projects",
  "about.statsSideProjectsValue": "3+",
  "about.statsGithubStars": "GitHub Stars",
  "about.statsGithubStarsValue": "100+",
  "about.statsUsers": "Happy Users",
  "about.statsUsersValue": "500+",

  "about.techStackTitle": "Built With Modern Tech",
  "about.techStackSubtitle":
    "Contextify leverages a carefully chosen stack of modern tools and frameworks to deliver speed, type-safety, and a polished developer experience.",

  "about.achievementsTitle": "Key Achievements",
  "about.achievementsSubtitle":
    "Milestones that shaped Contextify into the tool it is today.",
  "about.achievement1.title": "Contextify Launch",
  "about.achievement1.description":
    "Successfully launched Contextify as a free, privacy-first web-to-Markdown converter with AI Context format support, serving hundreds of users within the first weeks.",
  "about.achievement2.title": "AI Context Generator",
  "about.achievement2.description":
    "Built an innovative AI Context format that structures scraped web content specifically for LLMs like ChatGPT, Claude, and Gemini — complete with source metadata, token estimates, and clean hierarchies.",
  "about.achievement3.title": "Jina API Integration",
  "about.achievement3.description":
    "Integrated Jina AI's powerful content extraction API for reliable, high-quality Markdown conversion with support for JavaScript-heavy sites, auth-walled content, and multi-format output.",

  "about.timelineTitle": "Development Timeline",
  "about.timelineSubtitle":
    "From concept to production — the key milestones in Contextify's development.",
  "about.timeline1.date": "Jan 2025",
  "about.timeline1.title": "Idea & Research",
  "about.timeline1.description":
    "Identified the need for a privacy-first, no-signup web-to-Markdown tool optimized for AI workflows. Researched content extraction APIs and defined the core feature set.",
  "about.timeline2.date": "Mar 2025",
  "about.timeline2.title": "MVP Development",
  "about.timeline2.description":
    "Built the first working prototype with Next.js, integrated the Jina API, and implemented Markdown + AI Context format conversion. Validated with early testers.",
  "about.timeline3.date": "May 2025",
  "about.timeline3.title": "Public Launch",
  "about.timeline3.description":
    "Launched Contextify publicly with full Spanish/English i18n, Framer Motion animations, Zustand state management, and a polished glass-morphism UI built with TailwindCSS and shadcn/ui.",
  "about.timeline4.date": "Jun 2026",
  "about.timeline4.title": "V2 Release",
  "about.timeline4.description":
    "Shipped Contextify v2 with Clean Markdown output, Plain Text extraction, favorites/history panels, theme support, and the brand-new About page.",

  "about.footerQuote":
    "\"The best tools are the ones that disappear — they just work, so you can focus on what matters.\"",
  "about.footerQuoteAuthor": "— Robinson Salgado, Creator of Contextify",
};

const es: Translations = {
  "header.features": "Características",
  "header.howItWorks": "Cómo Funciona",
  "header.useCases": "Casos de Uso",
  "header.tryNow": "Probar Ahora",
  "header.about": "Acerca de",
  "header.toggleTheme": "Cambiar tema",
  "header.toggleMenu": "Abrir/Cerrar menú",
  "header.toggleLanguage": "Cambiar idioma",

  "footer.description":
    "Convierte cualquier página web en Markdown listo para IA. Gratis, privacidad primero, sin registro. Construido para la era de la IA.",
  "footer.product": "Producto",
  "footer.features": "Características",
  "footer.howItWorks": "Cómo Funciona",
  "footer.tryNow": "Probar Ahora",
  "footer.about": "Acerca de",
  "footer.connect": "Conectar",
  "footer.github": "GitHub",
  "footer.twitter": "Twitter",
  "footer.copyright": "© {year} Contextify. Todos los derechos reservados.",
  "footer.madeWith": "Hecho con ♥ para la comunidad de IA",

  "home.badge": "Ahora con Formato AI Context",
  "home.heroTitle": "Convierte Cualquier Web en Markdown Listo para IA",
  "home.heroDescription":
    "Convierte sitios web en Markdown limpio optimizado para ChatGPT, Claude, Gemini, DeepSeek, Cursor, Windsurf, Cline y todos los flujos de trabajo con IA.",
  "home.privacyFirst": "Privacidad primero",
  "home.noSignUp": "Sin registro",
  "home.freeForever": "Gratis para siempre",

  "home.featuresTitle": "Todo lo que Necesitas para Convertir Contenido",
  "home.featuresSubtitle":
    "Contextify está construido desde cero para la era de la IA. Cada función diseñada para que el contenido web sea usable al instante en tus flujos de IA.",

  "home.featureInstantConversion.title": "Conversión Instantánea",
  "home.featureInstantConversion.description":
    "Pega cualquier URL y obtén Markdown limpio en milisegundos. Sin esperas, sin colas — solo resultados instantáneos.",
  "home.featureAIOptimized.title": "Optimizado para IA",
  "home.featureAIOptimized.description":
    "Salida estructurada específicamente para ChatGPT, Claude, Gemini, DeepSeek, Cursor y todas las principales herramientas de IA.",
  "home.featureMultipleFormats.title": "Múltiples Formatos",
  "home.featureMultipleFormats.description":
    "Obtén Markdown, Markdown Limpio, Contexto IA, JSON y Texto Plano — todo desde una sola URL.",
  "home.featurePrivacyFirst.title": "Privacidad Primero",
  "home.featurePrivacyFirst.description":
    "Todo el procesamiento ocurre del lado del cliente a través de la API de Jina. Sin servidores, sin bases de datos, sin rastreo. Tus URLs permanecen privadas.",
  "home.featureNoSignUp.title": "Sin Registro",
  "home.featureNoSignUp.description":
    "Empieza a convertir de inmediato. Sin cuentas, sin correo electrónico, sin tarjeta de crédito — solo ingresa una URL y listo.",
  "home.featureLightningFast.title": "Ultra Rápido",
  "home.featureLightningFast.description":
    "Optimizado para velocidad con extracción de contenido acelerada. Obtén resultados más rápido de lo que escribes la URL.",

  "home.howItWorks": "Cómo Funciona",
  "home.howItWorksSubtitle":
    "Tres pasos simples de página web a contenido listo para IA. Sin configuración compleja, sin claves API, sin complicaciones.",

  "home.step1.title": "Pegar URL",
  "home.step1.description":
    "Ingresa cualquier URL de página web que quieras convertir. Artículos, documentos, blogs — cualquier cosa en la web.",
  "home.step2.title": "Generar",
  "home.step2.description":
    "Haz clic en Generar y buscamos, analizamos y convertimos el contenido en múltiples formatos optimizados para IA.",
  "home.step3.title": "Copiar / Descargar",
  "home.step3.description":
    "Copia al portapapeles o descarga como .md, .json o .txt. Listo para pegar en cualquier herramienta de IA.",

  "home.builtFor": "Hecho para Todos",
  "home.builtForSubtitle":
    "Ya sea que programes, escribas, investigues o construyas IA — Contextify se adapta a tu flujo de trabajo.",

  "home.useCaseDevelopers.title": "Para Desarrolladores",
  "home.useCaseDevelopers.description":
    "Convierte documentación, READMEs y publicaciones de blog en Markdown estructurado para tu base de conocimiento, comentarios de código o asistentes de codificación IA como Cursor y Copilot.",
  "home.useCaseCreators.title": "Creadores de Contenido",
  "home.useCaseCreators.description":
    "Extrae materiales de investigación, contenido de la competencia y artículos de referencia en formatos limpios para tu flujo de escritura y planificación de contenido.",
  "home.useCaseResearchers.title": "Investigadores",
  "home.useCaseResearchers.description":
    "Guarda artículos web como datos estructurados. Construye bases de conocimiento personales, revisiones de literatura y colecciones de investigación desde cualquier fuente en línea.",
  "home.useCaseEngineers.title": "Ingenieros de IA",
  "home.useCaseEngineers.description":
    "Genera contexto optimizado para LLMs en pipelines RAG, conjuntos de datos de fine-tuning y paquetes de conocimiento para agentes de IA. Estructurado, limpio, listo para embeber.",

  "home.ctaTitle": "¿Listo para Convertir?",
  "home.ctaSubtitle":
    "Empieza a convertir páginas web en Markdown listo para IA al instante. Gratis, sin registro, sin límites.",
  "home.ctaButton": "Comenzar a Convertir",

  "convert.backToHome": "Volver al Inicio",
  "convert.title": "Convertir Página Web",
  "convert.description":
    "Ingresa cualquier URL para convertirla en Markdown listo para IA.",
  "convert.loading": "Obteniendo y convirtiendo el contenido de la página...",
  "convert.loadingDefault": "Convirtiendo página web a Markdown...",
  "convert.errorTitle": "Algo salió mal",
  "convert.errorRetry": "Intentar de Nuevo",

  "urlInput.placeholder": "https://ejemplo.com",
  "urlInput.converting": "Convirtiendo...",
  "urlInput.generate": "Generar",
  "urlInput.invalidUrl": "Por favor ingresa una URL válida",
  "urlInput.urlMustStartWith": "La URL debe comenzar con https://",
  "urlInput.ariaLabel": "Ingresar URL para convertir",

  "tabs.markdown": "Markdown",
  "tabs.clean": "Limpio",
  "tabs.aiContext": "Contexto IA",
  "tabs.json": "JSON",
  "tabs.plainText": "Texto Plano",
  "tabs.addToFavorites": "Agregar a favoritos",
  "tabs.removeFromFavorites": "Quitar de favoritos",

  "tokenCounter.characters": "Caracteres",
  "tokenCounter.words": "Palabras",
  "tokenCounter.estTokens": "Tokens Est.",
  "tokenCounter.readingTime": "Tiempo de Lectura",

  "copyButton.copy": "Copiar",
  "copyButton.copied": "¡Copiado!",
  "copyButton.copiedToClipboard": "¡Copiado al portapapeles!",
  "copyButton.failedToCopy": "Error al copiar",

  "downloadButton.download": "Descargar",
  "downloadButton.failedToDownload": "Error al descargar",

  "history.recentUrls": "URLs Recientes",
  "history.clearAll": "Limpiar todo",

  "favorites.favorites": "Favoritos",

  "errors.unexpectedError": "Ocurrió un error inesperado",

  // About page
  "about.heroTitle": "Sobre Contextify",
  "about.heroName": "Robinson Salgado",
  "about.heroRole": "Desarrollador Full-Stack & Creador",
  "about.heroBio":
    "Contextify nació de una idea simple: cada desarrollador e ingeniero de IA pierde demasiado tiempo limpiando contenido web extraído. Construí Contextify para que la conversión de web a Markdown sea sencilla, optimizada para IA y con privacidad primero — sin cuentas, sin rastreo, solo resultados.",
  "about.heroBio2":
    "Como desarrollador full-stack apasionado por las herramientas para desarrolladores y los flujos de trabajo con IA, creé Contextify para cerrar la brecha entre la web abierta y el ecosistema de IA — para que puedas enfocarte en construir, no en limpiar datos.",
  "about.heroCTALinkedIn": "Conectar en LinkedIn",
  "about.heroCTAGitHub": "Ver en GitHub",

  "about.statsTitle": "Estadísticas del Proyecto",
  "about.statsSideProjects": "Proyectos Secundarios",
  "about.statsSideProjectsValue": "3+",
  "about.statsGithubStars": "Estrellas en GitHub",
  "about.statsGithubStarsValue": "100+",
  "about.statsUsers": "Usuarios Felices",
  "about.statsUsersValue": "500+",

  "about.techStackTitle": "Construido con Tecnología Moderna",
  "about.techStackSubtitle":
    "Contextify aprovecha un stack cuidadosamente seleccionado de herramientas y frameworks modernos para ofrecer velocidad, seguridad de tipos y una experiencia de desarrollo pulida.",

  "about.achievementsTitle": "Logros Clave",
  "about.achievementsSubtitle":
    "Hitos que transformaron Contextify en la herramienta que es hoy.",
  "about.achievement1.title": "Lanzamiento de Contextify",
  "about.achievement1.description":
    "Lanzamos Contextify exitosamente como un conversor gratuito de web a Markdown con privacidad primero y soporte para formato AI Context, sirviendo a cientos de usuarios en las primeras semanas.",
  "about.achievement2.title": "Generador de Contexto IA",
  "about.achievement2.description":
    "Construimos un formato innovador de AI Context que estructura el contenido web extraído específicamente para LLMs como ChatGPT, Claude y Gemini — con metadatos de fuente, estimaciones de tokens y jerarquías limpias.",
  "about.achievement3.title": "Integración con API de Jina",
  "about.achievement3.description":
    "Integramos la potente API de extracción de contenido de Jina AI para una conversión a Markdown confiable y de alta calidad, con soporte para sitios con mucho JavaScript, contenido protegido y salida en múltiples formatos.",

  "about.timelineTitle": "Línea de Tiempo de Desarrollo",
  "about.timelineSubtitle":
    "Del concepto a producción — los hitos clave en el desarrollo de Contextify.",
  "about.timeline1.date": "Ene 2025",
  "about.timeline1.title": "Idea e Investigación",
  "about.timeline1.description":
    "Identificamos la necesidad de una herramienta de conversión web a Markdown con privacidad primero y sin registro, optimizada para flujos de IA. Investigamos APIs de extracción de contenido y definimos las funcionalidades principales.",
  "about.timeline2.date": "Mar 2025",
  "about.timeline2.title": "Desarrollo del MVP",
  "about.timeline2.description":
    "Construimos el primer prototipo funcional con Next.js, integramos la API de Jina e implementamos la conversión a Markdown y formato AI Context. Validamos con testers iniciales.",
  "about.timeline3.date": "May 2025",
  "about.timeline3.title": "Lanzamiento Público",
  "about.timeline3.description":
    "Lanzamos Contextify públicamente con i18n completa en español/inglés, animaciones Framer Motion, gestión de estado Zustand y una interfaz pulida con glass-morphism construida con TailwindCSS y shadcn/ui.",
  "about.timeline4.date": "Jun 2026",
  "about.timeline4.title": "Lanzamiento V2",
  "about.timeline4.description":
    "Publicamos Contextify v2 con salida Markdown Limpio, extracción de Texto Plano, paneles de favoritos/historial, soporte de temas y la nueva página Acerca de.",

  "about.footerQuote":
    "\"Las mejores herramientas son las que desaparecen — simplemente funcionan, para que puedas concentrarte en lo que importa.\"",
  "about.footerQuoteAuthor": "— Robinson Salgado, Creador de Contextify",
};

export const translations: Record<Language, Translations> = { en, es };
