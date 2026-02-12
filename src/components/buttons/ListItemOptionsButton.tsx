"use client";

import Image from "next/image";

import iconDots from "@/src/assets/icons/icon-dots.svg";

import ConfirmDelete from "../modals/ConfirmDelete";
import useItemOptions from "@/src/logic/hooks/useItemOptions";
import DashboardNotify from "../modals/DashboardNotify/DashboardNotify";

export default function ListItemOptionsButton({ itemData }) {
  const {
    isContextVisible,
    isVisibleConfirm,
    dashboardNotify,
    handleDeletePost,
    handleHideConfirm,
    handleSwitchContext,
    handleOpenConfirmModal,
    handleEditPost,
    handleCopyPost,
    resetDashboardNotify,
  } = useItemOptions(itemData);

  return (
    <>
      {isVisibleConfirm && (
        <ConfirmDelete
          onClose={handleHideConfirm}
          onDelete={handleDeletePost}
        />
      )}
      {dashboardNotify && (
        <DashboardNotify
          onClose={resetDashboardNotify}
          isSuccess={true}
          message={dashboardNotify}
        />
      )}
      <div className="relative">
        <button
          onClick={handleSwitchContext}
          className="border-border radius-large shadow-input rounded-large flex h-8 w-8 cursor-pointer items-center justify-center border bg-white p-2"
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
          <ul className="absolute">
            <li>
              <button
                onClick={handleCopyPost}
                className="w-full cursor-pointer text-start"
              >
                Copy
              </button>
            </li>
            <li>
              <button
                onClick={handleEditPost}
                className="w-full cursor-pointer text-start"
              >
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={handleOpenConfirmModal}
                className="w-full cursor-pointer text-start"
              >
                Delete
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
