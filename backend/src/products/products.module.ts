import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { ProductsController } from './controller/products.controller';
import {
  CreateProductService,
  ListProductsService,
  DeleteProductsService,
  ListProductService,
  UpdateProductService,
} from './service/index';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [
    CreateProductService,
    ListProductsService,
    DeleteProductsService,
    ListProductService,
    UpdateProductService,
  ],
})
export class ProductsModule {}
