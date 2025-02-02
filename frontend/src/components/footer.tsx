import React from "react";
import Link from "next/link";

export default function Footer() {
  const today = new Date().getFullYear();
  return (
    <footer className="text-sm border-t border-border/60 ">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between gap-x-2 lg:border-x">
        <p>&copy; Ecom {today} </p>

        <ul className="flex gap-x-2">
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
