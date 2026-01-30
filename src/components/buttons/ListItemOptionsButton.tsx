import Image from "next/image";

import iconDots from "@/src/assets/icons/icon-dots.svg";

export default function ListItemOptionsButton() {
  return (
    <button className="border-border radius-large shadow-input rounded-large flex h-8 w-8 cursor-pointer items-center justify-center border bg-white p-2">
      <Image
        className="shrink-0"
        src={iconDots}
        alt="three dots icon"
        width={16}
        height={16}
      />
    </button>
  );
}
