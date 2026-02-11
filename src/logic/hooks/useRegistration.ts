import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

import { useActionState } from "react";
import { registerFormAction } from "@/src/services/serverActions/formsActions";
import { useRouter } from "next/navigation";

export default function useRegistration() {
  const router = useRouter();

  const [signInErrors, setSignInErrors] = useState(null);

  const signInInputErrors = signInErrors?.map((err) => err.inputName);

  const handleResetError = () => setSignInErrors(null);

  const [formState, formAction, isPending] = useActionState(
    registerFormAction,
    {
      errors: null,
      credentials: null,
    },
  );

  useEffect(() => {
    async function SignIn(credentials: { username: string; password: string }) {
      const { username, password } = credentials;

      try {
        const signInResult = await signIn("credentials", {
          username,
          password,
          redirect: false,
        });

        // console.log(signInResult);

        if (!signInResult?.ok) {
          throw new Error(`SignIn error: ${signInResult?.error}`);
        }

        // console.log("SignIn success.");

        router.push("/home");
      } catch (err) {
        setSignInErrors([err.message]);
      }
    }

    // console.log(formState);

    if (formState?.errors) {
      setSignInErrors(formState.errors);
    }

    if (!formState?.error && formState?.credentials) {
      SignIn(formState.credentials);
    }
  }, [formState, router]);

  return {
    signInInputErrors,
    signInErrors,
    handleResetError,
    formAction,
    isPending,
    formState,
  };
}
