"use client";

import { useProducts } from "@/hooks/useProducts";

export default function ProductsPage() {
  const { products, isLoading, isError, refresh } = useProducts();

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to load products 😅</p>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">🛍️ Product List</h1>
        <button
          onClick={() => refresh()}
          className="rounded bg-blue-600 text-white px-4 py-1 hover:bg-blue-700"
        >
          Refresh
        </button>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow-sm">
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
