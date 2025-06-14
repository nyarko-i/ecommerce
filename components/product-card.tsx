import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getProductImage } from "@/lib/utils/images";
import type { Product } from "@/lib/types/product";

import { formatPrice } from "@/lib/utils/products";

interface ProductCardProps {
  product: Product;
  imagePosition?: "left" | "right";
}

export function ProductCard({
  product,
  imagePosition = "left",
}: ProductCardProps) {
  return (
    <div
      className={`flex flex-col ${
        imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-8 lg:gap-16`}
    >
      {/* Product Image */}
      <div className="flex-1">
        <div className="bg-gray-100 rounded-lg p-8 lg:p-16">
          <Image
            src={getProductImage(product.slug) || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 text-center lg:text-left">
        {product.new && (
          <p className="text-sm tracking-[10px] text-orange-500 mb-4 font-medium">
            NEW PRODUCT
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
          {product.name.toUpperCase()}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
          {product.description}
        </p>
        <p className="text-lg font-bold mb-8 tracking-wider">
          {formatPrice(product.price)}
        </p>
        <Button
          asChild
          className="bg-orange-600 hover:bg-orange-500 cursor-pointer text-white px-8 py-3 text-sm font-medium tracking-wider"
        >
          <Link href={`/products/${product.slug}`}>SEE PRODUCT</Link>
        </Button>
      </div>
    </div>
  );
}
