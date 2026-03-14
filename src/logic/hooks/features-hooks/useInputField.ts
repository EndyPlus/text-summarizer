import { ChangeEvent, useEffect, useRef, useState } from "react";
import useCharacterCounts from "../ui-hooks/useCharacterCounts";
import { usePostInteractionStorage } from "@/src/logic/store/interactedPostStore";

export default function useInputField() {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [text, setText] = useState("");

  const { wordsCount, charactersCount } = useCharacterCounts(text);

  const toEditPost = usePostInteractionStorage((state) => state.toEditPost);

  useEffect(() => {
    function initEditText() {
      if (toEditPost) {
        setText(toEditPost.originalText);
      }
    }

    initEditText();
  }, [toEditPost]);

  function handleInputText(e: ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  async function handlePasteText() {
    const clipText = await navigator.clipboard.readText();

    setText(clipText);

    if (inputRef.current) {
      inputRef.current.value = clipText;
    }
  }

  function handleResetValues() {
    setText("");
  }

  function handleFocus() {
    inputRef.current?.focus();
  }

  return {
    inputRef,
    wordsCount,
    charactersCount,
    handleInputText,
    handlePasteText,
    handleResetValues,
    handleFocus,
  };
}
