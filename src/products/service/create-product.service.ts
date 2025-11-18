import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "../dto/create-product.dto";
import { Product } from "../entities/product.entity";

@Injectable()
export class CreateProductService {

    public async execute(product: CreateProductDto): Promise<Product> {
        const newProduct = new Product();
        
        newProduct.name = product.name;
        newProduct.description = product.description;
        newProduct.price = product.price;
        newProduct.stock = product.stock;

        const saveProduct = await newProduct.save();

        return saveProduct;
    }
}