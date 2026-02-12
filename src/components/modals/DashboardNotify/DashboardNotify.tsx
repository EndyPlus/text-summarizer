import Image from "next/image";

import iconSuccess from "@/src/assets/icons/icon-success.svg";
import iconError from "@/src/assets/icons/icon-error.svg";
import iconClose from "@/src/assets/icons/icon-close.svg";
import { createPortal } from "react-dom";

type Props = {
  onClose: () => void;
  message: string;
  isSuccess: boolean;
};

export default function DashboardNotify({
  onClose,
  message,
  isSuccess = true,
}: Props) {
  const notifyEl = (
    <div
      className={`absolute top-9 left-1/2 flex -translate-x-1/2 items-start gap-3 border p-4 ${
        isSuccess
          ? "bg-success-main border-success-accent"
          : "bg-error-main border-error-accent"
      } tracking-base shadow-info-main rounded-xl`}
    >
      <Image
        src={isSuccess ? iconSuccess : iconError}
        alt="warning icon"
        width={20}
        height={20}
      />
      <div>
        <p className="black-accent leading-base text-sm whitespace-pre-line">
          {message}
        </p>
      </div>
      <button className="cursor-pointer" onClick={onClose}>
        <Image src={iconClose} alt="close icon" width={20} height={20} />
      </button>
    </div>
  );

  return createPortal(notifyEl, document.getElementById("notification"));
}
