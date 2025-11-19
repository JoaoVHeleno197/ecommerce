import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { UpdateProductDto } from '../dto/update-product.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UpdateProductService {
  public async execute(
    productId: string,
    updateProduct: UpdateProductDto,
  ): Promise<void> {
    const product = await Product.findOne({ where: { id: productId } });

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    if (
      updateProduct.name?.trim() === '' ||
      (updateProduct.description?.trim() === '' || updateProduct.description === null)
    ) {
      throw new BadRequestException('Nome e descrição não podem ser vazios');
    }

    if (
      (updateProduct.price !== undefined && updateProduct.price < 0) ||
      (updateProduct.stock !== undefined && updateProduct.stock < 0)
    ) {
      throw new BadRequestException('Preço e estoque não podem ser negativos');
    }

    if(product.deletedAt !== null) {
      throw new BadRequestException('Não é possível atualizar um produto excluído');
    }

    const productExists = await Product.findOne({
      where: { name: updateProduct.name },
    });

    if(productExists) {
      throw new BadRequestException('Já existe um produto com esse nome');
    }

    Object.assign(product, updateProduct);
    await product.save();
  }
}
