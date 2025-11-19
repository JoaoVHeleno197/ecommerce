import { Injectable } from "@nestjs/common";
import { Cart } from "src/entities/cart.entity";

@Injectable()
export class CreateCartService {
    public async execute(): Promise<Cart> {
        const newCart = new Cart();

        const saveCart = await newCart.save();

        return saveCart;
    }
}