"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { copyToClipboard } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useLanguage } from "@/components/language-provider";

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({ text, label, className }: CopyButtonProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const displayLabel = label ?? t("copyButton.copy");

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      toast.success(t("copyButton.copiedToClipboard"));
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast.error(t("copyButton.failedToCopy"));
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200",
        "border border-border hover:bg-accent/10 hover:border-primary/30",
        copied && "border-primary/50 bg-primary/10 text-primary",
        className
      )}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      {copied ? t("copyButton.copied") : displayLabel}
    </button>
  );
}
