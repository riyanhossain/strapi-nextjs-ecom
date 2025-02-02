"use server";

import ky from "ky";
import { env } from "@/env";

export const getPolicyPage = async () => {
  const { data } = await ky
    .get<{
      data: {
        content: string;
      };
    }>(`${env.BACKEND_API_URL}/privacy-policy`)
    .json();

  return data;
};
