"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleDelete = async (id: number) => {
    const ok = confirm("Yakin ingin menghapus produk ini?");
    if (!ok) return;

    await fetch("/api/admin/products", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    // refresh data
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      <Link href="/admin/create">
        <button className="admin-btn">+ Add Product</button>
      </Link>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>Rp {p.price}</td>
              <td className="admin-action">
                <Link href={`/admin/edit/${p.id}`}>
                  <button className="edit-btn">Edit</button>
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
