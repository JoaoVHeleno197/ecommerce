import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CartItem } from 'src/entities/cart-item.entity';
import { Cart } from 'src/entities/cart.entity';

@Injectable()
export class DeleteCartService {
  public async execute(cartId: string): Promise<void> {
    const cartExists = await Cart.findOne({
      where: { id: cartId },
    });

    const productsOnCart = await CartItem.find({
      where: { cartId },
    });

    if (!cartExists) {
      throw new NotFoundException('Carrinho não encontrado.');
    }

    if (productsOnCart.length > 0) {
      throw new BadRequestException(
        'Não é possível deletar um carrinho com produtos.',
      );
    }

    await Cart.delete({ id: cartId });
  }
}
