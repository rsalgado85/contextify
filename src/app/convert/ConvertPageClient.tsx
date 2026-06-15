"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { z } from "zod";
import { ArrowLeft, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { UrlInput } from "@/components/UrlInput";
import { ResultTabs } from "@/components/ResultTabs";
import { LoadingState } from "@/components/LoadingState";
import { ErrorState } from "@/components/ErrorState";
import { HistoryPanel } from "@/components/HistoryPanel";
import { FavoritesPanel } from "@/components/FavoritesPanel";
import { fetchMarkdown, parseMarkdownToPageData } from "@/services/jina";
import { cleanMarkdown, toPlainText, toJson, toAIContext } from "@/services/markdown";
import { useHistory } from "@/store/useHistory";
import { useFavorites } from "@/store/useFavorites";
import { useLanguage } from "@/components/language-provider";
import type { PageData } from "@/types";

type TabType = "markdown" | "clean" | "ai-context" | "json" | "text";

const urlSchema = z.string().url("Invalid URL");

export function ConvertPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addItem } = useHistory();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { t } = useLanguage();

  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PageData | null>(null);
  const [rawMarkdown, setRawMarkdown] = useState<string>("");
  const [activeTab, setActiveTab] = useState<TabType>("markdown");

  // Check for URL param on mount
  useEffect(() => {
    const urlParam = searchParams?.get("url");
    if (urlParam) {
      setUrl(urlParam);
      handleConvert(urlParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleConvert = useCallback(
    async (inputUrl: string) => {
      setIsLoading(true);
      setError(null);
      setResult(null);
      setRawMarkdown("");

      try {
        // Validate
        let finalUrl = inputUrl;
        if (!/^https?:\/\//i.test(finalUrl)) {
          finalUrl = `https://${finalUrl}`;
        }
        const parsed = urlSchema.safeParse(finalUrl);
        if (!parsed.success) {
          throw new Error(t("urlInput.invalidUrl"));
        }

        // Fetch
        const markdown = await fetchMarkdown(parsed.data);
        setRawMarkdown(markdown);

        // Parse
        const pageData = parseMarkdownToPageData(markdown, parsed.data);
        setResult(pageData);

        // Save to history
        addItem(parsed.data, pageData.title);

        // Update URL
        setUrl(parsed.data);
        router.replace(`/convert?url=${encodeURIComponent(parsed.data)}`, { scroll: false });
      } catch (err) {
        const message = err instanceof Error ? err.message : t("errors.unexpectedError");
        setError(message);
      } finally {
        setIsLoading(false);
      }
    },
    [addItem, router, t]
  );

  const handleUrlSubmit = useCallback(
    (inputUrl: string) => {
      handleConvert(inputUrl);
    },
    [handleConvert]
  );

  const handleHistorySelect = useCallback(
    (historyUrl: string) => {
      handleConvert(historyUrl);
    },
    [handleConvert]
  );

  const handleToggleFavorite = useCallback(() => {
    if (result) {
      toggleFavorite(result.url, result.title);
    }
  }, [result, toggleFavorite]);

  // Derived content
  const cleanedMarkdown = rawMarkdown ? cleanMarkdown(rawMarkdown) : "";
  const plainText = rawMarkdown ? toPlainText(cleanedMarkdown) : "";
  const jsonOutput = result ? toJson(result) : "";
  const aiContext = result ? toAIContext(result) : "";

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("convert.backToHome")}
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {t("convert.title")}
          </h1>
        </div>
        <p className="text-muted-foreground ml-13">
          {t("convert.description")}
        </p>
      </motion.div>

      {/* URL Input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <UrlInput
          onSubmit={handleUrlSubmit}
          isLoading={isLoading}
          placeholder="https://example.com/article"
        />
      </motion.div>

      {/* Sidebar panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <HistoryPanel onSelect={handleHistorySelect} />
        <FavoritesPanel onSelect={handleHistorySelect} />
      </div>

      {/* Loading State */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <LoadingState message={t("convert.loading")} />
        </motion.div>
      )}

      {/* Error State */}
      {error && !isLoading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <ErrorState
            message={error}
            onRetry={result ? undefined : () => url && handleConvert(url)}
          />
        </motion.div>
      )}

      {/* Results */}
      {result && !isLoading && !error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Title */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold">{result.title}</h2>
              <p className="text-xs text-muted-foreground truncate max-w-md">
                {result.url}
              </p>
            </div>
          </div>

          <ResultTabs
            markdown={rawMarkdown}
            cleanMarkdown={cleanedMarkdown}
            aiContext={aiContext}
            json={jsonOutput}
            plainText={plainText}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            isFavorite={isFavorite(url)}
            onToggleFavorite={handleToggleFavorite}
          />
        </motion.div>
      )}
    </div>
  );
}
