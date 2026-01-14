import { Product } from "@/types/product";
import ProductList from "@/components/ProductList";
import CategoryTabs from "@/components/CategoryTabs";

async function getProducts(): Promise<Product[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const products = await getProducts();
  const category = searchParams.category ?? "all";

  // 🔹 FILTER PRODUK BERDASARKAN KATEGORI
  const filteredProducts =
    category !== "all"
      ? products.filter((p) => p.category === category)
      : products;

  return (
    <main className="container">
      <CategoryTabs />
      <ProductList products={filteredProducts} />
    </main>
  );
}
