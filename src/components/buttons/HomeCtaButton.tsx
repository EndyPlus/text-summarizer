import { ReactNode } from "react";
import { IconClipboard, IconKeyboard } from "../ui/Icons";

type Props = {
  type: "handwrite" | "paste";
  onClick: () => void;
  children: ReactNode;
};

export default function HomeCtaButton({ type, children, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-border group rounded-large base-transition hover:border-black-accent xs:px-7.5 xs:py-4.5 flex cursor-pointer flex-col items-center justify-center border px-4 py-2.5"
    >
      {type === "handwrite" ? (
        <IconKeyboard size={24} className="group-hover:animate-cta-click" />
      ) : (
        <IconClipboard size={24} className="group-hover:animate-cta-click" />
      )}
      <p className="text-small mt-1.25 leading-[195%] font-medium text-[#131615]">
        {children}
      </p>
    </button>
  );
}
