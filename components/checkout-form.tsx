"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/lib/utils/products";
import { calculateOrderSummary } from "@/lib/utils/cart";
import { getProductImage } from "@/lib/utils/images";
import {
  validateCheckoutForm,
  hasValidationErrors,
  type CheckoutFormData,
  type ValidationErrors,
} from "@/lib/utils/validation";
import { OrderConfirmationModal } from "@/components/order-confirmation-modal";

export function CheckoutForm() {
  const { cart, clearCart } = useCart();
  const orderSummary = calculateOrderSummary(cart.items);

  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (cart.items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">
          Add some products to your cart to proceed with checkout.
        </p>
        <Button
          asChild
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const handleInputChange = (field: keyof CheckoutFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handlePaymentMethodChange = (value: string) => {
    handleInputChange("paymentMethod", value as "e-money" | "cash");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const validationErrors = validateCheckoutForm(formData);

    if (hasValidationErrors(validationErrors)) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show confirmation and clear cart
    setShowConfirmation(true);
    setIsSubmitting(false);
  };

  const handleOrderComplete = () => {
    clearCart();
    setShowConfirmation(false);
    // Could redirect to home or order history page
  };

  return (
    <>
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Button
          asChild
          variant="ghost"
          className="mb-8 text-gray-600 hover:text-orange-500 p-0 h-auto font-medium"
        >
          <Link href="/" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Go Back
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 tracking-wider">
              CHECKOUT
            </h1>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Billing Details */}
              <div>
                <h2 className="text-sm font-bold text-orange-500 tracking-wider mb-4">
                  BILLING DETAILS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-xs font-bold tracking-wider"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Alexei Ward"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-xs font-bold tracking-wider"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="alexei@mail.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-xs font-bold tracking-wider"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+1 202-555-0136"
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div>
                <h2 className="text-sm font-bold text-orange-500 tracking-wider mb-4">
                  SHIPPING INFO
                </h2>
                <div className="space-y-4">
                  <div>
                    <Label
                      htmlFor="address"
                      className="text-xs font-bold tracking-wider"
                    >
                      Your Address
                    </Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      placeholder="1137 Williams Avenue"
                      className={errors.address ? "border-red-500" : ""}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="zipCode"
                        className="text-xs font-bold tracking-wider"
                      >
                        ZIP Code
                      </Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) =>
                          handleInputChange("zipCode", e.target.value)
                        }
                        placeholder="10001"
                        className={errors.zipCode ? "border-red-500" : ""}
                      />
                      {errors.zipCode && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.zipCode}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="city"
                        className="text-xs font-bold tracking-wider"
                      >
                        City
                      </Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                        placeholder="New York"
                        className={errors.city ? "border-red-500" : ""}
                      />
                      {errors.city && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="country"
                      className="text-xs font-bold tracking-wider"
                    >
                      Country
                    </Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      placeholder="United States"
                      className={errors.country ? "border-red-500" : ""}
                    />
                    {errors.country && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h2 className="text-sm font-bold text-orange-500 tracking-wider mb-4">
                  PAYMENT DETAILS
                </h2>
                <div className="space-y-4">
                  <div>
                    <Label className="text-xs font-bold tracking-wider">
                      Payment Method
                    </Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={handlePaymentMethodChange}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="e-money" id="e-money" />
                        <Label htmlFor="e-money" className="font-bold">
                          e-Money
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="font-bold">
                          Cash on Delivery
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.paymentMethod === "e-money" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="eMoneyNumber"
                          className="text-xs font-bold tracking-wider"
                        >
                          e-Money Number
                        </Label>
                        <Input
                          id="eMoneyNumber"
                          value={formData.eMoneyNumber}
                          onChange={(e) =>
                            handleInputChange("eMoneyNumber", e.target.value)
                          }
                          placeholder="238521993"
                          className={
                            errors.eMoneyNumber ? "border-red-500" : ""
                          }
                        />
                        {errors.eMoneyNumber && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.eMoneyNumber}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label
                          htmlFor="eMoneyPin"
                          className="text-xs font-bold tracking-wider"
                        >
                          e-Money PIN
                        </Label>
                        <Input
                          id="eMoneyPin"
                          value={formData.eMoneyPin}
                          onChange={(e) =>
                            handleInputChange("eMoneyPin", e.target.value)
                          }
                          placeholder="6891"
                          className={errors.eMoneyPin ? "border-red-500" : ""}
                        />
                        {errors.eMoneyPin && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.eMoneyPin}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === "cash" && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600 text-sm">
                        The Cash on Delivery option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 md:p-8 rounded-lg h-fit">
            <h2 className="text-lg font-bold mb-6 tracking-wider">SUMMARY</h2>

            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cart.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
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
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">
                      {item.product.name
                        .replace(" Headphones", "")
                        .replace(" Speaker", "")
                        .replace(" Wireless", "")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>
                  <span className="text-gray-600 font-bold">
                    x{item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Order Totals */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">TOTAL</span>
                <span className="font-bold">
                  {formatPrice(orderSummary.subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">SHIPPING</span>
                <span className="font-bold">
                  {formatPrice(orderSummary.shipping)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">VAT (INCLUDED)</span>
                <span className="font-bold">
                  {formatPrice(orderSummary.vat)}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-4 border-t">
                <span>GRAND TOTAL</span>
                <span className="text-orange-500">
                  {formatPrice(orderSummary.grandTotal)}
                </span>
              </div>
            </div>

            {/* Continue & Pay Button */}
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-3 font-bold tracking-wider"
            >
              {isSubmitting ? "PROCESSING..." : "CONTINUE & PAY"}
            </Button>
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      <OrderConfirmationModal
        isOpen={showConfirmation}
        onClose={handleOrderComplete}
        orderItems={cart.items}
        orderSummary={orderSummary}
      />
    </>
  );
}
