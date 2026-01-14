"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">✅ Pesanan Berhasil</h1>
      <p className="text-gray-600">Terima kasih sudah berbelanja</p>

      <Link href="/">
        <button className="home-btn">Kembali ke Home</button>
      </Link>
    </div>
  );
}
