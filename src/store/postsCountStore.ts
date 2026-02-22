import { create } from "zustand";

export const usePostsCountStorage = create((set) => ({
  storedPostsCount: 0,
  setStoredPostsCount: (count: number) => set({ storedPostsCount: count }),
}));
