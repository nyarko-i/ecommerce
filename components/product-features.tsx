import type { Product } from "@/lib/types/product";

interface ProductFeaturesProps {
  product: Product;
}

export function ProductFeatures({ product }: ProductFeaturesProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Features */}
          <div className="flex-2 lg:flex-[2]">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-wider">
              FEATURES
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-6">
              {product.features.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* In the Box */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-wider">
              IN THE BOX
            </h2>
            <div className="space-y-2">
              {product.includes.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <span className="text-orange-500 font-bold min-w-[2rem]">
                    {item.quantity}x
                  </span>
                  <span className="text-gray-600">{item.item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
