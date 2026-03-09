import SummarizedContainer from "./SummarizedContainer";
import SummaryPanel from "../features/SummaryPanel";

export default function SummarySection() {
  return (
    <div className="flex h-full flex-col">
      <SummarizedContainer />
      <SummaryPanel />
    </div>
  );
}
