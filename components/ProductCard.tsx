"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <h1 className="product-title">{product.title}</h1>
      </Link>

      <h2 className="product-category">{product.category}</h2>
      <p className="product-price">Rp {product.price}</p>

      <button className="add-btn" onClick={() => addToCart(product)}>
        +
      </button>
    </div>
  );
}
