"use client";

import { CopyButton } from "./CopyButton";
import { DownloadButton } from "./DownloadButton";
import { TokenCounter } from "./TokenCounter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileText, Sparkles, Brain, Braces, AlignLeft, Star } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

type TabType = "markdown" | "clean" | "ai-context" | "json" | "text";

interface TabConfig {
  id: TabType;
  label: string;
  icon: React.ReactNode;
  content: string;
  filename: string;
  mimeType: string;
}

interface ResultTabsProps {
  markdown: string;
  cleanMarkdown: string;
  aiContext: string;
  json: string;
  plainText: string;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  className?: string;
}

export function ResultTabs({
  markdown,
  cleanMarkdown,
  aiContext,
  json,
  plainText,
  activeTab,
  onTabChange,
  isFavorite = false,
  onToggleFavorite,
  className,
}: ResultTabsProps) {
  const { t } = useLanguage();

  const tabs: TabConfig[] = [
    { id: "markdown", label: t("tabs.markdown"), icon: <FileText className="h-4 w-4" />, content: markdown, filename: "content.md", mimeType: "text/markdown" },
    { id: "clean", label: t("tabs.clean"), icon: <Sparkles className="h-4 w-4" />, content: cleanMarkdown, filename: "content-clean.md", mimeType: "text/markdown" },
    { id: "ai-context", label: t("tabs.aiContext"), icon: <Brain className="h-4 w-4" />, content: aiContext, filename: "ai-context.md", mimeType: "text/markdown" },
    { id: "json", label: t("tabs.json"), icon: <Braces className="h-4 w-4" />, content: json, filename: "content.json", mimeType: "application/json" },
    { id: "text", label: t("tabs.plainText"), icon: <AlignLeft className="h-4 w-4" />, content: plainText, filename: "content.txt", mimeType: "text/plain" },
  ];

  const active = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className={cn("glass-card overflow-hidden", className)}>
      {/* Tab Bar */}
      <div className="flex items-center border-b border-border/40 px-2">
        <div className="flex-1 flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative flex items-center gap-1.5 px-3 py-3 text-xs font-medium transition-colors whitespace-nowrap",
                "border-b-2 -mb-[1px]",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 pl-2 border-l border-border/40 ml-2">
          {onToggleFavorite && (
            <button
              onClick={onToggleFavorite}
              className={cn(
                "p-1.5 rounded-lg transition-colors",
                isFavorite
                  ? "text-amber-400 hover:bg-amber-400/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
              )}
              title={isFavorite ? t("tabs.removeFromFavorites") : t("tabs.addToFavorites")}
            >
              <Star className={cn("h-4 w-4", isFavorite && "fill-current")} />
            </button>
          )}
          <CopyButton text={active.content} />
          <DownloadButton content={active.content} filename={active.filename} mimeType={active.mimeType} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-h-[600px] overflow-y-auto">
        {activeTab === "json" ? (
          <pre className="text-xs font-mono text-foreground whitespace-pre-wrap leading-relaxed">
            <code>{active.content}</code>
          </pre>
        ) : activeTab === "text" ? (
          <div className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
            {active.content}
          </div>
        ) : (
          <div
            className="markdown-body text-sm"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(active.content) }}
          />
        )}
      </div>

      {/* Stats */}
      <div className="border-t border-border/40 px-4 py-3">
        <TokenCounter text={active.content} />
      </div>
    </div>
  );
}

// Simple Markdown to HTML renderer
function renderMarkdown(md: string): string {
  let html = md
    // Escape HTML
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

    // Headers
    .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")

    // Bold and italic
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")

    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')

    // Images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')

    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")

    // Code blocks
    .replace(/```(\w*)\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>")

    // Blockquotes
    .replace(/^&gt; (.+)$/gm, "<blockquote>$1</blockquote>")

    // Horizontal rules
    .replace(/^[-*_]{3,}$/gm, "<hr />")

    // Unordered lists
    .replace(/^[-*] (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")

    // Ordered lists
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")

    // Paragraphs (lines that aren't already wrapped in HTML)
    .replace(/^(?!<[a-z])[^<\n].+/gm, (match) => `<p>${match}</p>`)

    // Fix nested blockquotes
    .replace(/<blockquote>(\s*<blockquote>)/g, "<blockquote>$1")
    .replace(/(<\/blockquote>\s*)<\/blockquote>/g, "$1</blockquote>")

    // Clean up empty paragraphs
    .replace(/<p>\s*<\/p>/g, "");

  return html;
}
