import { createPortal } from "react-dom";
import { IconClose, IconError, IconSuccess } from "../../ui/Icons";

export default function AuthNotifyWrapper({
  onClose,
  heading,
  isSuccess = false,
  children,
}) {
  const notifyEl = (
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

  return <>{createPortal(notifyEl, document.getElementById("notification"))}</>;
}
