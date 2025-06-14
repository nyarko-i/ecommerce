"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getProductBySlug } from "@/lib/utils/products";
import { getProductImage } from "@/lib/utils/images";
import Link from "next/link";
import { motion } from "framer-motion";

export function ProductShowcase() {
  const zx9Speaker = getProductBySlug("zx9-speaker");
  const zx7Speaker = getProductBySlug("zx7-speaker");
  const yx1Earphones = getProductBySlug("yx1-earphones");

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 space-y-8">
        {/* ZX9 Speaker - Orange Section */}
        {zx9Speaker && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-orange-500 text-white rounded-lg overflow-hidden"
          >
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
                  className="bg-transparent border-white text-white cursor-pointer hover:bg-white hover:text-orange-500 px-8 py-3"
                >
                  <Link href={`/products/${zx9Speaker.slug}`}>SEE PRODUCT</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ZX7 Speaker - Background Image with Text on Left */}
        {zx7Speaker && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-gray-100 rounded-lg overflow-hidden h-[320px] md:h-[400px] flex items-center"
            style={{
              backgroundImage: `url('${getProductImage(zx7Speaker.slug)}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10 px-6 md:px-16">
              <h2 className="text-3xl font-bold mb-6 text-black">
                ZX7 SPEAKER
              </h2>
              <Button
                asChild
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-3"
              >
                <Link href={`/products/${zx7Speaker.slug}`}>SEE PRODUCT</Link>
              </Button>
            </div>
          </motion.div>
        )}

        {/* YX1 Earphones */}
        {yx1Earphones && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
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
          </motion.div>
        )}
      </div>
    </section>
  );
}
