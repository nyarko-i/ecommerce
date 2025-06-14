import { Skeleton } from "@/components/ui/skeleton";

export function ProductHeroSkeleton() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Back Button Skeleton */}
        <Skeleton className="h-6 w-20 mb-8" />

        {/* Product Hero Skeleton */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Product Image Skeleton */}
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg p-8 lg:p-16">
              <Skeleton className="w-full h-64 md:h-80 max-w-md mx-auto" />
            </div>
          </div>

          {/* Product Info Skeleton */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <Skeleton className="h-4 w-24 mx-auto lg:mx-0" />
            <Skeleton className="h-10 w-3/4 mx-auto lg:mx-0" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
            <Skeleton className="h-6 w-20 mx-auto lg:mx-0" />

            {/* Quantity and Add to Cart Skeleton */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
