import { useState } from "react";

export default function useVisiblePassword() {
  const [passwordInputType, setPasswordInputType] = useState<
    "password" | "text"
  >("password");

  function toggleShowPassword() {
    setPasswordInputType((prevType) => {
      return prevType === "password" ? "text" : "password";
    });
  }

  return { passwordInputType, toggleShowPassword };
}
