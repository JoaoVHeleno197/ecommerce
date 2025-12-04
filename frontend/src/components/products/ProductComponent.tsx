import type { Product } from "../../services/product/types";
import ButtonP from "../botao/ButtonP";
import { ProductBackground, ProductContainer } from "./styles";

interface ProductPageProps {
  title: string;
  products: Product[];
}

const ProductComponent = ({ title, products }: ProductPageProps) => {
  return (
    <div style={{ display: "flex" }}>
      <main style={{ padding: "20px", flex: 1 }}>
        <h2>{title}</h2>

        {products.map((product) => (
          <>
            <ProductContainer>
              <ProductBackground>
                <div key={product.id} style={{ marginBottom: "20px" }}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Preço: R$ {product.price}</p>
                </div>
                {product.stock > 0 ? (
                  <ButtonP
                    onClick={() => {}}
                    children={"Adicionar ao carrinho"}
                  />
                ) : (
                  <ButtonP
                    onClick={() => {}}
                    children={"Produto Indisponível"}
                    disabled
                  />
                )}
              </ProductBackground>
            </ProductContainer>
          </>
        ))}
      </main>
    </div>
  );
};

export default ProductComponent;
