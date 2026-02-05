"use client";

import iconKeyboard from "@/src/assets/icons/icon-keyboard.svg";
import iconClipboard from "@/src/assets/icons/icon-clipboard.svg";

import HomeCtaButton from "@/src/components/buttons/HomeCtaButton";

import { useState } from "react";

import { useSummary } from "@/src/store/summaryStore";

import useInputField from "@/src/logic/hooks/useInputField";
import useSummaryForm from "@/src/logic/hooks/useSummaryForm";

export default function HomePageForm() {
  const [isActiveForm, setIsActiveForm] = useState(false);

  // @ts-expect-error not exists on type unknown
  const { isSummaryLoading } = useSummary();

  const {
    textareaRef,
    charactersCount,
    wordsCount,
    handleInputText,
    handlePasteText,
    handleResetValues,
  } = useInputField();

  const handleHomePageFormSubmit = useSummaryForm();

  // @ts-expect-error e any type
  function handleUnfocus(e) {
    if (e.target.value.trim().length !== 0) return;

    setIsActiveForm(false);
    handleResetValues();
  }

  return (
    <form
      className="rounded-large bg-black-secondary mb-5 pt-5.75 pb-3.75"
      onSubmit={handleHomePageFormSubmit}
    >
      <div className="mx-px mb-3.75 flex h-36 items-center justify-center bg-white">
        {!isActiveForm && (
          <div className="flex gap-2.5">
            <HomeCtaButton
              src={iconKeyboard}
              alt="keyboard icon"
              onClick={() => setIsActiveForm(true)}
            >
              Enter Text
            </HomeCtaButton>
            <HomeCtaButton
              src={iconClipboard}
              alt="clipboard icon"
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
          ref={textareaRef}
          onInput={handleInputText}
          onBlur={handleUnfocus}
          name="formTextarea"
          style={{ display: isActiveForm ? "inline-block" : "none" }}
          className="h-full w-full resize-none px-5 py-2.5 text-sm leading-[150%] text-[#131615] outline-none"
        ></textarea>
      </div>

      <div className="mx-5 flex items-center justify-between">
        <ul className="flex gap-2.75">
          <li className="leading-large flex gap-1.5 text-sm">
            <p className="text-gray-base">Words</p>
            <span className="font-medium text-white">{wordsCount}</span>
          </li>
          <li className="leading-large flex gap-1.5 text-sm">
            <p className="text-gray-base">Characters</p>
            <span className="font-medium text-white">{charactersCount}</span>
          </li>
        </ul>
        <button
          disabled={isSummaryLoading}
          className={`${isSummaryLoading ? "cursor-not-allowed" : "cursor-pointer"} bg-black-base leading-base tracking-base rounded-large border-border-accent text-gray-accent border px-2.5 py-1.5 text-sm font-medium`}
        >
          Summarize My Text
        </button>
      </div>
    </form>
  );
}
