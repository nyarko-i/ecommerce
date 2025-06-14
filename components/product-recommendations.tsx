import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types/product";
import { getProductBySlug } from "@/lib/utils/products";
import { getProductImage } from "@/lib/utils/images";

interface ProductRecommendationsProps {
  product: Product;
}

export function ProductRecommendations({
  product,
}: ProductRecommendationsProps) {
  // Get the actual product objects for recommendations
  const recommendations = product.others
    .map((other) => getProductBySlug(other.slug))
    .filter(Boolean) as Product[];

  if (recommendations.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-wider">
          YOU MAY ALSO LIKE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((recommendedProduct) => (
            <div key={recommendedProduct.id} className="text-center">
              <div className="bg-gray-100 rounded-lg p-8 mb-6">
                <Image
                  src={
                    getProductImage(recommendedProduct.slug) ||
                    "/placeholder.svg"
                  }
                  alt={recommendedProduct.name}
                  width={300}
                  height={300}
                  className="w-full h-auto max-w-xs mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-6 tracking-wider">
                {recommendedProduct.name.toUpperCase()}
              </h3>
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-500 cursor-pointer text-white px-8 py-3 text-sm font-medium tracking-wider"
              >
                <Link href={`/products/${recommendedProduct.slug}`}>
                  SEE PRODUCT
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
