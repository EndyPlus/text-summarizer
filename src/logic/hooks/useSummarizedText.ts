import { useSummary } from "@/src/store/summaryStore";
import handleCopyText from "@/src/utils/handleCopyText";
import useCharacterCounts from "./useCharacterCounts";

export default function useSummarizedText() {
  // @ts-expect-error type unknown
  const summarizedText = useSummary((store) => store.summarizedText);

  const { wordsCount, charactersCount } = useCharacterCounts(summarizedText);

  async function handleCopySummary() {
    const copyRes = await handleCopyText(summarizedText);

    if (copyRes.success) {
      console.log("COPIED!");
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
  };
}
