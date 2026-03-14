"use client";

import useUserInfo from "@/src/logic/hooks/features-hooks/useUserInfo";
import LogoutButton from "../buttons/LogoutButton";
import UserInfoSkeleton from "../skeletons/UserInfoSkeleton";
import UserInfoModal from "../modals/ModalWIndows/UserInfoModal";

export default function UserInfo() {
  const {
    isLoading,
    userData,
    sessionUserData,
    isOpenedModal,
    handleOpenInfo,
    handleCloseInfo,
  } = useUserInfo();

  return (
    <>
      {isOpenedModal && (
        <UserInfoModal
          onClose={handleCloseInfo}
          sessionData={sessionUserData}
        />
      )}

      <div className="z-901">
        {isLoading && <UserInfoSkeleton />}

        {!isLoading && (
          <div className="xmd:mb-4 flex items-center">
            <button
              onClick={handleOpenInfo}
              className="flex items-center"
              aria-label="Open user info button"
            >
              <div className="bg-pfp leading-base base-transition tracking-base mr-2 flex min-h-8 min-w-8 cursor-pointer items-center justify-center rounded-full text-sm text-white select-none hover:scale-105 active:scale-95">
                {userData?.pfp}
              </div>
              <div className="group mr-4 flex max-w-23 min-w-23 cursor-pointer flex-col items-start overflow-hidden">
                <h4 className="text-white-base base-transition leading-base tracking-base group-active:text-white-accent flex items-center justify-center truncate text-sm font-medium">
                  {userData?.name}
                </h4>
                <p className="text-white-accent group-active:text-white-accent base-transition group-hover:text-white-base text-small truncate leading-[133%]">
                  {userData?.username}
                </p>
              </div>
            </button>
            <LogoutButton />
          </div>
        )}
      </div>
    </>
  );
}
