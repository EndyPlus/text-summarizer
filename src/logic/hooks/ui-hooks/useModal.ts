import { useCallback, useEffect, useRef } from "react";

import { animationModal } from "@/src/helpers/utils/animations";

export default function useModal(onClose: () => void) {
  const modalRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    const animation = animationModal(
      modalRef.current,
      bgRef.current,
      "disappear",
    );

    if (!animation) {
      onClose();
      return;
    }

    animation.onfinish = () => {
      onClose();
    };
  }, [onClose]);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const cancelBtn = Array.from(focusableElements).find(
      (el) => el.innerText === "Cancel",
    );
    (cancelBtn || firstElement)?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
        return;
      }

      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return { modalRef, bgRef, handleClose };
}
