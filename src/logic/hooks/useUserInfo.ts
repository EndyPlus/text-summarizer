import { UserInfoData } from "@/src/types/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useUserInfo() {
  const [userData, setUserData] = useState<null | UserInfoData>(null);
  const [isLoading, setIsLoading] = useState(true);

  const session = useSession();

  useEffect(() => {
    function initUserData() {
      if (session.data?.user) {
        const { name, username } = session.data.user;
        const pfp = name
          ?.split(" ")
          .map((v) => v[0])
          .join("");

        setUserData({ name, username, pfp });
        setIsLoading(false);
      }
    }

    initUserData();
  }, [session.data?.user]);

  return {
    userData,
    isLoading,
  };
}
