import { Category } from "../types/product";

const BASE_URL = "https://api.escuelajs.co/api/v1/categories";

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(BASE_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
