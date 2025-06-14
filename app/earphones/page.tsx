import { Header } from "@/components/header";
import { CategoryHeader } from "@/components/category-header";
import { ProductList } from "@/components/product-list";
import { CategoryGrid } from "@/components/category-grid";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { getProductsByCategory } from "@/lib/utils/products";

export default function EarphonesPage() {
  const earphones = getProductsByCategory("earphones");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CategoryHeader title="EARPHONES" />
        <ProductList products={earphones} />
        <CategoryGrid />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
