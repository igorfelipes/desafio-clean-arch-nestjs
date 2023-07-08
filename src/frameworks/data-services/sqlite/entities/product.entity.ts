import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';
import { Purchase } from './purchase.entity';

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
  

  // Relationships

  @OneToMany(() => Purchase, purchase => purchase.product)
  purchases: Purchase[];
}