import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import AsideBar from "@/src/components/ui/AsideBar";
import AuthGuard from "@/src/components/features/AuthGuard";

import { PropsLayout } from "@/src/types/types";

export default async function DashboardLayout({ children }: PropsLayout) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  // mx-60 my-10
  return (
    <div className="bg-white-secondary flex h-full items-center justify-center">
      <AuthGuard />
      {/* Dashboard Container */}
      <div className="border-accent-light flex h-[90dvh] w-[80vw] overflow-hidden rounded-2xl border bg-white">
        <AsideBar />
        {children}
      </div>
    </div>
  );
}
