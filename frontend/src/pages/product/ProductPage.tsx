import { useEffect, useState } from "react";
import { getProductList } from "../../services/product/integration";
import ProductComponent from "../../components/products/ProductComponent";
import type { Product } from "../../services/product/types";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const listProducts = await getProductList();
      setProducts(listProducts);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <ProductComponent title="Produtos" products={products} />;
    </>
  );
};

export default ProductPage;
