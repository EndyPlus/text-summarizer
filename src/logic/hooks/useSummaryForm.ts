"use client";

import { ChangeEvent, useState } from "react";
import { useSession } from "next-auth/react";

import {
  addPost,
  findPostsCount,
  updatePost,
} from "@/src/services/serverActions/prismaActions";

import { getAiResponse } from "@/src/services/serverActions/genaiAction";

import mockAiResponse from "@/src/mock/mockAiResponse";

import { useSummaryStorage } from "@/src/store/summaryStore";
import { usePostInteractionStorage } from "@/src/store/interactedPostStore";
import { usePostsCountStorage } from "@/src/store/postsCountStore";
import {
  MAXIMUM_CHARACTERS_LIMIT,
  MINIMUM_WORDS_LIMIT,
} from "@/src/utils/vars";
import getErrorMessage from "@/src/utils/getErrorMessage";
import { useShallow } from "zustand/shallow";

interface Counts {
  wordsCount: number;
  charactersCount: number;
}

export default function useSummaryForm({
  wordsCount,
  charactersCount,
}: Counts) {
  const [submitError, setSubmitError] = useState<null | string>(null);

  function handleResetError() {
    setSubmitError(null);
  }

  const {
    setSummaryLoading,
    originalText,
    setOriginalText,
    setSummarizedText,
  } = useSummaryStorage(
    useShallow((state) => ({
      setSummaryLoading: state.setSummaryLoading,
      originalText: state.originalText,
      setOriginalText: state.setOriginalText,
      setSummarizedText: state.setSummarizedText,
    })),
  );

  const session = useSession();
  const userId = Number(session.data?.user?.id);

  const setStoredPostsCount = usePostsCountStorage(
    (store) => store.setStoredPostsCount,
  );

  const toEditPost = usePostInteractionStorage((store) => store.toEditPost);

  // console.log(toEditPost);

  async function handleHomePageFormSubmit(e: ChangeEvent<HTMLFormElement>) {
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

      if (wordsCount < MINIMUM_WORDS_LIMIT) {
        throw new Error("Text must be at least 150 words long.");
      }

      if (charactersCount > MAXIMUM_CHARACTERS_LIMIT) {
        throw new Error("Reached the maximum characters limit.");
      }

      setOriginalText(userText);

      if (originalText === userText) {
        throw new Error("Try to summarize another text.");
      }

      setSummarizedText("");

      // AI RESPONSE
      // const {
      //   success: isResponseSuccess,
      //   error: aiError,
      //   data: aiResponse,
      // } = await getAiResponse(userText);

      // MOCK RESPONSE
      const {
        success: isResponseSuccess,
        error: aiError,
        data: aiResponse,
      } = await mockAiResponse();

      console.log(aiResponse);

      if (!isResponseSuccess || !aiResponse) {
        throw new Error(aiError || "Generation error.");
      }

      setSummarizedText(aiResponse);

      const postData = {
        originalText: userText,
        summarizedText: aiResponse,
        userId: userId,
      };

      if (toEditPost) {
        console.log("UPDATE POST");

        const {
          success: isUpdateSuccess,
          error: updateError,
          data: updatedPost,
        } = await updatePost(toEditPost.id, postData);

        if (!isUpdateSuccess) {
          throw new Error(updateError);
        }

        console.log(updatedPost);
      } else {
        console.log("ADD POST");

        const {
          success: isNewPostSuccess,
          error: newPostError,
          data: newPostData,
        } = await addPost(postData);

        if (!isNewPostSuccess) {
          throw new Error(newPostError);
        }

        console.log(newPostData);

        const { success: isPostsCountSuccess, data: postsCount } =
          await findPostsCount(userId);

        if (isPostsCountSuccess && typeof postsCount === "number") {
          setStoredPostsCount(postsCount);
        }
      }
    } catch (err) {
      // console.log(err);

      setSubmitError(getErrorMessage(err));
    } finally {
      setSummaryLoading(false);
    }
  }

  return { handleHomePageFormSubmit, submitError, handleResetError };
}
