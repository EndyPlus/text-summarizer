import { create } from "zustand";

export const usePostInteractionStorage = create((set) => ({
  deletePostId: null,
  setDeletePost: (postId: number) => set({ deletePostId: postId }),

  toEditPost: null,
  setEditPost: (post: object) => set({ toEditPost: post }),
  resetEditPost: () => set({ toEditPost: null }),
}));
