export interface ResponsiveImage {
    mobile: string
    tablet: string
    desktop: string
  }
  
  export interface IncludedItem {
    quantity: number
    item: string
  }
  
  export interface ProductGallery {
    first: ResponsiveImage
    second: ResponsiveImage
    third: ResponsiveImage
  }
  
  export interface RelatedProduct {
    slug: string
    name: string
    image: ResponsiveImage
  }
  
  export interface Product {
    id: number
    slug: string
    name: string
    image: ResponsiveImage
    category: "headphones" | "speakers" | "earphones"
    categoryImage: ResponsiveImage
    new: boolean
    price: number
    description: string
    features: string
    includes: IncludedItem[]
    gallery: ProductGallery
    others: RelatedProduct[]
  }
  
  export type ProductCategory = "headphones" | "speakers" | "earphones"
  