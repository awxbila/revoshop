"use client";

import { useState } from "react";

export function usePagination(limit = 10) {
  const [page, setPage] = useState(1);

  const offset = (page - 1) * limit;

  const nextPage = () => setPage((p) => p + 1);
  const prevPage = () => setPage((p) => (p > 1 ? p - 1 : 1));
  const resetPage = () => setPage(1);

  return {
    page,
    setPage,
    nextPage,
    prevPage,
    resetPage,
    offset,
    limit,
  };
}
