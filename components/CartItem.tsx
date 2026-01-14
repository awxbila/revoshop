"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

interface Props {
  item: Product & { quantity: number };
}

export default function CartItem({ item }: Props) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <>
      {/* ITEM */}
      <div className="cart-item">
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
      </div>

      {/* PRICE */}
      <span>Rp {item.price.toLocaleString("id-ID")}</span>

      {/* QTY */}
      <div className="cart-qty">
        <button onClick={() => decreaseQty(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQty(item.id)}>+</button>
      </div>

      {/* REMOVE */}
      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
        🗑️
      </button>
    </>
  );
}
