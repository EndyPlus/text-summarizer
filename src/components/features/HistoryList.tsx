"use client";

import HistoryListItem from "@/src/components/ui/HistoryListItem";

import usePostsList from "@/src/logic/hooks/usePostsList";
import { useDashboardNotfiyStorage } from "@/src/store/dashboardNotifyStore";
import DashboardNotify from "../modals/DashboardNotify/DashboardNotify";
import HistoryListSkeleton from "../skeletons/HistoryListSkeleton";

export default function HistoryList() {
  const { isLoading, postsList } = usePostsList();

  // @ts-expect-error does not exist
  const { dashboardNotify, resetDashboardNotify } = useDashboardNotfiyStorage();

  return (
    <>
      {dashboardNotify && (
        <DashboardNotify
          onClose={resetDashboardNotify}
          isSuccess={true}
          message={dashboardNotify}
        />
      )}

      <ul className="flex h-full flex-col gap-2.5 overflow-y-auto">
        {/* <HistoryListSkeleton /> */}
        {isLoading && <HistoryListSkeleton />}

        {!isLoading && !postsList?.length && <p>EMPTY LIST</p>}
        {!isLoading &&
          postsList &&
          postsList.length > 0 &&
          postsList.map((historyItem) => {
            return (
              <HistoryListItem key={historyItem.id} itemData={historyItem} />
            );
          })}
      </ul>
    </>
  );
}
