import { create } from "zustand";

interface PaginationStore {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const usePaginationStorage = create<PaginationStore>()((set) => ({
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
}));
