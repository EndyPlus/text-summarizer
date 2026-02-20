import SummarizedContainer from "../features/SummarizedContainer";
import SummaryPanel from "../features/SummaryPanel";

export default function SummarySection() {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <SummarizedContainer />
      <SummaryPanel />
    </div>
  );
}
