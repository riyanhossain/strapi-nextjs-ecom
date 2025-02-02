"use client";

import React from "react";
// import ProductCard from "@/components/product-card";
// import { PaginationComp } from "@/components/pagination-component";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ProductsPage } from "@/components/product-page";

// Create a client
const queryClient = new QueryClient();

export default function Home() {
  // if (!res.success) {
  //   return <div>Failed to fetch products</div>;
  // }

  // const products = res.data?.data;

  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage />
    </QueryClientProvider>
  );
}

