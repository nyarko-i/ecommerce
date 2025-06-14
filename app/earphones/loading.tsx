import { Header } from "@/components/header";
import { CategoryHeader } from "@/components/category-header";
import { ProductListSkeleton } from "@/components/loading/product-list-skeleton";
import { CategoryGridSkeleton } from "@/components/loading/category-grid-skeleton";
import { Footer } from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";

export default function EarphonesLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CategoryHeader title="EARPHONES" />
        <ProductListSkeleton />
        <CategoryGridSkeleton />
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
