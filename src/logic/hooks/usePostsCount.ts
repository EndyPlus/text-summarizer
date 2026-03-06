import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { findPostsCount } from "@/src/services/serverActions/prismaActions";
import { usePostInteractionStorage } from "@/src/store/interactedPostStore";
import { usePostsCountStorage } from "@/src/store/postsCountStore";

export default function usePostsCount() {
  const [postsCount, setPostsCount] = useState(0);

  const storedPostsCount = usePostsCountStorage(
    (store) => store.storedPostsCount,
  );

  const session = useSession();

  const userId = Number(session.data?.user.id);

  const deletePostId = usePostInteractionStorage((state) => state.deletePostId);

  useEffect(() => {
    async function initPostsCount() {
      try {
        const postCountResponse = await findPostsCount(userId);
        if (!postCountResponse.success) {
          throw new Error(postCountResponse.error);
        }

        setPostsCount(postCountResponse.data);
      } catch {
        return;
      }
    }

    if (isNaN(userId)) return;

    initPostsCount();
  }, [userId, storedPostsCount, deletePostId]);

  return postsCount;
}
