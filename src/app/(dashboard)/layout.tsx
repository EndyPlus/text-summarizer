import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

import { PropsLayout } from "@/src/helpers/types/types";

import AuthGuard from "@/src/components/features/AuthGuard";
import AsideBarDesktop from "@/src/components/ui/AsideBarDesktop";
import AsideBarTablet from "@/src/components/features/AsideBarTablet";

export default async function DashboardLayout({ children }: PropsLayout) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="bg-white-secondary flex h-full">
      <AuthGuard />
      {/* Dashboard Container */}
      <div className="border-accent-light xmd:flex-row xmd:h-[90dvh] mx-auto my-5 flex w-[95vw] flex-col overflow-hidden rounded-2xl border bg-white lg:w-[90vw] xl:w-[80vw]">
        <AsideBarDesktop />
        <AsideBarTablet />

        {children}
      </div>
    </div>
  );
}
