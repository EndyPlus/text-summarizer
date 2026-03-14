"use client";

import useSummarizedText from "@/src/logic/hooks/features-hooks/useSummarizedText";
import DashboardNotify from "../modals/DashboardNotify/DashboardNotify";
import { IconCopy } from "../ui/Icons";

export default function SummaryPanel() {
  const {
    wordsCount,
    charactersCount,
    handleCopySummary,
    isNotified,
    handleCloseNotification,
  } = useSummarizedText();

  return (
    <>
      {isNotified && (
        <DashboardNotify
          onClose={handleCloseNotification}
          message="Copied to Clipboard!"
          isSuccess={true}
        />
      )}

      <div className="xs:mt-5 xs:flex-row mt-2.5 flex flex-col items-center justify-between gap-y-2">
        <ul className="xs:justify-stretch xs:w-auto flex w-full justify-around gap-2.75">
          <li className="leading-large text-gray-base flex gap-1.5 text-sm">
            <p>Words</p>
            <span className="font-medium">{wordsCount}</span>
          </li>
          <li className="leading-large text-gray-base flex gap-1.5 text-sm">
            <p>Characters</p>
            <span className="font-medium">{charactersCount}</span>
          </li>
        </ul>
        <button
          onClick={handleCopySummary}
          className={`${charactersCount > 0 ? "hover:bg-white-tertiary hover:text-black-base active:bg-white-tertiary active:text-black-base active:scale-95" : ""} base-transition leading-base tracking-base rounded-large border-white-tertiary text-black-tertiary flex cursor-pointer gap-1.5 border bg-white px-2.5 py-1.5 text-sm font-medium`}
        >
          <IconCopy aria-hidden="true" size={16} />
          <p>Copy to Clipboard</p>
        </button>
      </div>
    </>
  );
}
