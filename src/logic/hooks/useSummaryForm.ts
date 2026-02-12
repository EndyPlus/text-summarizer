"use client";

import { useSession } from "next-auth/react";

import {
  addPost,
  findPostsCount,
  updatePost,
} from "@/src/services/serverActions/prismaActions";

import { getAiResponse } from "@/src/services/serverActions/genaiAction";

import { useSummary } from "@/src/store/summaryStore";

import asyncApiCall from "@/src/mock/asyncApiCall";
import { usePostInteraction } from "@/src/store/interactedPostStore";
import { usePostsCountStore } from "@/src/store/postsCountStore";
import { useState } from "react";

export default function useSummaryForm() {
  const [submitError, setSubmitError] = useState<null | string>(null);

  function handleResetError() {
    setSubmitError(null);
  }

  const {
    setSummaryLoading,
    originalText,
    setOriginalText,
    setSummarizedText,
  } = useSummary();

  const session = useSession();
  const userId = session.data?.user?.id;

  const setStoredPostsCount = usePostsCountStore(
    (store) => store.setStoredPostsCount,
  );

  const { editPostId } = usePostInteraction();

  async function handleHomePageFormSubmit(e) {
    e.preventDefault();

    handleResetError();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    const userText = (data.formTextarea as string).trim();

    try {
      setSummaryLoading(true);

      if (!userId) {
        throw new Error("Log In to use Text Summarizer.");
      }

      // console.log(userText);

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

      // console.log(aiResponse);

      if (!aiResponse) {
        throw new Error("AI RESPONSE ERROR.");
      }

      setSummarizedText(aiResponse);

      const postData = {
        originalText: userText,
        summarizedText: aiResponse,
        userId: userId,
      };

      if (editPostId) {
        console.log("UPDATE POST");

        const updatePostResult = await updatePost(editPostId, postData);

        if (!updatePostResult) {
          throw new Error("Failed to update post.");
        }

        // console.log(updatePostResult);
      } else {
        console.log("ADD POST");

        const addPostResult = await addPost(postData);

        if (!addPostResult) {
          throw new Error("Failed to store post in database.");
        }

        // console.log(addPostResult);

        const postsCount = await findPostsCount(userId);

        if (postsCount) {
          setStoredPostsCount(postsCount);
        }
      }
    } catch (err) {
      console.log(err);
      setSubmitError(err.message);
    } finally {
      setSummaryLoading(false);
    }
  }

  return { handleHomePageFormSubmit, submitError, handleResetError };
}
