import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './controller/cart.controller';
import { Cart } from '../entities/cart.entity';
import { CartItem } from '../entities/cart-item.entity';
import {
  AddProductsOnCartService,
  CreateCartService,
  ListProductsOnCartService,
} from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartItem])],
  controllers: [CartController],
  providers: [
    AddProductsOnCartService,
    ListProductsOnCartService,
    CreateCartService,
  ],
})
export class CartModule {}
