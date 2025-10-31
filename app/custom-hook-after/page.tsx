"use client";

import useSWR from "swr";
import ProductFilters from "./components/ProductFilters";
import ProductTable from "./components/ProductTable";
import Pagination from "./components/Pagination";
import { Product } from "./types/product";
import { fetchProducts } from "./services/productService";
import { useFilters } from "./hooks/useFilters";
import { usePagination } from "./hooks/usePagination";

export default function ProductsPage() {
  const INITIAL_FILTERS = {
    title: undefined,
    categoryId: undefined,
    price_min: undefined,
    price_max: undefined,
  };

  const { page, nextPage, prevPage, resetPage, limit, offset } =
    usePagination(10);

  const { filters, setFilters, finalFilters, resetFilters } = useFilters(
    INITIAL_FILTERS,
    resetPage
  );

  const combinedFilters = { ...finalFilters, limit, offset };

  const { data, error, isLoading } = useSWR<Product[]>(
    ["products", combinedFilters],
    ([, f]: [string, typeof combinedFilters]) => fetchProducts(f)
  );

  const products = data ?? [];
  const isError = Boolean(error);
  const isEmpty =
    !isLoading && !isError && Array.isArray(products) && products.length === 0;

  if (isError)
    return (
      <div className="text-center text-red-500">Failed to load products</div>
    );

  if (isLoading)
    return <div className="text-center text-gray-500">Loading products...</div>;

  if (isEmpty)
    return <div className="text-center text-gray-500">No products found</div>;

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-6">🛍️ Product Management</h1>

      <ProductFilters
        filters={filters}
        setFilters={setFilters}
        onReset={resetFilters}
      />

      <ProductTable data={products} loading={isLoading} />

      <Pagination page={page} onPrev={prevPage} onNext={nextPage} />
    </div>
  );
}
