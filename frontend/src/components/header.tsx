import React from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CartSheet from "@/components/cart-sheet";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white border-b z-50 w-full border-border/60">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between lg:border-x">
        <Link href="/">
          <h2 className="text-lg font-bold">Ecom</h2>
        </Link>
        <nav>
          <ul className="flex gap-x-2">
            <li>
              <CartSheet />
            </li>
            <li>
              <Button variant="ghost" className="rounded">
                <MenuIcon size={24} />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
