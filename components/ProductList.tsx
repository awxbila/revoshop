import { ProductResponseInterface } from "@/app/types/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: ProductResponseInterface[];
  onAdd: () => void;
}

const ProductList = ({ products, onAdd }: ProductListProps) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </section>
  );
};

export default ProductList;
