import React from "react";
import { getPolicyPage } from "@/lib/queries";
import MarkdownRenderer from "@/components/markdown-renderer";

export default async function PrivacyAndPolicy() {
  const { content } = await getPolicyPage();
  return (
    <section className="container mx-auto px-4 py-8 lg:border-x border-border/60">
      <div className="prose mx-auto max-w-2xl ">
        <MarkdownRenderer markdown={content} />
      </div>
    </section>
  );
}
