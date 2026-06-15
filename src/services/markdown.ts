import { PageData } from "@/types";

export function cleanMarkdown(markdown: string): string {
  let cleaned = markdown;

  // Remove navigation/menu items (consecutive short lines with links)
  cleaned = cleaned.replace(/(?:^|\n)(?:-\s*\[[^\]]+\]\([^)]+\)\s*){3,}/gm, "");

  // Remove repeated separator lines
  cleaned = cleaned.replace(/(?:^|\n)(?:[-*_=~]{3,}\s*)+\n/gm, "\n");

  // Remove empty lines > 2 in a row
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n");

  // Remove common footer patterns
  cleaned = cleaned.replace(/(?:^|\n)#+\s*(?:Footer|Copyright|Legal|Privacy|Terms|Subscribe|Follow|Share|Related|Navigation|Site Map).*$/gim, "");

  // Remove "Back to top" type links
  cleaned = cleaned.replace(/\[?(?:Back to top|Scroll to top|↑|⬆)\]?\([^)]*\)/gi, "");

  // Remove cookie consent / banner text
  cleaned = cleaned.replace(/(?:This (?:site|website) uses? cookies[^.]*\.)/gi, "");

  // Remove social media share lines
  cleaned = cleaned.replace(/(?:^|\n)(?:Share|Tweet|Pin|Post)(?:\s+(?:on|this|to))?\s+(?:on\s+)?(?:Twitter|Facebook|LinkedIn|Reddit|X).*$/gim, "");

  // Remove image-only lines (embedded SVG/base64 noise)
  cleaned = cleaned.replace(/!\[.*?\]\(data:image[^)]+\)/g, "");

  // Remove "Advertisement" or "Ad" blocks
  cleaned = cleaned.replace(/(?:^|\n)#*\s*(?:Advertisement|Ad|Sponsored).*?(?:\n(?:.*?)){0,5}/gi, "");

  // Clean up multiple repeated newlines again
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n");

  // Trim
  cleaned = cleaned.trim();

  return cleaned;
}

export function toPlainText(markdown: string): string {
  let text = markdown;

  // Remove headings markers
  text = text.replace(/^#{1,6}\s+/gm, "");

  // Remove bold/italic markers
  text = text.replace(/\*\*([^*]+)\*\*/g, "$1");
  text = text.replace(/__([^_]+)__/g, "$1");
  text = text.replace(/\*([^*]+)\*/g, "$1");
  text = text.replace(/_([^_]+)_/g, "$1");

  // Remove links, keep text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // Remove images
  text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, "");

  // Remove code blocks (backtick)
  text = text.replace(/```[\s\S]*?```/g, "");
  text = text.replace(/`([^`]+)`/g, "$1");

  // Remove blockquotes
  text = text.replace(/^>\s+/gm, "");

  // Remove list markers
  text = text.replace(/^[\s]*[-*+]\s+/gm, "");
  text = text.replace(/^[\s]*\d+\.\s+/gm, "");

  // Remove horizontal rules
  text = text.replace(/^[-*_]{3,}\s*$/gm, "");

  // Collapse whitespace
  text = text.replace(/\n{3,}/g, "\n\n");
  text = text.trim();

  return text;
}

export function toJson(data: PageData): string {
  return JSON.stringify(
    {
      title: data.title,
      url: data.url,
      content: data.content,
      links: data.links,
      metadata: data.metadata,
    },
    null,
    2
  );
}

export function toAIContext(data: PageData): string {
  const lines: string[] = [];

  lines.push("# PAGE SUMMARY\n");
  const summary = data.metadata.description || "No summary available.";
  lines.push(`${summary}\n`);

  lines.push("# MAIN CONTENT\n");
  const cleanContent = cleanMarkdown(data.content);
  // Remove first heading (title) to avoid duplication
  const contentWithoutTitle = cleanContent.replace(/^#\s+.*\n+/, "").trim();
  lines.push(`${contentWithoutTitle}\n`);

  lines.push("# IMPORTANT FACTS\n");
  // Extract key facts from content
  const facts = extractFacts(data.content);
  if (facts.length > 0) {
    facts.forEach((fact) => lines.push(`- ${fact}`));
  } else {
    lines.push("- No specific facts extracted.");
  }
  lines.push("");

  lines.push("# LINKS\n");
  if (data.links.length > 0) {
    const uniqueLinks = [...new Set(data.links)].slice(0, 20);
    uniqueLinks.forEach((link) => lines.push(`- ${link}`));
  } else {
    lines.push("- No links found.");
  }
  lines.push("");

  lines.push("# METADATA\n");
  lines.push(`- Title: ${data.title}`);
  lines.push(`- URL: ${data.url}`);
  if (data.metadata.author) {
    lines.push(`- Author: ${data.metadata.author}`);
  }
  if (data.metadata.date) {
    lines.push(`- Date: ${data.metadata.date}`);
  }

  return lines.join("\n");
}

function extractFacts(markdown: string): string[] {
  const facts: string[] = [];

  // Look for list items that seem like facts (longer, substantive)
  const listItemRegex = /^[-*]\s+(.{30,150})$/gm;
  let match;
  while ((match = listItemRegex.exec(markdown)) !== null) {
    const fact = match[1].trim();
    if (fact.length > 30 && !fact.match(/^\[.*\]\(.*\)$/)) {
      facts.push(fact);
    }
    if (facts.length >= 10) break;
  }

  // If no list facts, grab key sentences from paragraphs
  if (facts.length === 0) {
    const sentences = markdown.match(/[A-Z][^.!?]+[.!?]/g);
    if (sentences) {
      for (const s of sentences) {
        const clean = s.replace(/[#*\[\]()_`]/g, "").trim();
        if (clean.length > 40 && clean.length < 200) {
          facts.push(clean);
        }
        if (facts.length >= 8) break;
      }
    }
  }

  return facts;
}
