import CartBadge from "./CartBadge";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div></div>
        <div className="flex items-center gap-4">
          <CartBadge />
          <Avatar />
        </div>
      </div>
    </header>
  );
}
