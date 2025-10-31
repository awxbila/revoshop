export const dynamic = "force-static";

import React from "react";

import { getShoesForCategory } from "@/helpers/data";
import ShoeGrid from "@/components/ShoeGrid";

interface CategoryPageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const shoes = await getShoesForCategory(categorySlug);

  return <ShoeGrid shoes={shoes} />;
}

export default CategoryPage;
