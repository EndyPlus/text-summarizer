"use client";

import Image from "next/image";

import usePagination from "@/src/logic/hooks/usePagination";

import iconArrowLeft from "@/src/assets/icons/icon-arrow-left.svg";
import iconDoubleArrowLeft from "@/src/assets/icons/icon-double-arrow-left.svg";
import iconArrowRight from "@/src/assets/icons/icon-arrow-right.svg";
import iconDoubleArrowRight from "@/src/assets/icons/icon-double-arrow-right.svg";

export default function HistoryPaginationPanel() {
  const {
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
  } = usePagination();

  return (
    <div className="mt-4.5 flex items-center justify-between">
      <p className="leading-base tracking-base text-black-accent text-sm">
        {/* Show 1 to 5 out of 15 entries */}
        {infoString}
      </p>
      {isPaginationVisible && (
        <ul className="flex">
          {isDoubleArrowsVisible && (
            <li>
              <button onClick={handleToBegin} className="pagination-btn">
                <Image
                  src={iconDoubleArrowLeft}
                  alt="double arrow left icon"
                  width={20}
                  height={20}
                />
              </button>
            </li>
          )}
          <li>
            <button onClick={handleDecrement} className="pagination-btn">
              <Image
                src={iconArrowLeft}
                alt="arrow left icon"
                width={20}
                height={20}
              />
            </button>
          </li>

          {pagesIterate.map((page) => (
            <li key={page}>
              <button
                onClick={() => handleSelectPage(page)}
                className={`pagination-btn pagination-btn-number ${selectedBtn === page ? "bg-[#0a0f290a]" : ""}`}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button onClick={handleIncrement} className="pagination-btn">
              <Image
                src={iconArrowRight}
                alt="arrow right icon"
                width={20}
                height={20}
              />
            </button>
          </li>
          {isDoubleArrowsVisible && (
            <li>
              <button onClick={handleToEnd} className="pagination-btn">
                <Image
                  src={iconDoubleArrowRight}
                  alt="double arrow right icon"
                  width={20}
                  height={20}
                />
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
