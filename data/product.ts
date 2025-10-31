import { ProductResponseInterface } from "@/app/types/product";

export const products: ProductResponseInterface[] = [
  {
    id: 1,
    title: "Handmade Fresh Table",
    slug: "handmade-fresh-table",
    price: 687000,
    description: "Andy shoes are designed to keep things stylish and comfy.",
    category: {
      id: 5,
      name: "Others",
      slug: "others",
      image: "https://placehold.co/600x400",
    },
    images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
  },
  {
    id: 2,
    title: "Modern Chair",
    slug: "modern-chair",
    price: 350000,
    description: "Elegant and minimalist chair design.",
    category: {
      id: 2,
      name: "Furniture",
      slug: "furniture",
      image: "https://placehold.co/600x400",
    },
    images: ["https://placehold.co/600x400"],
  },
];
