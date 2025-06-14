import { Skeleton } from "@/components/ui/skeleton";

export function CategoryGridSkeleton() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="mb-6">
                <Skeleton className="w-48 h-48 mx-auto" />
              </div>
              <Skeleton className="h-6 w-32 mx-auto mb-4" />
              <Skeleton className="h-4 w-16 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
