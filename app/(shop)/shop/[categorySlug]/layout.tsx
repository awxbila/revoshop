import React, { ReactNode } from "react";
import { CATEGORIES } from "@/constants";
import CategorySidebar from "@/components/CategorySidebar";
import styles from "./CategoryLayout.module.css";

interface CategoryLayoutProps {
  params: Promise<{
    categorySlug: string;
  }>;
  children: ReactNode;
}

export default async function CategoryLayout({
  params,
  children,
}: CategoryLayoutProps) {
  const { categorySlug } = await params;

  const matchedCategory = CATEGORIES.find(
    (category) => category.slug === categorySlug
  );

  return (
    <main className={styles.wrapper}>
      <div className={styles.sidebarWrapper}>
        <CategorySidebar selectedCategory={categorySlug} />
      </div>
      <div className={styles.childWrapper}>
        <h2>{matchedCategory?.label ?? "Unknown Category"}</h2>
        {children}
      </div>
    </main>
  );
}
