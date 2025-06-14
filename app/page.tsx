import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CategoryGrid } from "@/components/category-grid";
import { ProductShowcase } from "@/components/product-showcase";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import FadeInWrapper from "./../components/fade-in-wrapper";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FadeInWrapper>
          <HeroSection />
          <CategoryGrid />
          <ProductShowcase />
          <AboutSection />
        </FadeInWrapper>
      </main>
      <Footer />
    </div>
  );
}
