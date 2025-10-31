import api from "./api";
import {
  ProductFormData,
  ProductResponseZod,
  ProductResponseSchema,
} from "../schema/product.schema";
import { ProductResponseInterface } from "../types/product";

export const getProductByIdInterface = async (
  id: number
): Promise<ProductResponseInterface> => {
  const res = await api.get<ProductResponseInterface>(`/products/${id}`);
  return res.data;
};

export const getProductByIdSchema = async (
  id: number
): Promise<ProductResponseZod> => {
  const res = await api.get(`/products/${id}`);
  return ProductResponseSchema.parse(res.data);
};

export const getProducts = async (offset = 1, limit = 10) => {
  const res = await api.get(`/products?offset=${offset}&limit=${limit}`);
  return res.data;
};

export const getProductBySlug = async (slug: string) => {
  const res = await api.get(`/products/slug/${slug}`);
  return res.data;
};

export const createProduct = async (data: ProductFormData) => {
  const res = await api.post("/products", data);
  return res.data;
};

export const updateProduct = async (
  id: number,
  data: Partial<ProductFormData>
) => {
  const res = await api.put(`/products/${id}`, data);
  return res.data;
};

export const deleteProduct = async (id: number) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};

export const postCheckout = async (payload: any) => {
  const mockResponse = {
    id: Math.floor(Math.random() * 1_000_000),
    message: "success",
    order: {
      productId: payload.order?.productId ?? null,
      size: payload.order?.size ?? null,
      color: payload.order?.color ?? null,
      qty: payload.order?.qty ?? null,
    },
    customer: payload.customer,
    createdAt: new Date().toISOString(),
  };

  return Promise.resolve(mockResponse);
};
