import { ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Product } from "@/types";
import { StrapiImage } from "@/components/strapi-image";

type CardProps = React.ComponentProps<typeof Card>;

export default function ProductCard({
  className,
  product,
  ...props
}: CardProps & { product: Product }) {
  return (
    <Card className={cn("w-full overflow-hidden h-full", className)} {...props}>
      <CardContent className="p-0">
        <StrapiImage
          src={product.images[0].url}
          alt={product.name}
          height={600}
          width={600}
          className="object-cover w-full h-64"
        />
      </CardContent>
      <CardHeader className="space-y-4 text-center">
        <CardTitle className="line-clamp-1">{product.name}</CardTitle>
        <CardTitle>৳ {product.price}</CardTitle>
      </CardHeader>
      <CardFooter className="!px-2">
        <Button className="w-full">
          <ShoppingBag /> Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
