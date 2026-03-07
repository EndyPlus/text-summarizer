"use client";

import usePagination from "@/src/logic/hooks/usePagination";

import PaginationPanelSkeleton from "../skeletons/PaginationPanelSkeleton";
import {
  IconArrowLeft,
  IconArrowRight,
  IconDoubleArrowLeft,
  IconDoubleArrowRight,
} from "../ui/Icons";

export default function HistoryPaginationPanel() {
  const {
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
  } = usePagination();

  return (
    <div className="mb-4.5 flex flex-col items-center justify-between gap-y-2.5 sm:mt-4.5 sm:flex-row">
      {isLoading && <PaginationPanelSkeleton />}

      {!isLoading && (
        <>
          {pagesIterate.length === 0 && <div className="h-10"></div>}

          {pagesIterate.length > 0 && (
            <>
              <p className="leading-base tracking-base text-black-accent text-sm">
                {/* Show 1 to 5 out of 15 entries */}
                {infoString}
              </p>

              {isPaginationVisible && (
                <ul className="flex">
                  {isDoubleArrowsVisible && (
                    <li>
                      <button
                        onClick={handleToBegin}
                        className="pagination-btn"
                      >
                        <IconDoubleArrowLeft />
                      </button>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={handleDecrement}
                      className="pagination-btn"
                    >
                      <IconArrowLeft />
                    </button>
                  </li>

                  {pagesIterate.map((page) => (
                    <li key={page}>
                      <button
                        onClick={() => handleSelectPage(page)}
                        className={`pagination-btn pagination-btn-number ${currentPage === page ? "bg-[#0a0f290a]" : ""}`}
                      >
                        {page}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={handleIncrement}
                      className="pagination-btn"
                    >
                      <IconArrowRight />
                    </button>
                  </li>
                  {isDoubleArrowsVisible && (
                    <li>
                      <button onClick={handleToEnd} className="pagination-btn">
                        <IconDoubleArrowRight />
                      </button>
                    </li>
                  )}
                </ul>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
