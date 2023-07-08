import { randomUUID } from 'crypto'
import { Column, Entity, PrimaryColumn, BeforeInsert, ManyToOne } from 'typeorm';
import { Product } from './product.entity';
import { Customer } from './customer.entity';

@Entity()
export class Purchase {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false })
  customerId: number;

  @Column({ nullable: false })
  productId: number;

  @Column({ nullable: false })
  quantity: number;

  
  // Relationships
  @ManyToOne(() => Product, product => product.purchases)
  product: Product;

  @ManyToOne(() => Customer, customer => customer.purchases)
  customer: Customer;
}