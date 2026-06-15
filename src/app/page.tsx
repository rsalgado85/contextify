"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Zap,
  Brain,
  FileJson,
  Shield,
  UserPlus,
  Gauge,
  ArrowRight,
  Sparkles,
  Code2,
  PenTool,
  Search,
  Cpu,
  Copy,
  Download,
  ChevronRight,
} from "lucide-react";
import { UrlInput } from "@/components/UrlInput";
import { FeatureCard } from "@/components/FeatureCard";
import { useHistory } from "@/store/useHistory";
import { HistoryPanel } from "@/components/HistoryPanel";
import { FavoritesPanel } from "@/components/FavoritesPanel";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Instant Conversion",
    description: "Paste any URL and get clean Markdown in milliseconds. No waiting, no queues — just instant results.",
  },
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "AI-Optimized",
    description: "Output structured specifically for ChatGPT, Claude, Gemini, DeepSeek, Cursor, and all major AI tools.",
  },
  {
    icon: <FileJson className="h-6 w-6 text-primary" />,
    title: "Multiple Formats",
    description: "Get Markdown, Clean Markdown, AI Context, JSON, and Plain Text — all from a single URL input.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Privacy First",
    description: "All processing happens client-side via Jina API. No servers, no databases, no tracking. Your URLs stay private.",
  },
  {
    icon: <UserPlus className="h-6 w-6 text-primary" />,
    title: "No Sign Up",
    description: "Start converting immediately. No accounts, no email required, no credit card — just enter a URL and go.",
  },
  {
    icon: <Gauge className="h-6 w-6 text-primary" />,
    title: "Lightning Fast",
    description: "Optimized for speed with edge-powered content extraction. Get results faster than you can type the URL.",
  },
];

const steps = [
  {
    step: "01",
    title: "Paste URL",
    description: "Enter any webpage URL you want to convert. Articles, docs, blogs — anything on the web.",
    icon: <Copy className="h-5 w-5" />,
  },
  {
    step: "02",
    title: "Generate",
    description: "Click Generate and we fetch, parse, and convert the content into multiple AI-optimized formats.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    step: "03",
    title: "Copy / Download",
    description: "Copy to clipboard or download as .md, .json, or .txt. Ready to paste into any AI tool.",
    icon: <Download className="h-5 w-5" />,
  },
];

const useCases = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "For Developers",
    description: "Convert documentation, READMEs, and blog posts into structured Markdown for your knowledge base, code comments, or AI coding assistants like Cursor and Copilot.",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Content Creators",
    description: "Extract research materials, competitor content, and reference articles into clean formats for your writing workflow and content planning.",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Researchers",
    description: "Save web articles as structured data. Build personal knowledge bases, literature reviews, and research collections from any online source.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI Engineers",
    description: "Generate LLM-optimized context for RAG pipelines, fine-tuning datasets, and AI agent knowledge packs. Structured, clean, ready to embed.",
  },
];

export default function HomePage() {
  const router = useRouter();
  const { addItem } = useHistory();
  const [showHistory, setShowHistory] = useState(true);

  const handleSubmit = useCallback(
    (url: string) => {
      addItem(url, url);
      router.push(`/convert?url=${encodeURIComponent(url)}`);
    },
    [router, addItem]
  );

  const handleHistorySelect = useCallback(
    (url: string) => {
      router.push(`/convert?url=${encodeURIComponent(url)}`);
    },
    [router]
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-8"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Now with AI Context Format
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
              Turn Any Webpage Into{" "}
              <span className="gradient-text">AI-Ready Markdown</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Convert websites into clean Markdown optimized for ChatGPT, Claude, Gemini,
              DeepSeek, Cursor, Windsurf, Cline, and all AI workflows.
            </p>

            {/* URL Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-xl mx-auto"
            >
              <UrlInput onSubmit={handleSubmit} />
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground"
            >
              <span className="flex items-center gap-1">
                <Shield className="h-3 w-3" /> Privacy-first
              </span>
              <span className="flex items-center gap-1">
                <Zap className="h-3 w-3" /> No sign-up
              </span>
              <span className="flex items-center gap-1">
                <Gauge className="h-3 w-3" /> Free forever
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* History & Favorites Section (if available) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
          <HistoryPanel onSelect={handleHistorySelect} />
          <FavoritesPanel onSelect={handleHistorySelect} />
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="relative py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Convert Content</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contextify is built from the ground up for the AI era. Every feature designed
              to make web content instantly usable in your AI workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-28 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              How It{" "}
              <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps from webpage to AI-ready content. No complex setup, no API keys, no hassle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
                )}

                <div className="glass-card p-8 group hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-center mb-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/15 group-hover:ring-primary/30 transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-primary mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 sm:py-28 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Built for{" "}
              <span className="gradient-text">Everyone</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re coding, writing, researching, or building AI — Contextify fits your workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/15 transition-colors">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass-card p-10 sm:p-16 text-center max-w-3xl mx-auto overflow-hidden"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px]" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to <span className="gradient-text">Convert</span>?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Start converting webpages into AI-ready Markdown instantly. Free, no sign-up, no limits.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a
                href="/convert"
                className="btn-primary !px-8 !py-3.5 !text-base !rounded-xl inline-flex items-center gap-2"
              >
                <Sparkles className="h-5 w-5" />
                Start Converting Now
                <ChevronRight className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
