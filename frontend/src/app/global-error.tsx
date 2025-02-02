"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <section className="container mx-auto px-4 py-8 max-w-2xl h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <h2 className="text-5xl font-bold">Something went wrong!</h2>
            <p className="text-xl font-medium">
              Could not find requested resource
            </p>
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              Try again
            </button>
          </div>
        </section>
      </body>
    </html>
  );
}
