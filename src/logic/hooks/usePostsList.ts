"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { findPosts } from "@/src/services/serverActions/prismaActions";

import { usePaginationStorage } from "@/src/store/paginationStore";
import { useSearchStorage } from "@/src/store/searchTermStore";
import { useDateFilterStorage } from "@/src/store/dateFilterStore";
import { usePostInteractionStorage } from "@/src/store/interactedPostStore";
import { PostsData } from "@/src/types/types";
import { useShallow } from "zustand/shallow";

export default function usePostsList() {
  const [postsData, setPostsData] = useState<null | PostsData>(null);
  const [isLoading, setIsLoading] = useState(true);

  const postsList = postsData?.posts;

  const session = useSession();
  const userId = Number(session.data?.user.id);

  const { currentPage, setCurrentPage } = usePaginationStorage(
    useShallow((state) => ({
      currentPage: state.currentPage,
      setCurrentPage: state.setCurrentPage,
    })),
  );

  const currentSearchTerm = useSearchStorage(
    (store) => store.currentSearchTerm,
  );

  const currentDate = useDateFilterStorage((store) => store.currentDate);

  const deletePostId = usePostInteractionStorage((state) => state.deletePostId);

  useEffect(() => {
    if (!userId) return;

    // setIsLoading(true);

    async function initPosts() {
      try {
        const fetchedPostsData = await findPosts(
          userId,
          currentPage,
          currentSearchTerm,
          currentDate,
        );

        if (!fetchedPostsData) {
          throw new Error("Failed to fetch posts.");
        }

        // console.log(fetchedPostsData);

        if (!fetchedPostsData.posts.length && currentPage > 1) {
          setCurrentPage(1);
        } else {
          setPostsData(fetchedPostsData);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    initPosts();
  }, [
    userId,
    currentPage,
    currentSearchTerm,
    currentDate,
    deletePostId,
    setCurrentPage,
  ]);

  return { postsData, isLoading, postsList };
}
