"use client";

import useSWR from "swr";
import { useFilters } from "./useFilters";
import { usePagination } from "./usePagination";

export function useTableData<T>(
  fetchFn: (filters: Record<string, any>) => Promise<T[]>,
  initialFilters: Record<string, any>,
  limit = 10
) {
  const { page, nextPage, prevPage, resetPage, offset } = usePagination(limit);

  const { filters, setFilters, finalFilters, resetFilters } = useFilters(
    initialFilters,
    resetPage
  );

  const combinedFilters = { ...finalFilters, limit, offset };

  const { data, error, isLoading, mutate } = useSWR<T[]>(
    ["table-data", combinedFilters],
    ([, f]: [string, typeof combinedFilters]) => fetchFn(f)
  );

  const items = data ?? [];
  const isError = Boolean(error);
  const isEmpty =
    !isLoading && !isError && Array.isArray(items) && items.length === 0;

  const reset = () => {
    resetFilters();
    resetPage();
  };

  return {
    data: items,
    isLoading,
    isError,
    isEmpty,
    mutate,
    filters,
    setFilters,
    reset,
    pagination: {
      page,
      nextPage,
      prevPage,
      resetPage,
      limit,
      offset,
    },
  };
}
