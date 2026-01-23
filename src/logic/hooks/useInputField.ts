import { useRef, useState } from "react";

export default function useInputField() {
  const textareaRef = useRef(null);

  const [charactersCount, setCharactersCount] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);

  function handleInputText() {
    const value = textareaRef.current.value.trim();

    setCharactersCount(value.length);
    setWordsCount(value.split(" ").filter((v: string) => v.length).length);
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
