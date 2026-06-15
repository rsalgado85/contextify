"use client";

import { useHistory } from "@/store/useHistory";
import { Clock, Trash2, ExternalLink, History } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface HistoryPanelProps {
  onSelect: (url: string) => void;
  className?: string;
}

export function HistoryPanel({ onSelect, className }: HistoryPanelProps) {
  const { items, removeItem, clearAll } = useHistory();

  if (items.length === 0) return null;

  return (
    <div className={cn("glass-card p-4", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <History className="h-4 w-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold">Recent URLs</h3>
          <span className="text-xs text-muted-foreground">({items.length})</span>
        </div>
        <button
          onClick={clearAll}
          className="text-xs text-muted-foreground hover:text-destructive transition-colors"
        >
          Clear all
        </button>
      </div>
      <div className="space-y-1 max-h-48 overflow-y-auto">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.url}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="group flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-accent/10 transition-colors"
            >
              <button
                onClick={() => onSelect(item.url)}
                className="flex-1 text-left min-w-0"
              >
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-muted-foreground shrink-0" />
                  <span className="text-xs text-foreground truncate">
                    {item.title || item.url}
                  </span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(item.url);
                }}
                className="p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/10"
              >
                <Trash2 className="h-3 w-3 text-muted-foreground hover:text-destructive" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
