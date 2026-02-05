"use client";

import Image from "next/image";
import Link from "next/link";

import PostsCountInfo from "../ui/PostsCountInfo";

import { usePathname } from "next/navigation";
import { useSummary } from "@/src/store/summaryStore";

import iconClock from "@/src/assets/icons/icon-clock.svg";
import iconHouse from "@/src/assets/icons/icon-house.svg";

export default function AsideBarNavigation() {
  const pathname = usePathname();

  const { resetTexts } = useSummary();

  return (
    <nav>
      <ul className="mx-2.5 flex flex-col gap-2 text-sm text-white">
        <li>
          <Link
            href="/home"
            className={`${pathname === "/home" ? "bg-[#ffffff14]" : ""} flex items-center rounded-2xl px-2 py-1.5`}
          >
            <Image src={iconHouse} alt="house icon" width={20} height={20} />
            <p className="leading-base tracking-base ml-2 text-sm font-medium">
              Home
            </p>
          </Link>
        </li>
        <li onClick={resetTexts}>
          <Link
            href="/history"
            className={`${pathname === "/history" ? "bg-[#ffffff14]" : ""} flex items-center rounded-2xl px-2 py-1.5`}
          >
            <Image src={iconClock} alt="clock icon" width={20} height={20} />
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
