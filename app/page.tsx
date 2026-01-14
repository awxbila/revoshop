import { Product } from "@/types/product";
import ProductList from "@/components/ProductList";
import CategoryTabs from "@/components/CategoryTabs";
import { getProducts } from "@/lib/products";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const products: Product[] = await getProducts();
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
