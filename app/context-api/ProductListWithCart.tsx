import { ProductResponseInterface } from "@/app/types/product";
import ProductCardWithCart from "./ProductCardWithCart";

interface ProductListProps {
  products: ProductResponseInterface[];
}

const ProductListWithCart = ({ products }: ProductListProps) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {products.map((product) => (
        <ProductCardWithCart key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductListWithCart;
