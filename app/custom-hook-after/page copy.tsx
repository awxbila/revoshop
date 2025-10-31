"use client";

import ProductFilters from "./components/ProductFilters";
import ProductTable from "./components/ProductTable";
import Pagination from "./components/Pagination";
import { fetchProducts } from "./services/productService";
import { Product } from "./types/product";
import { useTableData } from "./hooks/useTableData";

export default function ProductsPage() {
  const INITIAL_FILTERS = {
    title: undefined,
    categoryId: undefined,
    price_min: undefined,
    price_max: undefined,
  };

  const {
    data: products,
    isLoading,
    isError,
    isEmpty,
    filters,
    setFilters,
    reset,
    pagination,
  } = useTableData<Product>(fetchProducts, INITIAL_FILTERS, 10);

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
        onReset={reset}
      />

      <ProductTable data={products} loading={isLoading} />

      <Pagination
        page={pagination.page}
        onPrev={pagination.prevPage}
        onNext={pagination.nextPage}
      />
    </div>
  );
}
