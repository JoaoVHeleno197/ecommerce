import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../../entities/product.entity';

@Injectable()
export class CreateProductService {
  public async execute(product: CreateProductDto): Promise<Product> {
    const newProduct = new Product();

    newProduct.name = product.name;
    if(product.description) {
      newProduct.description = product.description
    }
    newProduct.price = product.price;
    newProduct.stock = product.stock;

    const productExists = await Product.findOne({
      where: { name: product.name },
    });

    if(productExists && productExists.deletedAt === null) {
      throw new BadRequestException('Produto já existe');
    }

    const saveProduct = await newProduct.save();

    return saveProduct;
  }
}
