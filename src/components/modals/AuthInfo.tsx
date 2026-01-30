"use client";

import Image from "next/image";

import { useState } from "react";

import iconSuccess from "@/src/assets/icons/icon-success.svg";
import iconError from "@/src/assets/icons/icon-error.svg";
import iconClose from "@/src/assets/icons/icon-close.svg";

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

export default function AuthInfo() {
  const [message, setMessage] = useState<Message | null>(messages[0]);

  return (
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
        <h4 className="text-black-base mb-2 font-medium">{message.header}</h4>
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
  );
}
