import { Header } from "@/components/header";
import { ProductHeroSkeleton } from "@/components/loading/product-hero-skeleton";
import { CategoryGridSkeleton } from "@/components/loading/category-grid-skeleton";
import { Footer } from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProductHeroSkeleton />

        {/* Features Skeleton */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="flex-2 lg:flex-[2] space-y-4">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="flex-1 space-y-4">
                <Skeleton className="h-8 w-32" />
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex gap-6">
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Skeleton */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-4 md:space-y-8">
                <Skeleton className="w-full h-48 rounded-lg" />
                <Skeleton className="w-full h-48 rounded-lg" />
              </div>
              <Skeleton className="w-full h-96 rounded-lg" />
            </div>
          </div>
        </section>

        {/* Recommendations Skeleton */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Skeleton className="h-8 w-48 mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="text-center space-y-4">
                  <Skeleton className="w-full h-48 rounded-lg" />
                  <Skeleton className="h-6 w-32 mx-auto" />
                  <Skeleton className="h-12 w-32 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CategoryGridSkeleton />

        {/* About Section Skeleton */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 order-2 lg:order-1 space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <Skeleton className="w-full h-80 rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
