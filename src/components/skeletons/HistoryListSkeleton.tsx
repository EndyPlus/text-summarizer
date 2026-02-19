export default function HistoryListSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, id) => (
        <li
          key={id}
          className="border-border flex justify-between gap-4 rounded-2xl border bg-white py-5 pr-5.75 pl-5"
        >
          <div className="flex grow flex-col">
            <div className="mb-1 h-4 w-[95%] rounded-full bg-red-500"></div>
            <div className="h-4 w-[95%] rounded-full bg-red-500"></div>

            <ul className="mt-4 flex gap-2">
              <li className="h-8 w-40 rounded-lg bg-red-500"> </li>
              <li className="h-8 w-20 rounded-lg bg-red-500"> </li>
              <li className="h-8 w-30 rounded-lg bg-red-500"> </li>
            </ul>
          </div>

          <div className="rounded-large h-8 w-8 bg-red-500"></div>
        </li>
      ))}
    </>
  );
}
