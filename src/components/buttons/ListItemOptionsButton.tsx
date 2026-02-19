"use client";

import Image from "next/image";

import iconDots from "@/src/assets/icons/icon-dots.svg";
import iconCopy from "@/src/assets/icons/icon-copy-dark.svg";
import iconEdit from "@/src/assets/icons/icon-edit.svg";
import iconDelete from "@/src/assets/icons/icon-delete.svg";

import ConfirmDelete from "../modals/ConfirmDelete";
import useItemOptions from "@/src/logic/hooks/useItemOptions";

export default function ListItemOptionsButton({ itemData }) {
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
          <Image
            className="shrink-0"
            src={iconDots}
            alt="three dots icon"
            width={16}
            height={16}
          />
        </button>

        {isContextVisible && (
          <ul className="border-border shadow-context absolute top-1/2 right-0 z-999 flex w-max flex-col gap-y-4 rounded-xl bg-white px-4 py-3">
            <li>
              <button
                onClick={handleCopyPost}
                className="flex cursor-pointer items-center gap-x-2"
              >
                <Image src={iconCopy} alt="copy icon" width={20} height={20} />
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
                <Image src={iconEdit} alt="edit icon" width={20} height={20} />
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
                <Image
                  src={iconDelete}
                  alt="delete icon"
                  width={20}
                  height={20}
                />
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
