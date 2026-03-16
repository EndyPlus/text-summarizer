"use client";

import useVisiblePassword from "@/src/logic/hooks/ui-hooks/useVisiblePassword";
import useLogin from "@/src/logic/hooks/auth-hooks/useLogin";

import handleBlockSpacePress from "@/src/helpers/utils/handleBlockSpacePress";

import AuthError from "../modals/AuthNotify/AuthError";
import AuthSuccess from "../modals/AuthNotify/AuthSuccess";
import { IconEye } from "../ui/Icons";

export default function LoginForm() {
  const { passwordInputType, toggleShowPassword } = useVisiblePassword();

  const { handleSubmitForm, loginErrors, isSuccess, handleResetError } =
    useLogin();

  return (
    <>
      {loginErrors && (
        <AuthError
          heading="Login Error"
          onClose={handleResetError}
          errors={loginErrors}
        />
      )}

      {isSuccess && <AuthSuccess heading={"Login Successful"} />}

      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col gap-3.5 sm:gap-4"
      >
        <input
          className={`${loginErrors ? "border-red-main" : "border-border"} base-transition hover:border-black-base leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-xl border px-3 py-2.5 text-base`}
          type="text"
          name="username"
          placeholder="Username"
          onInput={handleBlockSpacePress}
        />
        <div className="relative">
          <input
            className={`${loginErrors ? "border-red-main" : "border-border"} base-transition hover:border-black-base leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base w-full rounded-xl border py-2.5 pr-9 pl-3 text-base select-none`}
            type={passwordInputType}
            name="password"
            placeholder="Password"
            onInput={handleBlockSpacePress}
          />
          <button
            type="button"
            className="base-transition absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer hover:scale-110 active:scale-90"
            onClick={toggleShowPassword}
            aria-label={
              passwordInputType === "password"
                ? "Show password"
                : "Hide password"
            }
          >
            <IconEye />
          </button>
        </div>
        <button
          disabled={isSuccess}
          onClick={handleResetError}
          className="bg-black-base tabulating-element active:bg-black-accent base-transition shadow-input leading-base tracking-base cursor-pointer rounded-xl px-3 py-2.5 text-sm font-medium text-white hover:scale-105 active:scale-95"
        >
          {isSuccess ? "Submitting..." : "Log in"}
        </button>
      </form>
    </>
  );
}
