import LoginForm from "@/src/components/forms/LoginForm";

import AuthSwitchButton from "@/src/components/buttons/AuthSwitchButton";
import { IconLogo } from "@/src/components/ui/Icons";

export default function LoginPage() {
  return (
    <div className="bg-main-light relative flex h-full flex-col items-center justify-center">
      {/* INFO WINDOW HERE*/}

      <div className="border-accent-light flex flex-col rounded-2xl border bg-white p-10 text-center">
        <IconLogo className="shadow-icon self-center" size={60} />
        <div className="py-6">
          <h3 className="text-heading tracking-base text-black-base leading-9 font-medium">
            Log in to Undetectable AI
          </h3>
          <p className="tracking-base text-black-accent mt-2 leading-4">
            Enter your username and password to continue
          </p>
        </div>

        <LoginForm />

        <AuthSwitchButton redirectTo="register" />
      </div>
    </div>
  );
}
