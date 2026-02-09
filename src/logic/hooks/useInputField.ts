import { useRef, useState } from "react";
import useCharacterCounts from "./useCharacterCounts";

export default function useInputField() {
  const inputRef = useRef("");

  const [text, setText] = useState("");

  const { wordsCount, charactersCount } = useCharacterCounts(text);

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

  return {
    inputRef,
    wordsCount,
    charactersCount,
    handleInputText,
    handlePasteText,
    handleResetValues,
  };
}
