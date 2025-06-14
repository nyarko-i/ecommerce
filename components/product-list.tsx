import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types/product";
import { getProductImage } from "@/lib/utils/images";
import { formatPrice } from "@/lib/utils/products";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  // Sort products: new products first, then by price (highest first)
  const sortedProducts = [...products].sort((a, b) => {
    if (a.new && !b.new) return -1;
    if (!a.new && b.new) return 1;
    return b.price - a.price;
  });

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-16 md:space-y-24">
          {sortedProducts.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
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
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-sm font-medium tracking-wider"
                >
                  <Link href={`/products/${product.slug}`}>SEE PRODUCT</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
