"use client";

import useModal from "@/src/logic/hooks/ui-hooks/useModal";

import ModalWrapper from "./ModalWrapper";
import { IconClose } from "../../ui/Icons";

interface Props {
  onClose: () => void;
  onDelete: () => Promise<void>;
}

export default function ConfirmDelete({ onClose, onDelete }: Props) {
  async function handleDelete() {
    handleClose();
    await onDelete();
  }

  const { modalRef, bgRef, handleClose } = useModal(onClose);

  return (
    <ModalWrapper childrenRef={modalRef} bgRef={bgRef} onClose={handleClose}>
      <div
        ref={modalRef}
        className="shadow-context border-border xs:w-100 relative flex w-[91vw] flex-col rounded-2xl bg-white p-6"
      >
        <button
          onClick={handleClose}
          className="hover:bg-white-tertiary active:bg-white-tertiary base-transition absolute top-4 right-4 cursor-pointer rounded-full bg-[rgba(10,15,41,0.04)] p-1.25 hover:scale-120 active:scale-90"
          aria-label="Close modal button"
        >
          <IconClose aria-hidden="true" size={14} />
        </button>
        <div className="mb-6">
          <h4 className="leading-base tracking-base text-black-base text-lg font-medium">
            Delete summarized text?
          </h4>
          <p className="tracking-base leading-[150%] text-[rgba(15,19,36,0.6)]">
            You will not be able to recover it.
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={handleClose} className="close-button">
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="tracking-base leading-base shadow-input rounded-large bg-red-main base-transition w-full cursor-pointer px-2.5 py-1.5 text-center text-sm font-medium text-white hover:bg-red-500 active:scale-90 active:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}
