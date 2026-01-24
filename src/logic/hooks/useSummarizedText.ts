import getCounts from "@/src/utils/getCounts";
import { useEffect, useState } from "react";

export default function useSummarizedText(summarizedText) {
  const [wordsCount, setWordsCount] = useState(0);
  const [charactersCount, setCharactersCount] = useState(0);

  useEffect(() => {
    const { charactersCount, wordsCount } = getCounts(summarizedText);

    function initCounts() {
      setWordsCount(wordsCount);
      setCharactersCount(charactersCount);
    }

    initCounts();
  }, [summarizedText]);

  async function handleCopyText() {
    console.log("copy");
  }

  return { wordsCount, charactersCount, handleCopyText };
}
