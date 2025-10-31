"use client";

import { Product } from "../types/product";

interface Props {
  data: Product[];
  loading: boolean;
}

export default function ProductTable({ data, loading }: Props) {
  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (data.length === 0)
    return (
      <div className="text-center text-gray-500 border rounded-lg py-8">
        No products found
      </div>
    );

  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{p.id}</td>
              <td className="border px-4 py-2">{p.title}</td>
              <td className="border px-4 py-2">${p.price}</td>
              <td className="border px-4 py-2">{p.category.name}</td>
              <td className="border px-4 py-2">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
