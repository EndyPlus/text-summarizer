import { useState } from "react";

import { useSummaryStorage } from "@/src/logic/store/summaryStore";

import useCharacterCounts from "./useCharacterCounts";

import handleCopyText from "@/src/helpers/utils/handleCopyText";

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
      setIsNotified(true);
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
