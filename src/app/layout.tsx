import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { LanguageProvider } from "@/components/language-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0f14" },
    { media: "(prefers-color-scheme: light)", color: "#f7f9fc" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://contextify.vercel.app"),
  title: {
    default: "Contextify — Turn Any Webpage Into AI-Ready Markdown",
    template: "%s | Contextify",
  },
  description:
    "Convert websites into clean Markdown optimized for ChatGPT, Claude, Gemini, DeepSeek, Cursor and AI workflows. Free, no sign-up, privacy-first.",
  keywords: [
    "markdown converter",
    "webpage to markdown",
    "AI context generator",
    "llm markdown",
    "ChatGPT markdown",
    "Claude markdown",
    "web to markdown",
    "AI context",
    "DeepSeek markdown",
    "Gemini context",
    "LLM context",
    "markdown generator",
    "clean markdown",
    "plain text converter",
    "json extractor",
    "jina ai",
    "contextify",
  ],
  authors: [{ name: "Contextify", url: "https://contextify.vercel.app" }],
  creator: "Contextify",
  publisher: "Contextify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Contextify — Turn Any Webpage Into AI-Ready Markdown",
    description:
      "Convert websites into clean Markdown optimized for ChatGPT, Claude, Gemini, DeepSeek, Cursor and AI workflows. Free, no sign-up, privacy-first.",
    type: "website",
    locale: "en_US",
    url: "https://contextify.vercel.app",
    siteName: "Contextify",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contextify — Turn Any Webpage Into AI-Ready Markdown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contextify — Turn Any Webpage Into AI-Ready Markdown",
    description:
      "Convert websites into clean Markdown optimized for ChatGPT, Claude, Gemini, DeepSeek, Cursor and AI workflows.",
    images: ["/og-image.png"],
    creator: "@contextify",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://contextify.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster
              position="bottom-right"
              theme="dark"
              toastOptions={{
                className: "glass-card",
                style: {
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                },
              }}
            />
            <Analytics />
            <SpeedInsights />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
