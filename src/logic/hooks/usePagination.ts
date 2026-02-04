import { useEffect, useMemo, useState } from "react";

import { ITEMS_PER_PAGE, PAGINATION_ITEMS_COUNT } from "@/src/utils/vars";

import { usePaginationStorage } from "@/src/store/paginationStore";

import usePostsList from "./usePostsList";

export default function usePagination() {
  const [selectedBtn, setSelectedBtn] = useState(1);

  // @ts-expect-error unknown type
  const setCurrentPage = usePaginationStorage((store) => store.setCurrentPage);

  const postsData = usePostsList();
  // @ts-expect-error never type
  const itemsCount = postsData?.count;

  useEffect(() => {
    setCurrentPage(selectedBtn);
  }, [selectedBtn, setCurrentPage]);

  useEffect(() => {
    function handleResetPage() {
      setSelectedBtn(1);
    }

    handleResetPage();
  }, [itemsCount]);

  const itemsPerPage = ITEMS_PER_PAGE;
  const paginationBtnsCount = PAGINATION_ITEMS_COUNT;
  const pagesCount = Math.ceil(itemsCount / itemsPerPage);

  const pagesIterate = useMemo(() => {
    let startPage = Math.max(
      1,
      selectedBtn - Math.floor(paginationBtnsCount / 2),
    );
    let endPage = startPage + paginationBtnsCount - 1;

    if (endPage > pagesCount) {
      endPage = pagesCount;

      startPage = Math.max(1, endPage - paginationBtnsCount + 1);
    }

    const newPages = [];
    for (let i = startPage; i <= endPage; i++) {
      //   console.log("looped");
      newPages.push(i);
    }

    return newPages;
  }, [selectedBtn, pagesCount, paginationBtnsCount]);

  const itemFrom = (selectedBtn - 1) * itemsPerPage + 1;
  const itemTo = Math.min(selectedBtn * itemsPerPage, itemsCount);
  const infoString = `Show ${itemFrom} to ${itemTo} out of ${itemsCount} entries`;

  const isPaginationVisible = pagesCount > 1;

  const isDoubleArrowsVisible = pagesCount > paginationBtnsCount;

  const handleSelectPage = (pageNum: number) => setSelectedBtn(pageNum);

  const handleDecrement = () =>
    setSelectedBtn((prevBtn: number) =>
      prevBtn - 1 <= 0 ? prevBtn : prevBtn - 1,
    );

  const handleIncrement = () =>
    setSelectedBtn((prevBtn: number) =>
      prevBtn + 1 > pagesCount ? prevBtn : prevBtn + 1,
    );

  const handleToBegin = () => setSelectedBtn(1);

  const handleToEnd = () => setSelectedBtn(pagesCount);

  return {
    selectedBtn,
    handleSelectPage,
    pagesIterate,
    infoString,
    isPaginationVisible,
    isDoubleArrowsVisible,
    handleDecrement,
    handleIncrement,
    handleToBegin,
    handleToEnd,
  };
}
