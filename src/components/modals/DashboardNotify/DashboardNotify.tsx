import { createPortal } from "react-dom";
import { IconClose, IconError, IconSuccess } from "../../ui/Icons";
import { DashboardNotifyProps } from "@/src/types/types";
import { useEffect } from "react";
import { DASHBOARD_NOTIFY_TIME } from "@/src/utils/vars";

export default function DashboardNotify({
  onClose,
  message,
  isSuccess = true,
}: DashboardNotifyProps) {
  useEffect(() => {
    const notifyTimeout = setTimeout(() => {
      onClose();
    }, DASHBOARD_NOTIFY_TIME);

    return () => {
      clearTimeout(notifyTimeout);
    };
  }, [onClose]);

  const notifyLayout = (
    <div
      className={`absolute top-9 left-1/2 flex -translate-x-1/2 items-start gap-3 border p-4 ${
        isSuccess
          ? "bg-success-main border-success-accent"
          : "bg-error-main border-error-accent"
      } tracking-base shadow-info-main rounded-xl`}
    >
      {isSuccess ? <IconSuccess /> : <IconError />}

      <div>
        <p className="black-accent leading-base text-sm whitespace-pre-line">
          {message}
        </p>
      </div>
      <button className="cursor-pointer" onClick={onClose}>
        <IconClose />
      </button>
    </div>
  );

  const notifyModal = document.getElementById("notification");

  if (!notifyModal) return;

  return createPortal(notifyLayout, notifyModal);
}
