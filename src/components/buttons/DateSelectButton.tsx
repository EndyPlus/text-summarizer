"use client";

import { useState } from "react";

import { DATE_OPTIONS } from "@/src/utils/vars";
import { useDateFilterStorage } from "@/src/store/dateFilterStore";
import { IconArrowDown, IconCalendar } from "../ui/Icons";
import { useShallow } from "zustand/shallow";

export default function DateSelectButton() {
  const [contextVisible, setContextVisible] = useState(false);

  const { currentDate, setCurrentDate } = useDateFilterStorage(
    useShallow((state) => ({
      currentDate: state.currentDate,
      setCurrentDate: state.setCurrentDate,
    })),
  );

  return (
    <div className="relative">
      {contextVisible && (
        <ul className="shadow-filter absolute top-4/3 z-888 w-max rounded-lg border-[0.75] border-[#dbdbdb] bg-white">
          {Object.values(DATE_OPTIONS).map((btn) => {
            return (
              <li key={btn}>
                <button
                  onClick={() => {
                    setCurrentDate(btn);
                    setContextVisible(false);
                  }}
                  type="button"
                  className="hover:border-black-base base-transition hover:text-black-base active:text-black-accent w-full cursor-pointer border-b-[0.75] border-[#dbdbdb] px-3.75 py-2.25 text-start leading-[150%] text-[#131615]"
                >
                  {btn}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <button
        className="border-border hover:border-black-base base-transition rounded-large shadow-input flex cursor-pointer items-center gap-1.5 border px-2.5 py-1.5"
        type="button"
        onClick={() => setContextVisible((prevState) => !prevState)}
      >
        <IconCalendar size={16} />

        <p className="leading-base tracking-base text-black-base text-sm font-medium">
          {currentDate}
        </p>

        <IconArrowDown size={16} />
      </button>
    </div>
  );
}
