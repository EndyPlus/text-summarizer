import LogoutButton from "../buttons/LogoutButton";
import SummarizeButton from "../buttons/SummarizeButton";
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

          <LogoutButton />
        </div>

        <SummarizeButton />
      </div>

      <AsideBarNavigation />
    </aside>
  );
}
