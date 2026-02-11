"use client";

import Image from "next/image";

import iconEye from "@/src/assets/icons/icon-eye.svg";

import useVisiblePassword from "@/src/logic/hooks/useVisiblePassword";
import useRegistration from "@/src/logic/hooks/useRegistration";
import { Fragment } from "react/jsx-runtime";
import handleBlockSpacePress from "@/src/utils/handleBlockSpacePress";

export default function RegisterForm() {
  const { passwordInputType, toggleShowPassword } = useVisiblePassword();

  const {
    signInInputErrors,
    signInErrors,
    handleResetError,
    formAction,
    isPending,
    formState,
  } = useRegistration();

  // console.log(signInErrors);
  // console.log(signInInputErrors);

  return (
    <>
      {signInErrors?.length > 0 && (
        <div className="absolute top-5">
          <ul>
            {signInErrors?.map((error) => {
              if (typeof error !== "string") {
                return (
                  <Fragment key={error.inputName}>
                    {error.errorsList.map((err) => (
                      <li key={err}>{err}</li>
                    ))}
                  </Fragment>
                );
              } else {
                return <li key={error}>{error}</li>;
              }
            })}
          </ul>
          <button className="cursor-pointer" onClick={handleResetError}>
            close
          </button>
        </div>
      )}

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
            <Image
              src={iconEye}
              alt="toggle show password icon"
              width={20}
              height={20}
              draggable={false}
            />
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
          disabled={isPending}
          className="bg-black-base shadow-input leading-base tracking-base cursor-pointer rounded-xl px-3 py-2.5 text-sm font-medium text-white"
        >
          {isPending ? "Submitting..." : "Registrate"}
        </button>
      </form>
    </>
  );
}
