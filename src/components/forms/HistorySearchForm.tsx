"use client";

import DateSelectButton from "../buttons/DateSelectButton";

import useSearchForm from "@/src/logic/hooks/useSearchForm";
import { IconSearch } from "../ui/Icons";

export default function HistorySearchForm() {
  const handleSearchInput = useSearchForm();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="xs:flex-row xs:items-center mb-5 flex flex-col items-start justify-between gap-y-2.5"
    >
      <DateSelectButton />
      <div className="xs:w-3/7 relative w-2/3">
        <IconSearch className="absolute top-1/2 translate-x-1/2 -translate-y-1/2" />
        <input
          className="border-border hover:border-black-base base-transition leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-large w-full border py-1.5 pr-2 pl-8.5 text-base"
          type="text"
          placeholder="Search"
          onInput={handleSearchInput}
          aria-label="Search items"
        />
      </div>
    </form>
  );
}
