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
        const { success, error, data: count } = await findPostsCount(userId);
        if (!success) throw new Error(error);

        setPostsCount(count!);
      } catch {
        return;
      }
    }

    initPostsCount();
  }, [userId, storedPostsCount, deletePostId]);

  return postsCount;
}
