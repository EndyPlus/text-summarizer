"use client";

import { useSession } from "next-auth/react";

import {
  addPost,
  findPostsCount,
} from "@/src/services/serverActions/prismaActions";
import { getAiResponse } from "@/src/services/serverActions/genaiAction";

import { usePostsCount } from "@/src/store/postsCountStore";
import { useSummary } from "@/src/store/summaryStore";

import asyncApiCall from "@/src/mock/asyncApiCall";

export default function useSummaryForm() {
  const {
    setSummaryLoading,
    originalText,
    setOriginalText,
    setSummarizedText,
    setTexts,
  } = useSummary();

  const session = useSession();
  // @ts-expect-error id does not exist in type
  const userId = session.data?.user?.id;

  const setStoredPostsCount = usePostsCount(
    // @ts-expect-error type unknown
    (store) => store.setStoredPostsCount,
  );

  // @ts-expect-error e any type
  async function handleHomePageFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    const userText = (data.formTextarea as string).trim();

    try {
      setSummaryLoading(true);

      if (!userId) {
        throw new Error("Log In to use Text Summarizer.");
      }

      console.log(userId);
      console.log(userText);

      if (!userText.length) {
        throw new Error("Please enter a text to summarize it.");
      }

      setOriginalText(userText);

      if (originalText === userText) {
        throw new Error("Try to summarize another text.");
      }

      setSummarizedText("");

      // const aiResponse = await getAiResponse(data.formTextarea);
      const aiResponse = await asyncApiCall();

      console.log(aiResponse);

      if (!aiResponse) {
        throw new Error("AI RESPONSE ERROR.");
      }

      setSummarizedText(aiResponse);

      const postData = {
        originalText: userText,
        summarizedText: aiResponse,
        userId: userId,
      };

      // @ts-expect-error error type
      const addPostResult = await addPost(postData);

      if (!addPostResult) {
        throw new Error("Failed to store post in database.");
      }

      console.log(addPostResult);

      const postsCount = await findPostsCount(userId);

      if (postsCount) {
        setStoredPostsCount(postsCount);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSummaryLoading(false);
    }
  }

  return handleHomePageFormSubmit;
}
