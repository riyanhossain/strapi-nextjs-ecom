import Aside from "@/components/aside/aside";
import Main from "@/components/main";

export default function Home() {
  return (
    <section className="border-x border-border/60 container mx-auto flex-1 flex">
      <div className="grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] gap-4 flex-1">
        <Aside />
        <Main />
      </div>
    </section>
  );
}
