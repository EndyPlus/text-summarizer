import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useLogin() {
  const [loginError, setLoginError] = useState(null);

  const handleResetError = () => setLoginError(null);

  const router = useRouter();

  async function handleSubmitForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const credentials = Object.fromEntries(formData.entries());

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

      router.push("/home");
    } catch (err) {
      // console.log(err.message);
      setLoginError(err.message);
    }
  }

  return { handleSubmitForm, loginError, handleResetError };
}
