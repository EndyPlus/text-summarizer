"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { findPostsCount } from "@/src/services/serverActions/prismaActions";
import { usePostsCount } from "@/src/store/postsCountStore";

export default function PostsCountInfo() {
  const [postsCount, setPostsCount] = useState(0);

  // @ts-expect-error unknown type
  const storedPostsCount = usePostsCount((store) => store.storedPostsCount);

  const session = useSession();

  // @ts-expect-error does not exist in type
  const userId = session.data?.user?.id;

  useEffect(() => {
    async function initPostsCount() {
      const res = await findPostsCount(userId);

      if (!res) return;

      // console.log(res);

      setPostsCount(res);
    }

    initPostsCount();
  }, [userId, storedPostsCount]);

  return (
    <span className="text-small border-border-accent flex h-4 items-center justify-center rounded-sm border bg-[#3368f04d] px-1 leading-[133%] font-medium">
      {postsCount}
    </span>
  );
}
