import { create } from "zustand";

export const useSummaryStorage = create((set, get) => ({
  isSummaryLoading: false,
  setSummaryLoading: (bool: boolean) => set({ isSummaryLoading: bool }),

  originalText: "",
  summarizedText: "",

  setOriginalText: (text: string) => set({ originalText: text }),
  setSummarizedText: (text: string) => set({ summarizedText: text }),

  setTexts: (original: string, summary: string) => {
    get().setOriginalText(original);
    get().setSummarizedText(summary);
  },

  resetTexts: () => set({ originalText: "", summarizedText: "" }),
}));
