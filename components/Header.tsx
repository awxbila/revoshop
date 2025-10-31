"use client";

import { useRouter } from "next/navigation";

interface HeaderProps {
  cartCount: number;
}
const Header = ({ cartCount }: HeaderProps) => {
  const router = useRouter();

  const handleCartClick = () => {
    router.push("/checkout");
  };
  return (
    <header className="mb-8 border-b pb-4 flex items-center justify-between">
      <h1>My E-commerce</h1>
      <div onClick={handleCartClick} className="cursor-pointer">
        <span>Cart:</span>
        <span>{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
