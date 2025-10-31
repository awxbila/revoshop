"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import type { ProductFilters, Category } from "../types/product";
import { fetchCategories } from "../services/categoryService";

interface Props {
  filters: ProductFilters;
  setFilters: Dispatch<SetStateAction<ProductFilters>>;
  onReset: () => void;
}

export default function ProductFilters({
  filters,
  setFilters,
  onReset,
}: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoadingCategories(true);
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };
    loadCategories();
  }, []);

  return (
    <div className="border p-4 rounded-lg bg-gray-50 mb-6 space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search title..."
          value={filters.title ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, title: e.target.value }))
          }
          className="border px-3 py-2 rounded-lg"
        />

        <select
          value={filters.categoryId ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              categoryId: e.target.value ? Number(e.target.value) : undefined,
            }))
          }
          className="border px-3 py-2 rounded-lg"
        >
          <option value="">All Categories</option>
          {loadingCategories ? (
            <option disabled>Loading...</option>
          ) : (
            categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))
          )}
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={filters.price_min ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              price_min: e.target.value ? Number(e.target.value) : undefined,
            }))
          }
          className="border px-3 py-2 rounded-lg"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={filters.price_max ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              price_max: e.target.value ? Number(e.target.value) : undefined,
            }))
          }
          className="border px-3 py-2 rounded-lg"
        />
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={onReset}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
