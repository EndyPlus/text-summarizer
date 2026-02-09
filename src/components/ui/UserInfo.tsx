"use client";

import useUserInfo from "@/src/logic/hooks/useUserInfo";
import LogoutButton from "../buttons/LogoutButton";

export default function UserInfo() {
  const { name, username, pfp } = useUserInfo();

  return (
    <div className="mb-4 flex items-center">
      <div className="bg-pfp leading-base tracking-base mr-2 rounded-full px-1.5 py-1.5 text-white">
        {pfp}
      </div>
      <div className="mr-17 flex flex-col items-start">
        <h4 className="text-white-base leading-base tracking-base flex items-center justify-center text-sm font-medium">
          {name}
        </h4>
        <p className="text-white-accent text-small leading-[133%]">
          {username}
        </p>
      </div>

      <LogoutButton />
    </div>
  );
}
