"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import iconHouse from "@/src/assets/icons/icon-house.svg";
import iconClock from "@/src/assets/icons/icon-clock.svg";

export default function AsideBarNavigation() {
  const pathname = usePathname();

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
        <li>
          <Link
            href="/history"
            className={`${pathname === "/history" ? "bg-[#ffffff14]" : ""} flex items-center rounded-2xl px-2 py-1.5`}
          >
            <Image src={iconClock} alt="clock icon" width={20} height={20} />
            <p className="leading-base tracking-base mx-2 text-sm font-medium">
              History
            </p>
            <span className="text-small border-border-accent flex h-4 items-center justify-center rounded-sm border bg-[#3368f04d] px-1 leading-[133%] font-medium">
              15
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
