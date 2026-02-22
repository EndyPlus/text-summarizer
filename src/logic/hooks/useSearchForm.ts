import { useRef } from "react";
import { useSearchStorage } from "@/src/store/searchTermStore";

export default function useSearchForm() {
  const timeoutRef = useRef(null);

  const setCurrentSearchTerm = useSearchStorage(
    (state) => state.setCurrentSearchTerm,
  );

  // @ts-expect-error e any
  function handleSearchInput(e) {
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
