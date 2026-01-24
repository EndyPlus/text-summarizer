import DashboardHeading from "@/src/components/ui/DashboardHeading";
import HomePageForm from "@/src/components/features/HomePageForm";

import SummarySection from "@/src/components/ui/SummarySection";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col pt-10.25 pr-10.25 pb-11.75 pl-14.5">
      <DashboardHeading
        heading="Text Summarizer"
        text="Summarize and manage texts with ease"
      />

      <HomePageForm />

      <SummarySection />
    </div>
  );
}
