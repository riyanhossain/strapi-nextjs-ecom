"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCartStore } from "@/store/cart";
import StrapiImage from "@/components/strapi-image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export default function Cart() {
  return (
    <section className="border-x border-border/60 container mx-auto flex-1 flex">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_640px] flex-1">
        <MainCart />
        <CartDetails />
      </div>
    </section>
  );
}

const MainCart = () => {
  return (
    <div className="border-r border-border/60">
      <CartTable />
    </div>
  );
};

const CartDetails = () => {
  const { getTotalPrice } = useCartStore();
  return (
    <div className="p-4 flex flex-col gap-4">
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Cart totals</TableHead>
              <TableHead colSpan={2}></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <p>Subtotal</p>
              </TableCell>
              <TableCell colSpan={2} className="text-right">
                ৳{getTotalPrice()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p>Shipping</p>
              </TableCell>
              <TableCell colSpan={2} className="text-right">
                <div>
                  <p>Inside Dhaka: ৳60</p>
                  <p>Outside Dhake: ৳120</p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell className="text-right">৳{getTotalPrice()}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <Link href="/checkout">
        <Button className="w-full uppercase">Proceed to checkout</Button>
      </Link>
    </div>
  );
};

function CartTable() {
  const {
    cart,
    getTotalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();
  return (
    <Table>
      <TableCaption>A list of your items.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead colSpan={5} className="w-[100px]">
            Product
          </TableHead>
          <TableHead className="text-center">Price</TableHead>
          <TableHead className="text-center w-[60px]">Quantity</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="w-10">
              <Button
                variant="ghost"
                onClick={() =>
                  removeFromCart(item.product.documentId as string)
                }
              >
                <X />
              </Button>
            </TableCell>
            <TableCell colSpan={5} className="font-medium">
              <div className="flex items-center gap-2 ">
                <StrapiImage
                  src={item.product.images[0].url}
                  alt={item.product.name}
                  height={600}
                  width={600}
                  className="object-cover size-16 min-w-16"
                />
                <p className="line-clamp-2">{item.product.name}</p>
              </div>
            </TableCell>
            <TableCell className="text-center">৳{item.product.price}</TableCell>
            <TableCell className="text-center w-[60px]">
              <div className="flex items-center justify-center gap-x-1">
                <Button
                  variant="ghost"
                  onClick={() => decreaseQuantity(item.product.documentId)}
                >
                  -
                </Button>

                <span className="w-12">{item.quantity}</span>

                <Button
                  variant="ghost"
                  onClick={() => increaseQuantity(item.product.documentId)}
                >
                  +
                </Button>
              </div>
            </TableCell>
            <TableCell className="text-right">৳{item.sub_total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell />
          <TableCell colSpan={7}>Total</TableCell>
          <TableCell className="text-right">৳{getTotalPrice()}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
