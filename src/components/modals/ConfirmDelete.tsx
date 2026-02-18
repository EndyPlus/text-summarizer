import Image from "next/image";
import ModalWrapper from "./ModalWrapper";

import iconClose from "@/src/assets/icons/icon-close.svg";

export default function ConfirmDelete({ onClose, onDelete }) {
  async function handleDelete() {
    await onDelete();
    onClose();
  }

  return (
    <ModalWrapper onClose={onClose}>
      <div className="shadow-context border-border relative flex w-100 flex-col rounded-2xl bg-white p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer rounded-full bg-[rgba(10,15,41,0.04)] p-1.25"
        >
          <Image src={iconClose} alt="close icon" width={14} height={14} />
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
          <button
            onClick={onClose}
            className="text-black-base tracking-base leading-base shadow-input rounded-large border-border w-full cursor-pointer border bg-white px-2.5 py-1.5 text-center text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="tracking-base leading-base shadow-input rounded-large bg-red-main w-full cursor-pointer px-2.5 py-1.5 text-center text-sm font-medium text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}
