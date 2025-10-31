"use client";

import { useModal } from "./ModalContext";

export default function LogoutModal() {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  const handleLogout = () => {
    alert("Logged out successfully!");
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
        <p className="mb-6 text-gray-600">
          Are you sure you want to logout from your account?
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={closeModal}
            className="px-4 py-2 border rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-black/80"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
