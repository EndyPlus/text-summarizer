import { useMemo } from "react";

import { ITEMS_PER_PAGE, PAGINATION_ITEMS_COUNT } from "@/src/utils/vars";

import { usePaginationStorage } from "@/src/store/paginationStore";

import usePostsList from "./usePostsList";

export default function usePagination() {
  const { currentPage, setCurrentPage } = usePaginationStorage();

  const { isLoading, postsData } = usePostsList();

  const itemsCount: number = postsData?.count ?? 0;

  const itemsPerPage = ITEMS_PER_PAGE;
  const paginationBtnsCount = PAGINATION_ITEMS_COUNT;
  const pagesCount = Math.ceil(itemsCount / itemsPerPage);

  const pagesIterate = useMemo(() => {
    let startPage = Math.max(
      1,
      currentPage - Math.floor(paginationBtnsCount / 2),
    );
    let endPage = startPage + paginationBtnsCount - 1;

    if (endPage > pagesCount) {
      endPage = pagesCount;

      startPage = Math.max(1, endPage - paginationBtnsCount + 1);
    }

    const newPages = [];
    for (let i = startPage; i <= endPage; i++) {
      newPages.push(i);
    }

    return newPages;
  }, [currentPage, pagesCount, paginationBtnsCount]);

  const isPaginationVisible = pagesCount > 1;

  const itemFrom = (currentPage - 1) * itemsPerPage + 1;
  const itemTo = Math.min(currentPage * itemsPerPage, itemsCount);
  const infoString =
    itemsCount > 0
      ? `Show ${itemFrom} to ${itemTo} out of ${itemsCount} entries`
      : "";

  const isDoubleArrowsVisible = pagesCount > paginationBtnsCount;

  const handleSelectPage = (pageNum: number) => setCurrentPage(pageNum);
  const handleDecrement = () => {
    const expression = currentPage - 1 <= 0 ? currentPage : currentPage - 1;
    setCurrentPage(expression);
  };
  const handleIncrement = () => {
    const expression =
      currentPage + 1 > pagesCount ? currentPage : currentPage + 1;
    setCurrentPage(expression);
  };
  const handleToBegin = () => setCurrentPage(1);
  const handleToEnd = () => setCurrentPage(pagesCount);

  return {
    currentPage,
    isLoading,
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
