import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { ProductHero } from "@/components/product-hero";
import { ProductFeatures } from "@/components/product-features";
import { ProductGallery } from "@/components/product-gallery";
import { ProductRecommendations } from "@/components/product-recommendations";
import { CategoryGrid } from "@/components/category-grid";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { getProductBySlug, getAllProducts } from "@/lib/utils/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProductHero product={product} />
        <ProductFeatures product={product} />
        <ProductGallery product={product} />
        <ProductRecommendations product={product} />
        <CategoryGrid />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
