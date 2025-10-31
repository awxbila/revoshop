"use client";

import * as z from "zod";

export const CheckoutSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().min(1, "Phone is required"),
    email: z.email("Invalid email address"),

    deliveryMethod: z.enum(["store", "delivery"]),
    deliveryDate: z.string().optional(),
    convenientTime: z.string().optional(),
    city: z.string().optional(),
    address: z.string().optional(),
    zipCode: z.string().optional(),

    paymentMethod: z.enum(["card", "visa", "apple", "other"], {
      error: "Please select a payment method",
    }),

    order: z
      .object({
        productId: z.string().min(1, "Product ID is required"),
        color: z.string().min(1, "Color is required"),
        size: z.string().min(1, "Size is required"),
        qty: z.number().min(1, "Quantity must be at least 1"),
      })
      .optional(),

    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine(
    (data) => {
      const isDelivery = data.deliveryMethod === "delivery";
      return isDelivery
        ? data.deliveryDate !== undefined && data.convenientTime !== undefined
        : true;
    },
    {
      message: "Delivery date and convenient time are required for delivery",
      path: ["deliveryDate"],
    }
  );

export type CheckoutFormData = z.infer<typeof CheckoutSchema>;

export type CheckoutPayload = {
  customer: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };
  delivery: {
    method: "store" | "delivery";
    scheduledDate: string | null;
    convenientTime: string | null;
    address: {
      city: string;
      street: string;
      zipCode: string;
    };
  };
  payment: {
    method: "card" | "visa" | "apple" | "other";
  };

  order: {
    productId: string;
    color: string;
    size: string;
    qty: number;
  } | null;

  termsAccepted: boolean;
};
