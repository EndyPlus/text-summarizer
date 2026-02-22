"use client";

import DateSelectButton from "../buttons/DateSelectButton";

import useSearchForm from "@/src/logic/hooks/useSearchForm";
import { IconSearch } from "../ui/Icons";

export default function HistorySearchForm() {
  const handleSearchInput = useSearchForm();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mb-5 flex items-center justify-between"
    >
      <DateSelectButton />
      <div className="relative w-3/7">
        <IconSearch className="absolute top-1/2 translate-x-1/2 -translate-y-1/2" />
        <input
          className="border-border leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-large w-full border py-1.5 pr-2 pl-8.5 text-sm"
          type="text"
          placeholder="Search"
          onInput={handleSearchInput}
        />
      </div>
    </form>
  );
}
