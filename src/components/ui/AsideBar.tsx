import SummarizeButton from "../buttons/SummarizeButton";
import AsideBarNavigation from "../features/AsideBarNavigation";
import UserInfo from "./UserInfo";

export default function AsideBar() {
  return (
    <aside className="bg-black-base min-w-fit">
      {/* User Container */}
      <div className="mx-5 mt-5 mb-5.5">
        <UserInfo />

        <SummarizeButton />
      </div>

      <AsideBarNavigation />
    </aside>
  );
}
