import { create } from "zustand";

export const usePostsCount = create((set) => ({
  storedPostsCount: 0,
  setStoredPostsCount: (count: number) => set({ storedPostsCount: count }),
}));
