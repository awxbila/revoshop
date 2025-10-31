import { z } from "zod";

export const ProductSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  description: z.string().min(5, "Description too short"),
  categoryId: z.coerce.number().min(1, "Category is required"),
  images: z.array(z.url("Must be a valid image URL")).min(1),
});

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string().url(),
  slug: z.string(),
});

export const ProductResponseSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  price: z.number(),
  description: z.string(),
  category: CategorySchema,
  images: z.array(z.string().url()),
  creationAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type ProductFormData = z.infer<typeof ProductSchema>;
export type ProductResponseZod = z.infer<typeof ProductResponseSchema>;
export type CategoryResponse = z.infer<typeof CategorySchema>;
