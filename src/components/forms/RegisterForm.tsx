"use client";

import Image from "next/image";

import { useState } from "react";

import iconEye from "@/src/assets/icons/icon-eye.svg";

import { signIn } from "next-auth/react";
import {
  createUser,
  findUser,
} from "@/src/services/serverActions/prismaActions";

export default function RegisterForm() {
  const [passwordInputType, setPasswordInputType] = useState<
    "password" | "text"
  >("password");

  function toggleShowPassword() {
    setPasswordInputType((prevType) => {
      return prevType === "password" ? "text" : "password";
    });
  }

  async function handleSubmitForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const { name, username, password, confirmPassword } = Object.fromEntries(
      formData.entries(),
    );

    try {
      const res = await findUser(username);

      if (res) {
        throw new Error("User is already existing.");
      }

      if (password !== confirmPassword) {
        throw new Error("Passwords are not matching.");
      }

      const newUser = await createUser({
        name,
        username,
        password,
      });

      if (!newUser) {
        throw new Error("Failed user registration.");
      }

      const signInResult = await signIn("credentials", {
        username: newUser.username,
        password: newUser.password,
        redirect: true,
        callbackUrl: "/home",
      });

      console.log(signInResult);

      if (!signInResult?.ok) {
        throw new Error("Failed user authorization.");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
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
        type={passwordInputType}
        name="confirmPassword"
        placeholder="Confirm password"
        required
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
