import { Header } from "@/components/header";
import { CategoryHeader } from "@/components/category-header";
import { ProductList } from "@/components/product-list";
import { CategoryGrid } from "@/components/category-grid";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { getProductsByCategory } from "@/lib/utils/products";

export default function SpeakersPage() {
  const speakers = getProductsByCategory("speakers");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CategoryHeader title="SPEAKERS" />
        <ProductList products={speakers} />
        <CategoryGrid />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
