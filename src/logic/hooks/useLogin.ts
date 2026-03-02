import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import useAuthRedirect from "./useAuthRedirect";
import getErrorMessage from "@/src/utils/getErrorMessage";

export default function useLogin() {
  const [loginError, setLoginError] = useState<null | string>(null);

  const handleResetError = () => setLoginError(null);

  const { isSuccess, setIsSuccess } = useAuthRedirect();

  async function handleSubmitForm(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const credentials = Object.fromEntries(formData.entries()) as Record<
      "username" | "password",
      string
    >;

    const { username, password } = credentials;

    try {
      if (username.length === 0 || password.length === 0) {
        throw new Error("All fields must be filled.");
      }

      const signInResult = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      console.log(signInResult);

      if (!signInResult?.ok) {
        if (signInResult?.status === 401) {
          throw new Error("Wrong username or password.");
        } else {
          throw new Error("Sign in error.");
        }
      }

      setIsSuccess(true);
    } catch (err) {
      setLoginError(getErrorMessage(err));
    }
  }

  return { handleSubmitForm, loginError, isSuccess, handleResetError };
}
