import Image from "next/image";

import iconSuccess from "@/src/assets/icons/icon-success.svg";
import iconError from "@/src/assets/icons/icon-error.svg";
import iconClose from "@/src/assets/icons/icon-close.svg";

export default function AuthModalWrapper({
  onClose,
  heading,
  isSuccess = false,
  children,
}) {
  return (
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
        <h4 className="text-black-base mb-2 font-medium">{heading}</h4>
        {/* <p className="black-accent leading-base text-sm whitespace-pre-line">
          ERROR MESSAGE
        </p> */}

        <ul className="gap-1 text-center">{children}</ul>
      </div>
      {!isSuccess && (
        <button className="cursor-pointer" onClick={onClose}>
          <Image src={iconClose} alt="close icon" width={20} height={20} />
        </button>
      )}
    </div>
  );
}
