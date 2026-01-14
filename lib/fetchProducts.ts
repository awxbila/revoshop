import { Product } from "@/types/product";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 60 },
  });
  return res.json();
}
