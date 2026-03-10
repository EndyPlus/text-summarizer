import SummarizeButton from "../buttons/SummarizeButton";
import AsideBarNavigation from "../features/AsideBarNavigation";
import UserInfo from "../features/UserInfo";

export default function AsideBarDesktop() {
  return (
    <aside className="bg-black-base xmd:flex hidden w-70 flex-col justify-stretch p-0">
      <div className="m-5">
        <UserInfo />

        <SummarizeButton />
      </div>

      <AsideBarNavigation />
    </aside>
  );
}
