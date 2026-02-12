import { createPortal } from "react-dom";

export default function ModalWrapper({ onClose, children }) {
  return createPortal(
    <div className="absolute z-10 flex h-full w-full items-center justify-center">
      <div
        onClick={onClose}
        className="absolute z-20 h-full w-full bg-black/30"
      ></div>
      <div className="z-30">{children}</div>
    </div>,
    document.getElementById("modal"),
  );
}
