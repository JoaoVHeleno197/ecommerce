import { Injectable, NotFoundException } from "@nestjs/common";
import { CartItem } from "src/entities/cart-item.entity";
import { UpdateItemDto } from "../dto/update-item.dto";

@Injectable()
export class UpdateProductsOnCartService {
    public async execute(
        cartId: string,
        itemId: string,
        updateData: UpdateItemDto 
    ): Promise<CartItem> {
        const productOnCart = await CartItem.findOne({
            where: {
                productId: itemId, 
                cartId: cartId, 
            },
        });

        if (!productOnCart) {
            throw new NotFoundException(`Item do carrinho não encontrado ou inválido.`);
        }

        productOnCart.quantity = updateData.quantity;

        await productOnCart.save();
        return productOnCart;
    }
}