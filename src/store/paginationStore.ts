import { create } from "zustand";

export const usePaginationStorage = create((set) => ({
  currentPage: 1,
  setCurrentPage: (page: number) => set({ currentPage: page }),
}));
