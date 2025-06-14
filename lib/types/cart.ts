import type { Product } from "./product"

export interface CartItem {
  id: number
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
  itemCount: number
}

export interface OrderSummary {
  subtotal: number
  shipping: number
  vat: number
  grandTotal: number
}
