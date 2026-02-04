import { create } from "zustand";

export const useSearch = create((set) => ({
  currentSearchTerm: "",
  setCurrentSearchTerm: (term: string) => set({ currentSearchTerm: term }),
}));
