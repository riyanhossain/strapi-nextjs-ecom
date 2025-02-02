"use server";
import { env } from "@/env";
import ky from "ky";

export const getTermsAndCondtionsPage = async () => {
  const { data } = await ky
    .get<{
      data: {
        content: string;
      };
    }>(`${env.BACKEND_API_URL}/privacy-policy`)
    .json();

  return data;
};
