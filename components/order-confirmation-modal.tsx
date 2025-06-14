"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getProductImage } from "@/lib/utils/images";
import { formatPrice } from "@/lib/utils/products";

// Types
interface CartItem {
  id: number;
  product: {
    id: number;
    slug: string;
    name: string;
    price: number;
  };
  quantity: number;
}

interface OrderSummary {
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: CartItem[];
  orderSummary: OrderSummary;
}

export function OrderConfirmationModal({
  isOpen,
  onClose,
  orderItems,
  orderSummary,
}: OrderConfirmationModalProps) {
  const firstItem = orderItems[0];
  const remainingItems = orderItems.length - 1;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-8 bg-white text-black rounded-lg shadow-xl z-50">
        <DialogHeader>
          <DialogTitle className="sr-only">Order Confirmation</DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 text-white" />
          </div>

          {/* Thank You Message */}
          <div>
            <h2 className="text-2xl font-bold mb-4 tracking-wider">
              THANK YOU
              <br />
              FOR YOUR ORDER
            </h2>
            <p className="text-gray-600">
              You will receive an email confirmation shortly.
            </p>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="p-6">
              {/* First Item */}
              {firstItem && (
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={
                        getProductImage(firstItem.product.slug) ||
                        "/placeholder.svg"
                      }
                      alt={firstItem.product.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-sm">
                      {firstItem.product.name
                        .replace(" Headphones", "")
                        .replace(" Speaker", "")
                        .replace(" Wireless", "")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {formatPrice(firstItem.product.price)}
                    </p>
                  </div>
                  <span className="text-gray-600 font-bold">
                    x{firstItem.quantity}
                  </span>
                </div>
              )}

              {/* Remaining Items */}
              {remainingItems > 0 && (
                <div className="border-t pt-4">
                  <p className="text-gray-600 text-sm font-bold">
                    and {remainingItems} other item
                    {remainingItems > 1 ? "s" : ""}
                  </p>
                </div>
              )}
            </div>

            {/* Grand Total */}
            <div className="bg-black text-white p-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">GRAND TOTAL</span>
                <span className="font-bold text-lg">
                  {formatPrice(orderSummary.grandTotal)}
                </span>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <Button
            asChild
            className="w-full bg-orange-600 hover:bg-orange-500 cursor-pointer text-white py-3 font-bold tracking-wider"
          >
            <Link href="/">BACK TO HOME</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
