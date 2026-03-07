import SkeletonElement from "./SkeletonElement";

export default function HistoryListSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, id) => (
        <li
          key={id}
          className="border-border flex justify-between gap-4 rounded-2xl border bg-white py-5 pr-5.75 pl-5"
        >
          <div className="flex grow flex-col">
            <SkeletonElement className="mb-1 h-4 w-[95%] rounded-full"></SkeletonElement>
            <SkeletonElement className="mb-1 h-4 w-[97%] rounded-full sm:hidden"></SkeletonElement>
            <SkeletonElement className="mb-1 h-4 w-[93%] rounded-full sm:hidden"></SkeletonElement>
            <SkeletonElement className="h-4 w-[95%] rounded-full"></SkeletonElement>

            <ul className="mt-4 flex flex-col items-start gap-2 sm:flex-row">
              <SkeletonElement className="h-8 w-40 rounded-lg"></SkeletonElement>
              <SkeletonElement className="h-8 w-20 rounded-lg"></SkeletonElement>
              <SkeletonElement className="h-8 w-30 rounded-lg"></SkeletonElement>
            </ul>
          </div>

          <SkeletonElement className="xs:rounded-large xs:h-8 xs:w-8 h-6 w-6 rounded-lg"></SkeletonElement>
        </li>
      ))}
    </>
  );
}
