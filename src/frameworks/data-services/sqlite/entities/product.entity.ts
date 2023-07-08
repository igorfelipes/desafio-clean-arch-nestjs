import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Customer } from './customer.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @ManyToMany(() => Customer, { cascade: true })
  @JoinTable({ name: 'purchase', joinColumn: { name: 'productId' }, inverseJoinColumn: { name: 'customerId' } })
  customers: Customer[];
}