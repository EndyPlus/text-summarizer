"use client";

import { redirect } from "next/navigation";

export default function AuthSwitchButton({
  redirectTo,
}: {
  redirectTo: string;
}) {
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
      className="tracking-base text-black-base mt-3.5 cursor-pointer leading-9 font-light"
    >
      {text}
    </button>
  );
}
