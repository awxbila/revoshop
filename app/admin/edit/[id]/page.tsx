"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProduct({ params }: any) {
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch("/api/admin/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.find((p: any) => p.id == params.id)));
  }, []);

  const save = async () => {
    await fetch("/api/admin/products", {
      method: "PUT",
      body: JSON.stringify(product),
    });

    router.push("/admin");
  };

  if (!product) return null;

  return (
    <div>
      <input
        value={product.title}
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
      />
      <input
        value={product.price}
        onChange={(e) =>
          setProduct({ ...product, price: Number(e.target.value) })
        }
      />
      <button onClick={save}>Update</button>
    </div>
  );
}
