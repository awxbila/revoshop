"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProduct() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const submit = async () => {
    await fetch("/api/admin/products", {
      method: "POST",
      body: JSON.stringify({
        title,
        price: Number(price),
        description: "",
        image: "",
        category: "",
      }),
    });

    router.push("/admin");
  };

  return (
    <div>
      <h1>Add Product</h1>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <button onClick={submit}>Save</button>
    </div>
  );
}
