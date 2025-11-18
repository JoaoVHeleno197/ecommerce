import { Product } from "src/products/entities/product.entity";
import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";
import { Cart } from "./cart.entities";

@Entity()
export class CartItem {

    @PrimaryColumn({ type: 'uuid', default: () => 'gen_random_uuid()' })
    id: string;

    @Column('int')
    quantity: number;
    @Column({ type: 'uuid' })
    cartId: string;

    @ManyToOne(() => Cart, (cart) => cart.cartItems, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'cartId' })
    cart: Cart;

    @Column({ type: 'uuid' })
    productId: string;

    @ManyToOne(() => Product, (product) => product.cartItems)
    @JoinColumn({ name: 'productId' })
    product: Product;
}