import Link from "next/link";

import { IconLogo } from "../components/ui/Icons";

export default function NotFound() {
  return (
    <div className="bg-main-light flex h-full items-center justify-center">
      <div className="border-accent-light xs:w-auto xs:px-15 xs:py-10 flex w-[90vw] flex-col rounded-2xl border bg-white px-10 py-8 text-center">
        <IconLogo size={60} className="shadow-icon self-center" />
        <div className="my-8">
          <h3 className="xs:text-heading tracking-base text-black-base text-xl leading-9 font-medium">
            404 - Page Not Found
          </h3>
          <p className="tracking-base text-black-accent leading-base mt-2">
            This page does not exist.
          </p>
        </div>
        <Link
          href="/home"
          className="text-white-base bg-black-secondary leading-base tracking-base shadow-input rounded-large xs:w-full tabulating-element flex w-2/3 cursor-pointer items-center justify-center self-center px-2 py-1 font-medium capitalize"
        >
          Return back
        </Link>
      </div>
    </div>
  );
}
