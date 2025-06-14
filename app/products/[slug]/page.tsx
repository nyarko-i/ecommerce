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
import FadeInWrapper from "./../../../components/fade-in-wrapper";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all products
export async function generateStaticParams() {
  const products = getAllProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for each product
export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found - Audiophile",
    };
  }

  return {
    title: `${product.name} - Audiophile`,
    description: product.description,
  };
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
        <FadeInWrapper>
          <ProductHero product={product} />
          <ProductFeatures product={product} />
          <ProductGallery product={product} />
          <ProductRecommendations product={product} />
          <CategoryGrid />
          <AboutSection />
        </FadeInWrapper>
      </main>
      <Footer />
    </div>
  );
}
