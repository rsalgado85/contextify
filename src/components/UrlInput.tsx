"use client";

import { useState } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { ArrowRight, Link as LinkIcon, Loader2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const createUrlSchema = (invalidMsg: string, httpsMsg: string) =>
  z.string().url(invalidMsg).startsWith("https://", httpsMsg);

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
  placeholder,
}: UrlInputProps) {
  const { t } = useLanguage();
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const defaultPlaceholder = placeholder ?? t("urlInput.placeholder");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = url.trim();

    // Auto-prepend https:// if missing
    let finalUrl = trimmed;
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = `https://${finalUrl}`;
    }

    const urlSchema = createUrlSchema(t("urlInput.invalidUrl"), t("urlInput.urlMustStartWith"));
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
            placeholder={defaultPlaceholder}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-2"
            disabled={isLoading}
            aria-label={t("urlInput.ariaLabel")}
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
              {t("urlInput.converting")}
            </>
          ) : (
            <>
              {t("urlInput.generate")}
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
