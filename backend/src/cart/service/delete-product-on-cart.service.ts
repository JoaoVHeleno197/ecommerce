import { Injectable } from "@nestjs/common";
import { CartItem } from "src/entities/cart-item.entity";

@Injectable()
export class DeleteProductOnCartService {
    public async execute(cartId: string, productId: string): Promise<void> {
        const productOnCart = await CartItem.findOne({
            where: {
                productId: productId, 
                cartId: cartId, 
            },
        });

        if(!productOnCart) {
            throw new Error('Produto não encontrado no carrinho.');
        }

        await productOnCart.softRemove();
    }
}