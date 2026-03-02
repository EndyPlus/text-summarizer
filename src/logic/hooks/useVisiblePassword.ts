import { useState } from "react";

type PasswordInputType = "password" | "text";

export default function useVisiblePassword() {
  const [passwordInputType, setPasswordInputType] =
    useState<PasswordInputType>("password");

  function toggleShowPassword() {
    setPasswordInputType((prevType) => {
      return prevType === "password" ? "text" : "password";
    });
  }

  return { passwordInputType, toggleShowPassword };
}
