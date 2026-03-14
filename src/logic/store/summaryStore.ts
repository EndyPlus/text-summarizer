import { create } from "zustand";

interface SummaryStore {
  isSummaryLoading: boolean;
  setSummaryLoading: (bool: boolean) => void;

  originalText: string;
  summarizedText: string;

  setOriginalText: (text: string) => void;
  setSummarizedText: (text: string) => void;

  setTexts: (original: string, summary: string) => void;

  resetTexts: () => void;
}

export const useSummaryStorage = create<SummaryStore>()((set, get) => ({
  isSummaryLoading: false,
  setSummaryLoading: (bool) => set({ isSummaryLoading: bool }),

  originalText: "",
  summarizedText: "",

  setOriginalText: (text) => set({ originalText: text }),
  setSummarizedText: (text) => set({ summarizedText: text }),

  setTexts: (original, summary) => {
    get().setOriginalText(original);
    get().setSummarizedText(summary);
  },

  resetTexts: () => set({ originalText: "", summarizedText: "" }),
}));
