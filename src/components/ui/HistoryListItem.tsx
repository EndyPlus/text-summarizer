import Image from "next/image";

import iconCalendar from "@/src/assets/icons/icon-calendar.svg";
import iconText from "@/src/assets/icons/icon-text.svg";
import iconLetter from "@/src/assets/icons/icon-letter.svg";
import iconDots from "@/src/assets/icons/icon-dots.svg";

import { HistoryItem } from "@/src/types/historyItemType";

type Props = {
  itemData: HistoryItem;
};

export default function HistoryListItem({ itemData }: Props) {
  const { summaryDate, wordsCount, charactersCount, summaryText } = itemData;

  return (
    <li className="border-border flex gap-4 rounded-2xl border bg-white py-5 pr-5.75 pl-5">
      <div>
        <p className="text-black-base leading-base tracking-base line-clamp-2 text-sm">
          {summaryText}
        </p>
        <ul className="mt-4 flex gap-2">
          <li className="bg-white-tertiary flex items-center gap-1 rounded-lg px-1.5 py-1">
            <Image
              className="h-4 w-4"
              src={iconCalendar}
              alt="calendar icon"
              width={16}
              height={16}
            />
            <p className="leading-base tracking-base text-black-accent text-sm font-medium">
              {summaryDate}
            </p>
          </li>
          <li className="bg-white-tertiary flex items-center gap-1 rounded-lg px-1.5 py-1">
            <Image
              className="h-4 w-4"
              src={iconText}
              alt="text icon"
              width={16}
              height={16}
            />
            <p className="leading-base tracking-base text-black-accent text-sm font-medium">
              {wordsCount} Words
            </p>
          </li>
          <li className="bg-white-tertiary flex items-center gap-1 rounded-lg px-1.5 py-1">
            <Image
              className="h-4 w-4"
              src={iconLetter}
              alt="letter icon"
              width={16}
              height={16}
            />
            <p className="leading-base tracking-base text-black-accent text-sm font-medium">
              {charactersCount} Characters
            </p>
          </li>
        </ul>
      </div>
      <button className="border-border radius-large shadow-input rounded-large flex h-8 w-8 cursor-pointer items-center justify-center border bg-white p-2">
        <Image
          className="shrink-0"
          src={iconDots}
          alt="three dots icon"
          width={16}
          height={16}
        />
      </button>
    </li>
  );
}
