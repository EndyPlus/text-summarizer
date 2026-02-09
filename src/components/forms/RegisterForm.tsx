"use client";

import Image from "next/image";

import iconEye from "@/src/assets/icons/icon-eye.svg";

import useVisiblePassword from "@/src/logic/hooks/useVisiblePassword";
import useRegistration from "@/src/logic/hooks/useRegistration";

export default function RegisterForm() {
  const { passwordInputType, toggleShowPassword } = useVisiblePassword();

  const { signInError, handleResetError, formAction, isPending } =
    useRegistration();

  return (
    <>
      {signInError && (
        <div className="absolute top-5">
          <p>{signInError}</p>
          <button className="cursor-pointer" onClick={handleResetError}>
            close
          </button>
        </div>
      )}
      <form action={formAction} className="flex flex-col gap-4">
        <input
          className="border-border leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-xl border px-3 py-2.5 text-sm"
          name="name"
          type="text"
          placeholder="Full name"
          required
        />
        <input
          className="border-border leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-xl border px-3 py-2.5 text-sm"
          name="username"
          type="text"
          placeholder="Username"
          required
        />
        <div className="relative">
          <input
            className="border-border leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base w-full rounded-xl border py-2.5 pr-9 pl-3 text-sm"
            name="password"
            type={passwordInputType}
            placeholder="Password"
            required
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
          className="border-border leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base w-full rounded-xl border py-2.5 pr-9 pl-3 text-sm"
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          required
        />

        <button
          disabled={isPending}
          className="bg-black-base shadow-input leading-base tracking-base cursor-pointer rounded-xl px-3 py-2.5 text-sm font-medium text-white"
        >
          {isPending ? "Submitting..." : "Registrate"}
        </button>
      </form>
    </>
  );
}
