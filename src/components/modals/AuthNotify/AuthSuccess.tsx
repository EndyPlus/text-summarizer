import AuthNotifyWrapper from "./AuthNotifyWrapper";

export default function AuthSuccess({ heading }) {
  return (
    <AuthNotifyWrapper onClose={() => {}} heading={heading} isSuccess={true}>
      <li className="black-accent leading-base text-sm whitespace-pre-line">
        You will be redirected shortly
      </li>
    </AuthNotifyWrapper>
  );
}
