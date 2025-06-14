import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
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
        <Skeleton className="h-8 w-3/4 mx-auto lg:mx-0" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
        <Skeleton className="h-6 w-20 mx-auto lg:mx-0" />
        <Skeleton className="h-12 w-32 mx-auto lg:mx-0" />
      </div>
    </div>
  );
}
