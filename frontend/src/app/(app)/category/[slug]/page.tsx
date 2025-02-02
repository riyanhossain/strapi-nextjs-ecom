import { ProductsPage } from "@/components/product-page";
import { getCategories } from "@/lib/queries";

export async function generateStaticParams() {
  try {
    const res = await getCategories();

    if (!res.success) {
      throw new Error("Failed to fetch categories");
    }

    const categories = res.data.data || [];

    return categories.map((category) => ({
      slug: category.name.toLowerCase(),
    }));
  } catch (e) {
    console.error("Error fetching categories:", e);
    return [];
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductsPage category={slug as string} />;
}
