import ky from "ky";
import { env } from "@/env";
import { CategoriesSchema, ProductsSchema } from "@/types";
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
    }>(`privacy-policy`, {
      cache: "force-cache",
    })
    .json();

  return data;
};

export const getTermsAndCondtionsPage = async () => {
  const { data } = await api
    .get<{
      data: {
        content: string;
      };
    }>(`privacy-policy`, {
      cache: "force-cache",
    })
    .json();

  return data;
};

export const getCategories = async () => {
  const res = await api
    .get(`categories`, {
      cache: "force-cache",
    })
    .json();

  return CategoriesSchema.safeParse(res);
};

export const getALlProducts = async ({ page = 1 }: { page?: number }) => {
  const res = await api
    .get(
      `products?populate=*&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`,
      {
        cache: "force-cache",
      }
    )
    .json();

  return ProductsSchema.safeParse(res);
};
