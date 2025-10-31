import { ModalProvider } from "./ModalContext";
import { CartProvider } from "./CartContext";

export default function ContextApiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <ModalProvider>{children}</ModalProvider>
    </CartProvider>
  );
}
