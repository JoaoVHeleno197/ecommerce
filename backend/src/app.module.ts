import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Módulo de Configuração
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { ProductsController } from './products/controller/products.controller';
import { CartController } from './cart/controller/cart.controller';
import {
  CreateProductService,
  DeleteProductsService,
  ListProductService,
  ListProductsService,
  UpdateProductService,
} from './products/service';
import {
  ListProductsOnCartService,
  AddProductsOnCartService,
  CreateCartService,
} from './cart/service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<string>('DB_TYPE') as 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        entities: [__dirname + '/entities/**/*.entity{.ts,.js}'],
        synchronize: config.get<boolean>('DB_SYNCHRONIZE'),
      }),
    }),
    ProductsModule,
    CartModule,
  ],
  controllers: [ProductsController, CartController],
  providers: [
    ListProductService,
    ListProductsService,
    DeleteProductsService,
    CreateProductService,
    UpdateProductService,
    AddProductsOnCartService,
    ListProductsOnCartService,
    CreateCartService,
  ],
})
export class AppModule {}
