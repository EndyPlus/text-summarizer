"use client";

import Link from "next/link";

import PostsCountInfo from "../ui/PostsCountInfo";

import { IconClock, IconHouse } from "../ui/Icons";
import useAsideBarNavigation from "@/src/logic/hooks/useAsideBarNavigation";

interface Props {
  onClick?: () => void;
}

export default function AsideBarNavigation({ onClick = () => {} }: Props) {
  const { pathname, handleResetStates } = useAsideBarNavigation();

  return (
    <nav>
      <ul className="mx-2.5 flex h-full flex-col gap-2 text-sm text-white">
        <li onClick={onClick} className="xmd:w-auto w-35">
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
        <li
          onClick={() => {
            handleResetStates();
            onClick();
          }}
          className="xmd:w-auto w-35"
        >
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
