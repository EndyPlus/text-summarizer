import Image from "next/image";

import iconLogout from "@/src/assets/icons/icon-logout.svg";
import iconPlus from "@/src/assets/icons/icon-plus.svg";

import AsideBarNavigation from "../features/AsideBarNavigation";

export default function AsideBar() {
  return (
    <aside className="bg-black-base min-w-fit">
      {/* User Container */}
      <div className="mx-5 mt-5 mb-5.5">
        <div className="mb-4 flex items-center">
          <div className="bg-pfp leading-base tracking-base mr-2 rounded-full px-1.5 py-1.5 text-white">
            JD
          </div>
          <div className="mr-17 flex flex-col items-start">
            <h4 className="text-white-base leading-base tracking-base flex items-center justify-center text-sm font-medium">
              John Doe
            </h4>
            <p className="text-white-accent text-small leading-[133%]">
              johndoe@email.com
            </p>
          </div>
          <button className="w-5 cursor-pointer">
            <Image
              src={iconLogout}
              alt="log out button"
              width={20}
              height={20}
            />
          </button>
        </div>
        <button className="bg-white-base shadow-input rounded-large flex w-full cursor-pointer items-center justify-center px-2.5 py-1.5">
          <Image src={iconPlus} alt="plus icon" width={16} height={16} />
          <p className="leading-base tracking-base text-black-secondary ml-1.5 text-sm font-medium">
            Summarize Text
          </p>
        </button>
      </div>
      <AsideBarNavigation />
    </aside>
  );
}
