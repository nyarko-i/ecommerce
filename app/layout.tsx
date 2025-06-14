import type React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Audiophile - Premium Audio Equipment",
  description:
    "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
