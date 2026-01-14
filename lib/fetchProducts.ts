import { Product } from "@/types/product";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${baseUrl}/api/products`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
