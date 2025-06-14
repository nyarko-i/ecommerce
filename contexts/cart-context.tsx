"use client";

import type React from "react";
import { createContext, useContext, useReducer, useEffect } from "react";
import type { Cart } from "@/lib/types/cart";
import type { Product } from "@/lib/types/product";
import {
  addToCart as addToCartUtil,
  removeFromCart as removeFromCartUtil,
  updateCartItemQuantity as updateCartItemQuantityUtil,
  clearCart as clearCartUtil,
  loadCartFromStorage,
  saveCartToStorage,
} from "@/lib/utils/cart";

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
  | { type: "ADD_TO_CART"; product: Product; quantity?: number }
  | { type: "REMOVE_FROM_CART"; itemId: number }
  | { type: "UPDATE_QUANTITY"; itemId: number; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; cart: Cart };

function cartReducer(state: Cart, action: CartAction): Cart {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCartUtil(state, action.product, action.quantity);
    case "REMOVE_FROM_CART":
      return removeFromCartUtil(state, action.itemId);
    case "UPDATE_QUANTITY":
      return updateCartItemQuantityUtil(state, action.itemId, action.quantity);
    case "CLEAR_CART":
      return clearCartUtil();
    case "LOAD_CART":
      return action.cart;
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = loadCartFromStorage();
    dispatch({ type: "LOAD_CART", cart: savedCart });
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    dispatch({ type: "ADD_TO_CART", product, quantity });
  };

  const removeFromCart = (itemId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", itemId });
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", itemId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
