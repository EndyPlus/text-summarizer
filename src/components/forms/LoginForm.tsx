"use client";

import Image from "next/image";

import iconEye from "@/src/assets/icons/icon-eye.svg";
import SignIn from "@/src/logic/lib/SignIn";
import useVisiblePassword from "@/src/logic/hooks/useVisiblePassword";

export default function LoginForm() {
  const { passwordInputType, toggleShowPassword } = useVisiblePassword();

  async function handleSubmitForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const credentials = Object.fromEntries(formData.entries());

    SignIn(credentials);
  }

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
      <input
        className="border-border leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base rounded-xl border px-3 py-2.5 text-sm"
        type="text"
        name="username"
        placeholder="Username"
      />
      <div className="relative">
        <input
          className="border-border leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base w-full rounded-xl border py-2.5 pr-9 pl-3 text-sm"
          type={passwordInputType}
          name="password"
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
      <button className="bg-black-base shadow-input leading-base tracking-base cursor-pointer rounded-xl px-3 py-2.5 text-sm font-medium text-white">
        Log in
      </button>
    </form>
  );
}
