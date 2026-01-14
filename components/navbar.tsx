"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const ADMIN_EMAIL = "admin@revocam.com";

export default function Navbar() {
  const { cart } = useCart();
  const { user } = useAuth();

  const isAdmin = user === ADMIN_EMAIL;

  return (
    <nav className="navbar">
      <div className="navbar-top">
        {/* LOGO */}
        <span className="logo">RevoCam Store</span>

        <div className="nav-right">
          {/* ADMIN MENU */}
          {isAdmin && (
            <Link href="/admin" className="admin-link">
              Admin
            </Link>
          )}

          {/* LOGIN / PROFILE */}
          {!user ? (
            <Link href="/login" className="login-icon" title="Login">
              👤
            </Link>
          ) : (
            <Link href="/login" className="user-name">
              Halo, {user.split("@")[0]}
            </Link>
          )}

          {/* CART */}
          <Link href="/cart" className="cart">
            🛒
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
