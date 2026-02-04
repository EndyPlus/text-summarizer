import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { findPosts } from "@/src/services/serverActions/prismaActions";

import { usePaginationStorage } from "@/src/store/paginationStore";
import { useSearch } from "./../../store/searchTermStore";
import { useDateFilter } from "@/src/store/dateFilterStore";

export default function usePostsList() {
  const session = useSession();
  // @ts-expect-error does not exist
  const userId = session.data?.user?.id;

  const [postsData, setPostsData] = useState(null);

  // @ts-expect-error store unknown type
  const currentPage = usePaginationStorage((store) => store.currentPage);

  // @ts-expect-error store unknown type
  const currentSearchTerm = useSearch((store) => store.currentSearchTerm);

  // @ts-expect-error store unknown type
  const currentDate = useDateFilter((store) => store.currentDate);

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

        // @ts-expect-error error type
        setPostsData(fetchedPostsData);
      } catch (err) {
        console.log(err);
      }
    }

    if (!userId) {
      return;
    }

    initPosts();
  }, [userId, currentPage, currentSearchTerm, currentDate]);

  return postsData;
}
