import { useRef, useState } from "react";
import useCharacterCounts from "./useCharacterCounts";

export default function useInputField() {
  const inputRef = useRef("");

  const [text, setText] = useState("");

  const { wordsCount, charactersCount } = useCharacterCounts(text);

  // const { toEditPost } = usePostInteraction();

  // useEffect(() => {
  //   if (!toEditPost) return;

  //   inputRef.current = toEditPost.originalText;
  //   setText(toEditPost.originalText);
  // }, [toEditPost]);

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
