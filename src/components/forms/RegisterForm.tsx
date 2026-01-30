"use client";

import Image from "next/image";

import { useState } from "react";

import iconEye from "@/src/assets/icons/icon-eye.svg";

export default function RegisterForm() {
  const [passwordInputType, setPasswordInputType] = useState<
    "password" | "text"
  >("password");

  function toggleShowPassword() {
    setPasswordInputType((prevType) => {
      return prevType === "password" ? "text" : "password";
    });
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <input
        className="border-border leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-xl border px-3 py-2.5 text-sm"
        name="username"
        type="text"
        placeholder="Username"
      />
      <div className="relative">
        <input
          className="border-border leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base w-full rounded-xl border py-2.5 pr-9 pl-3 text-sm"
          name="password"
          type={passwordInputType}
          placeholder="Password"
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
        type={passwordInputType}
        name="confirmPassword"
        placeholder="Confirm password"
      />

      <button
        // disabled={isPending}
        className="bg-black-base shadow-input leading-base tracking-base cursor-pointer rounded-xl px-3 py-2.5 text-sm font-medium text-white"
      >
        {/* {isPending ? "Submitting..." : "Registrate"} */}
        Registrate
      </button>
    </form>
  );
}
