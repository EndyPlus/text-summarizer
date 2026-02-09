"use client";

import Image from "next/image";

import iconPlus from "@/src/assets/icons/icon-plus.svg";
import { useRouter } from "next/navigation";

export default function SummarizeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/home")}
      className="bg-white-base shadow-input rounded-large flex w-full cursor-pointer items-center justify-center px-2.5 py-1.5"
    >
      <Image src={iconPlus} alt="plus icon" width={16} height={16} />
      <p className="leading-base tracking-base text-black-secondary ml-1.5 text-sm font-medium">
        Summarize Text
      </p>
    </button>
  );
}
