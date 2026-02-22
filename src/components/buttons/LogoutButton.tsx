"use client";

import { signOut } from "next-auth/react";
import { IconLogout } from "../ui/Icons";

export default function LogoutButton() {
  function handleSignOut() {
    signOut({ callbackUrl: "/auth/login" });
  }

  return (
    <button onClick={handleSignOut} className="ml-auto min-w-5 cursor-pointer">
      <IconLogout />
    </button>
  );
}
