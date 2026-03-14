import ListItemOptionsButton from "../buttons/ListItemOptionsButton";

import getCounts from "@/src/helpers/utils/getCounts";
import getDateString from "@/src/helpers/utils/getDateString";
import { IconCalendar, IconLetter, IconText } from "./Icons";
import { ItemDataProps } from "@/src/helpers/types/types";

export default function HistoryListItem({ itemData }: ItemDataProps) {
  const { summarizedText, createdAt } = itemData;
  const { charactersCount, wordsCount } = getCounts(summarizedText);
  const date = getDateString(createdAt);

  return (
    <li className="border-border flex justify-between gap-4 rounded-2xl border bg-white py-5 pr-5.75 pl-5">
      <div>
        <p className="text-black-base leading-base tracking-base line-clamp-4 text-sm sm:line-clamp-2">
          {summarizedText}
        </p>
        <ul className="mt-4 flex flex-col items-start gap-2 sm:flex-row">
          <li className="bg-white-tertiary flex items-center gap-1 rounded-lg px-1.5 py-1">
            <IconCalendar size={16} />
            <p className="leading-base tracking-base text-black-accent text-sm font-medium">
              {date}
            </p>
          </li>
          <li className="bg-white-tertiary flex items-center gap-1 rounded-lg px-1.5 py-1">
            <IconText size={16} />
            <p className="leading-base tracking-base text-black-accent text-sm font-medium">
              {wordsCount} Words
            </p>
          </li>
          <li className="bg-white-tertiary flex items-center gap-1 rounded-lg px-1.5 py-1">
            <IconLetter size={16} />
            <p className="leading-base tracking-base text-black-accent text-sm font-medium">
              {charactersCount} Characters
            </p>
          </li>
        </ul>
      </div>

      <ListItemOptionsButton itemData={itemData} />
    </li>
  );
}
