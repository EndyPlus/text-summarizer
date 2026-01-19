import AsideBar from "@/components/AsideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // mx-60 my-10
  return (
    <div className="flex h-full items-center justify-center bg-[#f7f7f8]">
      {/* Dashboard Container */}
      <div className="border-accent-light flex h-[90dvh] w-[80vw] overflow-hidden rounded-2xl border bg-white">
        <AsideBar />
        {children}
      </div>
    </div>
  );
}
