import Image from "next/image";

import iconLogout from "@/src/assets/icons/icon-logout.svg";

export default function LogoutButton() {
  return (
    <button className="w-5 cursor-pointer">
      <Image src={iconLogout} alt="log out button" width={20} height={20} />
    </button>
  );
}
