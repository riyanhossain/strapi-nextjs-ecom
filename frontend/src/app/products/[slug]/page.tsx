import React from "react";
import { getSingleProduct } from "@/lib/queries";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await getSingleProduct(slug);

  if (!res.success) {
    return <div>Product not found</div>;
  }

  console.log(res);

  return <div className="grid grid-cols-1 lg:grid-cols-2">page {slug}</div>;
}
