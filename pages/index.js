import Link from "next/link";
import ProductCard from "../components/productcard";

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
    revalidate: 60, // regenerate every 60 seconds
  };
}

export default function Home({ products }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🛍️ RevoShop</h1>
      <p style={{ textAlign: "center" }}>Browse our latest products</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
