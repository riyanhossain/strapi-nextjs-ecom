import ky from "ky";
import { env } from "@/env";

export const getCategories = async () => {
  const data = await ky.get(`${env.BACKEND_API_URL}/categories`).json();

  return data;
};
