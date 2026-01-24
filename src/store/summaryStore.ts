import { create } from "zustand";

export const useSummary = create((set) => ({
  summarizedText: "",
  setSummary: (text: string) => set({ summarizedText: text }),
}));
