import { IconLoading } from "../ui/Icons";

interface Props {
  isSummaryLoading: boolean;
  charactersCount: number;
}

export default function SummarizeTextButton({
  isSummaryLoading,
  charactersCount,
}: Props) {
  const isDisabled = isSummaryLoading || charactersCount === 0;

  const disabledButtonStyles =
    "cursor-not-allowed text-gray-accent bg-black-base";
  const loadingButtonStyles = "cursor-not-allowed text-white bg-black-base";
  const activeButtonStyles =
    "cursor-pointer text-black-secondary bg-white hover:bg-white-tertiary active:bg-white-tertiary active:scale-95";

  const buttonStyles =
    charactersCount === 0
      ? disabledButtonStyles
      : isSummaryLoading
        ? loadingButtonStyles
        : activeButtonStyles;

  return (
    <button
      disabled={isDisabled}
      className={`${buttonStyles} base-transition shadow-input rounded-large border-border-accent xs:px-2.5 xs:py-1.5 flex items-center gap-x-2 border px-2 py-1`}
    >
      {isSummaryLoading && <IconLoading size={16} />}
      <p className="leading-base tracking-base text-small xs:text-sm font-medium">
        {isSummaryLoading ? "Summarizing your text..." : "Summarize Text"}
      </p>
    </button>
  );
}
