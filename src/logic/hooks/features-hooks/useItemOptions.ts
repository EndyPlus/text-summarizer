import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useShallow } from "zustand/shallow";

import { deletePost } from "@/src/services/serverActions/prismaActions";

import { usePostInteractionStorage } from "@/src/logic/store/interactedPostStore";
import { useDashboardNotifyStorage } from "@/src/logic/store/dashboardNotifyStore";
import { useSummaryStorage } from "@/src/logic/store/summaryStore";

import handleCopyText from "@/src/helpers/utils/handleCopyText";
import getErrorMessage from "@/src/helpers/utils/getErrorMessage";

import { Post } from "@/src/helpers/types/types";

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

      const deletePostResponse = await deletePost(itemData.id);

      if (!deletePostResponse.success) {
        throw new Error(deletePostResponse.error);
      }

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
