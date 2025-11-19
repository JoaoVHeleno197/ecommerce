import { BadRequestException, Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class UpdateProductService {
  public async execute(
    productId: string,
    updateProduct: UpdateProductDto,
  ): Promise<void> {
    const product = await Product.findOne({ where: { id: productId } });

    if (!product) {
      throw new Error('Produto não encontrado');
    }

    if (
      updateProduct.name?.trim() === '' ||
      updateProduct.description?.trim() === ''
    ) {
      throw new BadRequestException('Nome e descrição não podem ser vazios');
    }

    if (
      (updateProduct.price !== undefined && updateProduct.price < 0) ||
      (updateProduct.stock !== undefined && updateProduct.stock < 0)
    ) {
      throw new BadRequestException('Preço e estoque não podem ser negativos');
    }

    Object.assign(product, updateProduct);
    await product.save();
  }
}
