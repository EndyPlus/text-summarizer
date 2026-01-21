"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import iconLogout from "../assets/icons/icon-logout.svg";
import iconPlus from "../assets/icons/icon-plus.svg";
import iconHouse from "../assets/icons/icon-house.svg";
import iconClock from "../assets/icons/icon-clock.svg";

export default function AsideBar() {
  const pathname = usePathname();

  return (
    <aside className="bg-black-base min-w-fit">
      {/* User Container */}
      <div className="mx-5 mt-5 mb-5.5">
        <div className="mb-4 flex items-center">
          <div className="bg-pfp leading-base tracking-base mr-2 rounded-full px-1.5 py-1.5 text-white">
            JD
          </div>
          <div className="mr-17 flex flex-col items-start">
            <h4 className="text-white-base leading-base tracking-base flex items-center justify-center text-sm font-medium">
              John Doe
            </h4>
            <p className="text-white-accent text-small leading-[133%]">
              johndoe@email.com
            </p>
          </div>
          <button className="w-5 cursor-pointer">
            <Image
              src={iconLogout}
              alt="log out button"
              width={20}
              height={20}
            />
          </button>
        </div>
        <button className="bg-white-base shadow-input rounded-large flex w-full cursor-pointer items-center justify-center px-2.5 py-1.5">
          <Image src={iconPlus} alt="plus icon" width={16} height={16} />
          <p className="leading-base tracking-base text-black-secondary ml-1.5 text-sm font-medium">
            Summarize Text
          </p>
        </button>
      </div>
      <nav>
        <ul className="mx-2.5 flex flex-col gap-2 text-sm text-white">
          <li className={``}>
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
    </aside>
  );
}
