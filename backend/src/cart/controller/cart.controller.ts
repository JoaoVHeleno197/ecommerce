import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  AddProductsOnCartService,
  CreateCartService,
  ListProductsOnCartService,
} from '../service/';
import { AddItemDto } from '../dto/add-item.dto';

@Controller('cart')
export class CartController {
  constructor(
    private readonly addProductsOnCartService: AddProductsOnCartService,
    private readonly listProductsOnCartService: ListProductsOnCartService,
    private readonly createCartService: CreateCartService,
  ) {}

  @Get('list-cart-products')
  public async listCartProducts(@Body('cartId') cartId: string) {
    const cartItems = await this.listProductsOnCartService.execute(cartId);
    return cartItems;
  }

  @Post('add-product')
  public async addProductToCart(@Body() addItemDto: AddItemDto) {
    const cartItem = this.addProductsOnCartService.execute(addItemDto);
    return await cartItem;
  }

  @Post('create-cart')
  public async createCart() {
    const cart = await this.createCartService.execute();
    return cart;
  }
}
