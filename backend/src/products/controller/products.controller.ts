import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateProductService } from '../service/create-product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import {
  DeleteProductsService,
  ListProductsService,
  UpdateProductService,
} from '../service';
import { ListProductService } from '../service/list-product.service';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly listProductsService: ListProductsService,
    private readonly deleteProductsService: DeleteProductsService,
    private readonly listProductService: ListProductService,
    private readonly updateProductService: UpdateProductService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  public async findAllProducts() {
    const products = this.listProductsService.execute();
    return await products;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter detalhes de um produto pelo ID' })
  public async findOne(@Param('id') id: string) {
    return await this.listProductService.execute(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo produto' })
  public async create(@Body() newProduct: CreateProductDto) {
    const createProduct = this.createProductService.execute(newProduct);
    return await createProduct;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um produto existente' })
  public async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.updateProductService.execute(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir um produto pelo ID' })
  public async remove(@Param('id') id: string) {
    return await this.deleteProductsService.execute(id);
  }
}
