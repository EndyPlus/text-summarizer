"use client";

import { useRouter } from "next/navigation";

import { IconPlus } from "../ui/Icons";

export default function SummarizeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/home")}
      className="bg-white-base tabulating-element shadow-input base-transition hover:bg-white-secondary active:bg-white-accent rounded-large mx-0 mb-0.5 flex w-full cursor-pointer items-center justify-center self-center px-2.5 py-1.5 text-sm hover:scale-105 active:scale-95 md:text-base"
    >
      <IconPlus aria-hidden="true" size={16} />
      <p className="leading-base tracking-base text-black-secondary ml-1.5 text-sm font-medium">
        Summarize Text
      </p>
    </button>
  );
}
