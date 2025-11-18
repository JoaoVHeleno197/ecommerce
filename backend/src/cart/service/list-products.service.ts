import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class ListProductsService {
    public async execute(productId: string): Promise<Product[]> {
        return [];
    }
}
