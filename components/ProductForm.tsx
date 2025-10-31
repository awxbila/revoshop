"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ProductFormData, ProductSchema } from "@/app/schema/product.schema";

interface ProductFormProps {
  initialValues?: Partial<ProductFormData>;
  onSubmit: (data: ProductFormData) => Promise<void>;
  submitText?: string;
}

export default function ProductForm({
  initialValues,
  onSubmit,
  submitText = "Save",
}: ProductFormProps) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProductSchema),
    defaultValues: initialValues as ProductFormData,
  });

  const handleFormSubmit = async (data: ProductFormData) => {
    try {
      setLoading(true);
      await onSubmit(data);
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Failed to submit");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-4 w-full max-w-md bg-white p-6 rounded-lg shadow"
      >
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            className="w-full border rounded-md px-3 py-2"
            {...register("price")}
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            className="w-full border rounded-md px-3 py-2"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Category ID</label>
          <input
            type="number"
            className="w-full border rounded-md px-3 py-2"
            {...register("categoryId")}
          />
          {errors.categoryId && (
            <p className="text-red-500">{errors.categoryId.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2"
            {...register("images.0")}
          />
          {errors.images?.[0] && (
            <p className="text-red-500">{errors.images[0].message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition-colors"
        >
          {loading ? "Saving..." : submitText}
        </button>
      </form>
    </div>
  );
}
