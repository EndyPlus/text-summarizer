import SkeletonElement from "./SkeletonElement";

export default function PaginationPanelSkeleton() {
  return (
    <>
      <SkeletonElement className="h-4 w-45 rounded-full"></SkeletonElement>
      <SkeletonElement className="h-8 w-60 rounded-full"></SkeletonElement>
    </>
  );
}
