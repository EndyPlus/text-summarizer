import { useState } from "react";
import { deletePost } from "@/src/services/serverActions/prismaActions";

import { usePostInteractionStorage } from "@/src/store/interactedPostStore";
import { useSummaryStorage } from "@/src/store/summaryStore";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import handleCopyText from "@/src/utils/handleCopyText";
import { useDashboardNotifyStorage } from "@/src/store/dashboardNotifyStore";
import { Post } from "@/src/types/types";
import { useShallow } from "zustand/shallow";
import getErrorMessage from "@/src/utils/getErrorMessage";

export default function useItemOptions(itemData: Post) {
  const [isContextVisible, setIsVisibleContext] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

  const router = useRouter();

  const setTexts = useSummaryStorage((state) => state.setTexts);

  const { setDashboardNotify, setDashboardError } = useDashboardNotifyStorage(
    useShallow((state) => ({
      setDashboardNotify: state.setDashboardNotify,
      setDashboardError: state.setDashboardError,
    })),
  );

  const { setDeletePost, setEditPost } = usePostInteractionStorage(
    useShallow((state) => ({
      setDeletePost: state.setDeletePost,
      setEditPost: state.setEditPost,
    })),
  );

  const session = useSession();
  const userId = session.data?.user?.id;

  async function handleDeletePost() {
    try {
      if (!userId) throw new Error("Please, Log In to interact with post.");

      console.log("delete");

      const deletePostResponse = await deletePost(itemData.id);

      if (!deletePostResponse.success) {
        throw new Error(deletePostResponse.error);
      }

      console.log(deletePostResponse.data);

      setDeletePost(itemData.id);

      setDashboardNotify("Successfully deleted!");
      setDashboardError(false);
    } catch (err) {
      setDashboardNotify(getErrorMessage(err));
      setDashboardError(true);
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

    if (!copyRes.success) throw new Error(copyRes.error);

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
