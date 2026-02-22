import { useEffect, useRef, useState } from "react";
import useCharacterCounts from "./useCharacterCounts";
import { usePostInteractionStorage } from "@/src/store/interactedPostStore";

export default function useInputField() {
  const inputRef = useRef("");

  const [text, setText] = useState("");

  const { wordsCount, charactersCount } = useCharacterCounts(text);

  const { toEditPost } = usePostInteractionStorage();

  useEffect(() => {
    function initEditText() {
      if (toEditPost) {
        setText(toEditPost.originalText);
      }
    }

    initEditText();
  }, [toEditPost]);

  // @ts-expect-error e any type
  function handleInputText(e) {
    setText(e.target.value);
  }

  async function handlePasteText() {
    const clipText = await navigator.clipboard.readText();

    setText(clipText);

    // @ts-expect-error error type
    inputRef.current.value = clipText;
  }

  function handleResetValues() {
    setText("");
  }

  function handleFocus() {
    inputRef.current.focus();
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
