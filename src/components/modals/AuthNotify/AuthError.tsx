import { Fragment } from "react/jsx-runtime";
import AuthNotifyWrapper from "./AuthNotifyWrapper";
import { AuthErrorNotifyProps } from "@/src/types/types";

export default function AuthError({
  onClose,
  heading,
  errors,
}: AuthErrorNotifyProps) {
  return (
    <AuthNotifyWrapper isSuccess={false} onClose={onClose} heading={heading}>
      {errors?.map((error) => {
        if (typeof error !== "string") {
          return (
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
          );
        }
        return (
          <li
            key={error}
            className="black-accent leading-base text-sm whitespace-pre-line"
          >
            {error}
          </li>
        );
      })}
    </AuthNotifyWrapper>
  );
}
