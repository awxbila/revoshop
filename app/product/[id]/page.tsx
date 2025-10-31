"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductForm from "@/components/ProductForm";
import {
  getProductByIdInterface,
  updateProduct,
} from "@/app/services/product.api";
import { ProductFormData } from "@/app/schema/product.schema";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams();
  const [product, setProduct] = useState<ProductFormData | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      const data = await getProductByIdInterface(Number(id));

      setProduct({
        title: data.title,
        price: data.price,
        description: data.description,
        categoryId: data.category.id,
        images: data.images,
      });
    };
    fetchProduct();
  }, [id]);

  const handleUpdate = async (data: ProductFormData) => {
    if (!id) return;
    await updateProduct(Number(id), data);
    router.push("/");
  };

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      <ProductForm
        initialValues={product}
        onSubmit={handleUpdate}
        submitText="Update"
      />
    </main>
  );
}
