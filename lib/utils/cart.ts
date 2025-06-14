import type { CartItem, Cart, OrderSummary } from "@/lib/types/cart";
import type { Product } from "@/lib/types/product";

// Cart calculations
export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce(
    (total: number, item: CartItem) => total + item.product.price * item.quantity,
    0
  );
}

export function calculateItemCount(items: CartItem[]): number {
  return items.reduce((count: number, item: CartItem) => count + item.quantity, 0);
}

export function calculateOrderSummary(items: CartItem[]): OrderSummary {
  const subtotal = calculateCartTotal(items);
  const shipping = 50; // Fixed shipping cost
  const vat = Math.round(subtotal * 0.2); // 20% VAT
  const grandTotal = subtotal + shipping + vat;

  return {
    subtotal,
    shipping,
    vat,
    grandTotal,
  };
}

// Cart operations
export function addToCart(cart: Cart, product: Product, quantity = 1): Cart {
  const existingItem = cart.items.find(
    (item: CartItem) => item.product.id === product.id
  );

  let newItems: CartItem[];

  if (existingItem) {
    newItems = cart.items.map((item: CartItem) =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    newItems = [...cart.items, { id: Date.now(), product, quantity }];
  }

  return {
    items: newItems,
    total: calculateCartTotal(newItems),
    itemCount: calculateItemCount(newItems),
  };
}

export function removeFromCart(cart: Cart, itemId: number): Cart {
  const newItems = cart.items.filter((item: CartItem) => item.id !== itemId);

  return {
    items: newItems,
    total: calculateCartTotal(newItems),
    itemCount: calculateItemCount(newItems),
  };
}

export function updateCartItemQuantity(
  cart: Cart,
  itemId: number,
  quantity: number
): Cart {
  if (quantity <= 0) {
    return removeFromCart(cart, itemId);
  }

  const newItems = cart.items.map((item: CartItem) =>
    item.id === itemId ? { ...item, quantity } : item
  );

  return {
    items: newItems,
    total: calculateCartTotal(newItems),
    itemCount: calculateItemCount(newItems),
  };
}

export function clearCart(): Cart {
  return {
    items: [],
    total: 0,
    itemCount: 0,
  };
}

// Local storage helpers
export function saveCartToStorage(cart: Cart): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("audiophile-cart", JSON.stringify(cart));
  }
}

export function loadCartFromStorage(): Cart {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("audiophile-cart");
    if (saved) {
      try {
        const parsedCart: Cart = JSON.parse(saved);
        return {
          ...parsedCart,
          total: calculateCartTotal(parsedCart.items),
          itemCount: calculateItemCount(parsedCart.items),
        };
      } catch {
        return clearCart();
      }
    }
  }
  return clearCart();
}
