import Link from "next/link";

import { IconCopy, IconError } from "./Icons";

interface Props {
  type: "empty" | "error";
}

export default function HistoryEmptyList({ type = "empty" }: Props) {
  return (
    <div className="gapy-4 m-auto flex flex-col items-center text-center">
      {type === "error" ? <IconError size={40} /> : <IconCopy size={40} />}

      <h3 className="text-heading tracking-base text-black-base leading-9 font-medium">
        {type === "error" ? "Error" : "Empty List"}
      </h3>
      {type === "error" ? (
        <p className="tracking-base text-black-accent mt-2 leading-4">
          Some error occured while loading posts. <br /> Please try to refresh a
          page or come back later.
        </p>
      ) : (
        <p className="tracking-base text-black-accent mt-2 leading-4">
          Move to{" "}
          <Link className="text-black-base font-medium" href="/home">
            Home Page
          </Link>{" "}
          for creating a new summary
          <br />
          or change a search parameters.
        </p>
      )}
    </div>
  );
}
