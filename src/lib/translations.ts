export type Language = "en" | "es";

export interface Translations {
  // Header
  "header.features": string;
  "header.howItWorks": string;
  "header.useCases": string;
  "header.tryNow": string;
  "header.toggleTheme": string;
  "header.toggleMenu": string;
  "header.toggleLanguage": string;

  // Footer
  "footer.description": string;
  "footer.product": string;
  "footer.features": string;
  "footer.howItWorks": string;
  "footer.tryNow": string;
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
}

const en: Translations = {
  "header.features": "Features",
  "header.howItWorks": "How It Works",
  "header.useCases": "Use Cases",
  "header.tryNow": "Try Now",
  "header.toggleTheme": "Toggle theme",
  "header.toggleMenu": "Toggle menu",
  "header.toggleLanguage": "Switch language",

  "footer.description":
    "Turn any webpage into AI-ready Markdown. Free, privacy-first, no sign-up required. Built for the AI era.",
  "footer.product": "Product",
  "footer.features": "Features",
  "footer.howItWorks": "How It Works",
  "footer.tryNow": "Try Now",
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
};

const es: Translations = {
  "header.features": "Características",
  "header.howItWorks": "Cómo Funciona",
  "header.useCases": "Casos de Uso",
  "header.tryNow": "Probar Ahora",
  "header.toggleTheme": "Cambiar tema",
  "header.toggleMenu": "Abrir/Cerrar menú",
  "header.toggleLanguage": "Cambiar idioma",

  "footer.description":
    "Convierte cualquier página web en Markdown listo para IA. Gratis, privacidad primero, sin registro. Construido para la era de la IA.",
  "footer.product": "Producto",
  "footer.features": "Características",
  "footer.howItWorks": "Cómo Funciona",
  "footer.tryNow": "Probar Ahora",
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
};

export const translations: Record<Language, Translations> = { en, es };
