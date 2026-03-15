import { ChangeEvent, useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

import { useSummaryStorage } from "@/src/logic/store/summaryStore";

import useInputField from "@/src/logic/hooks/features-hooks/useInputField";
import useSummaryForm from "@/src/logic/hooks/features-hooks/useSummaryForm";

export default function useHomePage() {
  const {
    inputRef,
    charactersCount,
    wordsCount,
    handleInputText,
    handlePasteText,
    handleResetValues,
    handleFocus,
  } = useInputField();

  const { isSummaryLoading, setOriginalText, originalText } = useSummaryStorage(
    useShallow((state) => ({
      isSummaryLoading: state.isSummaryLoading,
      setOriginalText: state.setOriginalText,
      originalText: state.originalText,
    })),
  );

  const [isActiveForm, setIsActiveForm] = useState(originalText.length > 0);

  const [isTouchScreen, setIsTouchScreen] = useState(true);

  useEffect(() => {
    if (!isActiveForm || originalText.length > 0) return;

    handleFocus();
  }, [isActiveForm, handleFocus, originalText]);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    function initDesktop() {
      setIsTouchScreen(false);
    }

    if (!isTouch) {
      initDesktop();
    }
  }, []);

  const { handleHomePageFormSubmit, submitError, handleResetError } =
    useSummaryForm({ wordsCount, charactersCount });

  function handleUnfocus(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.trim().length !== 0) return;

    setIsActiveForm(false);
    handleResetValues();
    setOriginalText("");
  }

  function handleResetText() {
    if (!inputRef.current) return;

    handleResetValues();
    inputRef.current.value = "";
    setOriginalText("");
    setIsActiveForm(false);
  }

  return {
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
  };
}
