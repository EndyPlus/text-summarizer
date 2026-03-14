import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import getErrorMessage from "@/src/helpers/utils/getErrorMessage";
import { InputError } from "@/src/helpers/types/types";
import useAuthRedirect from "./useAuthRedirect";

export default function useLogin() {
  const [loginErrors, setLoginErrors] = useState<null | InputError[]>(null);

  const handleResetError = () => setLoginErrors(null);

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
      const loginError = {
        inputName: null,
        errorsList: [getErrorMessage(err)],
      };
      setLoginErrors([loginError]);
    }
  }

  return { handleSubmitForm, loginErrors, isSuccess, handleResetError };
}
