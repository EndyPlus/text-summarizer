import { create } from "zustand";

import { Post } from "@/src/helpers/types/types";

interface PostInteractionStore {
  deletePostId: null | number;
  setDeletePost: (postId: number) => void;

  toEditPost: null | Post;
  setEditPost: (post: Post) => void;
  resetEditPost: () => void;
}

export const usePostInteractionStorage = create<PostInteractionStore>()(
  (set) => ({
    deletePostId: null,
    setDeletePost: (postId) => set({ deletePostId: postId }),

    toEditPost: null,
    setEditPost: (post) => set({ toEditPost: post }),
    resetEditPost: () => set({ toEditPost: null }),
  }),
);
