"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface Props {
  params: { id: string };
}

// formatter Rupiah
function formatRupiah(angka: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
}

export default function ProductDetailPage({ params }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart(); // 🔥 PAKAI CART YANG SAMA

  const router = useRouter();

  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-5xl">
        {/* LEFT: IMAGE */}
        <div className="flex flex-col items-left gap-4">
          <img
            src={product.image}
            alt={product.title}
            width={420}
            height={420}
            className="object-contain"
          />
          {/* BACK BUTTON */}
          <button onClick={() => router.back()} className="btn-back">
            Back
          </button>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex flex-col gap-6">
          {/* TITLE */}
          <h1 className="text-2xl font-semibold leading-snug">
            {product.title}
          </h1>

          {/* PRICE */}
          <p className="text-xl font-bold">{formatRupiah(product.price)}</p>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed mt-6 mb-8">
            {product.description}
          </p>

          {/* BUTTON */}
          <button
            className="btn-add-cart w-40 mt-4"
            onClick={() => addToCart(product)}
          >
            Masukkan Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}
