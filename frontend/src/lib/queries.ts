import ky from "ky";
import { env } from "@/env";

export const getPolicyPage = async () => {
  const { data } = await ky
    .get<{
      data: {
        content: string;
      };
    }>(`${env.BACKEND_API_URL}/privacy-policy`, {
      cache: "force-cache",
    })
    .json();

  return data;
};

export const getTermsAndCondtionsPage = async () => {
  const { data } = await ky
    .get<{
      data: {
        content: string;
      };
    }>(`${env.BACKEND_API_URL}/privacy-policy`, {
      cache: "force-cache",
    })
    .json();

  return data;
};

export const getCategories = async () => {
  const { data } = await ky
    .get<{
      data: {
        name: string;
      }[];
    }>(`${env.BACKEND_API_URL}/categories`, {
      cache: "force-cache",
    })
    .json();

  return data;
};
