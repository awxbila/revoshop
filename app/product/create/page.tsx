"use client";

import { useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import { createProduct } from "@/app/services/product.api";
import { ProductFormData } from "@/app/schema/product.schema";

export default function CreateProductPage() {
  const router = useRouter();

  const handleCreate = async (data: ProductFormData) => {
    await createProduct(data);
    router.push("/");
  };

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Create Product</h1>
      <ProductForm onSubmit={handleCreate} submitText="Create" />
    </main>
  );
}
