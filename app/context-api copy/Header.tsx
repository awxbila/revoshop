import { ShoppingCart } from "react-feather";
import Avatar from "./Avatar";

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div></div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <Avatar />
        </div>
      </div>
    </header>
  );
}
