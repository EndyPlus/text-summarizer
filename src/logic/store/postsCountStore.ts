import { create } from "zustand";

interface PostsCountStore {
  storedPostsCount: number;
  setStoredPostsCount: (count: number) => void;
}

export const usePostsCountStorage = create<PostsCountStore>()((set) => ({
  storedPostsCount: 0,
  setStoredPostsCount: (count) => set({ storedPostsCount: count }),
}));
