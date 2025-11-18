import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { CartItem } from "./cart-item.entities";

@Entity()
export class Cart {

    @PrimaryColumn({ type: 'uuid', default: () => 'gen_random_uuid()' })
    id: string;

    @OneToMany(() => CartItem, cartItem => cartItem.cartId)
    cartItems: CartItem[];

}