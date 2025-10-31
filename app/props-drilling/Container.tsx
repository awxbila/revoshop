"use client";

import { useState } from "react";
import Header from "./Header";
import LogoutModal from "./LogoutModal";
import ProductList from "@/components/ProductList";
import { ProductResponseInterface } from "@/app/types/product";

interface PropsDrillingClientProps {
  products: ProductResponseInterface[];
}

export default function HomeContainer({ products }: PropsDrillingClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number>(0);

  const handleLogout = () => {
    alert("Logged successfully!");
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setIsModalOpen={setIsModalOpen} cartCount={cartCount} />
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
        <div className="container mx-auto px-4 py-6">
          <ProductList products={products} onAdd={handleAddToCart} />
        </div>
      </div>

      <LogoutModal
        isOpen={isModalOpen}
        onConfirm={handleLogout}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
}
