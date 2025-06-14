"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/lib/utils/products";
import { heroImage } from "@/lib/utils/images";

export function HeroSection() {
  const heroProduct = getProductBySlug("xx99-mark-two-headphones");

  if (!heroProduct) {
    console.error("Hero product not found!");
    return null;
  }

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4">
        {/* MOBILE VIEW: background image layout */}
        <div
          className="lg:hidden relative h-[550px] flex items-center justify-center text-center px-4 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero/headphones-hero.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
          <div className="relative z-10 flex flex-col items-center justify-center">
            {heroProduct.new && (
              <p className="text-sm tracking-[10px] text-gray-400 mb-4">
                NEW PRODUCT
              </p>
            )}
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="text-gray-300 mb-8 max-w-sm leading-relaxed">
              {heroProduct.description}
            </p>
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-sm font-medium tracking-wider"
            >
              <Link href={`/products/${heroProduct.slug}`}>SEE PRODUCT</Link>
            </Button>
          </div>
        </div>

        {/* DESKTOP VIEW: original layout preserved */}
        <div className="hidden lg:flex flex-row items-center min-h-[600px] py-16">
          <div className="flex-1 text-left">
            {heroProduct.new && (
              <p className="text-sm tracking-[10px] text-gray-400 mb-4">
                NEW PRODUCT
              </p>
            )}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              {heroProduct.description}
            </p>
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-sm font-medium tracking-wider"
            >
              <Link href={`/products/${heroProduct.slug}`}>SEE PRODUCT</Link>
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
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
