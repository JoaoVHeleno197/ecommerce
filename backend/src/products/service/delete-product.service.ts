import { Injectable } from "@nestjs/common";
import { Product } from "../entities/product.entity";

@Injectable()
export class DeleteProductsService {
    public async execute(productId: string): Promise<void> {
        const product = await Product.findOne({ where: { id: productId } });

        if (!product) {
            throw new Error('Produto não encontrado');
        }

        await product.softRemove()
    }
}