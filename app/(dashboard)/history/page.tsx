"use client";
import DashboardHeading from "@/components/DashboardHeading";
import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="flex w-full flex-col pt-10.25 pr-10.5 pb-11.75 pl-14.5">
      <DashboardHeading
        heading="History"
        text="View previously summarized texts"
      />
      <form className="mb-5 flex items-center justify-between">
        <div>
          <button
            className="border-border rounded-large shadow-input flex cursor-pointer gap-1.5 border px-2.5 py-1.5"
            type="button"
          >
            <Image
              src="/icon-calendar.svg"
              alt="calendar icon"
              width={16}
              height={16}
            />
            <p className="leading-base tracking-base text-black-base text-sm font-medium">
              Last 7 days
            </p>
            <Image
              src="/icon-arrow-down.svg"
              alt="arrow down icon"
              width={16}
              height={16}
            />
          </button>
          {/* <ul className="hidden" role="listbox">
            <li role="option" aria-selected="false">
              Today
            </li>
            <li role="option" aria-selected="false">
              Yesterday
            </li>
            <li role="option" aria-selected="false">
              Last 7 days
            </li>
          </ul> */}
        </div>
        <div className="relative w-3/7">
          <Image
            className="absolute top-1/2 translate-x-1/2 -translate-y-1/2"
            src="/icon-search.svg"
            alt="search icon"
            width={20}
            height={20}
          />
          <input
            className="border-border leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-large w-full border py-1.5 pr-2 pl-8.5 text-sm"
            type="text"
            placeholder="Search"
          />
        </div>
      </form>
      {/* <ul>
        <li className="flex">
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              blanditiis obcaecati consequatur. Labore provident doloremque,
              natus delectus itaque placeat reprehenderit.
            </p>
            <ul className="flex">
              <li>some date</li>
              <li>WORDS COUNT</li>
              <li>CHARACTERS COUNT</li>
            </ul>
          </div>
          <div>...</div>
        </li>
      </ul>
      <div className="flex">
        <p>Show 1 to 5 out of 15 entries</p>
        <ul className="flex">
          <li>&lt;</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>&gt;</li>
        </ul>
      </div> */}
    </div>
  );
}
