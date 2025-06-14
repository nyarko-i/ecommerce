import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center min-h-[500px] lg:min-h-[600px]">
          <div className="flex-1 text-center lg:text-left py-12 lg:py-0 space-y-6">
            <Skeleton className="h-4 w-24 mx-auto lg:mx-0 bg-gray-700" />
            <Skeleton className="h-12 w-3/4 mx-auto lg:mx-0 bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />
            <Skeleton className="h-4 w-5/6 bg-gray-700" />
            <Skeleton className="h-12 w-32 mx-auto lg:mx-0 bg-gray-700" />
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <Skeleton className="w-80 h-80 bg-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
