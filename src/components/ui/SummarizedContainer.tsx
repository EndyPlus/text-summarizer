"use client";

import { useSummaryStorage } from "@/src/store/summaryStore";
import SummarizedTextSkeleton from "../skeletons/SummarizedTextSkeleton";
import { IconDocument } from "./Icons";
import { useShallow } from "zustand/shallow";

export default function SummarizedContainer() {
  const { summarizedText, isSummaryLoading } = useSummaryStorage(
    useShallow((state) => ({
      summarizedText: state.summarizedText,
      isSummaryLoading: state.isSummaryLoading,
    })),
  );

  return (
    <div className="shadow-input rounded-large border-border-secondary bg-white-secondary xs:p-5 flex h-full overflow-y-auto border p-2.5">
      {!summarizedText && !isSummaryLoading && (
        <div className="mx-auto my-auto flex flex-col items-center justify-center">
          <IconDocument size={60} />
          <p className="tracking-base text-black-accent leading-small xs:text-start xs:text-lg mt-2.5 text-center text-base">
            Your summarized text will appear here
          </p>
        </div>
      )}
      {isSummaryLoading && <SummarizedTextSkeleton />}
      {!isSummaryLoading && summarizedText && (
        <p className="leading-[150%] whitespace-pre-wrap text-black">
          {summarizedText}
        </p>
      )}
    </div>
  );
}
