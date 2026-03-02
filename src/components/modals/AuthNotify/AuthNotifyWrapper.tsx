import { createPortal } from "react-dom";
import { IconClose, IconError, IconSuccess } from "../../ui/Icons";
import { ModalProps } from "@/src/types/types";

export default function AuthNotifyWrapper({
  onClose,
  heading,
  isSuccess = false,
  children,
}: ModalProps) {
  const notifyLayout = (
    <div
      className={`fixed top-9 left-1/2 z-999 flex -translate-x-1/2 items-start gap-3 border p-4 ${
        isSuccess
          ? "bg-success-main border-success-accent"
          : "bg-error-main border-error-accent"
      } tracking-base shadow-info-main rounded-xl`}
    >
      {isSuccess ? <IconSuccess /> : <IconError />}
      <div>
        <h4 className="text-black-base mb-2 font-medium">{heading}</h4>
        {/* <p className="black-accent leading-base text-sm whitespace-pre-line">
          ERROR MESSAGE
        </p> */}

        <ul className="gap-1 text-center">{children}</ul>
      </div>
      {!isSuccess && (
        <button className="cursor-pointer" onClick={onClose}>
          <IconClose />
        </button>
      )}
    </div>
  );

  const notifyModal = document.getElementById("notification");

  if (!notifyModal) return;

  return createPortal(notifyLayout, notifyModal);
}
