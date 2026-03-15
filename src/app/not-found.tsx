import Link from "next/link";

import { IconLogo } from "../components/ui/Icons";

export default function NotFound() {
  return (
    <div className="bg-main-light flex h-full items-center justify-center">
      <div className="border-accent-light flex flex-col rounded-2xl border bg-white px-15 py-10 text-center">
        <IconLogo size={60} className="shadow-icon self-center" />
        <div className="my-8">
          <h3 className="text-heading tracking-base text-black-base leading-9 font-medium">
            404 - Page Not Found
          </h3>
          <p className="tracking-base text-black-accent mt-2 leading-4">
            This page does not exist.
          </p>
        </div>
        <div className="flex gap-x-8">
          <Link
            href="/home"
            className="text-white-base bg-black-secondary shadow-input rounded-large flex w-full cursor-pointer items-center justify-center px-1 py-0.5"
          >
            Home
          </Link>
          <Link
            href="/history"
            className="text-white-base bg-black-secondary shadow-input rounded-large flex w-full cursor-pointer items-center justify-center px-1 py-0.5"
          >
            History
          </Link>
        </div>
      </div>
    </div>
  );
}
