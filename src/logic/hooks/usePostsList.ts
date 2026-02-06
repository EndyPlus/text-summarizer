import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { findPosts } from "@/src/services/serverActions/prismaActions";

import { usePaginationStorage } from "@/src/store/paginationStore";
import { useSearch } from "@/src/store/searchTermStore";
import { useDateFilter } from "@/src/store/dateFilterStore";
import { usePostInteraction } from "@/src/store/interactedPostStore";

export default function usePostsList() {
  const [postsData, setPostsData] = useState(null);

  const session = useSession();
  // @ts-expect-error does not exist
  const userId = session.data?.user?.id;

  // @ts-expect-error store unknown type
  const { currentPage, setCurrentPage } = usePaginationStorage();

  // @ts-expect-error store unknown type
  const currentSearchTerm = useSearch((store) => store.currentSearchTerm);

  // @ts-expect-error store unknown type
  const currentDate = useDateFilter((store) => store.currentDate);

  const interactedPostId = usePostInteraction(
    // @ts-expect-error store unknown type
    (state) => state.interactedPostId,
  );

  useEffect(() => {
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

        console.log(fetchedPostsData);

        if (!fetchedPostsData.posts.length && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        } else {
          // @ts-expect-error error type
          setPostsData(fetchedPostsData);
        }
      } catch (err) {
        console.log(err);
      }
    }

    initPosts();
  }, [
    userId,
    currentPage,
    currentSearchTerm,
    currentDate,
    interactedPostId,
    setCurrentPage,
  ]);

  return postsData;
}
