import HomePageForm from "@/src/components/forms/HomePageForm";
import DashboardHeading from "@/src/components/ui/DashboardHeading";
import SummarySection from "@/src/components/ui/SummarySection";

export default function HomePage() {
  return (
    <div className="page-container">
      <DashboardHeading
        heading="Text Summarizer"
        text="Summarize and manage texts with ease"
      />

      <HomePageForm />

      <SummarySection />
    </div>
  );
}
