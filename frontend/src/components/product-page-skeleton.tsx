import React from "react";
import { SkeletonCard } from "@/components/skeleton-card";

export default function ProductPageSkeleton() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 24 }).map((_, index) => (
        <li key={index}>
          <SkeletonCard />
        </li>
      ))}
    </ul>
  );
}
