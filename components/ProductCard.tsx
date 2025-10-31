import { ProductResponseInterface } from "@/app/types/product";
import Link from "next/link";

interface ProductCardProps {
  product: ProductResponseInterface;
  onAdd: () => void;
}

const ProductCard = ({ product, onAdd }: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <img
        src={product.images[0]}
        alt={product.title}
        className="mb-4 w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600 mb-2">Rp {product.price.toLocaleString()}</p>
      <p className="text-sm text-gray-500 line-clamp-2">
        {product.description}
      </p>

      <div className="mt-3 flex gap-2">
        <button
          className="flex-1 rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition-colors"
          onClick={onAdd}
        >
          Add To Cart
        </button>

        <Link
          href={`/product/${product.id}`}
          className="flex-1 rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 transition-colors text-center"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
