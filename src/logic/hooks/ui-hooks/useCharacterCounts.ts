import getCounts from "@/src/helpers/utils/getCounts";
import { useEffect, useState } from "react";

export default function useCharacterCounts(text: string) {
  const [counts, setCounts] = useState({ wordsCount: 0, charactersCount: 0 });

  useEffect(() => {
    const fetchedCount = getCounts(text);

    function initCounts() {
      setCounts(fetchedCount);
    }

    initCounts();
  }, [text]);

  return {
    wordsCount: counts.wordsCount,
    charactersCount: counts.charactersCount,
  };
}
