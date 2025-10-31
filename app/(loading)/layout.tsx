import HoverPrefetchLink from "@/components/HoverPrefetch";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex items-center justify-center gap-4">
        <HoverPrefetchLink href="/about">About</HoverPrefetchLink> |{" "}
        <HoverPrefetchLink href="/contact">Contact</HoverPrefetchLink>
      </nav>
      <hr />
      {children}
    </div>
  );
}
