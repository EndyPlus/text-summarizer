"use client";

import HomeCtaButton from "@/src/components/buttons/HomeCtaButton";

import { ChangeEvent, useEffect, useState } from "react";

import { useSummaryStorage } from "@/src/store/summaryStore";

import useInputField from "@/src/logic/hooks/useInputField";
import useSummaryForm from "@/src/logic/hooks/useSummaryForm";
import DashboardNotify from "../modals/DashboardNotify/DashboardNotify";
import {
  MAXIMUM_CHARACTERS_LIMIT,
  MINIMUM_WORDS_LIMIT,
} from "@/src/utils/vars";
import { useShallow } from "zustand/shallow";

export default function HomePageForm() {
  const { isSummaryLoading, originalText } = useSummaryStorage(
    useShallow((state) => ({
      isSummaryLoading: state.isSummaryLoading,
      originalText: state.originalText,
    })),
  );

  const [isActiveForm, setIsActiveForm] = useState(originalText.length > 0);

  const {
    inputRef,
    charactersCount,
    wordsCount,
    handleInputText,
    handlePasteText,
    handleResetValues,
    handleFocus,
  } = useInputField();

  useEffect(() => {
    if (!isActiveForm || originalText.length > 0) return;

    handleFocus();
  }, [isActiveForm, handleFocus, originalText]);

  const { handleHomePageFormSubmit, submitError, handleResetError } =
    useSummaryForm({ wordsCount, charactersCount });

  function handleUnfocus(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.trim().length !== 0) return;

    setIsActiveForm(false);
    handleResetValues();
  }

  return (
    <>
      {submitError && (
        <DashboardNotify
          onClose={handleResetError}
          message={submitError}
          isSuccess={false}
        />
      )}

      <form
        className="rounded-large bg-black-secondary mb-5 pt-5.75 pb-3.75"
        onSubmit={handleHomePageFormSubmit}
      >
        <div className="mx-px mb-3.75 flex h-36 items-center justify-center bg-white">
          {!isActiveForm && (
            <div className="flex gap-2.5">
              <HomeCtaButton
                type="handwrite"
                onClick={() => {
                  setIsActiveForm(true);
                }}
              >
                Enter Text
              </HomeCtaButton>
              <HomeCtaButton
                type="paste"
                onClick={() => {
                  handlePasteText();
                  setIsActiveForm(true);
                }}
              >
                Paste Text
              </HomeCtaButton>
            </div>
          )}
          <textarea
            ref={inputRef}
            onInput={handleInputText}
            onBlur={handleUnfocus}
            defaultValue={originalText}
            name="formTextarea"
            style={{ display: isActiveForm ? "inline-block" : "none" }}
            className="h-full w-full resize-none px-5 py-2.5 text-sm leading-[150%] text-[#131615] outline-none"
          ></textarea>
        </div>

        <div className="mx-5 flex items-center justify-between">
          <ul className="flex gap-2.75">
            <li className="leading-large flex gap-1.5 text-sm">
              <p className="text-gray-base">Words</p>
              <span
                className={`${wordsCount < MINIMUM_WORDS_LIMIT && wordsCount > 0 ? "text-error-accent" : "text-white"} font-medium`}
              >
                {wordsCount}
              </span>
            </li>
            <li className="leading-large flex gap-1.5 text-sm">
              <p className="text-gray-base">Characters</p>
              <span
                className={`${charactersCount > MAXIMUM_CHARACTERS_LIMIT ? "text-error-accent" : "text-white"} font-medium`}
              >
                {charactersCount}
              </span>
            </li>
            <li className="leading-large text-sm">error</li>
          </ul>
          <button
            disabled={isSummaryLoading}
            className={`${isSummaryLoading ? "cursor-not-allowed" : "cursor-pointer"} bg-black-base leading-base tracking-base rounded-large border-border-accent text-gray-accent border px-2.5 py-1.5 text-sm font-medium`}
          >
            Summarize My Text
          </button>
        </div>
      </form>
    </>
  );
}
