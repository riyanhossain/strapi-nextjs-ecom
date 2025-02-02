import React from "react";
import { getCategories } from "@/components/aside/actions";

export default async function Aside() {
  const data = await getCategories();

  console.log(data);
  return <aside className="p-5">aside</aside>;
}
