import { ChangeEvent, useRef } from "react";
import { useSearchStorage } from "@/src/store/searchTermStore";

export default function useSearchForm() {
  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const setCurrentSearchTerm = useSearchStorage(
    (state) => state.setCurrentSearchTerm,
  );

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      // console.log(value);

      setCurrentSearchTerm(value);

      timeoutRef.current = null;
    }, 1000);
  }

  return handleSearchInput;
}
