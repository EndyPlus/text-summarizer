import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

import { useActionState } from "react";
import { registerFormAction } from "@/src/services/serverActions/formsActions";
import { useRouter } from "next/navigation";

export default function useRegistration() {
  const [signInError, setSignInError] = useState<null | string>(null);

  const handleResetError = () => setSignInError(null);

  const [state, formAction, isPending] = useActionState(registerFormAction, {
    error: null,
    success: false,
  });

  const router = useRouter();

  useEffect(() => {
    async function SignIn(credentials: { username: string; password: string }) {
      const { username, password } = credentials;

      const signInResult = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      console.log(signInResult);

      if (!signInResult?.ok) {
        console.log("SignIn error.");
        setSignInError("SignIn error.");
      } else {
        router.push("/home");
        console.log("SignIn success.");
      }
    }

    if (state.success && state.credentials) {
      SignIn(state.credentials);
    }

    if (state.error) {
      setSignInError(state.error);
    }
  }, [state, router]);

  return { signInError, handleResetError, formAction, isPending };
}
