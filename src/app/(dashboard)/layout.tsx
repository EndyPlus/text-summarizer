import AsideBar from "@/src/components/ui/AsideBar";

import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default async function DashboardLayout({ children }: LayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  // mx-60 my-10
  return (
    <div className="bg-white-secondary flex h-full items-center justify-center">
      {/* Dashboard Container */}
      <div className="border-accent-light flex h-[90dvh] w-[80vw] overflow-hidden rounded-2xl border bg-white">
        <AsideBar />
        {children}
      </div>
    </div>
  );
}
