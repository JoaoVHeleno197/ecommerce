import { BadRequestException, Injectable } from '@nestjs/common';
import { CartItem } from 'src/entities/cart-item.entity';
import { AddItemDto } from '../dto/add-item.dto';
import { Cart } from 'src/entities/cart.entity';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class AddProductsOnCartService {
  public async execute(addItem: AddItemDto): Promise<void> {
    const cartItem = new CartItem();

    cartItem.cartId = addItem.cartId;
    cartItem.productId = addItem.productId;
    cartItem.quantity = addItem.quantity;

    const productExists = await Product.findOne({
      where: { id: addItem.productId },
    });

    const productExistsOnCart = await CartItem.findOne({
      where: { productId: addItem.productId, cartId: addItem.cartId },
    });

    if (productExists) {
      let stockProduct = productExists.stock;

      if (addItem.quantity > stockProduct || stockProduct <= 0) {
        throw new BadRequestException(
          'A quantidade solicitada excede o estoque disponível',
        );
      }

      stockProduct -= addItem.quantity;
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
