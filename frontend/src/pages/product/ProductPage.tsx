import { useEffect, useState } from "react";
import { getProductList } from "../../services/product/integration";
import type { Product } from "../../services/product/types";
import { ButtonP } from "../../components/botao/ButtonP.tsx";

const ProductPage = () => {
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
          <h2 style={{ textAlign: 'center' }}>{product.name}</h2>
          <p>{product.description}</p> 
          <p>Preço: R${product.price}</p>

          {product.stock > 0 ? (
            <ButtonP onClick={() => {}}>Adicionar ao carrinho</ButtonP>
          ) : (
            <ButtonP onClick={() => {}} disabled={true}>Produto esgotado</ButtonP>
          )}

        </div>
      ))}
    </>
  )
}

export default ProductPage;
