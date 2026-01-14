import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="product-container">
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
