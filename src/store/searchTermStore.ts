import { create } from "zustand";

export const useSearchStorage = create((set) => ({
  currentSearchTerm: "",
  setCurrentSearchTerm: (term: string) => set({ currentSearchTerm: term }),
}));
