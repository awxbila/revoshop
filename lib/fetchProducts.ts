import { Product } from "@/types/product";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("/api/products", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
