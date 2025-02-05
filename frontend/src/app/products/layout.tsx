import React from "react";

export default function ProductLayout(props: { children: React.ReactNode }) {
  return (
    <section className="border-x border-border/60 container mx-auto flex-1 flex">
      <div className="flex-1">{props.children}</div>
    </section>
  );
}
