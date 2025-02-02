import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
}

export function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
}: Readonly<StrapiImageProps>) {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  const fallbackImageUrl = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl ?? fallbackImageUrl}
      alt={alt}
      height={height}
      width={width}
      className={className}
      loading="lazy"
      quality={75}
    />
  );
}
