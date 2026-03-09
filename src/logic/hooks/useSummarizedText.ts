import { useSummaryStorage } from "@/src/store/summaryStore";
import handleCopyText from "@/src/utils/handleCopyText";
import useCharacterCounts from "./useCharacterCounts";
import { useState } from "react";

export default function useSummarizedText() {
  const summarizedText = useSummaryStorage((store) => store.summarizedText);

  const { wordsCount, charactersCount } = useCharacterCounts(summarizedText);
  const [isNotified, setIsNotified] = useState(false);

  function handleCloseNotification() {
    setIsNotified(false);
  }

  async function handleCopySummary() {
    const copyRes = await handleCopyText(summarizedText);

    if (wordsCount === 0) return;

    if (copyRes.success) {
      console.log("COPIED!");
      setIsNotified(true);
    }
    if (copyRes.error) {
      console.log("ERROR");
    }
  }

  return {
    summarizedText,
    wordsCount,
    charactersCount,
    handleCopySummary,
    isNotified,
    handleCloseNotification,
  };
}
