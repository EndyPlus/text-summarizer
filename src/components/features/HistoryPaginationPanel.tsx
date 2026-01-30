import Image from "next/image";

import iconArrowLeft from "@/src/assets/icons/icon-arrow-left.svg";
import iconArrowRight from "@/src/assets/icons/icon-arrow-right.svg";

export default function HistoryPaginationPanel() {
  return (
    <div className="mt-4.5 flex items-center justify-between">
      <p className="leading-base tracking-base text-black-accent text-sm">
        Show 1 to 5 out of 15 entries
      </p>
      <ul className="flex">
        <li>
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-xl p-2.5">
            <Image
              src={iconArrowLeft}
              alt="arrow left icon"
              width={20}
              height={20}
            />
          </button>
        </li>
        <li>
          <button className="tracking-base text-black-accent flex size-10 cursor-pointer items-center justify-center rounded-xl bg-[#0a0f290a] p-2.5 leading-[150%] font-medium">
            1
          </button>
        </li>
        <li>
          <button className="tracking-base text-black-accent flex size-10 cursor-pointer items-center justify-center rounded-xl p-2.5 leading-[150%] font-medium">
            2
          </button>
        </li>
        <li>
          <button className="tracking-base text-black-accent flex size-10 cursor-pointer items-center justify-center rounded-xl p-2.5 leading-[150%] font-medium">
            3
          </button>
        </li>
        <li>
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-xl p-2.5">
            <Image
              src={iconArrowRight}
              alt="arrow right icon"
              width={20}
              height={20}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
