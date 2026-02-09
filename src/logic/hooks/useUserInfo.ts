import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useUserInfo() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    username: "username",
    pfp: "JD",
  });

  const session = useSession();

  useEffect(() => {
    if (session.data?.user) {
      setUserData(session.data?.user);
    }
  }, [session.data?.user]);

  return {
    name: userData?.name,
    username: userData?.username,
    pfp: userData?.name.replace(/[^A-Z]/g, ""),
  };
}
