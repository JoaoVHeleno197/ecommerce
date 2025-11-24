import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  AddProductsOnCartService,
  CreateCartService,
  ListProductsOnCartService,
} from '../service/';
import { AddItemDto } from '../dto/add-item.dto';
import { UpdateProductsOnCartService } from '../service/update-products-on-cart.service';
import { DeleteProductOnCartService } from '../service/delete-product-on-cart.service';
import { DeleteCartService } from '../service/delete-cart.service';
import { UpdateItemDto } from '../dto/update-item.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(
    private readonly addProductsOnCartService: AddProductsOnCartService,
    private readonly listProductsOnCartService: ListProductsOnCartService,
    private readonly createCartService: CreateCartService,
    private readonly updateProductsOnCartService: UpdateProductsOnCartService,
    private readonly deleteProductOnCartService: DeleteProductOnCartService,
    private readonly deleteCartService: DeleteCartService,
  ) {}

  @Get(':cartId/products')
  @ApiOperation({ summary: 'Listar produtos no carrinho pelo ID do carrinho' })
  public async listCartProducts(@Param('cartId') cartId: string) {
    const cartItems = await this.listProductsOnCartService.execute(cartId);
    return cartItems;
  }

  @Post(':cartId/add-product')
  @ApiOperation({ summary: 'Adicionar um produto ao carrinho' })
  public async addProductToCart(
    @Param('cartId') cartId: string,
    @Body() addItemDto: AddItemDto,
  ) {
    const cartItem = await this.addProductsOnCartService.execute(
      cartId,
      addItemDto,
    );
    return cartItem;
  }

  @Post('create-cart')
  @ApiOperation({ summary: 'Criar um novo carrinho' })
  public async createCart() {
    const cart = await this.createCartService.execute();
    return cart;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um produto no carrinho' })
  public async updateProductOnCart(
    @Param() id: string,
    @Body() updateItemDto: UpdateItemDto,
  ) {
    const updatedItem = await this.updateProductsOnCartService.execute(
      id,
      updateItemDto,
    );
    return updatedItem;
  }

  @Delete(':cartId/product/:productId')
  @ApiOperation({ summary: 'Remover um produto do carrinho' })
  public async deleteProductFromCart(
    @Param('cartId') cartId: string,
    @Param('productId') productId: string,
  ) {
    const deletedProduct = await this.deleteProductOnCartService.execute(
      cartId,
      productId,
    );
    return deletedProduct;
  }

  @Delete(':cartId')
  @ApiOperation({ summary: 'Excluir o carrinho pelo ID' })
  public async deleteCart(@Param('cartId') cartId: string) {
    const deletedCart = await this.deleteCartService.execute(cartId);
    return deletedCart;
  }
}
