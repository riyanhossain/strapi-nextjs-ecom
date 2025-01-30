import path from "path";
import { glob } from "glob";

export function fetchStaticPages() {
  const pagesDir = path.join(process.cwd(), "src/app"); // For Next.js App Router (Next.js 13+)

  const files = glob.sync("**/page.tsx", { cwd: pagesDir });

  // remove page.tsx from the path and add prefix  process.env.NEXT_PUBLIC_SITE_URL

  // Filter out dynamic routes (files with `[]` or `()` characters)
  const staticPages = files
    .filter((file) => !file.includes("[") && !file.includes("("))
    .map(
      (file) =>
        process.env.NEXT_PUBLIC_SITE_URL +
        "/" +
        file
          .replace(/\.tsx$/, "")
          .replace(/\/index$/, "")
          .replace(/page$/, "")
    );

  return staticPages;
}

export async function fetchDynamicPages() {
  // Example: Fetching dynamic pages from an API or database
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pages`);
  const data = await response.json();

  // Assuming data is an array of page slugs
  const dynamicPages = data.map((page: { slug: string }) => page.slug);

  return dynamicPages;
}
