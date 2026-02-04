"use client";

import Image from "next/image";

import iconSearch from "@/src/assets/icons/icon-search.svg";
import DateSelectButton from "../buttons/DateSelectButton";

import { useRef } from "react";
import { useSearch } from "@/src/store/searchTermStore";

export default function HistorySearchForm() {
  const timeoutRef = useRef(null);

  // @ts-expect-error unknown type
  const setCurrentSearchTerm = useSearch((state) => state.setCurrentSearchTerm);

  // @ts-expect-error e any
  function handleInput(e) {
    const value = e.target.value;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      // console.log(value);

      setCurrentSearchTerm(value);

      timeoutRef.current = null;
    }, 1000);
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mb-5 flex items-center justify-between"
    >
      <DateSelectButton />
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
          onInput={handleInput}
        />
      </div>
    </form>
  );
}
