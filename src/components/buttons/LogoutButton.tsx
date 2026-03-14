"use client";

import { signOut } from "next-auth/react";
import { IconLogout } from "../ui/Icons";

export default function LogoutButton() {
  function handleSignOut() {
    signOut({ callbackUrl: "/auth/login" });
  }

  return (
    <button
      onClick={handleSignOut}
      className="base-transition ml-auto min-w-5 cursor-pointer hover:scale-105 active:scale-95"
      aria-label="Logout button"
    >
      <IconLogout />
    </button>
  );
}
