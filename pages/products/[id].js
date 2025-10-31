import { useState } from "react";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default function ProductDetail({ product }) {
  const [added, setAdded] = useState(false);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Link href="/" style={{ textDecoration: "none", color: "#0070f3" }}>
        ← Back to Products
      </Link>

      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", height: "300px", objectFit: "contain" }}
        />
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2 style={{ color: "#0070f3" }}>${product.price}</h2>

          <button
            onClick={() => setAdded(true)}
            style={{
              marginTop: "10px",
              backgroundColor: added ? "#4caf50" : "#0070f3",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {added ? "Added to Cart ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
