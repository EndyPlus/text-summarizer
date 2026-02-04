"use client";

import {
  addPost,
  findPostsCount,
} from "@/src/services/serverActions/prismaActions";

import { useSession } from "next-auth/react";
import { usePostsCount } from "@/src/store/postsCountStore";
import { useSummary } from "@/src/store/summaryStore";

export default function useFormHandler() {
  // @ts-expect-error type unknown
  const { setSummary, summarizedText } = useSummary();

  const session = useSession();

  const setStoredPostsCount = usePostsCount(
    // @ts-expect-error type unknown
    (store) => store.setStoredPostsCount,
  );

  // @ts-expect-error e any type
  async function handleHomePageFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    setSummary(data.formTextarea);

    // @ts-expect-error id does not exist in type
    const userId = session.data?.user?.id;

    const postData = {
      originalText: data.formTextarea,
      summarizedText: summarizedText,
      userId: userId,
    };

    // @ts-expect-error type error
    const addPostResult = await addPost(postData);

    // console.log(addPostResult);

    const postsCount = await findPostsCount(userId);

    if (!postsCount) return;

    setStoredPostsCount(postsCount);
  }

  return handleHomePageFormSubmit;
}
