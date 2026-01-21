"use client";
import DashboardHeading from "@/src/components/DashboardHeading";
import HistoryListItem from "@/src/components/HistoryListItem";
import Image from "next/image";

import iconCalendar from "@/src/assets/icons/icon-calendar.svg";
import iconArrowDown from "@/src/assets/icons/icon-arrow-down.svg";
import iconSearch from "@/src/assets/icons/icon-search.svg";
import iconArrowLeft from "@/src/assets/icons/icon-arrow-left.svg";
import iconArrowRight from "@/src/assets/icons/icon-arrow-right.svg";

export default function HistoryPage() {
  return (
    <div className="flex w-full flex-col pt-10.25 pr-10.5 pb-11.75 pl-14.5">
      <DashboardHeading
        heading="History"
        text="View previously summarized texts"
      />
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
          {/* <ul className="hidden" role="listbox">
            <li role="option" aria-selected="false">
              Today
            </li>
            <li role="option" aria-selected="false">
              Yesterday
            </li>
            <li role="option" aria-selected="false">
              Last 7 days
            </li>
          </ul> */}
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

      <ul className="flex flex-col gap-2.5">
        <HistoryListItem />
        <HistoryListItem />
        <HistoryListItem />
        {/* <HistoryListItem />
        <HistoryListItem /> */}
      </ul>

      <div className="mt-4.5 flex items-center justify-between">
        <p className="leading-base tracking-base text-black-accent text-sm">
          Show 1 to 5 out of 15 entries
        </p>
        <ul className="flex">
          <li>
            <button className="flex size-10 cursor-pointer items-center justify-center rounded-xl p-2.5">
              <Image
                src={iconArrowLeft}
                alt="arrow left icon"
                width={20}
                height={20}
              />
            </button>
          </li>
          <li>
            <button className="tracking-base text-black-accent flex size-10 cursor-pointer items-center justify-center rounded-xl bg-[#0a0f290a] p-2.5 leading-[150%] font-medium">
              1
            </button>
          </li>
          <li>
            <button className="tracking-base text-black-accent flex size-10 cursor-pointer items-center justify-center rounded-xl p-2.5 leading-[150%] font-medium">
              2
            </button>
          </li>
          <li>
            <button className="tracking-base text-black-accent flex size-10 cursor-pointer items-center justify-center rounded-xl p-2.5 leading-[150%] font-medium">
              3
            </button>
          </li>
          <li>
            <button className="flex size-10 cursor-pointer items-center justify-center rounded-xl p-2.5">
              <Image
                src={iconArrowRight}
                alt="arrow right icon"
                width={20}
                height={20}
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
