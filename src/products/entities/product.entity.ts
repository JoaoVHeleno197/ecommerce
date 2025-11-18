import { CartItem } from "src/cart/entities/cart-item.entities";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity{

    @PrimaryColumn({ type: 'uuid', default: () => 'gen_random_uuid()' })
    id: string;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column('real')
    price: number;

    @Column('int')
    stock: number;

    @OneToMany(() => CartItem, cartItem => cartItem.productId)
    cartItems: CartItem[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
