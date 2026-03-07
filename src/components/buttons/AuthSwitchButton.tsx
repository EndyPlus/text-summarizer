"use client";

import { redirect } from "next/navigation";

interface Props {
  redirectTo: string;
}

export default function AuthSwitchButton({ redirectTo }: Props) {
  function handleRedirectTo() {
    redirect(`/auth/${redirectTo}`);
  }

  const text =
    redirectTo === "login"
      ? "Already have an account?"
      : "Do not have an account yet?";

  return (
    <button
      onClick={handleRedirectTo}
      className="tracking-base text-black-base mt-2.5 cursor-pointer text-sm leading-9 font-light sm:mt-3.5 sm:text-base"
    >
      {text}
    </button>
  );
}
