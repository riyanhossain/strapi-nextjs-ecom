"use client";

import { OrderItem } from "@/types";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { StrapiImage } from "./strapi-image";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useCartStore } from "@/store/cart";

export default function CartProductCard({
  order_item,
}: {
  order_item: OrderItem;
}) {
  const { removeFromCart } = useCartStore();
  return (
    <Card>
      <CardContent className="flex items-center gap-2 p-2">
        <StrapiImage
          src={order_item.product.images[0].url}
          alt={order_item.product.name}
          height={600}
          width={600}
          className="object-cover size-16 min-w-16"
        />

        <div className="h-full grow">
          <p className="line-clamp-2">{order_item.product.name}</p>
          <p className="text-sm font-medium text-gray-500">
            {order_item.quantity} x ৳ {order_item.product.price}
          </p>
        </div>

        <Button
          variant="ghost"
          onClick={() =>
            removeFromCart(order_item.product.documentId as string)
          }
        >
          <X />
        </Button>
      </CardContent>
    </Card>
  );
}
