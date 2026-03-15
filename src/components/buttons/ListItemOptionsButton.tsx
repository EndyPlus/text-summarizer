"use client";

import useItemOptions from "@/src/logic/hooks/features-hooks/useItemOptions";

import { ItemDataProps } from "@/src/helpers/types/types";

import ConfirmDelete from "../modals/ModalWIndows/ConfirmDelete";
import { IconCopy, IconDelete, IconDots, IconEdit } from "../ui/Icons";

export default function ListItemOptionsButton({ itemData }: ItemDataProps) {
  const {
    isContextVisible,
    isVisibleConfirm,
    handleDeletePost,
    handleHideConfirm,
    handleSwitchContext,
    handleOpenConfirmModal,
    handleEditPost,
    handleCopyPost,
  } = useItemOptions(itemData);

  return (
    <>
      {isVisibleConfirm && (
        <ConfirmDelete
          onClose={handleHideConfirm}
          onDelete={handleDeletePost}
        />
      )}

      <div className="relative">
        <button
          onClick={handleSwitchContext}
          className="border-border base-transition active:border-black-accent hover:border-black-base shadow-input xs:rounded-large xs:h-8 xs:w-8 flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg border bg-white p-2 hover:scale-105 active:scale-95"
          aria-label="More options"
        >
          <IconDots aria-hidden="true" size={16} />
        </button>

        {isContextVisible && (
          <ul className="border-border shadow-context absolute right-0 z-999 flex w-max flex-col gap-y-4 rounded-xl bg-white px-2 py-1.5 sm:top-1/2">
            <li>
              <button
                onClick={handleCopyPost}
                className="base-transition hover:bg-white-secondary active:bg-white-secondary flex w-full cursor-pointer items-center gap-x-2 rounded-lg px-2 py-1.5 active:scale-95"
              >
                <IconCopy aria-hidden="true" />
                <p className="leading-base tracking-base text-black-base text-sm text-nowrap">
                  Copy to Clipboard
                </p>
              </button>
            </li>
            <li>
              <button
                onClick={handleEditPost}
                className="base-transition hover:bg-white-secondary active:bg-white-secondary flex w-full cursor-pointer items-center gap-x-2 rounded-lg px-2 py-1.5 active:scale-95"
              >
                <IconEdit aria-hidden="true" />
                <p className="leading-base tracking-base text-black-base text-sm text-nowrap">
                  Edit
                </p>
              </button>
            </li>
            <li>
              <button
                onClick={handleOpenConfirmModal}
                className="base-transition hover:bg-white-secondary active:bg-white-secondary flex w-full cursor-pointer items-center gap-x-2 rounded-lg px-2 py-1.5 active:scale-95"
              >
                <IconDelete aria-hidden="true" />
                <p className="leading-base tracking-base text-black-base text-sm text-nowrap">
                  Delete
                </p>
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
