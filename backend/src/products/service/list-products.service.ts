import { Injectable } from "@nestjs/common";
import { Product } from "../entities/product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { createQueryBuilder, QueryBuilder, Repository } from "typeorm";

@Injectable()
export class ListProductsService {

    public async execute(): Promise<Product[]> {

        const products = await Product.createQueryBuilder('product')
        .select('product')
        .orderBy('product.createdAt', 'ASC')
        .getMany();

        if(!products.length) {
            throw new Error('Produtos não encontrados');
        }

        console.log(products);

        return products;
    }
}