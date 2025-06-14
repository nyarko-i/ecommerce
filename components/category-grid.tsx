import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "HEADPHONES",
    image: "/images/category/headphones-category.png",
    href: "/headphones",
  },
  {
    name: "SPEAKERS",
    image: "/images/category/speakers-category.png",
    href: "/speakers",
  },
  {
    name: "EARPHONES",
    image: "/images/category/earphones-category.png",
    href: "/earphones",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-6 md:py-24 p-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group bg-gray-100 rounded-lg pt-20 pb-8 px-8 text-center relative overflow-visible hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={100}
                  height={100}
                  className="drop-shadow-xl"
                />
              </div>
              <h3 className="text-lg font-bold mb-4 tracking-wider mt-4">
                {category.name}
              </h3>
              <div className="flex items-center justify-center text-sm font-medium text-gray-600 group-hover:text-orange-500 transition-colors">
                SHOP
                <ChevronRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
