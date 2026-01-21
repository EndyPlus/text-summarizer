import AsideBar from "@/src/components/AsideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
