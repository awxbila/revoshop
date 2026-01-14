"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: string | null;
  isAdmin: boolean;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// email admin (boleh kamu ganti)
const ADMIN_EMAILS = ["admin@revocam.com"];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // load dari localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
      setIsAdmin(ADMIN_EMAILS.includes(savedUser));
    }
  }, []);

  const login = (email: string) => {
    setUser(email);
    localStorage.setItem("user", email);

    const adminStatus = ADMIN_EMAILS.includes(email);
    setIsAdmin(adminStatus);

    // cookie untuk middleware
    document.cookie = `auth=true; path=/; max-age=86400; SameSite=Lax`;
    document.cookie = `admin=${adminStatus}; path=/; max-age=86400; SameSite=Lax`;
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);

    localStorage.removeItem("user");

    document.cookie = "auth=; path=/; max-age=0";
    document.cookie = "admin=; path=/; max-age=0";
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;
