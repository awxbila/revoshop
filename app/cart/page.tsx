"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import CartItem from "@/components/CartItem";

// formatter rupiah
function formatRupiah(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export default function CartPage() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      {/* HEADER */}
      <div className="cart-header">
        <span>Item</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Remove</span>
      </div>

      {/* CART ITEMS */}
      {cart.map((item) => (
        <div className="cart-row" key={item.id}>
          <CartItem item={item} />
        </div>
      ))}

      {/* FOOTER */}
      <div className="cart-footer">
        <h3>Total: {formatRupiah(totalPrice)}</h3>

        <Link href="/checkout">
          <button className="checkout-btn">Checkout</button>
        </Link>

        <Link href="/">
          <button className="home-btn">Home</button>
        </Link>
      </div>
    </div>
  );
}
