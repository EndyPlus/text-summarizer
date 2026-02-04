"use client";

import { useState } from "react";

import Image from "next/image";

import iconCalendar from "@/src/assets/icons/icon-calendar.svg";
import iconArrowDown from "@/src/assets/icons/icon-arrow-down.svg";
import { DATE_OPTIONS } from "@/src/utils/vars";
import { useDateFilter } from "@/src/store/dateFilterStore";

export default function DateSelectButton() {
  const [contextVisible, setContextVisible] = useState(false);

  // @ts-expect-error type unknown
  const { currentDate, setCurrentDate } = useDateFilter();

  return (
    <div className="relative">
      <button
        className="border-border rounded-large shadow-input flex cursor-pointer gap-1.5 border px-2.5 py-1.5"
        type="button"
        onClick={() => setContextVisible((prevState) => !prevState)}
      >
        <Image
          className="h-4 w-4"
          src={iconCalendar}
          alt="calendar icon"
          width={16}
          height={16}
        />
        <p className="leading-base tracking-base text-black-base text-sm font-medium">
          {currentDate}
        </p>
        <Image
          className="h-4 w-4"
          src={iconArrowDown}
          alt="arrow down icon"
          width={16}
          height={16}
        />
      </button>

      {contextVisible && (
        <ul className={`absolute bg-white`}>
          {Object.values(DATE_OPTIONS).map((btn) => {
            return (
              <li key={btn}>
                <button
                  onClick={() => {
                    setCurrentDate(btn);
                    setContextVisible(false);
                  }}
                  type="button"
                  className="w-full cursor-pointer text-start"
                >
                  {btn}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
