"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import type { Product } from "@/lib/types/product";
import { getProductImage } from "@/lib/utils/images";
import { formatPrice } from "@/lib/utils/products";
import { useCart } from "@/contexts/cart-context";

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding
    setIsAddingToCart(false);
  };

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button
          asChild
          variant="ghost"
          className="mb-8 text-gray-600 cursor-pointer hover:text-orange-500 p-0 h-auto font-medium"
        >
          <Link href="/" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Go Back
          </Link>
        </Button>

        {/* Product Hero */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg p-8 lg:p-16">
              <Image
                src={
                  getProductImage(product.slug) ||
                  "/placeholder.svg?height=500&width=500"
                }
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 text-center lg:text-left">
            {product.new && (
              <p className="text-sm tracking-[10px] text-orange-500 mb-4 font-medium">
                NEW PRODUCT
              </p>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider">
              {product.name.toUpperCase()}
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              {product.description}
            </p>
            <p className="text-lg font-bold mb-8 tracking-wider">
              {formatPrice(product.price)}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              {/* Quantity Selector */}
              <div className="flex items-center bg-gray-100">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1 || isAddingToCart}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleQuantityChange(1)}
                  disabled={isAddingToCart}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className="bg-orange-600 hover:bg-orange-500 cursor-pointer text-white px-8 py-3 text-sm font-medium tracking-wider h-12 min-w-[140px]"
              >
                {isAddingToCart ? "ADDING..." : "ADD TO CART"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
