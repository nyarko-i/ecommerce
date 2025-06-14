"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/lib/utils/products";
import { heroImage } from "@/lib/utils/images";

export function HeroSection() {
  const heroProduct = getProductBySlug("xx99-mark-two-headphones");

  // Debug logging
  console.log("HeroSection Debug:", {
    heroProduct: heroProduct?.slug,
    heroProductExists: !!heroProduct,
  });

  if (!heroProduct) {
    console.error("Hero product not found!");
    return null;
  }

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center min-h-[500px] lg:min-h-[600px]">
          <div className="flex-1 text-center lg:text-left py-12 lg:py-0">
            {heroProduct.new && (
              <p className="text-sm tracking-[10px] text-gray-400 mb-4">
                NEW PRODUCT
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>
            <p className="text-gray-300 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              {heroProduct.description}
            </p>
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange- cursor-pointer text-white px-8 py-3 text-sm font-medium tracking-wider"
            >
              <Link href={`/products/${heroProduct.slug}`}>SEE PRODUCT</Link>
            </Button>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src={heroImage || "/placeholder.svg?height=400&width=400"}
              alt={heroProduct.name}
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
