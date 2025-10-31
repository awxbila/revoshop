"use client";

import { useState } from "react";
import { ShoppingCart } from "react-feather";
import { useCart } from "./CartContext";
import CartDrawer from "./CartDrawer";

export default function CartBadge() {
  const { cartCount } = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div
        className="relative cursor-pointer"
        onClick={() => setIsDrawerOpen(true)}
      >
        <ShoppingCart className="w-6 h-6" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </div>

      <CartDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
