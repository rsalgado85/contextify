import { create } from "zustand";
import { HistoryItem } from "@/types";

const STORAGE_KEY = "contextify-history";
const MAX_ITEMS = 10;

function loadHistory(): HistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

function saveHistory(items: HistoryItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage full or unavailable
  }
}

interface HistoryStore {
  items: HistoryItem[];
  addItem: (url: string, title: string) => void;
  removeItem: (url: string) => void;
  clearAll: () => void;
  hasItem: (url: string) => boolean;
}

export const useHistory = create<HistoryStore>((set, get) => ({
  items: loadHistory(),

  addItem: (url: string, title: string) => {
    const current = get().items;
    // Remove duplicate if exists
    const filtered = current.filter((item) => item.url !== url);
    const newItem: HistoryItem = { url, title, timestamp: Date.now() };
    const updated = [newItem, ...filtered].slice(0, MAX_ITEMS);
    saveHistory(updated);
    set({ items: updated });
  },

  removeItem: (url: string) => {
    const updated = get().items.filter((item) => item.url !== url);
    saveHistory(updated);
    set({ items: updated });
  },

  clearAll: () => {
    saveHistory([]);
    set({ items: [] });
  },

  hasItem: (url: string) => {
    return get().items.some((item) => item.url === url);
  },
}));
