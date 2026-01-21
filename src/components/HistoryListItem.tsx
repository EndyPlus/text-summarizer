import Image from "next/image";

import iconCalendar from "@/src/assets/icons/icon-calendar.svg";
import iconText from "@/src/assets/icons/icon-text.svg";
import iconLetter from "@/src/assets/icons/icon-letter.svg";
import iconDots from "@/src/assets/icons/icon-dots.svg";

export default function HistoryListItem() {
  return (
    <li className="border-border flex gap-4 rounded-2xl border bg-white py-5 pr-5.75 pl-5">
      <div>
        <p className="text-black-base leading-base tracking-base line-clamp-2 text-sm">
          {`Naruto Uzumaki became the greatest shinobi of his time through
          unparalleled power, relentless determination, and his ability to unite
          and inspire others. Mastering Kurama's chakra and the Sage of Six
          Paths' power, he achieved near-godlike abilities, defeating formidable
          foes like Kaguya Ōtsutsuki. His leadership united the shinobi nations,
          ending generations of conflict. Despite personal struggles, Naruto
          turned his pain into strength, becoming a beacon of hope and proving
          that hard work and perseverance could overcome any obstacle.`}
        </p>
        <ul className="mt-4 flex gap-2">
          <li className="bg-white-tertiary flex gap-1 rounded-lg px-1.5 py-1">
            <Image
              className="h-4 w-4"
              src={iconCalendar}
              alt="calendar icon"
              width={16}
              height={16}
            />
            <p className="leading-base tracking-base text-black-accent text-sm font-medium">
              December 10, 2024 • 3:20 PM
            </p>
          </li>
          <li className="bg-white-tertiary flex gap-1 rounded-lg px-1.5 py-1">
            <Image
              className="h-4 w-4"
              src={iconText}
              alt="text icon"
              width={16}
              height={16}
            />
            <p className="leading-base tracking-base text-black-accent text-sm font-medium">
              77 Words
            </p>
          </li>
          <li className="bg-white-tertiary flex gap-1 rounded-lg px-1.5 py-1">
            <Image
              className="h-4 w-4"
              src={iconLetter}
              alt="letter icon"
              width={16}
              height={16}
            />
            <p className="leading-base tracking-base text-black-accent text-sm font-medium">
              538 Characters
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
