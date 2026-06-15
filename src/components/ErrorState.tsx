"use client";

import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({ message, onRetry, className }: ErrorStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-16 gap-4", className)}>
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 ring-1 ring-destructive/20">
        <AlertCircle className="h-8 w-8 text-destructive" />
      </div>
      <div className="text-center max-w-md">
        <h3 className="text-lg font-semibold mb-1">Something went wrong</h3>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
      {onRetry && (
        <button onClick={onRetry} className="btn-secondary mt-2">
          Try Again
        </button>
      )}
    </div>
  );
}
