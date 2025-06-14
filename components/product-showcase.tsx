import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getProductBySlug } from "@/lib/utils/products";
import { getProductImage } from "@/lib/utils/images";
import Link from "next/link";

export function ProductShowcase() {
  const zx9Speaker = getProductBySlug("zx9-speaker");
  const zx7Speaker = getProductBySlug("zx7-speaker");
  const yx1Earphones = getProductBySlug("yx1-earphones");

  return (
    <section className="py-16 md:py-24 p-4">
      <div className="container mx-auto px-4 space-y-8">
        {/* ZX9 Speaker - Orange Section */}
        {zx9Speaker && (
          <div className="bg-orange-500 text-white rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center p-8 lg:p-16">
              <div className="flex-1 mb-8 lg:mb-0">
                <Image
                  src={
                    getProductImage(zx9Speaker.slug) ||
                    "/placeholder.svg?height=300&width=300"
                  }
                  alt={zx9Speaker.name}
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  ZX9
                  <br />
                  SPEAKER
                </h2>
                <p className="text-white/90 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3"
                >
                  <Link href={`/products/${zx9Speaker.slug}`}>SEE PRODUCT</Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* ZX7 Speaker - Gray Section */}
        {zx7Speaker && (
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1">
                <Image
                  src={
                    getProductImage(zx7Speaker.slug) ||
                    "/placeholder.svg?height=300&width=500"
                  }
                  alt={zx7Speaker.name}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex items-center p-8 lg:p-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6">ZX7 SPEAKER</h2>
                  <Button
                    asChild
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white px-8 py-3"
                  >
                    <Link href={`/products/${zx7Speaker.slug}`}>
                      SEE PRODUCT
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* YX1 Earphones */}
        {yx1Earphones && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={
                  getProductImage(yx1Earphones.slug) ||
                  "/placeholder.svg?height=300&width=500"
                }
                alt={yx1Earphones.name}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-lg p-8 lg:p-16 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">YX1 EARPHONES</h2>
                <Button
                  asChild
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white px-8 py-3"
                >
                  <Link href={`/products/${yx1Earphones.slug}`}>
                    SEE PRODUCT
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
