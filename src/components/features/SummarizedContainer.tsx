"use client";

import Image from "next/image";

import iconDocument from "@/src/assets/icons/icon-document.svg";

import { useSummary } from "@/src/store/summaryStore";

export default function SummarizedContainer() {
  const summarizedText = useSummary((store) => store.summarizedText);

  return (
    <div className="shadow-input rounded-large border-border-secondary bg-white-secondary mb-5 flex h-full border">
      {!summarizedText && (
        <div className="mx-auto my-auto flex flex-col items-center justify-center">
          <Image
            src={iconDocument}
            alt="document icon"
            width={60}
            height={60}
          />
          <p className="tracking-base text-black-accent leading-small mt-2.5 text-lg">
            Your summarized text will appear here
          </p>
        </div>
      )}
      {summarizedText && (
        <p className="p-5 leading-[150%] text-black">{summarizedText}</p>
      )}
    </div>
  );
}
