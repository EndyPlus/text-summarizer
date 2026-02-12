import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAuthRedirect() {
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!isSuccess) return;

    const redirectTimeOut = setTimeout(() => {
      router.push("/home");
    }, 1000);

    return () => clearTimeout(redirectTimeOut);
  }, [router, isSuccess]);

  return { isSuccess, setIsSuccess };
}
