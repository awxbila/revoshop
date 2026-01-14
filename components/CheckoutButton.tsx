"use client";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

export default function CheckoutButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return <button onClick={() => addToCart(product)}>Add to Cart</button>;
}
