"use client";

import Image from "next/image";

import iconCopy from "@/src/assets/icons/icon-copy.svg";

import useSummarizedText from "@/src/logic/hooks/useSummarizedText";

export default function SummaryPanel() {
  const { wordsCount, charactersCount, handleCopySummary } =
    useSummarizedText();

  return (
    <div className="flex items-center justify-between">
      <ul className="flex gap-2.75">
        <li className="leading-large text-gray-base flex gap-1.5 text-sm">
          <p>Words</p>
          <span className="font-medium">{wordsCount}</span>
        </li>
        <li className="leading-large text-gray-base flex gap-1.5 text-sm">
          <p>Characters</p>
          <span className="font-medium">{charactersCount}</span>
        </li>
      </ul>
      <button className="leading-base tracking-base rounded-large border-white-tertiary text-black-tertiary flex cursor-pointer gap-1.5 border bg-white px-2.5 py-1.5 text-sm font-medium">
        <Image
          className="h-4 w-4"
          src={iconCopy}
          alt="copy icon"
          width={16}
          height={16}
        />
        <p onClick={handleCopySummary}>Copy to Clipboard</p>
      </button>
    </div>
  );
}
