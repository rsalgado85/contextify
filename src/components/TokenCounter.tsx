"use client";

import { cn, formatNumber, countWords, estimateTokens, estimateReadingTime } from "@/lib/utils";
import { FileText, Hash, Brain, Clock } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface TokenCounterProps {
  text: string;
  className?: string;
}

export function TokenCounter({ text, className }: TokenCounterProps) {
  const { t } = useLanguage();
  const chars = text.length;
  const words = countWords(text);
  const tokens = estimateTokens(text);
  const readingTime = estimateReadingTime(text);

  const stats = [
    { icon: FileText, label: t("tokenCounter.characters"), value: formatNumber(chars) },
    { icon: Hash, label: t("tokenCounter.words"), value: formatNumber(words) },
    { icon: Brain, label: t("tokenCounter.estTokens"), value: formatNumber(tokens) },
    { icon: Clock, label: t("tokenCounter.readingTime"), value: readingTime },
  ];

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/30 px-3 py-2"
        >
          <stat.icon className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{stat.label}</span>
          <span className="text-xs font-mono font-semibold text-foreground">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
