import { create } from "zustand";

export const usePostInteraction = create((set) => ({
  deletePostId: null,
  setDeletePost: (postId: number) => set({ deletePostId: postId }),

  editPostId: null,
  setEditPost: (postId: number) => set({ editPostId: postId }),
}));
