"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import { animationModal } from "@/src/helpers/utils/animations";

import { ModalWrapperProps } from "@/src/helpers/types/types";

export default function ModalWrapper({
  onClose,
  childrenRef,
  bgRef,
  children,
}: ModalWrapperProps) {
  useEffect(() => {
    animationModal(childrenRef.current, bgRef.current, "appear");
  }, [childrenRef, bgRef]);

  const wrapperLayout = (
    <div className="absolute z-997 flex h-full w-full items-center justify-center">
      <div
        ref={bgRef}
        onClick={onClose}
        className="absolute z-998 h-full w-full bg-black/30"
      ></div>
      <div className="z-999">{children}</div>
    </div>
  );

  const wrapperModal = document.getElementById("modal");

  if (!wrapperModal) return;

  return createPortal(wrapperLayout, wrapperModal);
}
