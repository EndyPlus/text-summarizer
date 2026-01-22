import Image from "next/image";

import iconDocument from "@/src/assets/icons/icon-document.svg";
import iconCopy from "@/src/assets/icons/icon-copy.svg";

export default function SummarySection() {
  return (
    <div className="flex h-full flex-col">
      <div className="shadow-input rounded-large border-border-secondary bg-white-secondary mb-5 flex h-full items-center justify-center border">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={iconDocument}
            alt="document icon"
            width={60}
            height={60}
          />
          <p className="tracking-base text-black-accent leading-small mt-2.5 text-lg">
            Your summarized text will appear here
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex gap-2.75">
          <li className="leading-large text-gray-base flex gap-1.5 text-sm">
            <p>Words</p>
            <span className="font-medium">0</span>
          </li>
          <li className="leading-large text-gray-base flex gap-1.5 text-sm">
            <p>Characters</p>
            <span className="font-medium">0</span>
          </li>
        </ul>
        <button className="leading-base tracking-base rounded-large border-white-tertiary text-black-tertiary flex cursor-pointer gap-1.5 border bg-white px-2.5 py-1.5 text-sm font-medium">
          <Image
            className="h-4 w-4"
            src={iconCopy}
            alt="copy icon"
            width={16}
            height={16}
          />
          <p>Copy to Clipboard</p>
        </button>
      </div>
    </div>
  );
}
