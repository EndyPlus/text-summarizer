"use client";

import { createPortal } from "react-dom";
import { IconClose, IconError, IconSuccess } from "../../ui/Icons";
import { ModalProps } from "@/src/types/types";
import { useEffect, useRef } from "react";
import { AUTH_ERROR_NOTIFY_TIME } from "@/src/utils/vars";
import { animationAuthNotify } from "@/src/utils/animations";

export default function AuthNotifyWrapper({
  onClose,
  heading,
  isSuccess = false,
  children,
}: ModalProps) {
  const notifyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animationAuthNotify(notifyRef.current, "appear");

    const errorNotifyTimeout = setTimeout(() => {
      const animation = animationAuthNotify(notifyRef.current, "disappear");

      if (!animation) return;

      animation.onfinish = () => {
        onClose();
      };
    }, AUTH_ERROR_NOTIFY_TIME);

    return () => clearTimeout(errorNotifyTimeout);
  }, [onClose]);

  const notifyLayout = (
    <div
      ref={notifyRef}
      className={`xs:w-auto fixed top-9 left-1/2 z-999 flex w-[85vw] -translate-x-1/2 items-start justify-center gap-3 border p-4 ${
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

        <ul className="gap-1 wrap-break-word">{children}</ul>
      </div>
      {!isSuccess && (
        <button
          className="cursor-pointer hover:scale-110 active:scale-90"
          onClick={onClose}
          aria-label="Close notify button"
        >
          <IconClose aria-hidden="true" />
        </button>
      )}
    </div>
  );

  const notifyModal = document.getElementById("notification");

  if (!notifyModal) return;

  return createPortal(notifyLayout, notifyModal);
}
