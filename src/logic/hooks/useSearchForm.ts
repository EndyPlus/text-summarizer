import { useSearch } from "@/src/store/searchTermStore";
import { useRef } from "react";

export default function useSearchForm() {
  const timeoutRef = useRef(null);

  // @ts-expect-error unknown type
  const setCurrentSearchTerm = useSearch((state) => state.setCurrentSearchTerm);

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
