import { usePathname } from "next/navigation";

import { useSummaryStorage } from "@/src/store/summaryStore";
import { usePostInteractionStorage } from "@/src/store/interactedPostStore";

export default function useAsideBarNavigation() {
  const pathname = usePathname();

  const resetTexts = useSummaryStorage((state) => state.resetTexts);

  const resetEditPost = usePostInteractionStorage(
    (state) => state.resetEditPost,
  );

  function handleResetStates() {
    resetTexts();
    resetEditPost();
  }

  return { pathname, handleResetStates };
}
