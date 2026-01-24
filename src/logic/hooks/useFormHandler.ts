import { useSummary } from "@/src/store/summaryStore";

export default function useFormHandler() {
  const { setSummary, summarizedText } = useSummary();

  function handleHomePageFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    setSummary(data.formTextarea);
  }

  return handleHomePageFormSubmit;
}
