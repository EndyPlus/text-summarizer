"use client";

import { useRouter } from "next/navigation";
import { IconPlus } from "../ui/Icons";

export default function SummarizeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/home")}
      className="bg-white-base shadow-input rounded-large mx-0 mb-0.5 flex w-full cursor-pointer items-center justify-center self-center px-2.5 py-1.5 text-sm md:text-base"
    >
      <IconPlus size={16} />
      <p className="leading-base tracking-base text-black-secondary ml-1.5 text-sm font-medium">
        Summarize Text
      </p>
    </button>
  );
}
