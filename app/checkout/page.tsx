"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

// formatter rupiah
function formatRupiah(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export default function CheckoutPage() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

      {/* SUMMARY */}
      <div className="border p-6 rounded-lg mb-6">
        <h2 className="text-xl font-medium mb-4">Ringkasan Pesanan</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between mb-2 text-gray-700"
          >
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>{formatRupiah(item.price * item.quantity)}</span>
          </div>
        ))}

        <hr className="my-4" />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>{formatRupiah(totalPrice)}</span>
        </div>
      </div>

      {/* ACTION */}
      <Link href="/success">
        <button className="checkout-btn w-full">Konfirmasi Pesanan</button>
      </Link>
    </div>
  );
}
