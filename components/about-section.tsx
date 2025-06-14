import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 text-center lg:text-left">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              BRINGING YOU THE
              <br />
              <span className="text-orange-500">BEST</span> AUDIO GEAR
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/about/person-headphones.png"
              alt="Person wearing headphones"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
