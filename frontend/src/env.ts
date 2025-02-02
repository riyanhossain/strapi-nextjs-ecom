import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    BACKEND_API_URL: z.string().url(),
    BACKEND_API_TOKEN: z.string(),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().min(1),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    BACKEND_API_URL: process.env.BACKEND_API_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    BACKEND_API_TOKEN: process.env.BACKEND_API_TOKEN,
  },
});
