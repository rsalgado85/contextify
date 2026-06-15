import { create } from "zustand";
import { FavoriteItem } from "@/types";

const STORAGE_KEY = "contextify-favorites";

function loadFavorites(): FavoriteItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

function saveFavorites(items: FavoriteItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage full or unavailable
  }
}

interface FavoritesStore {
  items: FavoriteItem[];
  addFavorite: (url: string, title: string) => void;
  removeFavorite: (url: string) => void;
  isFavorite: (url: string) => boolean;
  toggleFavorite: (url: string, title: string) => void;
}

export const useFavorites = create<FavoritesStore>((set, get) => ({
  items: loadFavorites(),

  addFavorite: (url: string, title: string) => {
    if (get().items.some((item) => item.url === url)) return;
    const newItem: FavoriteItem = { url, title, addedAt: Date.now() };
    const updated = [...get().items, newItem];
    saveFavorites(updated);
    set({ items: updated });
  },

  removeFavorite: (url: string) => {
    const updated = get().items.filter((item) => item.url !== url);
    saveFavorites(updated);
    set({ items: updated });
  },

  isFavorite: (url: string) => {
    return get().items.some((item) => item.url === url);
  },

  toggleFavorite: (url: string, title: string) => {
    if (get().isFavorite(url)) {
      get().removeFavorite(url);
    } else {
      get().addFavorite(url, title);
    }
  },
}));
