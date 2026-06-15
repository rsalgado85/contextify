"use client";

import { Download } from "lucide-react";
import { downloadFile } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface DownloadButtonProps {
  content: string;
  filename: string;
  label?: string;
  mimeType?: string;
  className?: string;
}

export function DownloadButton({
  content,
  filename,
  label = "Download",
  mimeType = "text/plain",
  className,
}: DownloadButtonProps) {
  const handleDownload = () => {
    try {
      downloadFile(content, filename, mimeType);
      toast.success(`Downloaded ${filename}`);
    } catch {
      toast.error("Failed to download");
    }
  };

  return (
    <button
      onClick={handleDownload}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200",
        "border border-border hover:bg-accent/10 hover:border-primary/30",
        className
      )}
    >
      <Download className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}
