"use client";

import { PaginationComp } from "@/components/pagination-component";
import ProductCard from "@/components/product-card";
import { getProducts } from "@/lib/queries";
import { Product, Pagination } from "@/types";
import React from "react";
import ProductPageSkeleton from "@/components/product-page-skeleton";

export function ProductsPage({ category }: { category?: string }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [data, setData] = React.useState<{
    data: Product[];
    meta: {
      pagination: Pagination;
    };
  } | null>(null);
  // Queries
  React.useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts({
        page: currentPage,
        category,
      });
      if (res.success) {
        setData(res.data);
      }
    };

    fetchProducts();
  }, [currentPage, category]);

  if (!data) {
    return <ProductPageSkeleton />;
  }

  const { data: products, meta } = data;

  return (
    <section className="container mx-auto px-4 py-4 space-y-4">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {products?.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>

      <PaginationComp
        total={meta?.pagination.pageCount as number}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
