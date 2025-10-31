"use client";

import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ProductResponseInterface } from "@/app/types/product";
import { getProducts } from "./services/product.api";

export default function Home() {
  const [cartCount, setCartCount] = useState<number>(0);
  const [products, setProducts] = useState<ProductResponseInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const fetchProducts = async () => {
    try {
      const data = await getProducts(1, 10);
      setProducts(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="container mx-auto px-4 py-6">
      <Header cartCount={cartCount} />

      <div className="flex justify-end mb-4">
        <Link
          href="/product/create"
          className="rounded-md bg-black px-4 py-2 text-white hover:bg-black/80 transition-colors"
        >
          + Create Product
        </Link>
      </div>

      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <ProductList products={products} onAdd={handleAddToCart} />
      )}
    </main>
  );
}
