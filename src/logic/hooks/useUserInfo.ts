import { UserInfoData } from "@/src/types/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useUserInfo() {
  const [sessionUserData, setSessionUserData] = useState<null | UserInfoData>(
    null,
  );
  const [userData, setUserData] = useState<null | UserInfoData>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  function handleCloseInfo() {
    setIsOpenedModal(false);
  }

  const session = useSession();

  useEffect(() => {
    function initUserData() {
      if (session.data?.user) {
        const { name, username, id } = session.data.user;
        setSessionUserData({ name, username, id });

        const displayName = name.split(" ")[0];

        const pfp = name
          ?.split(" ")
          .map((v) => v[0])
          .join("");

        setUserData({ name: displayName, username, pfp });
        setIsLoading(false);
      }
    }

    initUserData();
  }, [session]);

  function handleOpenInfo() {
    if (isLoading) return;

    setIsOpenedModal(true);
  }

  return {
    isLoading,
    userData,
    sessionUserData,
    isOpenedModal,
    handleOpenInfo,
    handleCloseInfo,
  };
}
