import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ListProductService {
  public async execute(productId: string): Promise<Product> {
    const product = await Product.findOne({ where: { id: productId } });

    if (!product) {
      throw new Error('Produto não encontrado');
    }

    return product;
  }
}
