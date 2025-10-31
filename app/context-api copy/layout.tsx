import { ModalProvider } from "./ModalContext";

export default function ContextApiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ModalProvider>{children}</ModalProvider>;
}
