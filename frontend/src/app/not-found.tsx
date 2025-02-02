import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-2xl h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h2 className="text-8xl font-bold">404</h2>
        <p className="text-xl font-medium">Could not find requested resource</p>
        <Link className="underline underline-offset-4" href="/">
          Return Home
        </Link>
      </div>
    </section>
  );
}
