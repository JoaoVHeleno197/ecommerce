import { BadRequestException, Injectable } from '@nestjs/common';
import { CartItem } from 'src/entities/cart-item.entity';
import { AddItemDto } from '../dto/add-item.dto';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class AddProductsOnCartService {
  public async execute(idCart: string, addItem: AddItemDto): Promise<void> {
    const cartItem = new CartItem();

    cartItem.cartId = idCart;
    cartItem.productId = addItem.productId;
    cartItem.quantity = addItem.quantity;

    const productExists = await Product.findOne({
      where: { id: addItem.productId },
    });

    const productExistsOnCart = await CartItem.findOne({
      where: { productId: addItem.productId, cartId: idCart },
    });

    if (productExists) {
      let stockProduct = productExists.stock;

      stockProduct -= addItem.quantity;

      if (addItem.quantity > stockProduct || stockProduct <= 0) {
        throw new BadRequestException('Sem estoque disponível');
      }

      productExists.stock = stockProduct;
      productExists.save();
    } else {
      throw new BadRequestException('Produto não encontrado');
    }

    if (productExistsOnCart) {
      throw new BadRequestException('Produto já existe no carrinho');
    }

    if (cartItem.quantity <= 0) {
      throw new BadRequestException('A quantidade deve ser maior que zero');
    }

    await cartItem.save();
  }
}
