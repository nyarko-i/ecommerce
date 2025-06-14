import Image from "next/image";
import type { Product } from "@/lib/types/product";
import { getGalleryImages } from "@/lib/utils/images";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const galleryImages = getGalleryImages(product.slug);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* First two images - left column */}
          <div className="space-y-4 md:space-y-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={galleryImages[0] || "/placeholder.svg"}
                alt={`${product.name} gallery image 1`}
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={galleryImages[1] || "/placeholder.svg"}
                alt={`${product.name} gallery image 2`}
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Third image - right column (larger) */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={galleryImages[2] || "/placeholder.svg"}
              alt={`${product.name} gallery image 3`}
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
