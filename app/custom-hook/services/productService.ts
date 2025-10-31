import { Product, ProductFilters } from "../types/product";

const BASE_URL = "https://api.escuelajs.co/api/v1/products";

export async function fetchProducts(
  filters: ProductFilters
): Promise<Product[]> {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, String(value));
    }
  });

  const res = await fetch(`${BASE_URL}?${params.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
