"use client";

import Link from "next/link";

import PostsCountInfo from "../ui/PostsCountInfo";

import { usePathname } from "next/navigation";

import { useSummaryStorage } from "@/src/store/summaryStore";
import { usePostInteractionStorage } from "@/src/store/interactedPostStore";

import { IconClock, IconHouse } from "../ui/Icons";

export default function AsideBarNavigation() {
  const pathname = usePathname();

  const resetTexts = useSummaryStorage((state) => state.resetTexts);

  const resetEditPost = usePostInteractionStorage(
    (state) => state.resetEditPost,
  );

  function handleResetStates() {
    resetTexts();
    resetEditPost();
  }

  return (
    <nav>
      <ul className="mx-2.5 flex flex-col gap-2 text-sm text-white">
        <li>
          <Link
            href="/home"
            className={`${pathname === "/home" ? "bg-[#ffffff14]" : ""} flex items-center rounded-2xl px-2 py-1.5`}
          >
            <IconHouse />
            <p className="leading-base tracking-base ml-2 text-sm font-medium">
              Home
            </p>
          </Link>
        </li>
        <li onClick={handleResetStates}>
          <Link
            href="/history"
            className={`${pathname === "/history" ? "bg-[#ffffff14]" : ""} flex items-center rounded-2xl px-2 py-1.5`}
          >
            <IconClock />

            <p className="leading-base tracking-base mx-2 text-sm font-medium">
              History
            </p>
            <PostsCountInfo />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
