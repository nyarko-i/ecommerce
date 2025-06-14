"use client";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/contexts/cart-context";
import { getProductImage } from "@/lib/utils/images";
import { formatPrice } from "@/lib/utils/products";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  if (cart.items.length === 0) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              CART (0)
            </DialogTitle>
          </DialogHeader>
          <div className="py-8 text-center">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Button
              onClick={onClose}
              className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white"
            >
              Continue Shopping
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            CART ({cart.itemCount})
            <Button
              variant="ghost"
              onClick={clearCart}
              className="text-sm text-gray-600 cursor-pointer hover:text-orange-500 underline p-0 h-auto font-normal"
            >
              Remove all
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Cart Items */}
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                {/* Product Image */}
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={
                      getProductImage(item.product.slug) || "/placeholder.svg"
                    }
                    alt={item.product.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm truncate">
                    {item.product.name
                      .replace(" Headphones", "")
                      .replace(" Speaker", "")
                      .replace(" Wireless", "")}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {formatPrice(item.product.price)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center bg-gray-100 rounded">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-gray-200 cursor-pointer"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center text-sm font-bold cursor-pointer">
                    {item.quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-gray-200  cursor-pointer"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="font-medium">TOTAL</span>
            <span className="font-bold text-lg">{formatPrice(cart.total)}</span>
          </div>

          {/* Checkout Button */}
          <Button
            asChild
            className="w-full bg-orange-600 cursor-pointer hover:bg-orange-500 text-white py-3"
          >
            <Link href="/checkout">CHECKOUT</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
