"use client";

import { useState } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { ArrowRight, Link as LinkIcon, Loader2 } from "lucide-react";

const urlSchema = z.string().url("Please enter a valid URL").startsWith("https://", "URL must start with https://");

interface UrlInputProps {
  onSubmit: (url: string) => void;
  isLoading?: boolean;
  className?: string;
  placeholder?: string;
}

export function UrlInput({
  onSubmit,
  isLoading = false,
  className,
  placeholder = "https://example.com",
}: UrlInputProps) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = url.trim();

    // Auto-prepend https:// if missing
    let finalUrl = trimmed;
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = `https://${finalUrl}`;
    }

    const result = urlSchema.safeParse(finalUrl);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    onSubmit(result.data);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)}>
      <div className="glass-card p-1.5 flex items-center gap-2">
        <div className="flex-1 flex items-center gap-2 px-3">
          <LinkIcon className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (error) setError(null);
            }}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-2"
            disabled={isLoading}
            aria-label="Enter URL to convert"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !url.trim()}
          className="btn-primary !py-2 !px-4 !rounded-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Converting...
            </>
          ) : (
            <>
              Generate
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-xs text-destructive pl-1">{error}</p>
      )}
    </form>
  );
}
