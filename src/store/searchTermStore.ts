import { create } from "zustand";

interface SearchStore {
  currentSearchTerm: string;
  setCurrentSearchTerm: (term: string) => void;
}

export const useSearchStorage = create<SearchStore>()((set) => ({
  currentSearchTerm: "",
  setCurrentSearchTerm: (term) => set({ currentSearchTerm: term }),
}));
