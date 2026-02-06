"use client";

import Image from "next/image";

import iconDots from "@/src/assets/icons/icon-dots.svg";

import { useState } from "react";

import ConfirmDelete from "../modals/ConfirmDelete";
import { deletePost } from "@/src/services/serverActions/prismaActions";

import { usePostInteraction } from "@/src/store/interactedPostStore";

export default function ListItemOptionsButton({ itemData }) {
  const [isContextVisible, setIsVisibleContext] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

  const setInteractedPost = usePostInteraction(
    // @ts-expect-error store unknown type
    (state) => state.setInteractedPost,
  );

  // console.log(itemData);

  async function handleDeletePost() {
    console.log("delete");
    const deletedPost = await deletePost(itemData.id);
    setInteractedPost(itemData.id);
    console.log(deletedPost);
  }

  function handleOpenConfirmModal() {
    setIsVisibleConfirm(true);
    setIsVisibleContext(false);
  }

  function handleEditPost() {
    // redirect to edit

    setIsVisibleContext(false);
  }

  function handleCopyPost() {
    // copying

    setIsVisibleContext(false);
  }

  return (
    <>
      {isVisibleConfirm && (
        <ConfirmDelete
          onClose={() => setIsVisibleConfirm(false)}
          onDelete={handleDeletePost}
        />
      )}

      <div className="relative">
        <button
          onClick={() => setIsVisibleContext((prevState) => !prevState)}
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
