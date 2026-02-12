import AuthModalWrapper from "./AuthModalWrapper";

export default function AuthSuccess({ heading }) {
  return (
    <AuthModalWrapper onClose={() => {}} heading={heading} isSuccess={true}>
      <li className="black-accent leading-base text-sm whitespace-pre-line">
        You will be redirected shortly
      </li>
    </AuthModalWrapper>
  );
}
