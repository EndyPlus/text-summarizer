import { useState } from "react";
import { deletePost } from "@/src/services/serverActions/prismaActions";

import { usePostInteractionStorage } from "@/src/store/interactedPostStore";
import { useSummaryStorage } from "@/src/store/summaryStore";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import handleCopyText from "@/src/utils/handleCopyText";
import { useDashboardNotifyStorage } from "@/src/store/dashboardNotifyStore";
import { Post } from "@/src/types/types";

export default function useItemOptions(itemData: Post) {
  const [isContextVisible, setIsVisibleContext] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

  const router = useRouter();

  const { setTexts } = useSummaryStorage();

  const { setDashboardNotify } = useDashboardNotifyStorage();

  const { setDeletePost, setEditPost } = usePostInteractionStorage();

  const session = useSession();
  const userId = session.data?.user?.id;

  async function handleDeletePost() {
    try {
      if (!userId) throw new Error("Please, Log In to interact with post.");

      console.log("delete");
      const deletedPost = await deletePost(itemData.id);

      if (!deletedPost) throw new Error("Post deletion went wrong.");

      setDeletePost(itemData.id);

      setDashboardNotify("Successfully deleted!");
      console.log(deletedPost);
    } catch (err) {
      console.log(err);
    }
  }

  function handleEditPost() {
    setEditPost(itemData);
    setTexts(itemData.originalText, itemData.summarizedText);
    router.push("/home");
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
      setDashboardNotify("Copied to Clipboard!");
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
