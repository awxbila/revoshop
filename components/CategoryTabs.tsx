"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { label: "All", value: "all" },
  { label: "Digicam", value: "digicam" },
  { label: "DSLR", value: "dslr" },
  { label: "Mirrorless", value: "mirrorless" },
  { label: "Analog", value: "analog" },
];

export default function CategoryTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [active, setActive] = useState("all");

  // sync active tab dengan URL
  useEffect(() => {
    const category = searchParams.get("category") || "all";
    setActive(category);
  }, [searchParams]);

  const handleClick = (category: string) => {
    if (category === "all") {
      router.push("/");
    } else {
      router.push(`/?category=${category}`);
    }
  };

  return (
    <div className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => handleClick(cat.value)}
          className={`category-tab ${active === cat.value ? "active" : ""}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
