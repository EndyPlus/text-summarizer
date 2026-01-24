import getCounts from "@/src/utils/getCounts";
import { useRef, useState } from "react";

export default function useInputField() {
  const textareaRef = useRef(null);

  const [charactersCount, setCharactersCount] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);

  function handleInputText() {
    const { charactersCount, wordsCount } = getCounts(
      textareaRef.current.value,
    );

    setCharactersCount(charactersCount);
    setWordsCount(wordsCount);
  }

  async function handlePasteText() {
    const clipText = await navigator.clipboard.readText();

    textareaRef.current.value = clipText;
    handleInputText();
  }

  function handleResetValues() {
    setCharactersCount(0);
    setWordsCount(0);
    textareaRef.current.value = "";
  }

  return {
    textareaRef,
    charactersCount,
    wordsCount,
    handleInputText,
    handlePasteText,
    handleResetValues,
  };
}
