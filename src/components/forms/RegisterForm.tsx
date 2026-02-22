"use client";

import useVisiblePassword from "@/src/logic/hooks/useVisiblePassword";
import useRegistration from "@/src/logic/hooks/useRegistration";
import handleBlockSpacePress from "@/src/utils/handleBlockSpacePress";
import AuthError from "../modals/AuthNotify/AuthError";
import AuthSuccess from "../modals/AuthNotify/AuthSuccess";
import { IconEye } from "../ui/Icons";

export default function RegisterForm() {
  const { passwordInputType, toggleShowPassword } = useVisiblePassword();

  const {
    signInInputErrors,
    signInErrors,
    isSuccess,
    handleResetError,
    formAction,
    isPending,
    formState,
  } = useRegistration();

  return (
    <>
      {signInErrors?.length > 0 && (
        <AuthError
          heading="Registration Error"
          onClose={handleResetError}
          errorsList={signInErrors}
        />
      )}

      {isSuccess && <AuthSuccess heading={"Registration Successful"} />}

      <form action={formAction} className="flex flex-col gap-4">
        <div className="flex gap-x-4">
          <input
            className={`${signInInputErrors?.includes("firstName") ? "border-red-500" : "border-border"} leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-xl border px-3 py-2.5 text-sm`}
            name="firstName"
            type="text"
            placeholder="First name"
            defaultValue={formState.firstName}
            onInput={handleBlockSpacePress}
          />
          <input
            className={`${signInInputErrors?.includes("lastName") ? "border-red-500" : "border-border"} leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-xl border px-3 py-2.5 text-sm`}
            name="lastName"
            type="text"
            placeholder="Last name"
            defaultValue={formState.lastName}
            onInput={handleBlockSpacePress}
          />
        </div>
        <input
          className={`${signInInputErrors?.includes("username") ? "border-red-500" : "border-border"} leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-xl border px-3 py-2.5 text-sm`}
          name="username"
          type="text"
          placeholder="Username"
          defaultValue={formState.username}
          onInput={handleBlockSpacePress}
        />
        <div className="relative">
          <input
            className={`${signInInputErrors?.includes("password") ? "border-red-500" : "border-border"} leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base w-full rounded-xl border py-2.5 pr-9 pl-3 text-sm`}
            name="password"
            type={passwordInputType}
            placeholder="Password"
            defaultValue={formState.password}
            onInput={handleBlockSpacePress}
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
            onClick={toggleShowPassword}
          >
            <IconEye />
          </button>
        </div>
        <input
          className={`${signInInputErrors?.includes("confirmPassword") ? "border-red-500" : "border-border"} leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base w-full rounded-xl border py-2.5 pr-9 pl-3 text-sm`}
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          defaultValue={formState.confirmPassword}
          onInput={handleBlockSpacePress}
        />

        <button
          onClick={handleResetError}
          disabled={isPending || isSuccess}
          className="bg-black-base shadow-input leading-base tracking-base cursor-pointer rounded-xl px-3 py-2.5 text-sm font-medium text-white"
        >
          {isPending || isSuccess ? "Submitting..." : "Registrate"}
        </button>
      </form>
    </>
  );
}
