import Image from "next/image";

import iconCalendar from "@/src/assets/icons/icon-calendar.svg";
import iconArrowDown from "@/src/assets/icons/icon-arrow-down.svg";
import iconSearch from "@/src/assets/icons/icon-search.svg";

export default function HistorySearchForm() {
  return (
    <form className="mb-5 flex items-center justify-between">
      <div>
        <button
          className="border-border rounded-large shadow-input flex cursor-pointer gap-1.5 border px-2.5 py-1.5"
          type="button"
        >
          <Image
            className="h-4 w-4"
            src={iconCalendar}
            alt="calendar icon"
            width={16}
            height={16}
          />
          <p className="leading-base tracking-base text-black-base text-sm font-medium">
            Last 7 days
          </p>
          <Image
            className="h-4 w-4"
            src={iconArrowDown}
            alt="arrow down icon"
            width={16}
            height={16}
          />
        </button>
      </div>
      <div className="relative w-3/7">
        <Image
          className="absolute top-1/2 translate-x-1/2 -translate-y-1/2"
          src={iconSearch}
          alt="search icon"
          width={20}
          height={20}
        />
        <input
          className="border-border leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-large w-full border py-1.5 pr-2 pl-8.5 text-sm"
          type="text"
          placeholder="Search"
        />
      </div>
    </form>
  );
}
