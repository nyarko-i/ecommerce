import { ProductCardSkeleton } from "./product-card-skeleton";

export function ProductListSkeleton() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-16 md:space-y-24">
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
