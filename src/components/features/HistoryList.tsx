"use client";

import HistoryListItem from "@/src/components/ui/HistoryListItem";

import usePostsList from "@/src/logic/hooks/usePostsList";

export default function HistoryList() {
  const { postsList } = usePostsList();

  return (
    <ul className="flex h-full flex-col gap-2.5 overflow-y-auto">
      {postsList &&
        postsList.map((historyItem) => {
          return (
            <HistoryListItem key={historyItem.id} itemData={historyItem} />
          );
        })}
    </ul>
  );
}

//      {JSON.parse(historySummaries).map((historyItem: HistoryItem) => {
//        return <HistoryListItem key={historyItem.id} itemData={historyItem} />;
//      })}
