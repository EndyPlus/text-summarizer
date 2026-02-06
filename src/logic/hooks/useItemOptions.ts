import { useState } from "react";
import { deletePost } from "@/src/services/serverActions/prismaActions";

import { usePostInteraction } from "@/src/store/interactedPostStore";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function useItemOptions(itemData) {
  const [isContextVisible, setIsVisibleContext] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

  const router = useRouter();

  const setInteractedPost = usePostInteraction(
    // @ts-expect-error store unknown type
    (state) => state.setInteractedPost,
  );

  const session = useSession();
  // @ts-expect-error does not exist
  const userId = session.data?.user?.id;

  async function handleDeletePost() {
    try {
      if (!userId) throw new Error("Please, Log In to interact with post.");

      console.log("delete");
      const deletedPost = await deletePost(itemData.id);

      if (!deletedPost) throw new Error("Something went wrong.");

      setInteractedPost(itemData.id);

      console.log(deletedPost);
    } catch (err) {
      console.log(err);
    }
  }

  function handleHideConfirm() {
    setIsVisibleConfirm(false);
  }

  function handleSwitchContext() {
    setIsVisibleContext((prevState) => !prevState);
  }

  function handleOpenConfirmModal() {
    setIsVisibleConfirm(true);
    setIsVisibleContext(false);
  }

  function handleEditPost() {
    router.push("/home");
  }

  async function handleCopyPost() {
    try {
      await navigator.clipboard.writeText(itemData.summarizedText);
      setIsVisibleContext(false);
    } catch (err) {
      console.log(err);
    }
  }

  return {
    isContextVisible,
    isVisibleConfirm,
    handleDeletePost,
    handleHideConfirm,
    handleSwitchContext,
    handleOpenConfirmModal,
    handleEditPost,
    handleCopyPost,
  };
}
