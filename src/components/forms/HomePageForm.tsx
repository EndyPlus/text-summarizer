"use client";

import HomeCtaButton from "@/src/components/buttons/HomeCtaButton";

import DashboardNotify from "../modals/DashboardNotify/DashboardNotify";
import {
  MAXIMUM_CHARACTERS_LIMIT,
  MINIMUM_WORDS_LIMIT,
} from "@/src/utils/vars";
import useHomePage from "@/src/logic/hooks/useHomePage";
import SummarizeTextButton from "../buttons/SummarizeTextButton";
import { IconReset } from "../ui/Icons";

export default function HomePageForm() {
  const {
    isSummaryLoading,
    isActiveForm,
    setIsActiveForm,
    wordsCount,
    charactersCount,
    originalText,
    inputRef,
    handleInputText,
    handlePasteText,
    handleHomePageFormSubmit,
    submitError,
    handleResetError,
    handleUnfocus,
    handleResetText,
    isTouchScreen,
  } = useHomePage();

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
          {!isActiveForm && !isTouchScreen && (
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
          {(isActiveForm || isTouchScreen) && (
            <textarea
              ref={inputRef}
              onInput={handleInputText}
              onBlur={handleUnfocus}
              defaultValue={originalText}
              name="formTextarea"
              className="xs:px-5 xs:py-2.5 inline-block h-full w-full resize-none px-2.5 py-2 text-sm leading-[150%] text-[#131615] outline-none"
            ></textarea>
          )}
        </div>

        <div className="mx-5 flex flex-col justify-between gap-y-2 sm:flex-row sm:items-center">
          <ul className="xs:justify-stretch flex justify-around gap-2.75">
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
          </ul>

          <div className="flex justify-around gap-x-2 sm:justify-stretch">
            {charactersCount > 0 && !isSummaryLoading && (
              <button
                type="button"
                onClick={handleResetText}
                className="rounded-large base-transition hover:border-white-accent shadow-input xs:px-2.5 xs:py-1.5 flex cursor-pointer items-center gap-x-2 border border-white px-2 py-1 active:scale-95"
              >
                <IconReset size={16} />
                <p className="leading-base tracking-base text-sm font-medium text-white">
                  Reset
                </p>
              </button>
            )}
            <SummarizeTextButton
              charactersCount={charactersCount}
              isSummaryLoading={isSummaryLoading}
            />
          </div>
        </div>
      </form>
    </>
  );
}
