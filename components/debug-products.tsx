"use client";

import { getAllProducts } from "@/lib/utils/products";

export function DebugProducts() {
  const products = getAllProducts();

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs max-w-xs z-50">
      <h3 className="font-bold mb-2">Debug: Products Found</h3>
      <ul className="space-y-1">
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.slug}</strong> - {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
