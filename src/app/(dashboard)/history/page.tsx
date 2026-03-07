import DashboardHeading from "@/src/components/ui/DashboardHeading";
import HistorySearchForm from "@/src/components/forms/HistorySearchForm";
import HistoryList from "@/src/components/features/HistoryList";
import HistoryPaginationPanel from "@/src/components/features/HistoryPaginationPanel";

export default function HistoryPage() {
  return (
    <div className="page-container">
      <DashboardHeading
        heading="History"
        text="View previously summarized texts"
      />

      <HistorySearchForm />

      <div className="flex flex-col-reverse overflow-y-auto sm:flex-col">
        <HistoryList />

        <HistoryPaginationPanel />
      </div>
    </div>
  );
}
