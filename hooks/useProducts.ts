"use client";

import useSWR from "swr";

type Product = {
  id: number;
  title: string;
  price: number;
};

export function useProducts() {
  const { data, error, isLoading, mutate } = useSWR<Product[]>(
    "https://api.escuelajs.co/api/v1/producssts"
  );

  return {
    products: data ?? [],
    isLoading,
    isError: error,
    refresh: mutate,
  };
}
