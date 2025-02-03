import Aside from "@/components/aside";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-x border-border/60 container mx-auto flex-1 flex">
      <div className="grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] flex-1">
        <Aside />
        {children}
      </div>
    </div>
  );
}
