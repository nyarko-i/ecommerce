// Image mapping for local images
export const productImages = {
    // Hero and main product images
    "xx99-mark-two-headphones": "/images/products/headphones/xx99-mark-ii.png",
    "xx99-mark-one-headphones": "/images/products/headphones/xx99-mark-i.png",
    "xx59-headphones": "/images/products/headphones/xx59.png",
    "zx9-speaker": "/images/products/speakers/zx9.png",
    "zx7-speaker": "/images/products/speakers/zx7.png",
    "yx1-earphones": "/images/products/earphones/yx1.png",
  }
  
  // Category images
  export const categoryImages = {
    headphones: "/images/categories/headphones-category.png",
    speakers: "/images/categories/speakers-category.png",
    earphones: "/images/categories/earphones-category.png",
  }
  
  // Hero image (for homepage)
  export const heroImage = "/images/hero/headphones-hero.png"
  
  // Gallery images mapping
  export const galleryImages = {
    "xx99-mark-two-headphones": [
      "/images/gallery/xx99-mark-ii/gallery-1.jpg",
      "/images/gallery/xx99-mark-ii/gallery-2.jpg",
      "/images/gallery/xx99-mark-ii/gallery-3.jpg",
    ],
    "xx99-mark-one-headphones": [
      "/images/gallery/xx99-mark-i/gallery-1.jpg",
      "/images/gallery/xx99-mark-i/gallery-2.jpg",
      "/images/gallery/xx99-mark-i/gallery-3.jpg",
    ],
    "xx59-headphones": [
      "/images/gallery/xx59/gallery-1.jpg",
      "/images/gallery/xx59/gallery-2.jpg",
      "/images/gallery/xx59/gallery-3.jpg",
    ],
    "zx9-speaker": [
      "/images/gallery/zx9/gallery-1.jpg",
      "/images/gallery/zx9/gallery-2.jpg",
      "/images/gallery/zx9/gallery-3.jpg",
    ],
    "zx7-speaker": [
      "/images/gallery/zx7/gallery-1.jpg",
      "/images/gallery/zx7/gallery-2.jpg",
      "/images/gallery/zx7/gallery-3.jpg",
    ],
    "yx1-earphones": [
      "/images/gallery/yx1/gallery-1.jpg",
      "/images/gallery/yx1/gallery-2.jpg",
      "/images/gallery/yx1/gallery-3.jpg",
    ],
  }
  
  // Get product image by slug
  export function getProductImage(slug: string): string {
    return productImages[slug as keyof typeof productImages] || "/placeholder.svg?height=400&width=400"
  }
  
  // Get category image
  export function getCategoryImage(category: "headphones" | "speakers" | "earphones"): string {
    return categoryImages[category] || "/placeholder.svg?height=200&width=200"
  }
  
  // Get gallery images for a product
  export function getGalleryImages(slug: string): string[] {
    return (
      galleryImages[slug as keyof typeof galleryImages] || [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=600&width=400",
      ]
    )
  }
  
  // About section image
  export const aboutImage = "/images/about/person-headphones.png"
  