import Image from "next/image";

import iconLogo from "@/src/assets/icons/icon-logo.svg";

import AuthSwitchButton from "@/src/components/buttons/AuthSwitchButton";
import RegisterForm from "@/src/components/forms/RegisterForm";

export default function RegisterPage() {
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

        <RegisterForm />

        <AuthSwitchButton redirectTo="login" />
      </div>
    </div>
  );
}
