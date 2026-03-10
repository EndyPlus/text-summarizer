import SkeletonElement from "./SkeletonElement";

export default function UserInfoSkeleton() {
  return (
    <>
      <SkeletonElement className="mr-2 min-h-8 min-w-8 rounded-full" />
      <div className="mr-4 flex w-23 flex-col items-start gap-y-2 overflow-hidden">
        <SkeletonElement className="h-4 w-23 rounded-full" />
        <SkeletonElement className="h-3 w-12 rounded-full" />
      </div>
      <SkeletonElement className="ml-auto min-h-5 min-w-5 cursor-pointer rounded-full" />
    </>
  );
}
