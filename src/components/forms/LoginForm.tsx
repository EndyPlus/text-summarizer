"use client";

import Image from "next/image";

import iconEye from "@/src/assets/icons/icon-eye.svg";
import useVisiblePassword from "@/src/logic/hooks/useVisiblePassword";
import useLogin from "@/src/logic/hooks/useLogin";
import handleBlockSpacePress from "@/src/utils/handleBlockSpacePress";
import AuthError from "../modals/AuthNotify/AuthError";
import AuthSuccess from "../modals/AuthNotify/AuthSuccess";

export default function LoginForm() {
  const { passwordInputType, toggleShowPassword } = useVisiblePassword();

  const { handleSubmitForm, loginError, isSuccess, handleResetError } =
    useLogin();

  return (
    <>
      {loginError && (
        <AuthError
          heading="Login Error"
          onClose={handleResetError}
          errorsList={[loginError]}
        />
      )}

      {isSuccess && <AuthSuccess heading={"Login Successful"} />}

      <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
        <input
          className={`${loginError ? "border-red-500" : "border-border"} leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-xl border px-3 py-2.5 text-sm`}
          type="text"
          name="username"
          placeholder="Username"
          onInput={handleBlockSpacePress}
        />
        <div className="relative">
          <input
            className={`${loginError ? "border-red-500" : "border-border"} leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base w-full rounded-xl border py-2.5 pr-9 pl-3 text-sm`}
            type={passwordInputType}
            name="password"
            placeholder="Password"
            onInput={handleBlockSpacePress}
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
            onClick={toggleShowPassword}
          >
            <Image
              src={iconEye}
              alt="toggle show password icon"
              width={20}
              height={20}
              draggable={false}
            />
          </button>
        </div>
        <button
          disabled={isSuccess}
          onClick={handleResetError}
          className="bg-black-base shadow-input leading-base tracking-base cursor-pointer rounded-xl px-3 py-2.5 text-sm font-medium text-white"
        >
          {isSuccess ? "Submitting..." : "Log in"}
        </button>
      </form>
    </>
  );
}
