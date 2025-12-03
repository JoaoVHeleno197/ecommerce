import { CartItem } from 'src/entities/cart-item.entity';
import { ProductTypeEnum } from 'src/enum/product-type.enum';
import { dbTypes } from 'src/typeorm/type';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryColumn({ type: 'uuid', default: () => 'gen_random_uuid()' })
  id: string;

  @Column('varchar')
  name: string;

  @Column('text', { nullable: true })
  description: string | null;

  @Column('real')
  price: number;

  @Column('int')
  stock: number;

  @Column({ type: dbTypes.enumType, enum: ProductTypeEnum, nullable: true })
  type: ProductTypeEnum;

  @Column('varchar', { nullable: true })
  image: string | null;

  @OneToMany(() => CartItem, (cartItem) => cartItem.productId)
  cartItems: CartItem[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
