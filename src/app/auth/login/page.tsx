import LoginForm from "@/src/components/forms/LoginForm";

import AuthSwitchButton from "@/src/components/buttons/AuthSwitchButton";
import { IconLogo } from "@/src/components/ui/Icons";

export default function LoginPage() {
  return (
    <div className="auth-page-container">
      <div className="auth-container">
        <IconLogo className="shadow-icon self-center" size={60} />
        <div className="py-6">
          <h3 className="auth-heading">Log in to Undetectable AI</h3>
          <p className="auth-text">
            Enter your username and password to continue
          </p>
        </div>

        <LoginForm />

        <AuthSwitchButton redirectTo="register" />
      </div>
    </div>
  );
}
