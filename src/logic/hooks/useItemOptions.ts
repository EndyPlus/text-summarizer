import { useState } from "react";
import { deletePost } from "@/src/services/serverActions/prismaActions";

import { usePostInteraction } from "@/src/store/interactedPostStore";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import handleCopyText from "@/src/utils/handleCopyText";

export default function useItemOptions(itemData) {
  const [isContextVisible, setIsVisibleContext] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

  const router = useRouter();

  // @ts-expect-error unknown type
  const { setDeletePost, setEditPost } = usePostInteraction();

  const session = useSession();
  // @ts-expect-error does not exist
  const userId = session.data?.user?.id;

  async function handleDeletePost() {
    try {
      if (!userId) throw new Error("Please, Log In to interact with post.");

      console.log("delete");
      const deletedPost = await deletePost(itemData.id);

      if (!deletedPost) throw new Error("Post deletion went wrong.");

      setDeletePost(itemData.id);

      console.log(deletedPost);
    } catch (err) {
      console.log(err);
    }
  }

  function handleEditPost() {
    router.push("/home");
    setEditPost(itemData.id);
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

  async function handleCopyPost() {
    const copyRes = await handleCopyText(itemData.summarizedText);

    if (copyRes.success) {
      setIsVisibleContext(false);
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
