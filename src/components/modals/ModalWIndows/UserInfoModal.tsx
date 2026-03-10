import { UserInfoData } from "@/src/types/types";
import ModalWrapper from "./ModalWrapper";

interface Props {
  onClose: () => void;
  sessionData: UserInfoData | null;
}

export default function UserInfoModal({ onClose, sessionData }: Props) {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="xs:w-80 flex w-60 flex-col items-center justify-center gap-y-4 rounded-lg bg-white p-5">
        <h3 className="auth-heading uppercase">User Info</h3>
        {sessionData === null && (
          <p className="auth-text">Some error occurred...</p>
        )}
        {sessionData !== null && (
          <ul className="flex flex-col gap-y-2">
            <li className="auth-text break-all">
              Account Id:{" "}
              <span className="text-black-base font-medium">
                {sessionData.id}
              </span>
            </li>
            <li className="auth-text break-all">
              Username:{" "}
              <span className="text-black-base font-medium">
                {sessionData.username}
              </span>
            </li>
            <li className="auth-text break-all">
              First Name:{" "}
              <span className="text-black-base font-medium">
                {sessionData.name.split(" ")[0]}
              </span>
            </li>
            <li className="auth-text break-all">
              Last Name:{" "}
              <span className="text-black-base font-medium">
                {sessionData.name.split(" ")[1]}
              </span>
            </li>
          </ul>
        )}
        <button onClick={onClose} className="close-button xs:w-2/3 mt-4">
          Close
        </button>
      </div>
    </ModalWrapper>
  );
}
