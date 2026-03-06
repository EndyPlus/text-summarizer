import { Fragment } from "react/jsx-runtime";
import AuthNotifyWrapper from "./AuthNotifyWrapper";
import { AuthErrorNotifyProps } from "@/src/types/types";
import { useEffect } from "react";
import { AUTH_ERROR_NOTIFY_TIME } from "@/src/utils/vars";

export default function AuthError({
  onClose,
  heading,
  errors,
}: AuthErrorNotifyProps) {
  useEffect(() => {
    const errorNotifyTimeout = setTimeout(() => {
      onClose();
    }, AUTH_ERROR_NOTIFY_TIME);

    return () => clearInterval(errorNotifyTimeout);
  }, [onClose]);

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
