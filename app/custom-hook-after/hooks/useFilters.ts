"use client";

import { useState } from "react";
import type { ProductFilters } from "../types/product";
import { useDebounce } from "./useDebounce";

export function useFilters(initial: ProductFilters, onReset?: () => void) {
  const [filters, setFilters] = useState<ProductFilters>(initial);

  const debouncedTitle = useDebounce(filters.title, 500);
  const debouncedMin = useDebounce(filters.price_min, 500);
  const debouncedMax = useDebounce(filters.price_max, 500);

  const finalFilters = {
    ...filters,
    title: debouncedTitle,
    price_min: debouncedMin,
    price_max: debouncedMax,
  };

  const resetFilters = () => {
    setFilters(initial);
    onReset?.();
  };

  return { filters, setFilters, finalFilters, resetFilters };
}
