export interface PageData {
  title: string;
  url: string;
  content: string;
  links: string[];
  metadata: {
    description?: string;
    author?: string;
    date?: string;
  };
}

export interface AppState {
  isLoading: boolean;
  error: string | null;
  result: PageData | null;
  rawMarkdown: string;
  activeTab: "markdown" | "clean" | "ai-context" | "json" | "text";
}

export interface HistoryItem {
  url: string;
  title: string;
  timestamp: number;
}

export interface FavoriteItem {
  url: string;
  title: string;
  addedAt: number;
}
