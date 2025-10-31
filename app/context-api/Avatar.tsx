"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Avatar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-black/80 font-semibold"
      >
        JS
      </button>

      <Dropdown
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
      />
    </div>
  );
}
