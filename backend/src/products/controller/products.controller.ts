import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProductService } from '../service/create-product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { DeleteProductsService, ListProductsService } from '../service';
import { ListProductService } from '../service/list-product.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly listProductsService: ListProductsService,
    private readonly deleteProductsService: DeleteProductsService,
    private readonly listProductService: ListProductService,

  ) {}

  @Get()
  public async findAllProducts() {
    const products = this.listProductsService.execute();
    return await products;
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return await this.listProductService.execute(id);
  }

  @Post()
  public async create(@Body() newProduct: CreateProductDto) {
    const createProduct = this.createProductService.execute(newProduct)
    return await createProduct;
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.deleteProductsService.execute(id);
  }
}
