import React from "react";
import { getCategories } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Aside() {
  const data = await getCategories();

  const categories = [
    {
      name: "All",
      link: "/",
    },
    ...data.map((category) => ({
      name: category.name,
      link: category.name.toLowerCase().replace(" ", "-"),
    })),
  ] as {
    name: string;
    link: string;
  }[];

  return (
    <aside className="p-3 border-r border-border/60">
      <h4 className="text-base font-semibold px-2 mb-2">Categories</h4>
      <ul className="grid gap-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={`/category/${category.link}`}>
              <Button
                variant="ghost"
                size="sm"
                align="start"
                className="w-full text-base font-medium"
              >
                {category.name}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
