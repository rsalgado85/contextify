import { PageData } from "@/types";

export async function fetchMarkdown(url: string): Promise<string> {
  const response = await fetch("/api/convert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    let errorMessage: string;
    try {
      const parsed = JSON.parse(errorBody);
      errorMessage = parsed.error || `Request failed with status ${response.status}`;
    } catch {
      errorMessage = errorBody || `Request failed with status ${response.status}`;
    }
    throw new Error(errorMessage);
  }

  const text = await response.text();
  return text;
}

export function parseMarkdownToPageData(markdown: string, url: string): PageData {
  // Extract title from first heading or URL
  const titleMatch = markdown.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : url;

  // Extract links
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links: string[] = [];
  let match;
  while ((match = linkRegex.exec(markdown)) !== null) {
    if (match[2] && !links.includes(match[2])) {
      links.push(match[2]);
    }
  }

  // Extract metadata (description from first paragraph after title)
  const paragraphs = markdown.split("\n\n");
  let description = "";
  for (const p of paragraphs) {
    const clean = p.replace(/^#.*\n?/gm, "").trim();
    if (clean && !clean.startsWith("!") && !clean.startsWith("[")) {
      description = clean.substring(0, 200);
      break;
    }
  }

  return {
    title,
    url,
    content: markdown,
    links,
    metadata: {
      description,
      author: extractAuthor(markdown),
    },
  };
}

function extractAuthor(markdown: string): string | undefined {
  const authorMatch = markdown.match(/(?:Author|By)[:\s]+(.+)$/im);
  return authorMatch ? authorMatch[1].trim() : undefined;
}
