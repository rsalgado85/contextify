"use client";

import { cn } from "@/lib/utils";

interface MarkdownViewerProps {
  content: string;
  className?: string;
}

export function MarkdownViewer({ content, className }: MarkdownViewerProps) {
  return (
    <div
      className={cn("markdown-body text-sm", className)}
      dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(content) }}
    />
  );
}

function renderMarkdownToHtml(md: string): string {
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
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy" />')

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

    // Paragraphs
    .replace(/^(?!<[a-z])[^<\n].+/gm, (match) => `<p>${match}</p>`)

    // Clean up
    .replace(/<p>\s*<\/p>/g, "")
    .replace(/<blockquote>(\s*<blockquote>)/g, "<blockquote>$1")
    .replace(/(<\/blockquote>\s*)<\/blockquote>/g, "$1</blockquote>");

  return html;
}
