import ky from "ky";
import { env } from "@/env";
import {
  CategoriesSchema,
  ProductsSchema,
  ProductSchema,
  type Product,
} from "@/types";
import { PAGE_SIZE } from "@/constants";

export const api = ky.create({
  prefixUrl: env.NEXT_PUBLIC_STRAPI_URL + "/api/v1", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPolicyPage = async () => {
  const { data } = await api
    .get<{
      data: {
        content: string;
      };
    }>(`privacy-policy`)
    .json();

  return data;
};

export const getTermsAndCondtionsPage = async () => {
  const { data } = await api
    .get<{
      data: {
        content: string;
      };
    }>(`privacy-policy`)
    .json();

  return data;
};

export const getCategories = async () => {
  const res = await api.get(`categories`).json();

  return CategoriesSchema.safeParse(res);
};

export const getProducts = async ({
  page = 1,
  category = "",
}: {
  page?: number;
  category?: string;
}) => {
  const filterQuery = category
    ? `&filters[categories][name][$eqi]=${category.toLowerCase()}`
    : "";

  const res = await api
    .get(
      `products?populate=*&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}${filterQuery}`
    )
    .json();

  return ProductsSchema.safeParse(res);
};

export const getSingleProduct = async (slug: string) => {
  const url = `products/${slug}?populate=*`;

  const { data } = await api
    .get<{
      data: Product;
    }>(url)
    .json();

  return ProductSchema.safeParse(data);
};
