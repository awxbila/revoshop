"use client";

import Link from "next/link";
import { useState } from "react";

export default function HoverPrefetchLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={href}
      prefetch={active ? false : false}
      onMouseEnter={() => setActive(true)}
    >
      {children}
    </Link>
  );
}
