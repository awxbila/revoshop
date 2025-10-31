"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";

interface AvatarProps {
  setIsModalOpen: (value: boolean) => void;
}

export default function Avatar({ setIsModalOpen }: AvatarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-black/80 font-semibold"
      >
        ME
      </button>

      <Dropdown
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
