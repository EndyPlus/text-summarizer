import { Fragment } from "react/jsx-runtime";
import AuthNotifyWrapper from "./AuthNotifyWrapper";
import { AuthErrorNotifyProps } from "@/src/helpers/types/types";

export default function AuthError({
  onClose,
  heading,
  errors,
}: AuthErrorNotifyProps) {
  return (
    <AuthNotifyWrapper isSuccess={false} onClose={onClose} heading={heading}>
      {errors?.map((error) => (
        <Fragment key={error.inputName}>
          {error.errorsList.map((err) => (
            <li
              key={err}
              className="black-accent leading-base text-sm whitespace-pre-line"
            >
              {err}
            </li>
          ))}
        </Fragment>
      ))}
    </AuthNotifyWrapper>
  );
}
