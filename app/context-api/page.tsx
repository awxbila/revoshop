import { getProducts } from "../services/product.api";
import { ProductResponseInterface } from "@/app/types/product";
import HomeContainer from "./Container";

export default async function Home() {
  const products: ProductResponseInterface[] = await getProducts(1, 10);

  return <HomeContainer products={products} />;
}
