"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import { CartModal } from "@/components/cart-modal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-black text-white px-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-wider">
              audiophile
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/headphones"
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                HEADPHONES
              </Link>
              <Link
                href="/speakers"
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                SPEAKERS
              </Link>
              <Link
                href="/earphones"
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                EARPHONES
              </Link>
            </nav>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-gray-800 hover:text-white relative cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-6 w-6" />
              {cart.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.itemCount}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-orange-500 transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="/headphones"
                  className="text-sm font-medium hover:text-orange-500 transition-colors"
                >
                  HEADPHONES
                </Link>
                <Link
                  href="/speakers"
                  className="text-sm font-medium hover:text-orange-500 transition-colors"
                >
                  SPEAKERS
                </Link>
                <Link
                  href="/earphones"
                  className="text-sm font-medium hover:text-orange-500 transition-colors"
                >
                  EARPHONES
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
