import Image from "next/image";

import ListItemOptionsButton from "../buttons/ListItemOptionsButton";

import iconCalendar from "@/src/assets/icons/icon-calendar.svg";
import iconText from "@/src/assets/icons/icon-text.svg";
import iconLetter from "@/src/assets/icons/icon-letter.svg";

import { HistoryItem } from "@/src/types/historyItemType";

import getCounts from "@/src/utils/getCounts";
import getDateString from "@/src/utils/getDateString";

type Props = {
  itemData: HistoryItem;
};

export default function HistoryListItem({ itemData }: Props) {
  const { summarizedText, createdAt } = itemData;
  const { charactersCount, wordsCount } = getCounts(summarizedText);
  const date = getDateString(createdAt);

  return (
    <li className="border-border flex gap-4 rounded-2xl border bg-white py-5 pr-5.75 pl-5">
      <div>
        <p className="text-black-base leading-base tracking-base line-clamp-2 text-sm">
          {summarizedText}
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
              {date}
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

      <ListItemOptionsButton />
    </li>
  );
}
