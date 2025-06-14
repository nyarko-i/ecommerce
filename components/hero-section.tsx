import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-black text-white p-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center min-h-[600px] gap-12">
          <div className="flex-1 text-center lg:text-left py-12">
            <p className="text-sm tracking-[10px] text-gray-400 mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>
            <p className="text-gray-300 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-sm font-medium tracking-wider">
              SEE PRODUCT
            </Button>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end relative w-full max-w-[500px] lg:max-w-[600px]">
            <Image
              src="/images/hero/image-hero.png"
              alt="XX99 Mark II Headphones"
              width={700}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
