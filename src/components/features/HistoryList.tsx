import HistoryListItem from "@/src/components/ui/HistoryListItem";

import { historySummaries } from "@/src/mock/historySummaries";
import { HistoryItem } from "@/src/types/historyItemType";

export default function HistoryList() {
  return (
    <ul className="flex h-full flex-col gap-2.5 overflow-y-auto">
      {JSON.parse(historySummaries).map((historyItem: HistoryItem) => {
        return <HistoryListItem key={historyItem.id} itemData={historyItem} />;
      })}
    </ul>
  );
}
