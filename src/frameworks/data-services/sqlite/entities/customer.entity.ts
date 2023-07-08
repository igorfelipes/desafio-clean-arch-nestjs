import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from 'typeorm';
import { Product } from './product.entity';
import { Purchase } from './purchase.entity';

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
  

  // Relationships
  
  @OneToMany(() => Purchase, purchase => purchase.customer)
  purchases: Purchase[];
}