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

  const userId = session.data?.user?.id;

  const deletePostId = usePostInteractionStorage((state) => state.deletePostId);

  useEffect(() => {
    async function initPostsCount() {
      const res = await findPostsCount(userId);

      if (typeof res !== "number") console.log("ERROR POSTS COUNT");

      setPostsCount(res);
    }

    initPostsCount();
  }, [userId, storedPostsCount, deletePostId]);

  return postsCount;
}
