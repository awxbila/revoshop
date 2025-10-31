import Header from "./Header";
import LogoutModal from "./LogoutModal";
import ProductListWithCart from "./ProductListWithCart";
import { ProductResponseInterface } from "@/app/types/product";

interface HomeContainerProps {
  products: ProductResponseInterface[];
}

export default function HomeContainer({ products }: HomeContainerProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
        <div className="container mx-auto px-4 py-6">
          <ProductListWithCart products={products} />
        </div>
      </div>

      <LogoutModal />
    </div>
  );
}
