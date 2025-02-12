"use client";

import React from "react";
import { getSingleProduct } from "@/lib/queries";
import { redirect, useParams } from "next/navigation";
import { Product } from "@/types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import MarkdownRenderer from "@/components/markdown-renderer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StrapiImage from "@/components/strapi-image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart";

export default function ProductPage() {
  const params = useParams<{
    slug: string;
  }>();

  const [size, setSize] = React.useState<string | null>(null);
  const [quantity, setQuantity] = React.useState(1);
  const [data, setData] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const { addToCart } = useCartStore();

  React.useEffect(() => {
    const fetchProduct = async () => {
      const res = await getSingleProduct(params.slug);

      if (res.success) {
        setData(res.data);
      } else {
        setError("Product not found");
      }

      setLoading(false);
    };

    fetchProduct();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-6">
      <div className="p-5">
        <ProductCarousel images={data.images} />
      </div>

      <div className="p-5 space-y-4 lg:space-y-6">
        <h2 className="text-xl lg:text-3xl font-semibold text-gray-600">
          {data.name}
        </h2>
        <hr />
        <p className="text-lg lg:text-2xl font-medium">৳{data.price}.00</p>

        <div className="flex items-center gap-x-4">
          <p className="uppercase text-sm font-medium">Size:</p>

          {data.sizes && (
            <ToggleGroup type="single" className="justify-start">
              {data.sizes?.map((size) => (
                <ToggleGroupItem
                  area-label={`Size ${size}`}
                  key={size.id}
                  value={size.code}
                  onClick={() => setSize(size.code)}
                >
                  {size.code}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          )}
        </div>

        <div className="flex items-center gap-x-4">
          {/* <div className="flex items-center justify-center gap-x-1 border">
            <Button variant="ghost" onClick={() => setQuantity(quantity - 1)}>
              -
            </Button>

            <span>{quantity}</span>

            <Button variant="ghost" onClick={() => setQuantity(quantity + 1)}>
              +
            </Button>
          </div> */}

          <Button
            className="uppercase font-medium"
            onClick={() => addToCart(data)}
          >
            Add to Cart
          </Button>

          <Button
            className="uppercase font-medium"
            onClick={() => {
              addToCart(data);
              redirect("/checkout");
            }}
          >
            Buy Now
          </Button>
        </div>

        <MarkdownRenderer markdown={data.description} />
      </div>
    </div>
  );
}

export function ProductCarousel({
  images,
}: {
  images: {
    name: string;
    url: string;
  }[];
}) {
  console.log(images);
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <StrapiImage
                    src={image.url}
                    alt={image.name}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
