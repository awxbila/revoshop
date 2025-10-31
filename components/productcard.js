export default function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
      />
      <h3 style={{ fontSize: "16px", marginTop: "10px" }}>{product.title}</h3>
      <p style={{ fontWeight: "bold", color: "#0070f3" }}>${product.price}</p>
    </div>
  );
}
