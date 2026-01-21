"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";

import iconSuccess from "@/src/assets/icons/icon-success.svg";
import iconError from "@/src/assets/icons/icon-error.svg";
import iconClose from "@/src/assets/icons/icon-close.svg";
import iconLogo from "@/src/assets/icons/icon-logo.svg";
import iconEye from "@/src/assets/icons/icon-eye.svg";

type Message = {
  id: number;
  header: string;
  message: string;
};

const messages: Message[] = [
  {
    id: 0,
    header: "Incorrect Password",
    message: `The password that you’ve entered is incorrect. \nPlease try again.`,
  },
  {
    id: 1,
    header: "Invalid Username",
    message: "The username you entered does not exist.",
  },
  {
    id: 2,
    header: "Login Successful",
    message: "You will be redirected shortly",
  },
];

export default function LoginPage() {
  const [message, setMessage] = useState<Message | null>(messages[0]);
  const [inputType, setInputType] = useState<"password" | "text">("password");

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault();
    setMessage(messages[2]);
  }

  function toggleShowPassword() {
    setInputType((prevType) => {
      return prevType === "password" ? "text" : "password";
    });
  }

  return (
    <div className="bg-main-light relative flex h-full flex-col items-center justify-center">
      {/* INFO WINDOW */}
      {message && (
        <div
          className={`absolute top-9 flex items-start gap-3 border p-4 ${
            message.id === 2
              ? "bg-success-main border-success-accent"
              : "bg-error-main border-error-accent"
          } tracking-base shadow-info-main rounded-xl`}
        >
          <Image
            src={message.id === 2 ? iconSuccess : iconError}
            alt="warning icon"
            width={20}
            height={20}
          />
          <div>
            <h4 className="text-black-base mb-2 font-medium">
              {message.header}
            </h4>
            <p className="black-accent leading-base text-sm whitespace-pre-line">
              {message.message}
            </p>
          </div>
          {message.id !== 2 && (
            <button onClick={() => setMessage(null)} className="cursor-pointer">
              <Image src={iconClose} alt="close icon" width={20} height={20} />
            </button>
          )}
        </div>
      )}
      {/* AUTH */}
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
            type="text"
            placeholder="Username"
          />
          <div className="relative">
            <input
              className="border-border leading-base tracking-base placeholder:text-placeholder shadow-input text-black-base w-full rounded-xl border py-2.5 pr-9 pl-3 text-sm"
              type={inputType}
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
      </div>
    </div>
  );
}
