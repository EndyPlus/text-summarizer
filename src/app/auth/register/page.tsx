import AuthSwitchButton from "@/src/components/buttons/AuthSwitchButton";
import RegisterForm from "@/src/components/forms/RegisterForm";
import { IconLogo } from "@/src/components/ui/Icons";

export default function RegisterPage() {
  return (
    <div className="auth-page-container">
      <div className="auth-container">
        <IconLogo className="shadow-icon self-center" size={60} />

        <div className="py-6">
          <h3 className="auth-heading">Sign up for Undetectable AI</h3>
          <p className="auth-text">Fill the inputs to get started</p>
        </div>

        <RegisterForm />

        <AuthSwitchButton redirectTo="login" />
      </div>
    </div>
  );
}
