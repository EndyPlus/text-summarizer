"use client";

import ConfirmDelete from "../modals/ConfirmDelete";
import useItemOptions from "@/src/logic/hooks/useItemOptions";
import { IconCopy, IconDelete, IconDots, IconEdit } from "../ui/Icons";
import { ItemDataProps } from "@/src/types/types";

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
          className="border-border shadow-input rounded-large flex h-8 w-8 cursor-pointer items-center justify-center border bg-white p-2"
        >
          <IconDots size={16} className="shrink-0" />
        </button>

        {isContextVisible && (
          <ul className="border-border shadow-context absolute top-1/2 right-0 z-999 flex w-max flex-col gap-y-4 rounded-xl bg-white px-4 py-3">
            <li>
              <button
                onClick={handleCopyPost}
                className="flex cursor-pointer items-center gap-x-2"
              >
                <IconCopy />
                <p className="leading-base tracking-base text-black-base text-sm text-nowrap">
                  Copy to Clipboard
                </p>
              </button>
            </li>
            <li>
              <button
                onClick={handleEditPost}
                className="flex cursor-pointer items-center gap-x-2"
              >
                <IconEdit />
                <p className="leading-base tracking-base text-black-base text-sm text-nowrap">
                  Edit
                </p>
              </button>
            </li>
            <li>
              <button
                onClick={handleOpenConfirmModal}
                className="flex cursor-pointer items-center gap-x-2"
              >
                <IconDelete />
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
