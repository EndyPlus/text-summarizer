"use client";

import useUserInfo from "@/src/logic/hooks/useUserInfo";
import LogoutButton from "../buttons/LogoutButton";
import UserInfoSkeleton from "../skeletons/UserInfoSkeleton";

export default function UserInfo() {
  const { userData, isLoading } = useUserInfo();

  return (
    <div className="xmd:mb-4 flex items-center">
      {isLoading && <UserInfoSkeleton />}
      {!isLoading && (
        <>
          <div className="bg-pfp leading-base tracking-base mr-2 flex min-h-8 min-w-8 items-center justify-center rounded-full text-sm text-white">
            {userData?.pfp}
          </div>
          <div className="mr-4 flex flex-col items-start overflow-hidden">
            <h4 className="text-white-base leading-base tracking-base flex items-center justify-center truncate text-sm font-medium">
              {userData?.name}
            </h4>
            <p className="text-white-accent text-small truncate leading-[133%]">
              {userData?.username}
            </p>
          </div>
          <LogoutButton />
        </>
      )}
    </div>
  );
}
