import { signIn } from "next-auth/react";

export default async function SignIn(credentials: {
  username: string;
  password: string;
}) {
  const { username, password } = credentials;

  const signInResult = await signIn("credentials", {
    username,
    password,
    redirect: true,
    callbackUrl: "/home",
  });

  console.log(signInResult);

  if (!signInResult?.ok) {
    console.log("Sign in error.");
  }

  // return signInResult;
}
