import React from "react";
import { getTermsAndCondtionsPage } from "./actions";
import MarkdownRenderer from "@/components/markdown-renderer";

export default async function TermsAndCondtions() {
  const { content } = await getTermsAndCondtionsPage();

  return (
    <section className="container mx-auto px-4 py-8 lg:border-x border-border/60">
      <div className="prose mx-auto max-w-2xl ">
        <MarkdownRenderer markdown={content} />
      </div>
    </section>
  );
}
