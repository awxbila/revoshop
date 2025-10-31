"use client";

import { useEffect, useState } from "react";
import ProductFilters from "./components/ProductFilters";
import ProductTable from "./components/ProductTable";
import Pagination from "./components/Pagination";
import { Product, ProductFilters as Filters } from "./types/product";
import { fetchProducts } from "./services/productService";

export default function ProductsPage() {
  const INITIAL_FILTERS: Filters = {
    title: undefined,
    categoryId: undefined,
    price_min: undefined,
    price_max: undefined,
    limit: 10,
    offset: 0,
  };

  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const products = await fetchProducts(filters);
        setData(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [filters]);

  const handleReset = () => {
    setFilters(INITIAL_FILTERS);
    setPage(1);
  };

  const handleNext = () => {
    const nextOffset = page * (filters.limit ?? 10);
    setFilters((prev) => ({ ...prev, offset: nextOffset }));
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page === 1) return;
    const prevOffset = (page - 2) * (filters.limit ?? 10);
    setFilters((prev) => ({ ...prev, offset: prevOffset }));
    setPage((prev) => prev - 1);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-6">🛍️ Product Management</h1>

      <ProductFilters
        filters={filters}
        setFilters={setFilters}
        onReset={handleReset}
      />

      <ProductTable data={data} loading={loading} />

      <Pagination page={page} onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
}
