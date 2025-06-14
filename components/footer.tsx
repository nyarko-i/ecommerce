import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="text-2xl font-bold tracking-wider mb-6 block"
            >
              audiophile
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Audiophile is an all in one stop to fulfill your audio needs. We
              are a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we are open 7 days a week.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/headphones"
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                HEADPHONES
              </Link>
              <Link
                href="/speakers"
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                SPEAKERS
              </Link>
              <Link
                href="/earphones"
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                EARPHONES
              </Link>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right justify-between">
            <div className="flex space-x-4 mb-8 lg:mb-0">
              <Link
                href="#"
                className="text-white hover:text-orange-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-orange-500 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-orange-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
