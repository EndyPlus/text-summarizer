"use client";

import useUserInfo from "@/src/logic/hooks/useUserInfo";
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
      <div className="xmd:mb-4 flex items-center">
        {isLoading && <UserInfoSkeleton />}

        {!isLoading && (
          <>
            <div className="bg-pfp leading-base tracking-base mr-2 flex min-h-8 min-w-8 items-center justify-center rounded-full text-sm text-white select-none">
              {userData?.pfp}
            </div>
            <button
              onClick={handleOpenInfo}
              className="mr-4 flex max-w-23 min-w-23 cursor-pointer flex-col items-start overflow-hidden"
            >
              <h4 className="text-white-base leading-base tracking-base flex items-center justify-center truncate text-sm font-medium">
                {userData?.name}
              </h4>
              <p className="text-white-accent text-small truncate leading-[133%]">
                {userData?.username}
              </p>
            </button>
            <LogoutButton />
          </>
        )}
      </div>
    </>
  );
}
