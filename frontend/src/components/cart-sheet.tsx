"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart";
import CartProductCard from "@/components/cart-product-card";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CartSheet() {
  const { cart, getTotalPrice } = useCartStore();

  const pathname = usePathname();

  const disabledSheet = pathname.startsWith("/cart");

  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild disabled={disabledSheet}>
        <Button variant="ghost" className="rounded">
          <span className="text-sm text-primary">৳ {getTotalPrice()}</span>
          <ShoppingCart size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>

        <div className="h-6"></div>

        {cart.length > 0 && (
          <ul className="grid gap-y-4">
            {cart.map((item, index) => (
              <li key={index}>
                <CartProductCard order_item={item} />
              </li>
            ))}
          </ul>
        )}

        {cart.length === 0 && (
          <div className="flex items-center justify-center h-32">
            <p className="text-gray-400">Cart is empty</p>
          </div>
        )}

        <div className="h-6"></div>

        <Link href="/cart" onClick={() => setOpen(false)}>
          <Button className="w-full">View Cart</Button>
        </Link>

        <div className="h-2"></div>

        <Link href="/checkout" onClick={() => setOpen(false)}>
          <Button className="w-full">Checkout</Button>
        </Link>
      </SheetContent>
    </Sheet>
  );
}
