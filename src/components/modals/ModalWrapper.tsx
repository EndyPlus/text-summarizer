import { ModalWrapperProps } from "@/src/types/types";
import { createPortal } from "react-dom";

export default function ModalWrapper({ onClose, children }: ModalWrapperProps) {
  const wrapperLayout = (
    <div className="absolute z-10 flex h-full w-full items-center justify-center">
      <div
        onClick={onClose}
        className="absolute z-20 h-full w-full bg-black/30"
      ></div>
      <div className="z-30">{children}</div>
    </div>
  );

  const wrapperModal = document.getElementById("modal");

  if (!wrapperModal) return;

  return createPortal(wrapperLayout, wrapperModal);
}
