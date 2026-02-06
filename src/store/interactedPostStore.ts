import { create } from "zustand";

export const usePostInteraction = create((set) => ({
  interactedPostId: null,
  setInteractedPost: (postId: number) => set({ interactedPostId: postId }),
}));
