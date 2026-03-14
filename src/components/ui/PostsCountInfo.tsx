"use client";

import usePostsCount from "@/src/logic/hooks/features-hooks/usePostsCount";

export default function PostsCountInfo() {
  const postsCount = usePostsCount();

  return (
    <>
      {postsCount > 0 && (
        <span className="text-small border-border-accent flex h-4 items-center justify-center rounded-sm border bg-[#3368f04d] px-1 leading-[133%] font-medium">
          {postsCount}
        </span>
      )}
    </>
  );
}
