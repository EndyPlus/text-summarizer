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

  return <button onClick={handleRedirectTo}>{redirectTo}</button>;
}
