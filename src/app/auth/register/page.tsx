import AuthSwitchButton from "@/src/components/buttons/AuthSwitchButton";
import RegisterForm from "@/src/components/forms/RegisterForm";
import { IconLogo } from "@/src/components/ui/Icons";

export default function RegisterPage() {
  return (
    <div className="bg-main-light relative flex h-full flex-col items-center justify-center">
      <div className="border-accent-light flex flex-col rounded-2xl border bg-white p-10 text-center">
        <IconLogo className="shadow-icon self-center" size={60} />

        <div className="py-6">
          <h3 className="text-heading tracking-base text-black-base leading-9 font-medium">
            Sign up for Undetectable AI
          </h3>
          <p className="tracking-base text-black-accent mt-2 leading-4">
            Fill the inputs to get started
          </p>
        </div>

        <RegisterForm />

        <AuthSwitchButton redirectTo="login" />
      </div>
    </div>
  );
}
