import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { findPosts } from "@/src/services/serverActions/prismaActions";

import { HistoryItem } from "@/src/types/historyItemType";

import { usePaginationStorage } from "@/src/store/paginationStore";

export default function usePostsList() {
  const session = useSession();
  // @ts-expect-error does not exist
  const userId = session.data?.user?.id;

  const [postsList, setPostsList] = useState<null | HistoryItem[]>(null);

  // @ts-expect-error store unknown type
  const currentPage = usePaginationStorage((store) => store.currentPage);

  useEffect(() => {
    async function initPosts() {
      try {
        const fetchedPosts = await findPosts(userId, currentPage);

        if (!fetchedPosts) {
          throw new Error("Failed to fetch posts.");
        }

        setPostsList(fetchedPosts.posts);
      } catch (err) {
        console.log(err);
      }
    }

    if (!userId) {
      return;
    }

    initPosts();
  }, [userId, currentPage]);

  return { postsList };
}
