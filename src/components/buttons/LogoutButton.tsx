"use client";

import Image from "next/image";

import { signOut } from "next-auth/react";

import iconLogout from "@/src/assets/icons/icon-logout.svg";

export default function LogoutButton() {
  function handleSignOut() {
    signOut({ callbackUrl: "/auth/login" });
  }

  return (
    <button onClick={handleSignOut} className="w-5 cursor-pointer">
      <Image src={iconLogout} alt="log out button" width={20} height={20} />
    </button>
  );
}
