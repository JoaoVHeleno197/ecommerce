import { Injectable } from '@nestjs/common';
import { CartItem } from 'src/entities/cart-item.entity';

@Injectable()
export class ListProductsOnCartService {
  public async execute(
    cartId: string,
  ): Promise<{ name: string; description?: string | null; quantity: number }[]> {
    const productsOnCart = await CartItem.createQueryBuilder('cart_item')
      .innerJoin('cart_item.product', 'product')
      .select(['cart_item', 'product'])
      .where('cart_item.cartId = :cartId', { cartId })
      .orderBy('product.createdAt', 'ASC')
      .getMany();

    const products = productsOnCart.map((item) => item.product);
    const quantity = productsOnCart.map((item) => item.quantity);

    const nameProducts = products.map((product) => ({
      name: product.name,
      description: product.description,
      quantity: quantity[products.indexOf(product)],
      type: product.type
    }));

    return nameProducts;
  }
}
