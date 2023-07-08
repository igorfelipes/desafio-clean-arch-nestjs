import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @ManyToMany(() => Product, { cascade: true })
  @JoinTable({ name: 'purchase', joinColumn: { name: 'customerId' }, inverseJoinColumn: { name: 'productId' } })
  products: Product[];
  
}