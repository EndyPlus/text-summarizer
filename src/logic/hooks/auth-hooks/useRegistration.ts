import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

import { useActionState } from "react";
import { registerFormAction } from "@/src/services/serverActions/formsActions";
import { useRouter } from "next/navigation";
import { InputError, RegisterFormActionState } from "@/src/helpers/types/types";
import getErrorMessage from "@/src/helpers/utils/getErrorMessage";
import useAuthRedirect from "./useAuthRedirect";

export default function useRegistration() {
  const router = useRouter();

  const [signInErrors, setSignInErrors] = useState<null | InputError[]>(null);

  const { isSuccess, setIsSuccess } = useAuthRedirect();

  const signInInputErrors = signInErrors?.map((err) => err.inputName);

  const handleResetError = () => setSignInErrors(null);

  const initialState: RegisterFormActionState = {
    success: isSuccess,
    errors: null,
    credentials: null,
  };

  const [formState, formAction, isPending] = useActionState(
    registerFormAction,
    initialState,
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

        if (!signInResult?.ok) {
          throw new Error(`Authentication error: ${signInResult?.error}`);
        }

        setIsSuccess(true);
      } catch (err) {
        setSignInErrors([
          {
            inputName: null,
            errorsList: [getErrorMessage(err)],
          },
        ]);
      }
    }

    if (!formState?.success && formState?.errors) {
      setSignInErrors(formState.errors);
    }

    if (formState?.success && formState?.credentials) {
      SignIn(formState.credentials);
    }
  }, [formState, router, setIsSuccess]);

  return {
    signInInputErrors,
    signInErrors,
    isSuccess,
    handleResetError,
    formAction,
    isPending,
    formState,
  };
}
