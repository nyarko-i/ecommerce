import { Header } from "@/components/header";
import { CheckoutForm } from "@/components/checkout-form";
import { Footer } from "@/components/footer";
import FadeInWrapper from "./../../components/fade-in-wrapper";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <FadeInWrapper>
        <main className="py-8">
          <div className="container mx-auto px-4">
            <CheckoutForm />
          </div>
        </main>
      </FadeInWrapper>

      <Footer />
    </div>
  );
}
