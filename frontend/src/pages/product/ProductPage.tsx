import { useEffect, useState } from "react";
import { getProductList } from "../../services/product/integration";
import type { Product } from "../../services/product/types";

export const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const listProducts = await getProductList();
      setProducts(listProducts);

      return products;
    };
    
     fetchProducts();
  }, [])
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p> 
          <p>Preço: R${product.price}</p>
          <p>Estoque: {product.stock}</p>
        </div>
      ))}
    </>
  )
}

export default ProductPage;
