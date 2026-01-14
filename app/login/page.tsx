"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const { user, login, logout } = useAuth(); // ✅ logout DIAMBIL DI SINI

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login(email);
    }
  };

  // ✅ JIKA SUDAH LOGIN
  if (user) {
    return (
      <div className="login-success">
        <h1>Halo {user} 👋</h1>

        <div className="login-action">
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>

          <Link href="/">
            <button className="home-btn">Home</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}
