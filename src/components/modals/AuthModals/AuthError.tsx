import { Fragment } from "react/jsx-runtime";
import AuthModalWrapper from "./AuthModalWrapper";

export default function AuthError({ onClose, heading, errorsList }) {
  return (
    <AuthModalWrapper onClose={onClose} heading={heading}>
      {errorsList?.map((error) => {
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
        } else {
          return (
            <li
              key={error}
              className="black-accent leading-base text-sm whitespace-pre-line"
            >
              {error}
            </li>
          );
        }
      })}
    </AuthModalWrapper>
  );
}
