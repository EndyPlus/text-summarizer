import DashboardHeading from "@/src/components/ui/DashboardHeading";
import HistorySearchForm from "@/src/components/forms/HistorySearchForm";
import HistoryList from "@/src/components/features/HistoryList";
import HistoryPaginationPanel from "@/src/components/features/HistoryPaginationPanel";

export default function HistoryPage() {
  return (
    <div className="flex w-full flex-col pt-10.25 pr-10.5 pb-11.75 pl-14.5">
      <DashboardHeading
        heading="History"
        text="View previously summarized texts"
      />

      <HistorySearchForm />

      <HistoryList />

      <HistoryPaginationPanel />
    </div>
  );
}
