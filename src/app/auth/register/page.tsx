"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";

import iconLogo from "@/src/assets/icons/icon-logo.svg";
import iconEye from "@/src/assets/icons/icon-eye.svg";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  const [passwordInputType, setPasswordInputType] = useState<
    "password" | "text"
  >("password");

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(Object.fromEntries(formData.entries()));

    console.log("submit register");
  }

  function toggleShowPassword() {
    setPasswordInputType((prevType) => {
      return prevType === "password" ? "text" : "password";
    });
  }

  return (
    <div className="bg-main-light relative flex h-full flex-col items-center justify-center">
      <div className="border-accent-light flex flex-col rounded-2xl border bg-white p-10 text-center">
        <Image
          className="shadow-icon self-center"
          src={iconLogo}
          alt="logo icon"
          width={60}
          height={60}
          priority
        />
        <div className="py-6">
          <h3 className="text-heading tracking-base text-black-base leading-9 font-medium">
            Log in to Undetectable AI
          </h3>
          <p className="tracking-base text-black-accent mt-2 leading-4">
            Enter your username and password to continue
          </p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
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
        <button onClick={() => redirect("/auth/login")}>LOGIN</button>
      </div>
    </div>
  );
}
