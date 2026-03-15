"use client";

import { useShallow } from "zustand/shallow";

import { useDashboardNotifyStorage } from "@/src/logic/store/dashboardNotifyStore";
import usePostsList from "@/src/logic/hooks/features-hooks/usePostsList";

import HistoryListItem from "@/src/components/ui/HistoryListItem";
import DashboardNotify from "../modals/DashboardNotify/DashboardNotify";
import HistoryListSkeleton from "../skeletons/HistoryListSkeleton";
import HistoryEmptyList from "../ui/HistoryEmptyList";

export default function HistoryList() {
  const { isLoading, isError, postsList } = usePostsList();

  const { dashboardNotify, isDashboardError, resetDashboardNotify } =
    useDashboardNotifyStorage(
      useShallow((state) => ({
        dashboardNotify: state.dashboardNotify,
        isDashboardError: state.isDashboardError,
        resetDashboardNotify: state.resetDashboardNotify,
      })),
    );

  return (
    <>
      {dashboardNotify && (
        <DashboardNotify
          onClose={resetDashboardNotify}
          isSuccess={!isDashboardError}
          message={dashboardNotify}
        />
      )}

      <ul className="flex h-full flex-col gap-2.5 overflow-y-auto">
        {isLoading && <HistoryListSkeleton />}

        {!isLoading && (
          <>
            {isError && <HistoryEmptyList type="error" />}

            {!isError && (
              <>
                {postsList?.length === 0 && <HistoryEmptyList type="empty" />}

                {postsList &&
                  postsList.length > 0 &&
                  postsList.map((historyItem) => {
                    return (
                      <HistoryListItem
                        key={historyItem.id}
                        itemData={historyItem}
                      />
                    );
                  })}
              </>
            )}
          </>
        )}
      </ul>
    </>
  );
}
