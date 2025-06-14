import productsData from "@/lib/data/products.json"
import type { Product, ProductCategory } from "@/lib/types/product"

export const products: Product[] = productsData as Product[]

// Get all products
export function getAllProducts(): Product[] {
  return products
}

// Get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

// Get product by ID
export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

// Get products by category
export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category)
}

// Get new products
export function getNewProducts(): Product[] {
  return products.filter((product) => product.new)
}

// Get featured products (for homepage)
export function getFeaturedProducts(): Product[] {
  // Return specific products for homepage showcase
  return products.filter((product) =>
    ["xx99-mark-two-headphones", "zx9-speaker", "zx7-speaker", "yx1-earphones"].includes(product.slug),
  )
}

// Format price
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

// Get responsive image URL based on screen size
export function getResponsiveImageUrl(
  image: { mobile: string; tablet: string; desktop: string },
  size: "mobile" | "tablet" | "desktop" = "desktop",
): string {
  return image[size]
}
