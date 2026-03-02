"use client";

import HistoryListItem from "@/src/components/ui/HistoryListItem";

import usePostsList from "@/src/logic/hooks/usePostsList";
import { useDashboardNotifyStorage } from "@/src/store/dashboardNotifyStore";
import DashboardNotify from "../modals/DashboardNotify/DashboardNotify";
import HistoryListSkeleton from "../skeletons/HistoryListSkeleton";

import Link from "next/link";
import { IconCopy } from "../ui/Icons";

export default function HistoryList() {
  const { isLoading, postsList } = usePostsList();

  const { dashboardNotify, resetDashboardNotify } = useDashboardNotifyStorage();

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
        {isLoading && <HistoryListSkeleton />}

        {!isLoading && !postsList?.length && (
          <div className="gapy-4 m-auto flex flex-col items-center text-center">
            <IconCopy size={40} />
            <h3 className="text-heading tracking-base text-black-base leading-9 font-medium">
              Empty List
            </h3>
            <p className="tracking-base text-black-accent mt-2 leading-4">
              Move to{" "}
              <Link className="text-black-base font-medium" href="/home">
                Home Page
              </Link>{" "}
              for creating a new summary
              <br />
              or change a search parameters.
            </p>
          </div>
        )}

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
