"use client";

import { ChangeEvent, useState } from "react";
import { useSession } from "next-auth/react";

import {
  addPost,
  findPostsCount,
  updatePost,
} from "@/src/services/serverActions/prismaActions";

import { getAiResponse } from "@/src/services/serverActions/genaiAction";

import mockAiResponse from "@/src/helpers/mock/mockAiResponse";

import { useSummaryStorage } from "@/src/logic/store/summaryStore";
import { usePostInteractionStorage } from "@/src/logic/store/interactedPostStore";
import { usePostsCountStorage } from "@/src/logic/store/postsCountStore";
import {
  MAXIMUM_CHARACTERS_LIMIT,
  MINIMUM_WORDS_LIMIT,
} from "@/src/helpers/utils/vars";
import getErrorMessage from "@/src/helpers/utils/getErrorMessage";
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

    const textData = data.formTextarea as string;

    if (!textData) return;

    const userText = textData.trim();

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

        const updatePostResponse = await updatePost(toEditPost.id, postData);

        if (!updatePostResponse.success) {
          throw new Error(updatePostResponse.error);
        }

        console.log(updatePostResponse.data);
      } else {
        console.log("ADD POST");

        const addPostResponse = await addPost(postData);

        if (!addPostResponse.success) {
          throw new Error(addPostResponse.error);
        }

        console.log(addPostResponse.data);

        const postCountResponse = await findPostsCount(userId);

        if (postCountResponse.success) {
          setStoredPostsCount(postCountResponse.data);
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
