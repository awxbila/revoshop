"use client";

import { User, Settings, LogOut } from "lucide-react";
import { useModal } from "./ModalContext";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Dropdown({ isOpen, onClose }: DropdownProps) {
  const { openModal } = useModal();

  if (!isOpen) return null;

  const handleLogoutClick = () => {
    openModal();
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
      <div className="py-1">
        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
          <User size={16} />
          Profile
        </button>
        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
          <Settings size={16} />
          Settings
        </button>
        <hr className="my-1" />
        <button
          onClick={handleLogoutClick}
          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 flex items-center gap-2"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
}
